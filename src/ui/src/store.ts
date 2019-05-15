import { applyMiddleware, createStore } from 'redux';

import { epics, rootEpics } from './epics';
import { root } from './reducers';

// tslint:disable-next-line
export const store = createStore(root, applyMiddleware(epics, () => next => action => next({ ...action })));
epics.run(rootEpics);
