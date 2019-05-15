import { Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { AuthAction } from '../actions/auth';
import { IState } from '../state';
import { IAuthStatus } from '../state/auth';
import App from './app/App';
import { Auth } from './auth/Auth';

export interface IRootProps {
	state: IAuthStatus;
}

export interface IRootDispatchProps {
	check(): void;
}

export type RootProps = IRootProps & IRootDispatchProps;

class Root extends React.Component<RootProps> {
	public componentDidMount(): void {
		this.props.check();
	}

	public render(): JSX.Element {
		if (this.props.state === IAuthStatus.AUTHENTICATED) {
			return <App />;
		}

		if (this.props.state === IAuthStatus.PENDING) {
			return (
				<>
					<div style={{ textAlign: 'center', padding: 45 }}>
						<Spinner size={25} />
						<p style={{ opacity: 0.5 }}> Logging you in </p>
					</div>
				</>
			);
		}

		return <Auth />;
	}
}

function mapStateToProps(state: IState): IRootProps {
	return {
		state: state.auth.state.auth,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IRootDispatchProps {
	return {
		check(): void {
			dispatch(AuthAction.authCheck());
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root) as any);
