import { Session, CountdownReason, IResults, ResultAction } from '../realtime/realtime';
import { action, ActionsUnion } from '../util/helpers';

export enum PlanningActionTypes {
	SESSION_ACTIVE = 'SESSION_ACTIVE',
	SESSION_INACTIVE = 'SESSION_INACTIVE',

	START_SESSION = 'START_SESSION',

	JOIN_SESSION = 'JOIN_SESSION',
	ENTER_SESSION = 'ENTER_SESSION',
	LEAVE_SESSION = 'LEAVE_SESSION',
	LEFT_SESSION = 'LEFT_SESSION',

	ADD_USER = 'ADD_USER',
	REMOVE_USER = 'REMOVE_USER',
	COUNTDOWN_UPDATE = 'COUNTDOWN_UPDATE',
	AWAIT_SOCKET = 'AWAIT_SOCKET',

	VOTE = 'VOTE',
	VOTED = 'VOTED',
	NEW_TICKET = 'NEW_TICKET',

	CAST_ACTION = 'CAST_ACTION',
	SET_RESULTS = 'SET_RESULTS',
}

// tslint:disable
export const PlanningAction = {
	setSessionActive: (project: string) => action(PlanningActionTypes.SESSION_ACTIVE, { project }),
	setSessionInactive: (project: string) => action(PlanningActionTypes.SESSION_INACTIVE, { project }),

	startSession: (project: string) => action(PlanningActionTypes.START_SESSION, { project }),
	newTicket: (ticketId: number) => action(PlanningActionTypes.NEW_TICKET, { ticketId }),

	joinSession: (project: string) => action(PlanningActionTypes.JOIN_SESSION, { project }),
	enterSession: (session: Session) => action(PlanningActionTypes.ENTER_SESSION, { session }),
	leaveSession: (project: string) => action(PlanningActionTypes.LEAVE_SESSION, { project }),
	leftSession: () => action(PlanningActionTypes.LEFT_SESSION),

	addUser: (userId: number) => action(PlanningActionTypes.ADD_USER, { userId }),
	removeUser: (userId: number) => action(PlanningActionTypes.REMOVE_USER, { userId }),

	countdownUpdate: (duration: number, reason: CountdownReason) => action(PlanningActionTypes.COUNTDOWN_UPDATE, { duration, reason }),


	vote: (ticketId: number, weight: number) => action(PlanningActionTypes.VOTE, { weight, ticketId }),
	voted: (userId: number) => action(PlanningActionTypes.VOTED, { userId }),
	awaitSocket: () => action(PlanningActionTypes.AWAIT_SOCKET),

	setResults: (result: IResults) => action(PlanningActionTypes.SET_RESULTS, { result }),
	castAction: (project: string, action_: ResultAction) => action(PlanningActionTypes.CAST_ACTION, { project, action: action_ }),
};

export type PlanningAction = ActionsUnion<typeof PlanningAction>;
