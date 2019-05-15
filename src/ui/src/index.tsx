import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AppAction } from './actions/app';
import Root from './containers/Root';
import { store } from './store';
import { calculateSize, ViewSize } from './util/viewport/ViewSize';

require('./app.global.scss'); // tslint:disable-line
require('./quill.global.scss'); // tslint:disable-line

// Handle global resize event
fromEvent(window, 'resize')
	.pipe(
		debounceTime(200),
		map<any, ViewSize>(() => calculateSize(window.innerWidth)),
		distinctUntilChanged(),
	).subscribe((view: ViewSize) => {
		store.dispatch(AppAction.setViewport(view));
	});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Root />
		</Router>
	</Provider>,
	document.getElementById('app'),
);
