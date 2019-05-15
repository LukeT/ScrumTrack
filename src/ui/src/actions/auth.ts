import { action, ActionsUnion } from '../util/helpers';
import { IUser } from './../state/auth';

export enum AuthActionTypes {
	AUTH_CHECK = 'AUTH_CHECK',
	LOGOUT = 'LOGOUT',
	LOGGED_OUT = 'LOGGED_OUT',
	USER_UPDATED = 'USER_UPDATED',

	LOGIN_REQUEST = 'LOGIN_REQUEST',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_FAILED = 'LOGIN_FAILED',

	UPDATE_REQUEST = 'UPDATE_CURRENT_REQUEST',
	UPDATE_SUCCESS = 'UPDATE_CURRENT_SUCCESS',
	UPDATE_FAILED = 'UPDATE_CURRENT_FAILED',
}

// tslint:disable
export const AuthAction = {
	logout: () => action(AuthActionTypes.LOGOUT),
	loggedOut: () => action(AuthActionTypes.LOGGED_OUT),
	authCheck: () => action(AuthActionTypes.AUTH_CHECK),
	userUpdated: (user: IUser) => action(AuthActionTypes.USER_UPDATED, { user }),

	loginRequest: (app: { username: string; password: string }) => action(AuthActionTypes.LOGIN_REQUEST, app),
	loginSuccess: (auth: { user: IUser }) => action(AuthActionTypes.LOGIN_SUCCESS, { user: auth.user }),
	loginFailed: () => action(AuthActionTypes.LOGIN_FAILED),

	updateCurrentRequest: (user: IUser) => action(AuthActionTypes.UPDATE_REQUEST, user),
	updateCurrentSuccess: (user: IUser) => action(AuthActionTypes.UPDATE_SUCCESS, user),
	updateCurrentFailed: () => action(AuthActionTypes.UPDATE_FAILED),
};

export type AuthAction = ActionsUnion<typeof AuthAction>;
