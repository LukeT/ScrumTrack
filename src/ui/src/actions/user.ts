import { IUser } from '../state/auth';
import { action, ActionsUnion } from '../util/helpers';
import { IPasswordChange } from '../util/models/User';

export enum UserActionTypes {
	// Get
	GET_USERS_REQUEST = 'GET_USERS_REQUEST',
	GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
	GET_USERS_BASIC_REQUEST = 'GET_USERS_BASIC_REQUEST',

	// Create
	CREATE_USER_REQUEST = 'CREATE_USER_REQUEST',
	CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
	CREATE_USER_FAILED = 'CREATE_USER_FAILED',

	// Update
	UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
	UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
	UPDATE_USER_FAILED = 'UPDATE_USER_FAILED',

	// Delete
	DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
	DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
	DELETE_USER_FAILED = 'DELETE_USER_FAILED',

	UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST',
	UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS',
	UPDATE_PASSWORD_FAILED = 'UPDATE_PASSWORD_FAILED',
}

// tslint:disable
export const UserAction = {
	getUsersBasicRequest: () => action(UserActionTypes.GET_USERS_BASIC_REQUEST),

	// Admin
	getUsersRequest: () => action(UserActionTypes.GET_USERS_REQUEST),
	getUsersSuccess: (users: IUser[]) => action(UserActionTypes.GET_USERS_SUCCESS, users),

	createUserRequest: (user: IUser) => action(UserActionTypes.CREATE_USER_REQUEST, user),
	createUserSuccess: (user: IUser) => action(UserActionTypes.CREATE_USER_SUCCESS, user),
	createUserFailed: () => action(UserActionTypes.CREATE_USER_FAILED),

	updateUserRequest: (user: IUser) => action(UserActionTypes.UPDATE_USER_REQUEST, user),
	updateUserSuccess: (user: IUser) => action(UserActionTypes.UPDATE_USER_SUCCESS, user),
	updateUserFailed: (id: number) => action(UserActionTypes.UPDATE_USER_FAILED, id),

	deleteUserRequest: (userId: number) => action(UserActionTypes.DELETE_USER_REQUEST, userId),
	deleteUserSuccess: (userId: number) => action(UserActionTypes.DELETE_USER_SUCCESS, userId),
	deleteUserFailed: (userId: number) => action(UserActionTypes.DELETE_USER_FAILED, userId),

	// User
	updatePasswordRequest: (pass: IPasswordChange) => action(UserActionTypes.UPDATE_PASSWORD_REQUEST, pass),
	updatePasswordSuccess: () => action(UserActionTypes.UPDATE_PASSWORD_SUCCESS),
	updatePasswordFailed: () => action(UserActionTypes.UPDATE_PASSWORD_FAILED),
};

export type UserAction = ActionsUnion<typeof UserAction>;
