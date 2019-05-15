import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Forgot } from './Forgot';
import Login from './Login';
import { Reset } from './Reset';

export class Auth extends React.Component {
	public render(): JSX.Element {
		return (
			<Switch>
				<Route path='/reset/:id/:token' component={Reset} />
				<Route path='/forgot' exact component={Forgot} />
				<Route path='/' component={Login} />
			</Switch>
		);
	}
}
