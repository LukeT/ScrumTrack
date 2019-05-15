import { Avatar, Button, Tooltip } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { UserAction } from '../../../actions/user';
import { IState } from '../../../state';
import { IUser } from '../../../state/auth';
import Dialog from './Dialog';
import * as styles from './User.scss';

export interface IUserProps {
	saving: boolean;
}

export interface IUserOwnProps {
	user: IUser;
}

export interface IUserDispatchProps {
	deleteUser(user: number): void;
}

export interface IUserState {
	open: boolean;
}

export type UserProps = IUserOwnProps & IUserProps & IUserDispatchProps;

class AdminUser extends React.PureComponent<UserProps, IUserState> {
	constructor(props: UserProps) {
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

	public deleteUser = (): void => {
		this.props.deleteUser(this.props.user.id);
	}

	public render(): JSX.Element {
		const isMe: boolean = this.props.user.id === 1;

		return (
			<div className={`${styles.card} layout-row layout-column-xs layout-align-start-center layout-align-center-center-xs`}>
				<Dialog show={this.state.open} user={this.props.user} onClose={this.closeDialog} />
				<Avatar data={this.props.user} size={35} />

				<div className='layout-column layout-align-start-start flex-25 flex-100-xs'>
					<strong className='hide-mobile'>Username</strong>
					<h5> {this.props.user.username} {isMe ? '(you)' : ''}</h5>
				</div>

				<div className='layout-column layout-align-start-start flex-30 flex-100-xs'>
					<strong className='hide-mobile'>Name</strong>
					<h5> {this.props.user.firstName} {this.props.user.lastName} </h5>
				</div>

				<div className='layout-column layout-align-start-start flex-15 flex-100-xs'>
					<strong className='hide-mobile'>Email</strong>
					<h5> {this.props.user.email}</h5>
				</div>

				<span className='flex' />

				<Button round raised icon='edit' onClick={this.openDialog} />

				{this.getEditButton(isMe)}
			</div>
		);
	}

	private getEditButton(disabled: boolean): JSX.Element {
		if (!disabled) {
			return <Button onClick={this.deleteUser} disabled={this.props.saving || disabled} round raised colour='danger' icon='delete' />;
		}

		return (
			<Tooltip message={'You can\'t delete yourself'}>
				<div style={{ display: 'block', padding: 0 }}>
					<Button onClick={this.deleteUser} disabled={this.props.saving || disabled} round raised colour='danger' icon='delete' />
				</div>
			</Tooltip>
		);
	}
}

function mapStateToProps(state: IState, props: IUserOwnProps): IUserProps {
	return {
		saving: props.user ? state.user.saving[props.user.id] : state.user.saving.create,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IUserDispatchProps {
	return {
		deleteUser(user: number): void {
			dispatch(UserAction.deleteUserRequest(user));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
