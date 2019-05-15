import { Vote, CastAction } from './../realtime/realtime';
import { Epic, ofType } from 'redux-observable';
import { map, tap } from 'rxjs/operators';
import { PlanningAction, PlanningActionTypes } from './../actions/planning';
import { SCRUM_WEBSOCKET } from './../util/ScrumWebsocket';

import { BeginPlanningSession, ParticipatePlanningSession } from '../realtime/realtime';
import { IState } from '../state';

// tslint:disable
export const epics: Epic<PlanningAction, PlanningAction, IState>[] = [
	action$ => action$.pipe(
		ofType(PlanningActionTypes.JOIN_SESSION),
		tap((data: any) => {
			SCRUM_WEBSOCKET.send(
				new ParticipatePlanningSession({
					inSession: true,
					project: data.payload.project,
				}),
			)
		}),
		map(() => PlanningAction.awaitSocket()),
	),

	action$ => action$.pipe(
		ofType(PlanningActionTypes.LEAVE_SESSION),
		tap((data: any) => {
			SCRUM_WEBSOCKET.send(
				new ParticipatePlanningSession({
					inSession: false,
					project: data.payload.project,
				}),
			)
		}),
		map(() => PlanningAction.awaitSocket()),
	),

	action$ => action$.pipe(
		ofType(PlanningActionTypes.START_SESSION),
		tap((data: any) => {
			SCRUM_WEBSOCKET.send(
				new BeginPlanningSession({
					project: data.payload.project,
				}),
			)
		}),
		map(() => PlanningAction.awaitSocket()),
	),

	action$ => action$.pipe(
		ofType(PlanningActionTypes.VOTE),
		tap((data: any) => {
			SCRUM_WEBSOCKET.send(
				new Vote({
					ticketId: data.payload.ticketId,
					weight: data.payload.weight,
				})
			)
		}),
		map(() => PlanningAction.awaitSocket()),
	),

	action$ => action$.pipe(
		ofType(PlanningActionTypes.CAST_ACTION),
		tap((data: any) => {
			SCRUM_WEBSOCKET.send(
				new CastAction({
					action: data.payload.action,
				}),
			)
		}),
		map(() => PlanningAction.awaitSocket()),
	),
];
