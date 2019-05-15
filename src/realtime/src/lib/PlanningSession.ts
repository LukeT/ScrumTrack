import * as grpc from 'grpc';
import { promisify } from 'util';
import * as WebSocket from 'ws';

import { sendMessage } from '../../realtime/messages';
import { Countdown, CountdownReason, EndSession, EndSessionReason, NewTicket, PlanSessionActive, PlanSessionInactive, Session, UserStatus, Voted, Results, Weighted } from '../../realtime/realtime';
import { TicketsClient } from '../../services/services/ticket/proto/ticket_grpc_pb';
import { GetAllRequest, LocationType, Ticket } from '../../services/services/ticket/proto/ticket_pb';
import { ServiceRegistry } from '../util/ServiceRegistry';
import { IAppState } from '../util/types';
import { CastAction, ResultAction } from './../../realtime/realtime';
import { VoteEngine } from './VoteEngine';


export class PlanningSession {
	private users: Set<number> = new Set();
	private ticketId: number;
	private finished: boolean = false;
	private engine: VoteEngine = new VoteEngine(this.handleTick.bind(this));
	private skipped: number[] = [];
	private lastVotes: Results | null;

	constructor(private app: IAppState, public readonly projectId: string, public readonly creatorId: number) {
		this.sendToAll(new PlanSessionActive({ project: projectId }));
		this.users.add(creatorId);

		this.findTicket()
			.then(() => {
				if (!this.finished) {
					this.remindUser(creatorId);
				}
			});

	}

	private async getClient(): Promise<TicketsClient> {
		return new TicketsClient(await ServiceRegistry.get('ticket.svc.ticket'), grpc.credentials.createInsecure());
	}

	/**
	 * Send a protobuf to all users.
	 */
	private sendToUsers(data: any): void {
		this.users.forEach(i => {
			this.sendToUser(i, data);
		})
	}

	/**
	 * Send a protobuf message to all users globally.
	 */
	private sendToAll(data: any): void {
		this.app.users.forEach(u => u.forEach(ws => {
			ws.send(sendMessage(data));
		}));
	}

	/**
	 * Send a message to a specific user.
	 */
	private sendToUser(userId: number, data: any): void {
		if (!this.app.users.has(userId)) {
			return;
		}

		this.app.users.get(userId)
		.forEach(ws => {
			if (ws.readyState === WebSocket.OPEN) {
				ws.send(sendMessage(data));
			}
		});
	}

	/**
	 * Add a participant to a planning session.
	 */
	public addParticipant(userId: number): void {
		if (this.users.has(userId)) {
			return;
		}

		this.users.add(userId);

		this.sendToUsers(new UserStatus({
			userId,
			status: true,
		}));
	}

	/**
	 * Remove a participant from a planning session.
	 */
	public removeParticipant(userId: number) {
		if (!this.users.has(userId)) {
			return;
		}

		this.users.delete(userId);

		this.sendToUsers(new UserStatus({
			userId,
			status: false,
		}));
	}

	/**
	 * Check whether a user is a participant in a planning session.
	 */
	public isParticipant(userId: number): boolean {
		return this.users.has(userId);
	}

	/**
	 * Remind a targeted user of the user state.
	 */
	public remindUser(userId: number) {
		// Send down the session state.
		this.sendToUser(userId, new Session({
			project: this.projectId,
			leader: this.creatorId,
			online: Array.from(this.users.values()),
			ticketId: this.ticketId,
			voted: this.engine.getUsers(),
			myVote: this.engine.getVote(userId),
		}));

		// Send down a countdown timer
		if (this.ticketId !== null) {
			this.sendToUser(userId, new Countdown({
				durationMs: Math.max(0, this.engine.timeUntilTick()),
				reason: CountdownReason.LOAD,
			}));
		}

		if (this.lastVotes) {
			this.sendToUser(userId, this.lastVotes);
		}
	}

	/**
	 * End a planning session.
	 */
	public end(reason: EndSessionReason = EndSessionReason.ADMIN_DONE): void {
		this.users.forEach(user => {
			this.sendToUser(user, new EndSession({ reason }));

			this.app.users.get(user).forEach(u => {
				if (u.state && u.state.session === this.projectId) {
					u.state.session = null;
				}
			});

		})

		this.sendToAll(new PlanSessionInactive({ project: this.projectId }));
		this.app.sessions.delete(this.projectId);
		this.users.clear();
		this.finished = true;
	}

	/**
	 * Cast a vote in a planning session.
	 */
	public vote(userId: number, value: number): void {
		this.engine.vote(userId, value);

		this.sendToUsers(new Voted({
			userId,
		}));
	}

	/**
	 * Process timer tick
	 *
	 * Every time a timeframe is over, a tick occurs.
	 */
	private async handleTick(): Promise<void> {
		// Check if we have enough votes.
		if (!this.engine.meetsVoteThreshold()) {
			this.engine.resume();
			this.sendCountdown();

			return;
		}

		this.lastVotes = this.engine.stop();

		this.sendToAll(this.lastVotes);
	}

	/**
	 * Store the weight of a ticket.
	 *
	 * @param weight
	 */
	private async storeWeight(weight: number): Promise<void> {
		const client = await this.getClient();

		return this.fetchTickets()
			.then((tickets: Ticket[]) => {
				const ticket: Ticket = tickets.find(i => i.getId() === this.ticketId);

				if (ticket) {
					ticket.setWeight(weight);
				}

				return new Promise((resolve: (data: void) => void) => {
					return client.update(ticket, ((err, resp) => {
						if (!err && !resp.getError()) {
							this.sendToAll(new Weighted({
								ticketId: `${ticket.getProjectcode()}-${ticket.getId()}`,
								weight,
							}));

							this.findTicket();
						}

						resolve();
					}));
				});
			});

	}

	/**
	 * Find the next viable ticket.
	 */
	public async findTicket() {
		const tickets = (await this.fetchTickets()).filter(i => !i.getWeight() && !this.skipped.includes(i.getId()));

		// No more tickets!
		if (!tickets.length) {
			return this.end(EndSessionReason.NO_MORE);
		}

		// Pick the next ticket
		this.selectTicket(tickets[0].getId());
	}

	/**
	 * Act on a control command
	 */
	public act(action: CastAction): void {
		// If the action isn't to skip OR the action isn't available, bail out.
		if (action.action !== ResultAction.SKIP &&
			(!this.lastVotes || !this.lastVotes.options.includes(action.action))
		) {
			return;
		}

		switch (action.action) {
			case ResultAction.SKIP: {
				this.skipped.push(this.ticketId);

				this.findTicket();
			}

			case ResultAction.CONTINUE:
			case ResultAction.STRIP_OUTLIER:
				this.storeWeight(this.lastVotes.current!.weights.find(i => i.preferred).weight)
				break;
			case ResultAction.AVERAGE:
				this.storeWeight(this.lastVotes.current!.weights.find(i => i.isMedian).weight)
				break;

			case ResultAction.REVOTE:
				this.engine.resume();
				this.sendCountdown();
				break;


		}
	}

	/**
	 * Fetch all available tickets in the backlog.
	 */
	private async fetchTickets(): Promise<Ticket[]> {
		// Create client
		const ticketsClient = await this.getClient();

		// Build request
		const req = new GetAllRequest();
		req.setLocationtype(LocationType.BACKLOG);
		req.setProjectsc(this.projectId);


		// Fetch tickets.
		return new Promise((resolve: (data: any[]) => void) => {
			return ticketsClient.getAll(req, ((err, resp) => {
				if (err) {
					return resolve([]);
				}

				return resolve(resp.getError() ? [] : resp.getTicketsList());
			}));
		});
	}

	/**
	 * Set the currently active ticket.
	 *
	 * @param ticketId  ID of the ticket.
	 */
	private selectTicket(ticketId: number) {
		this.ticketId = ticketId;

		this.sendToUsers(new NewTicket({
			ticketId,
		}));

		// Restart and countdown!
		this.engine.reset();
		this.sendCountdown(CountdownReason.NEW_TICKET);
		this.lastVotes = null;
	}

	/**
	 * Send an event to all clients with the remaining duration
	 *
	 * @param reason The reason this event was sent
	 */
	private sendCountdown(reason: CountdownReason = CountdownReason.NOT_ENOUGH): void {
		this.sendToUsers(new Countdown({
			durationMs: this.engine.timeUntilTick(),
			reason: reason,
		}));
	}
}
