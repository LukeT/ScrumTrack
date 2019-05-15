import { AppAction } from '../actions/app';
import { calculateSize } from '../util/viewport/ViewSize';
import { AppActionTypes } from './../actions/app';
import { IAppState } from './../state/app';

export const defaultAppState: IAppState  = {
	showProject: true,
	viewport: calculateSize(window.innerWidth),
};

export function app(state: IAppState = defaultAppState, action: AppAction): IAppState {
	switch (action.type) {
		case AppActionTypes.TOGGLE_PROJECT:
			return { ...state, showProject: action.payload };

		case AppActionTypes.SET_VIEWPORT:
			return { ...state, viewport: action.payload.viewport };

		default:
			return state;
	}
}
