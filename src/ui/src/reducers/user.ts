import { IUserState } from '../state/user';
import { UserAction, UserActionTypes } from './../actions/user';
import { IUser } from './../state/auth';

export const defaultAppState: IUserState = {
	users: [],
	saving: { create: false },
	loading: false,
	updatedPassword: false,
};

export function user(state: IUserState = defaultAppState, action: UserAction): IUserState {
	switch (action.type) {
		case UserActionTypes.GET_USERS_REQUEST:
			return { ...state, loading: true };

		case UserActionTypes.GET_USERS_SUCCESS:
			return { ...state, loading: false, users: action.payload };

		case UserActionTypes.CREATE_USER_REQUEST:
			return { ...state, saving: { ...state.saving, create: true } };

		case UserActionTypes.CREATE_USER_SUCCESS:
			return { ...state, saving: { ...state.saving, create: false }, users: [...state.users, action.payload] };

		case UserActionTypes.CREATE_USER_FAILED:
			return { ...state, saving: { ...state.saving, create: false } };

		case UserActionTypes.UPDATE_USER_REQUEST:
			return { ...state, saving: { ...state.saving, [action.payload.id]: true } };

		case UserActionTypes.UPDATE_USER_SUCCESS:
			const updUsers: IUser[] = state.users.map((i: IUser) => (i.id === action.payload.id) ? action.payload : i);

			return { ...state, saving: { ...state.saving, [action.payload.id]: false }, users: updUsers };

		case UserActionTypes.UPDATE_USER_FAILED:
			return { ...state, saving: { ...state.saving, [action.payload]: true } };

		case UserActionTypes.DELETE_USER_REQUEST:
			return { ...state, saving: { ...state.saving, [action.payload]: true } };

		case UserActionTypes.DELETE_USER_SUCCESS:
			const users: IUser[] = state.users.filter((i: IUser) => i.id !== action.payload);

			return { ...state, saving: { ...state.saving, [action.payload]: false }, users };

		case UserActionTypes.DELETE_USER_FAILED:
			return { ...state, saving: { ...state.saving, [action.payload]: false } };

		case UserActionTypes.UPDATE_PASSWORD_REQUEST:
		case UserActionTypes.UPDATE_PASSWORD_FAILED:
			return { ...state, updatedPassword: false };

		case UserActionTypes.UPDATE_PASSWORD_SUCCESS:
			return { ...state, updatedPassword: true };

		default:
			return state;
	}
}
