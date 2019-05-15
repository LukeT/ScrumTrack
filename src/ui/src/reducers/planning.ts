import { IPlanningState } from '../state/planning';
import { PlanningAction, PlanningActionTypes } from './../actions/planning';
import { CountdownReason } from '../realtime/realtime';

export const defaultPlanningState: IPlanningState = {
	inSession: false,
	currentSession: null,
	sessionsActive: [],

	currentTicket: null,
	myVote: null,
	voted: [],

	online: [],

	turnEndsAt: null,
	turnReason: CountdownReason.NEW_TICKET,

	leader: null,
	result: null,
};

export function planning(state: IPlanningState = defaultPlanningState, action: PlanningAction): IPlanningState {
	switch (action.type) {
		case PlanningActionTypes.SESSION_ACTIVE:
			return { ...state, sessionsActive: [...state.sessionsActive, action.payload.project] };

		case PlanningActionTypes.SESSION_INACTIVE:
			return { ...state, sessionsActive: state.sessionsActive.filter((i: string) => i !== action.payload.project) };

		case PlanningActionTypes.NEW_TICKET:
			return { ...state, currentTicket: action.payload.ticketId, voted: [], myVote: null, result: null };

		case PlanningActionTypes.COUNTDOWN_UPDATE:
			return {
				...state,
				turnEndsAt: new Date(+new Date() + action.payload.duration),
				turnReason: action.payload.reason,
			};

		case PlanningActionTypes.ENTER_SESSION:
			const validSession: boolean = !!action.payload.session;

			return {
				...state,
				leader: validSession ? action.payload.session.leader : null,
				inSession: validSession,
				currentSession: validSession ? action.payload.session.project : null,
				currentTicket: validSession ? action.payload.session.ticketId : null,
				online: validSession ? action.payload.session.online : [],
				myVote: validSession ? action.payload.session.myVote : null,
				voted: validSession ? action.payload.session.voted : [],
			};

		case PlanningActionTypes.LEFT_SESSION:
			return {
				...state,
				inSession: false,
				currentSession: null,
				currentTicket: null,
				online: [],
				voted: [],
			};

		case PlanningActionTypes.ADD_USER:
			return {
				...state,
				online: [...state.online, action.payload.userId],
			};

		case PlanningActionTypes.REMOVE_USER:
			return {
				...state,
				online: state.online.filter((id: number) => id !== action.payload.userId),
			};

		case PlanningActionTypes.VOTE:
			return {
				...state,
				myVote: action.payload.weight,
			};

		case PlanningActionTypes.VOTED:
			return {
				...state,
				voted: [...state.voted, action.payload.userId],
			};

		case PlanningActionTypes.SET_RESULTS:
			return { ...state, result: action.payload.result };

		default:
			return state;
	}
}
