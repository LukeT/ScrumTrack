import { CountdownReason, IResults } from './../realtime/realtime.d';
import { schema } from 'normalizr';

// tslint:disable-next-line
export const project = new schema.Entity('projects');

export interface IPlanningState {
	inSession: boolean;
	currentSession: string | null;
	sessionsActive: string[];

	currentTicket: number;
	myVote: null | number;
	voted: number[];

	// Members online
	online: number[];

	turnEndsAt: Date;
	turnReason: CountdownReason;

	leader: number;
	result: IResults;
}
