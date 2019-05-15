import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { AppAction } from '../../actions/app';
import * as styles from './Admin.scss';
import Users from './users/Users';

export interface IAdminDispatchProps {
	toggle(enabled: boolean): void;
}

class Admin extends React.Component<IAdminDispatchProps> {
	public redirect = (): JSX.Element => <Redirect to='/admin/users' />;

	public componentDidMount(): void {
		this.props.toggle(false);
	}

	public componentWillUnmount(): void {
		this.props.toggle(true);
	}

	public render(): JSX.Element {
		return (
			<>
				<Helmet>
					<title> Admin | ScrumTrack </title>
				</Helmet>

				<div className={styles.adminBanner}>
					<h5> Danger </h5>
					<p> You are in an admin elevated mode. Modifying settings here may perform potentially destructive actions! s</p>
				</div>

				<Switch>
					<Route path='/admin/users' component={Users} />
					<Route path='/admin' component={this.redirect} />
				</Switch>
			</>
		);
	}
}

function mapPropsToState(): {} {
	return {

	};
}

function mapDispatchToProps(dispatch: Dispatch): IAdminDispatchProps {
	return {
		toggle(enabled: boolean): void {
			dispatch(AppAction.toggleProject(enabled));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Admin) as any);
