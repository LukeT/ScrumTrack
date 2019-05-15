import { ITicket, ITicketComment, ITicketHistory } from '../util/models/Issue';
import { ProjectAction, ProjectActionTypes } from './../actions/project';
import { SprintActionTypes } from './../actions/sprint';
import { IProjectState } from './../state/project';
import { IProject } from './../util/models/Project';

export const defaultAppState: IProjectState = {
	entities: {
		projects: {},
		tickets: {},
		comments: {},
		histories: {},
	},
	workflow: {},
	results: [],
	activeProject: null,
	fetching: true,
	fetchingTicket: true,
	tickets: {
		pending: [],
		backlog: [],
	},
	comments: {
		data: {},
		fetching: {},
	},
	histories: {
		data: {},
		fetching: {},
	},
	activeTicket: null,
	categories: [],
};

// tslint:disable max-func-body-length cyclomatic-complexity
export function project(state: IProjectState = defaultAppState, action: ProjectAction): IProjectState {
	switch (action.type) {
		case ProjectActionTypes.GET_PROJECTS_SUCCESS:
			const projects: { [key: string]: IProject } = {};

			action.payload.forEach((i: IProject) => {
				projects[i.shortcode] = i;
			});

			return { ...state, entities: { ...state.entities, projects }, results: Object.keys(projects) };

		case ProjectActionTypes.SELECT_PROJECT:
			return {
				...state, fetching: true, activeProject: null,
				activeTicket: null,
				fetchingTicket: true,
				tickets: {
					backlog: [],
					pending: [],
				},
			};

		case ProjectActionTypes.SELECTED_PROJECT:
			let entities: any = state.entities;

			if (action.payload) {
				entities = { ...state.entities, projects: { ...state.entities.projects, [action.payload.shortcode]: action.payload }};
			}

			return {
				...state,
				fetching: action.payload === null,
				activeProject: action.payload ? action.payload.shortcode : null,
				entities,
			};

		case ProjectActionTypes.SELECT_TICKET:
			return { ...state, fetchingTicket: true, activeTicket: null };

		case ProjectActionTypes.SELECTED_TICKET:
			let entitiess: any = state.entities;

			if (action.payload) {
				entitiess = { ...state.entities, tickets: { ...state.entities.tickets, [action.payload.id]: action.payload }};
			}

			return {
				...state,
				fetchingTicket: false,
				activeTicket: action.payload ? action.payload.id : null,
				entities: entitiess,
			};

		case ProjectActionTypes.FETCH_TICKETS_SUCCESS:
			const allTickets: { [key: number]: ITicket } = state.entities.tickets ;
			const ourTickets: number[] = [];

			action.payload.tickets.forEach((i: ITicket) => {
				allTickets[i.id] = i;
				ourTickets.push(i.id);
			});

			return {
				...state, tickets: { ...state.tickets, [action.payload.filter]: ourTickets }, entities: { ...state.entities, tickets: allTickets },
			};

		case ProjectActionTypes.FETCHED_TICKETS_BY_WORKFLOW:
			const wsTickets: { [key: number]: ITicket } = { ...state.entities.tickets };
			const wfTicketsOurs: string[] = [];

			action.payload.tickets.forEach((i: ITicket) => {
				wsTickets[i.id] = i;
				wfTicketsOurs.push(i.id);
			});

			return {
				...state,
				workflow: { ...state.workflow, [action.payload.workflowId]: wfTicketsOurs }, entities: { ...state.entities, tickets: wsTickets },
			};

		case ProjectActionTypes.CREATE_TICKET_SUCCESS:
			const pending: string[] = [...state.tickets.pending, action.payload.id];

			return {
				...state,
				tickets: { ...state.tickets, pending },
				entities: { ...state.entities, tickets: { ...state.entities.tickets, [action.payload.id]: action.payload }},
			};

		case ProjectActionTypes.UPDATE_TICKET_SUCCESS:
			return {
				...state,
				entities: {
					...state.entities,
					tickets: {
						...state.entities.tickets,
						[action.payload.id]: action.payload,
					},
				},
			};

		case ProjectActionTypes.FETCH_COMMENTS_REQUEST:
			return {
				...state,
				comments: {
					fetching: {
						...state.comments.fetching,
						[action.payload.ticketId]: true,
					},
					data: {
						[action.payload.ticketId]: [],
					},
				},
			};

		case ProjectActionTypes.FETCH_COMMENTS_SUCCESS:
			const commentIds: number[] = action.payload.comments.map((i: ITicketComment) => i.id);
			const comments: { [key: number]: ITicketComment } = { ...state.entities.comments };

			action.payload.comments.forEach((i: ITicketComment) => {
				comments[i.id] = i;
			});

			return {
				...state,
				entities: {
					...state.entities,
					comments,
				},
				comments: {
					fetching: {
						...state.comments.fetching,
						[action.payload.ticketId]: false,
					},
					data: {
						[action.payload.ticketId]: commentIds,
					},
				},
			};

		case ProjectActionTypes.FETCH_HISTORY_REQUEST:
			return {
				...state,
				comments: {
					fetching: {
						...state.comments.fetching,
						[action.payload.ticketId]: true,
					},
					data: {
						[action.payload.ticketId]: [],
					},
				},
			};

		case ProjectActionTypes.FETCH_HISTORY_SUCCESS:
			const historyIds: number[] = action.payload.histories.map((i: ITicketHistory) => i.id);
			const histories: { [key: number]: ITicketHistory } = { ...state.entities.histories };

			action.payload.histories.forEach((i: ITicketHistory) => {
				histories[i.id] = i;
			});

			return {
				...state,
				entities: {
					...state.entities,
					histories,
				},
				histories: {
					fetching: {
						...state.histories.fetching,
						[action.payload.ticketId]: false,
					},
					data: {
						[action.payload.ticketId]: historyIds,
					},
				},
			};

		case ProjectActionTypes.CREATE_COMMENT_SUCCESS:
			return {
				...state,
				entities: {
					...state.entities,
					comments: {
						...state.entities.comments,
						[action.payload.comment.id]: action.payload.comment,
					},
				},
				comments: {
					...state.comments,
					data: {
						...state.comments.data,
						[action.payload.ticketId]: [...state.comments.data[action.payload.ticketId], action.payload.comment.id],
					},
				},
			};

		case ProjectActionTypes.UPDATE_TICKETS:
			return {
				...state,
				tickets: {
					...state.tickets,
					[action.payload.group]: [...action.payload.ticket],
				},
			};

		case ProjectActionTypes.SET_TICKET_STATUS:
			const tickets = { ...state.entities.tickets };

			tickets[action.payload.ticket] = { ...tickets[action.payload.ticket], status: action.payload.status };

			return { ...state, entities: {
				...state.entities,
				tickets,
			} };

		case ProjectActionTypes.SET_CATEGORIES:
			return { ...state, categories: action.payload.categories };

		case ProjectActionTypes.ADD_CATEGORY:
			return { ...state, categories: [...state.categories, action.payload.category] };

		case (<any>SprintActionTypes).SET_WORKFLOW_ITEMS:
			return { ...state, workflow: { ...state.workflow, ...(<any>action).payload.wf }};

		case ProjectActionTypes.SET_WEIGHT:
			return { ...state, entities: { ...state.entities, tickets: {
				...state.entities.tickets,
				[action.payload.ticketId]: {
					...state.entities.tickets[action.payload.ticketId],
					weight: action.payload.weight,
				}
			}}};

		default:
			return state;
	}
}
