import { toasts } from '@streamjar/ui-react';
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { UserAction, UserActionTypes } from '../actions/user';
import { IState } from '../state';
import { IUser } from '../state/auth';
import { getApi } from '../util/helpers';
import { User } from '../util/models/User';

// tslint:disable
export const epics: Epic<UserAction, UserAction, IState>[] = [
	action$ => action$.pipe(
		ofType(UserActionTypes.GET_USERS_REQUEST),
		switchMap(() => getApi(User).adminGetAll()
			.pipe(
				catchError(() => of([])),
				map((value: IUser[]) => UserAction.getUsersSuccess(value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(UserActionTypes.GET_USERS_BASIC_REQUEST),
		switchMap(() => getApi(User).getAll()
			.pipe(
				catchError(() => of([])),
				map((value: IUser[]) => UserAction.getUsersSuccess(value)),
			),
		),
	),

	action$ => action$.pipe(
		ofType(UserActionTypes.CREATE_USER_REQUEST),
		switchMap((payload: any) => getApi(User).create(payload.payload)
			.pipe(
				map((value: IUser) => UserAction.createUserSuccess(value)),
				catchError((err: Error) => {
					toasts.error(err.message);

					return of(UserAction.createUserFailed())
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(UserActionTypes.UPDATE_USER_REQUEST),
		switchMap((payload: any) => getApi(User).adminUpdate(payload.payload)
			.pipe(
				map(() => UserAction.updateUserSuccess(payload.payload)),
				catchError((err: Error) => {
					toasts.error(err.message);

					return of(UserAction.updateUserFailed(payload.payload.id))
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(UserActionTypes.DELETE_USER_REQUEST),
		switchMap((payload: any) => getApi(User).destroy(payload.payload)
			.pipe(
				map(() => UserAction.deleteUserSuccess(payload.payload)),
				catchError((err: Error) => {
					toasts.error(err.message);

					return of(UserAction.deleteUserFailed(payload.payload))
				}),
			),
		),
	),

	action$ => action$.pipe(
		ofType(UserActionTypes.UPDATE_PASSWORD_REQUEST),
		switchMap((payload: any) => getApi(User).updatePassword(payload.payload)
			.pipe(
				map(() => UserAction.updatePasswordSuccess()),
				tap(() => {
					toasts.success('Your password has been updated');
				}),
				catchError((err: Error) => {
					toasts.error(err.message, 5000);

					return of(UserAction.updatePasswordFailed());
				}),
			),
		),
	),
];
