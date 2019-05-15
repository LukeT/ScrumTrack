import { combineReducers } from 'redux';

import { IState } from '../state';
import { IActionWithPayload } from '../util/helpers';
import { AuthActionTypes } from './../actions/auth';
import { app as appReducer } from './app';
import { auth } from './auth';
import { planning } from './planning';
import { project } from './project';
import { sprint } from './sprint';
import { user } from './user';

export const app = combineReducers({ // tslint:disable-line
	auth,
	app: appReducer,
	user,
	project,
	sprint,
	planning,
});

export const root: (state: IState, action: IActionWithPayload<any, any>) => IState
	= (state: IState, action: IActionWithPayload<any, any>): IState => {
	let st: IState = state;

	// Clear all of the state on logout
	if (action.type === AuthActionTypes.LOGOUT) {
		st = undefined;
	}

	return app(st, action);
};
