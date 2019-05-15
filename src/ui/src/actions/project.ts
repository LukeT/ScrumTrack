import { action, ActionsUnion } from '../util/helpers';
import { ITicket, ITicketComment, ITicketHistory } from '../util/models/Issue';
import { IProject } from '../util/models/Project';

export enum ProjectActionTypes {
	// Get
	GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST',
	GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS',

	SELECT_PROJECT = 'SELECT_PROJECT',
	SELECTED_PROJECT = 'SELECTED_PROJECT',

	SELECT_TICKET = 'SELECT_TICKET',
	SELECTED_TICKET = 'SELECTED_TICKET',

	FETCH_TICKETS_BY_WORKFLOW = 'FETCH_TICKETS_BY_WORKFLOW',
	FETCHED_TICKETS_BY_WORKFLOW = 'FETCHED_TICKETS_BY_WORKFLOW',

	FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST',
	FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',

	CREATE_TICKET_REQUEST = 'CREATE_TICKET_REQUEST',
	CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS',

	UPDATE_TICKET_REQUEST = 'UPDATE_TICKET_REQUEST',
	UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS',

	FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST',
	FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',

	FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST',
	FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS',

	CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST',
	CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS',

	MOVE_TICKET = 'MOVE_TICKET',
	MOVED_TICKET = 'MOVED_TICKET',
	UPDATE_TICKETS = 'UPDATE_TICKETS',

	MOVE_TICKET_SPRINT = 'MOVE_TICKET_SPRINT',
	SET_TICKET_STATUS = 'SET_TICKET_STATUS',

	GET_CATEGORIES = 'GET_CATEGORIES',
	ADD_CATEGORY = 'ADD_CATEGORY',
	SET_CATEGORIES = 'SET_CATEGORIES',
	SET_WEIGHT = 'SET_WEIGHT',
}

// tslint:disable
export const ProjectAction = {
	getProjectsRequest: () => action(ProjectActionTypes.GET_PROJECTS_REQUEST),
	getProjectsSuccess: (projects: IProject[]) => action(ProjectActionTypes.GET_PROJECTS_SUCCESS, projects),

	selectProject: (name: string) => action(ProjectActionTypes.SELECT_PROJECT, name),
	selectedProject: (project: IProject) => action(ProjectActionTypes.SELECTED_PROJECT, project),

	selectTicket: (projectId: string, ticketId: string) => action(ProjectActionTypes.SELECT_TICKET, { projectId, ticketId }),
	selectedTicket: (ticket: ITicket) => action(ProjectActionTypes.SELECTED_TICKET, ticket),

	fetchTicketsRequest: (projectId: string, filter: string) => action(ProjectActionTypes.FETCH_TICKETS_REQUEST, { projectId, filter }),
	fetchTicketsSuccess: (filter: string, tickets: ITicket[]) => action(ProjectActionTypes.FETCH_TICKETS_SUCCESS, { filter, tickets }),

	fetchTicketsByWorkflow: (projectId: string, workflowId: number) => action(ProjectActionTypes.FETCH_TICKETS_BY_WORKFLOW, { projectId, workflowId }),
	fetchedTicketsByWorkflow: (workflowId: number, tickets: ITicket[]) => action(ProjectActionTypes.FETCHED_TICKETS_BY_WORKFLOW, { workflowId, tickets }),

	createTicketRequest: (projectId: string, ticket: { title: string; body: string }) => action(ProjectActionTypes.CREATE_TICKET_REQUEST, { projectId, ticket }),
	createTicketSuccess: (ticket: ITicket) => action(ProjectActionTypes.CREATE_TICKET_SUCCESS, ticket),

	updateTicketRequest: (projectId: string, ticketId: string, ticket: { title: string; body: string, weight: number }) => action(ProjectActionTypes.UPDATE_TICKET_REQUEST, { projectId, ticketId, ticket }),
	updateTicketSuccess: (ticket: ITicket) => action(ProjectActionTypes.UPDATE_TICKET_SUCCESS, ticket),

	fetchCommentsRequest: (ticketId: string) => action(ProjectActionTypes.FETCH_COMMENTS_REQUEST, { ticketId }),
	fetchCommentsSuccess: (ticketId: string, comments: ITicketComment[]) => action(ProjectActionTypes.FETCH_COMMENTS_SUCCESS, { ticketId, comments }),

	fetchHistoryRequest: (ticketId: string) => action(ProjectActionTypes.FETCH_HISTORY_REQUEST, { ticketId }),
	fetchHistorySuccess: (ticketId: string, histories: ITicketHistory[]) => action(ProjectActionTypes.FETCH_HISTORY_SUCCESS, { ticketId, histories }),

	createCommentRequest: (ticketId: string, body: string) => action(ProjectActionTypes.CREATE_COMMENT_REQUEST, { ticketId, body }),
	createCommentSuccess: (ticketId: string, comment: ITicketComment) => action(ProjectActionTypes.CREATE_COMMENT_SUCCESS, { ticketId, comment }),

	moveTicket: (ticket: string, parent: string, sprintId: number) => action(ProjectActionTypes.MOVE_TICKET, { ticket, parent, sprintId }),
	updateTickets: (group: string, ticket: string[]) => action(ProjectActionTypes.UPDATE_TICKETS, { group, ticket }),

	moveTicketSprint: (ticket: string, workflowId: number, order: number) => action(ProjectActionTypes.MOVE_TICKET_SPRINT, { ticket, workflowId, order}),

	movedTicket: () => action(ProjectActionTypes.MOVED_TICKET),

	setTicketStatus: (ticket: string, status: string) => action(ProjectActionTypes.SET_TICKET_STATUS, { ticket, status }),

	getCategories: (project: string) => action(ProjectActionTypes.GET_CATEGORIES, { project }),
	addCategory: (category: string) => action(ProjectActionTypes.ADD_CATEGORY, { category }),
	setCategories: (categories: string[]) => action(ProjectActionTypes.SET_CATEGORIES, { categories }),
	setWeight: (ticketId: string, weight: number) => action(ProjectActionTypes.SET_WEIGHT, { ticketId, weight }),
};

export type ProjectAction = ActionsUnion<typeof ProjectAction>;
