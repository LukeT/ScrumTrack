import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { epics as authEpics } from './auth';
import { epics as planningEpics } from './planning';
import { epics as projectEpics } from './project';
import { epics as sprintEpics } from './sprint';
import { epics as userEpics } from './user';

export const rootEpics: any = combineEpics(
	...authEpics,
	...userEpics,
	...projectEpics,
	...sprintEpics,
	...planningEpics,
);

// tslint:disable-next-line
export const epics = createEpicMiddleware();
