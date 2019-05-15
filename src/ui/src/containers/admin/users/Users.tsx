import { Button, Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { UserAction } from '../../../actions/user';
import { IState } from '../../../state';
import { IUser } from '../../../state/auth';
import Dialog from './Dialog';
import User from './User';

export interface IAdminProps {
	loading: boolean;
	users: IUser[];
}

export interface IAdminDispatchProps {
	getAll(): void;
}

export type AdminDispatchProps = IAdminProps & IAdminDispatchProps;

export interface IAdminState {
	open: boolean;
}

class AdminUsers extends React.PureComponent<AdminDispatchProps, IAdminState> {
	constructor(props: AdminDispatchProps) {
		super(props);

		this.state = { open: false };
	}

	public openDialog = (): void => {
		this.setState({
			open: true,
		});
	}

	public closeDialog = (): void => {
		this.setState({
			open: false,
		});
	}

	public componentDidMount(): void {
		this.props.getAll();
	}

	public render(): JSX.Element {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<div style={{ padding: 25, paddingTop: 10 }}>
				<Dialog show={this.state.open} onClose={this.closeDialog} />

				<div className='layout-row layout-align-between-center'>
					<h2> Users ({this.props.users.length})</h2>
					<Button raised icon='add' onClick={this.openDialog}> Create </Button>
				</div>
				<br />

				{this.props.users.map((user: IUser) => <User key={user.id} user={user} />)}
			</div>
		);
	}
}

function mapStateToProps(state: IState): IAdminProps {
	return {
		loading: state.user.loading,
		users: state.user.users,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IAdminDispatchProps {
	return {
		getAll(): void {
			dispatch(UserAction.getUsersRequest());
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
