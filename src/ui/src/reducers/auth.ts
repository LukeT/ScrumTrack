import { AuthAction } from '../actions/auth';
import { IAuthState, IAuthStatus } from '../state/auth';
import { AuthActionTypes } from './../actions/auth';

export const defaultAuthState: IAuthState  = {
	state: {
		auth: IAuthStatus.PENDING,
	},
	loading: {
		login: false,
		saving: false,
	},
	user: null,
};

export function auth(state: IAuthState = defaultAuthState, action: AuthAction): IAuthState {
	switch (action.type) {
		case AuthActionTypes.USER_UPDATED:
			return {
				...state,
				state: { auth: action.payload.user ? IAuthStatus.AUTHENTICATED : IAuthStatus.UNAUTHENTICATED},
				user: action.payload.user,
			};

		case AuthActionTypes.LOGIN_REQUEST:
			return { ...state, loading: { ...state.loading, login: true } };

		case AuthActionTypes.LOGIN_SUCCESS:
			return { ...state, loading: { ...state.loading, login: false }, state: { auth: IAuthStatus.AUTHENTICATED }, user: action.payload.user };

		case AuthActionTypes.LOGOUT:
			return { ...state, state: { auth: IAuthStatus.UNAUTHENTICATED }};

		case AuthActionTypes.UPDATE_REQUEST:
			return { ...state, loading: { ...state.loading, saving: true } };

		case AuthActionTypes.UPDATE_SUCCESS:
			return { ...state, loading: { ...state.loading, saving: false }, user: action.payload };

		case AuthActionTypes.UPDATE_FAILED:
			return { ...state, loading: { ...state.loading, saving: false } };

		default:
			return state;
	}
}
