import { Button, Form, Input } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { UserAction } from '../../actions/user';
import { IState } from '../../state';
import { IPasswordChange } from '../../util/models/User';

export interface IAccountPasswordProps {
	updated: boolean;
}

export interface IAccountPasswordDispatchProps {
	updatePassword(pass: IPasswordChange): void;
}

export interface IAccountPasswordState {
	password: string;
	newPassword: string;
	newPasswordRepeat: string;
}

export type AccountPasswordProps = IAccountPasswordProps & IAccountPasswordDispatchProps;

class AccountPassword extends React.PureComponent<AccountPasswordProps, IAccountPasswordState> {
	private validation: yup.ObjectSchema<{}> = yup.object().shape({
		password: yup.string().required(),
		newPassword: yup.string().required(),
		newPasswordRepeat: yup.string().required().test('matches', 'The passwords do not match', function() { // tslint:disable-line
			return this.parent.newPassword === this.parent.newPasswordRepeat;
		}),
	});

	constructor(props: AccountPasswordProps) {
		super(props);

		this.state = { password: '', newPassword: '', newPasswordRepeat: '' };
	}

	public componentWillReceiveProps(old: AccountPasswordProps): void {
		if (old.updated && !this.props.updated) {
			this.setState({
				newPassword: '',
				password: '',
				newPasswordRepeat: '',
			});
		}
	}

	public onSubmit = (): void => {
		this.props.updatePassword({
			password: this.state.password,
			newPassword: this.state.newPassword,
		});
	}

	public setPassword = (value: string): void => {
		this.setState({ password: value });
	}

	public setNewPassword = (value: string): void => {
		this.setState({ newPassword: value });
	}

	public setNewPasswordRepeat = (value: string): void => {
		this.setState({ newPasswordRepeat: value });
	}

	public render(): JSX.Element {
		return (
			<div className='card flex-50 flex-100-xs'>
				<div>
					<h5>Change Password</h5>
					<Form validation={this.validation} onSubmit={this.onSubmit}>
						<Input name='password' type='password' title='Current Password' value={this.state.password} onChange={this.setPassword} />
						<Input name='newPassword' type='password' title='New Password' value={this.state.newPassword} onChange={this.setNewPassword} />
						<Input name='newPasswordRepeat' type='password' title='New Password (Again)'
							value={this.state.newPasswordRepeat} onChange={this.setNewPasswordRepeat}  />

						<div className='layout-row'>
							<span className='flex'></span>
							<Button type='submit' raised> Save </Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

function mapPropsToState(state: IState): IAccountPasswordProps {
	return {
		updated: state.user.updatedPassword,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IAccountPasswordDispatchProps {
	return {
		updatePassword(pass: IPasswordChange): void {
			dispatch(UserAction.updatePasswordRequest(pass));
		},
	};
}

// tslint:disable-next-line
export default connect(mapPropsToState, mapDispatchToProps)(AccountPassword);
