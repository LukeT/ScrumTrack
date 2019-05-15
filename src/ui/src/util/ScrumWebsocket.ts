import { ProjectAction } from './../actions/project';
import * as cookies from 'js-cookie';
import { config } from './../../config';
import { PlanningAction } from './../actions/planning';
import { EndSession, EndSessionReason, UserStatus } from './../realtime/realtime';

import { toasts } from '@streamjar/ui-react';
import { getMessageType, sendMessage } from '../realtime/messages';
import { Authenticate, CountdownReason } from '../realtime/realtime';
import { store } from '../store';

class ScrumWebsocket {
	private ws: WebSocket;

	public connect(): void {
		this.ws = new WebSocket(config.realtimeHostname);
		this.ws.binaryType = 'arraybuffer';
		this.ws.addEventListener('open', () => {
			this.send(new Authenticate({ jwt: cookies.get('token') }));
		});

		this.ws.addEventListener('message', (msg: MessageEvent) => {
			// tslint:disable-next-line
			const d: { type: string, message: any } = getMessageType(new Uint8Array(msg.data));
			console.log(`%cIN - ${d.type}%c`, 'color: #111;background: green', 'background: transparent', d.message);

			switch (d.type) {
				case 'PlanSessionActive':
					store.dispatch(PlanningAction.setSessionActive(d.message.project));

					return;

				case 'PlanSessionInactive':
					store.dispatch(PlanningAction.setSessionInactive(d.message.project));

					return;

				case 'Session':
					store.dispatch(PlanningAction.enterSession(d.message));

					return;

				case 'Voted':
					store.dispatch(PlanningAction.voted(d.message.userId));

					return;

				case 'NewTicket':
					store.dispatch(PlanningAction.newTicket(d.message.ticketId));

					return;

				case 'Countdown':
					if (d.message.reason === CountdownReason.NOT_ENOUGH) {
						toasts.info('Not enough people have voted on this ticket, the timer has been reset.');
					} else if (d.message.reason === CountdownReason.NEW_TICKET) {
						toasts.info('Voting has started on a new ticket');
					}

					store.dispatch(PlanningAction.countdownUpdate(d.message.durationMs, d.message.reason));

					return;

				case 'UserStatus':
					const status: UserStatus = <UserStatus> d.message;

					if (status.status) {
						store.dispatch(PlanningAction.addUser(status.userId));
					} else {
						store.dispatch(PlanningAction.removeUser(status.userId));
					}

					return;

				case 'Results':
					store.dispatch(PlanningAction.setResults(d.message));
					return;

				case 'LeftSession':
					return store.dispatch(<any>PlanningAction.leftSession());

				case 'Weighted':
					toasts.success(`Ticket ${d.message.ticketId} has been weighted as ${d.message.weight}`, 10000);
					return store.dispatch(ProjectAction.setWeight(d.message.ticketId, d.message.weight));

				case 'EndSession':
					const endSession: EndSession = <EndSession> d.message;
					store.dispatch(<any>PlanningAction.leftSession());

					if (endSession.reason === EndSessionReason.NO_MORE) {
						toasts.success(`No more tickets to weight!`, 10000);
					} else {
						toasts.success(`The leader ended the session`, 10000);
					}

					return;

				default:
					return;
			}
		});
	}

	public send(value: any): void {
		if (this.ws) {
			this.ws.send(sendMessage(value));
		}
	}
}

// tslint:disable-next-line
export const SCRUM_WEBSOCKET: ScrumWebsocket = new ScrumWebsocket();
