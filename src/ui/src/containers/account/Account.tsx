import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppAction } from '../../actions/app';
import AccountDetails from './AccountDetails';
import AccountPassword from './AccountPassword';

export interface IAccountProps {
	toggle(bool: boolean): void;
}

class Account extends React.PureComponent<IAccountProps> {

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
					<title> Account Settings | ScrumTrack </title>
				</Helmet>

				<h4 style={{ padding: '25px 20px 10px' }}> Account Settings </h4>

				<div className='layout-row layout-column-xs'>
					<AccountDetails />
					<AccountPassword />
				</div>
			</>
		);
	}
}

function mapPropsToState(): {} {
	return {

	};
}

function mapDispatchToProps(dispatch: Dispatch): IAccountProps {
	return {
		toggle(enabled: boolean): void {
			dispatch(AppAction.toggleProject(enabled));
		},
	};
}

// tslint:disable-next-line
export default connect(mapPropsToState, mapDispatchToProps)(Account);
