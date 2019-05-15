import { schema } from 'normalizr';

import { ITicket, ITicketComment, ITicketHistory } from './../util/models/Issue';
import { IProject } from './../util/models/Project';

// tslint:disable-next-line
export const project = new schema.Entity('projects');

export interface IProjectState {
	entities: {
		projects: { [key: string]: IProject };
		tickets: { [key: string]: ITicket };
		comments: { [key: number] : ITicketComment };
		histories: { [key: number] : ITicketHistory };
	};

	workflow: { [key: number]: string[] };
	results: string[];

	activeProject: string;
	activeTicket: string;

	fetching: boolean;
	fetchingTicket: boolean;

	comments: {
		data: { [ticketId: string]: number[] };
		fetching: { [ticketId: string]: boolean };
	};

	histories: {
		data: { [ticketId: string]: number[] };
		fetching: { [ticketId: string]: boolean };
	};

	tickets: {
		pending: string[];
		backlog: string[];
	};

	categories: string[];
}
