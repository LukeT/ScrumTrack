import { toasts } from '@streamjar/ui-react';
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ProjectAction } from '../actions/project';
import { IState } from '../state';
import { getApi } from '../util/helpers';
import { ProjectActionTypes } from './../actions/project';
import { ITicket, ITicketComment, Ticket, ITicketHistory } from './../util/models/Issue';
import { IProject, Project } from './../util/models/Project';

// tslint:disable
export const epics: Epic<ProjectAction, ProjectAction, IState>[] = [
	action$ => action$.pipe(
		ofType(ProjectActionTypes.GET_PROJECTS_REQUEST),
		switchMap(() => getApi(Project).getAll()
			.pipe(
				catchError(() => of([])),
				map((value: IProject[]) => ProjectAction.getProjectsSuccess(value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.SELECT_PROJECT),
		switchMap((payload: any) => {
			return (payload.payload === null ? of(null) : getApi(Project).getOne(payload.payload))
				.pipe(
					catchError(() => of(null)),
					map((value: IProject) => ProjectAction.selectedProject(value)),
				);
			}
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.FETCH_TICKETS_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).getAll(payload.payload.projectId, payload.payload.filter)
			.pipe(
				catchError(() => of(null)),
				map((value: ITicket[]) => ProjectAction.fetchTicketsSuccess(payload.payload.filter, value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.CREATE_TICKET_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).create(payload.payload.projectId, payload.payload.ticket)
			.pipe(
				catchError(() => of(null)),
				map((ticket: ITicket) => {
					return ProjectAction.createTicketSuccess(ticket);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.UPDATE_TICKET_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).update(payload.payload.projectId, payload.payload.ticketId, payload.payload.ticket)
			.pipe(
				catchError(() => of(null)),
				map((ticket: ITicket) => {
					toasts.success('Ticket updated');
					return ProjectAction.updateTicketSuccess(ticket);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.SELECT_TICKET),
		mergeMap((payload: any) => getApi(Ticket).getOne(payload.payload.projectId, payload.payload.ticketId)
			.pipe(
				catchError(() => of(null)),
				map((ticket: ITicket) => {
					return ProjectAction.selectedTicket(ticket);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.FETCH_COMMENTS_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).getComments(payload.payload.ticketId)
			.pipe(
				catchError(() => of(null)),
				map((comments: ITicketComment[]) => {
					return ProjectAction.fetchCommentsSuccess(payload.payload.ticketId, comments);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.FETCH_HISTORY_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).getHistory(payload.payload.ticketId)
			.pipe(
				catchError(() => of(null)),
				map((histories: ITicketHistory[]) => {
					return ProjectAction.fetchHistorySuccess(payload.payload.ticketId, histories);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.CREATE_COMMENT_REQUEST),
		mergeMap((payload: any) => getApi(Ticket).createComment(payload.payload.ticketId, payload.payload.body)
			.pipe(
				catchError(() => of(null)),
				map((comment: ITicketComment) => {
					return ProjectAction.createCommentSuccess(payload.payload.ticketId, comment);
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.MOVE_TICKET),
		mergeMap((payload: any) => getApi(Ticket).moveTicket(payload.payload.ticket, payload.payload.parent, payload.payload.sprintId)
			.pipe(
				catchError(() => of(null)),
				map(() => {
					return ProjectAction.movedTicket();
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(ProjectActionTypes.FETCH_TICKETS_BY_WORKFLOW),
		mergeMap((payload: any) => getApi(Ticket).getAll(payload.payload.projectId, 'sprint', payload.payload.workflowId)
			.pipe(
				catchError(() => of(null)),
				map((value: ITicket[]) => ProjectAction.fetchedTicketsByWorkflow(payload.payload.workflowId, value)),
			),
		),
	),


	action$ => action$.pipe(
		ofType(ProjectActionTypes.MOVE_TICKET_SPRINT),
		mergeMap((payload: any) => getApi(Ticket).moveSprint(payload.payload.ticket, payload.payload.workflowId, payload.payload.order)
			.pipe(
				catchError(() => of(null)),
				map(() => {
					return ProjectAction.movedTicket();
				}),
			),
		),
	),
	action$ => action$.pipe(
		ofType(ProjectActionTypes.GET_CATEGORIES),
		mergeMap((payload: any) => getApi(Ticket).getCategories(payload.payload.project)
			.pipe(
				catchError(() => of([])),
				map((val) => {
					return ProjectAction.setCategories(val);
				}),
			),
		),
	),

];
