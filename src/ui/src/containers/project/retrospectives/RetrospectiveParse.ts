import { ITicket, ITicketHistory, LogType } from '../../../util/models/Issue';
import { groupByDate } from '../../../util/helpers';

export enum LogKind {
	WEIGHT,
	SPRINTED,
	STATUS,
}

export class RetrospectiveParse {
	private startTickets: string[] = [];

	private seenCount: { [id: string]: number } = {};

	public tickets: { [key: string]: {
		id: string;
		title: string;
		status: string;
		weight: number;
	}} = {};

	public logs: { type: LogKind, kind: string, value?: string; ticketId: string, timestamp: number }[] = [];

	constructor(
		private readonly startTime: number,
		private readonly finalTickets: ITicket[],
		private readonly history: ITicketHistory[],
	) {
		this.calculateStart();
		this.buildHistory();
	}

	private calculateStart(): void {
		let tickets: string[] = this.finalTickets.map(i => i.id);

		[...this.history].filter(i => i.createdAt < this.startTime).reverse().forEach(i => {
			if (i.type === LogType.SPRINT) {
				// If the ticket as at some point added to the sprint
				if (i.oldValue === '') {
					// We do the inverse since we're undoing history
					tickets = tickets.filter(n => n !== i.ticketId);

					// If the ticket was removed from the sprint.
				} else if (i.newValue === '') {
					tickets.push(i.ticketId);
				}
			}
		});

		this.startTickets = tickets;
	}

	private seenFor(i: string): string {
		return `${i}-${this.seenCount[i]}`;
	}

	private buildHistory(): void {
		this.history.forEach((i) => {
			if (i.type === LogType.SPRINT) {
				if (i.oldValue === '') {
					this.seenCount[i.ticketId] = (this.seenCount[i.ticketId] || 0) + 1;
					const ts: number = this.startTickets.includes(i.ticketId) && this.seenCount[i.ticketId] === 1 ? this.startTime : i.createdAt;

					this.logs.push({ type: LogKind.SPRINTED, kind: 'added', ticketId: this.seenFor(i.ticketId) , timestamp: ts });

					this.tickets[this.seenFor(i.ticketId)] = {
						id: i.ticketId,
						title: null,
						weight: null,
						status: null,
					};
				} else {
					this.logs.push({ type: LogKind.SPRINTED, kind: 'removed', ticketId: this.seenFor(i.ticketId), timestamp: i.createdAt });
				}
			}

			if (i.type === LogType.WEIGHT) {
				if (this.tickets[this.seenFor(i.ticketId)].weight !== null) {
					const kind: string = i.oldValue < i.newValue ? 'increased' : 'decreased';
					const newV = +i.newValue - this.tickets[this.seenFor(i.ticketId)].weight;

					this.logs.push({ type: LogKind.WEIGHT, kind, value: `${newV}`, ticketId: this.seenFor(i.ticketId), timestamp: i.createdAt });
				} else {
					this.tickets[this.seenFor(i.ticketId)].weight = +i.newValue;
				}
			}

			if (i.type === LogType.STATUS) {
				if (this.tickets[this.seenFor(i.ticketId)].status === null) {
					this.tickets[this.seenFor(i.ticketId)].status = i.newValue;
				} else {
					this.logs.push({ type: LogKind.STATUS, kind: 'set', value: i.newValue, ticketId: this.seenFor(i.ticketId), timestamp: i.createdAt });
				}
			}

			if (i.type === LogType.TITLE) {
				this.tickets[this.seenFor(i.ticketId)].title = i.newValue;
			}
		});
	}

	public getGraphs(): { x: Date; y: number}[] {
		const dps: { x: Date; y: number}[] = [];

		let spValue: number = 0;

		const groups = groupByDate(this.logs, 'timestamp'); // tslint:disable-line

		Object.keys(groups).forEach(i => {
			const val = groups[i];

			let newSpValue: number = spValue;

			val.forEach(j => {
				if (j.type === LogKind.SPRINTED) {
					if (j.kind === 'added') {
						newSpValue += this.tickets[j.ticketId].weight;
					} else {
						newSpValue -= this.tickets[j.ticketId].weight;
					}
				}

				if (j.type === LogKind.STATUS) {
					const closed: boolean = j.value === 'closed';
					const open: boolean = j.value === 'open';

					if (open) {
						newSpValue += this.tickets[j.ticketId].weight;
					} else if (closed) {
						newSpValue -= this.tickets[j.ticketId].weight;
					}
				}
			});

			dps.push({ x: new Date(i), y: newSpValue });
			spValue = newSpValue;
		});

		return dps;
	}

	public getStatus(): { x: Date; y: number}[][] {
		const newStatus: { x: Date; y: number }[] = [];
		const inProgress: { x: Date; y: number}[] = [];
		const closed: { x: Date; y: number}[] = [];

		const lastStatus: { [key: string]: string } = {};
		const groups = groupByDate(this.logs, 'timestamp'); // tslint:disable-line

		// tslint:disable-next-line
		let shared = { open: 0, 'in-progress': 0, closed: 0 };

		Object.keys(groups).forEach(i => {
			const local = { ...shared }; // tslint:disable-line

			groups[i].forEach(j => {
				if (j.type === LogKind.SPRINTED) {
					lastStatus[j.ticketId] = this.tickets[j.ticketId].status;

					if (j.kind === 'added') {
						local[this.tickets[j.ticketId].status] += 1;
					} else {
						local[this.tickets[j.ticketId].status] -= 1;
					}
				}

				if (j.type === LogKind.STATUS) {
					if (lastStatus[j.ticketId]) {
						local[lastStatus[j.ticketId]] -= 1;
					}

					local[j.value] += 1;

					lastStatus[j.ticketId] = j.value;
				}
			});

			newStatus.push({ x: new Date(i), y: local.open });
			inProgress.push({ x: new Date(i), y: local['in-progress'] });
			closed.push({ x: new Date(i), y: local.closed });

			shared = { ...local };
		});

		return [newStatus, inProgress, closed];
	}

}
