import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IState } from '../state';
import { getApi } from '../util/helpers';
import { SprintAction, SprintActionTypes } from './../actions/sprint';
import { ISprint, IWorkflowRule, Sprint } from './../util/models/Sprint';

// tslint:disable
export const epics: Epic<SprintAction, SprintAction, IState>[] = [
	action$ => action$.pipe(
		ofType(SprintActionTypes.GET_CURRENT_SPRINT),
		switchMap((sc: any) => getApi(Sprint).getLatestSprint(sc.payload.projectId)
			.pipe(
				catchError(() => of(null)),
				map((value: ISprint) => SprintAction.setCurrentSprint(value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(SprintActionTypes.GET_WORKFLOW),
		switchMap(() => getApi(Sprint).getWorkflow()
			.pipe(
				catchError(() => of([])),
				map((value: IWorkflowRule[]) => SprintAction.setWorkflow(value)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.CREATE_WORKFLOW),
		switchMap((data: any) => getApi(Sprint).createWorkflow(data.payload.rule)
			.pipe(
				catchError(() => of(null)),
				map((value: IWorkflowRule) => SprintAction.createdWorkflow(value)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.UPDATE_WORKFLOW),
		switchMap((data: any) => getApi(Sprint).updateWorkflow(data.payload.rule)
			.pipe(
				catchError(() => of(null)),
				map((value: IWorkflowRule) => SprintAction.updatedWorkflow(value)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.DELETE_WORKFLOW),
		switchMap((data: any) => getApi(Sprint).deleteWorkflow(data.payload.id)
			.pipe(
				catchError(() => of(null)),
				map(() => SprintAction.deletedWorkflow(data.payload.id)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.START_SPRINT),
		switchMap((data: any) => getApi(Sprint).startSprint(data.payload.projectId)
			.pipe(
				catchError(() => of(null)),
				map((sprint: ISprint) => SprintAction.setCurrentSprint(sprint)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.STOP_SPRINT),
		switchMap((data: any) => getApi(Sprint).stopSprint(data.payload.projectId)
			.pipe(
				catchError(() => of(null)),
				map(() => SprintAction.setCurrentSprint(null)),
			),
		),
	),
	action$ => action$.pipe(
		ofType(SprintActionTypes.CREATE_SPRINT),
		switchMap((data: any) => getApi(Sprint).create(data.payload.projectId, data.payload.goal, data.payload.duration)
			.pipe(
				catchError(() => of(null)),
				map((value: ISprint) => SprintAction.setCurrentSprint(value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(SprintActionTypes.GET_HISTORIC_SPRINTS),
		switchMap((data: any) => getApi(Sprint).getHistoricSprints(data.payload.projectId)
			.pipe(
				catchError(() => of([])),
				map((value: ISprint[]) => SprintAction.setHistoricSprints(value)),
			),
		),
	),
];
