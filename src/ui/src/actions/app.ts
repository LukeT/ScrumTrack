import { action, ActionsUnion } from '../util/helpers';
import { ViewSize } from './../util/viewport/ViewSize';

export enum AppActionTypes {
	TOGGLE_PROJECT = 'LOGIN_FAILED',
	SET_VIEWPORT = 'SET_VIEWPORT',
}

// tslint:disable
export const AppAction = {
	toggleProject: (enabled: boolean) => action(AppActionTypes.TOGGLE_PROJECT, enabled),
	setViewport: (viewport: ViewSize) => action(AppActionTypes.SET_VIEWPORT, { viewport }),
};

export type AppAction = ActionsUnion<typeof AppAction>;
