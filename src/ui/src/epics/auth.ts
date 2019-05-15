import { SCRUM_WEBSOCKET } from './../util/ScrumWebsocket';
import { toasts } from '@streamjar/ui-react';
import * as cookies from 'js-cookie';
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { IState } from '../state';
import { IUser } from '../state/auth';
import { getApi } from '../util/helpers';
import { AuthAction, AuthActionTypes } from './../actions/auth';
import { Auth } from './../util/models/Auth';
import { User } from './../util/models/User';

// tslint:disable
export const epics: Epic<AuthAction, AuthAction, IState>[] = [
	action$ => action$.pipe(
		ofType(AuthActionTypes.AUTH_CHECK),
		switchMap(() => getApi(User).getCurrent()),
		catchError(() => of(null)),
		tap(() => SCRUM_WEBSOCKET.connect()),
		map((value: IUser) => AuthAction.userUpdated(value)),
	),

	action$ => action$.pipe(
		ofType(AuthActionTypes.LOGOUT),
		tap(() => cookies.remove('token')),
		map(() => AuthAction.loggedOut()),
	),

	action$ => action$.pipe(
		ofType(AuthActionTypes.LOGIN_REQUEST),
		switchMap((resp: any) => {
			return getApi(Auth).login(resp.payload.username, resp.payload.password)
				.pipe(
					tap(token => cookies.set('token', token.token)),
					switchMap(() => getApi(User).getCurrent()),
					map(user => user && AuthAction.loginSuccess({ user })),
					tap(() => SCRUM_WEBSOCKET.connect()),
					catchError((err: Error) => {
						toasts.error(err.message);

						return of(AuthAction.loginFailed());
					}),
				);
		}),
	),

	action$ => action$.pipe(
		ofType(AuthActionTypes.UPDATE_REQUEST),
		switchMap((payload: any) => getApi(User).update(payload.payload)
			.pipe(
				map((user) => AuthAction.updateCurrentSuccess(user)),
				tap(() => {
					toasts.success('Your account details have been updated');
				}),
				catchError((err: Error) => {
					toasts.error(err.message, 5000);

					return of(AuthAction.updateCurrentFailed());
				}),
			),
		),
	),
];
