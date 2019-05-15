import {
	BaseDialog, Button, DialogContent, DialogFooter, DialogHeader, DialogStatus, Form, Input, Select, SelectItem,
} from '@streamjar/ui-react';
import { IDialogProps } from '@streamjar/ui-react/dist/lib/dialog/dialog'; // tslint:disable-line
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { UserAction } from '../../../actions/user';
import { IState } from '../../../state';
import { IUser } from '../../../state/auth';

export interface IDialogOwnProps {
	user?: IUser;
}

export interface IDialog2Props {
	saving: boolean;
}

export interface IDialogDispatchProps {
	createUser(app: IUser): void;
	updateUser(app: IUser): void;
}

export interface IUserState {
	username: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
}

export type DialogProps = IDialogOwnProps & IDialogDispatchProps & IDialog2Props & IDialogDispatchProps ;

class Dialog extends BaseDialog<DialogProps & IDialogProps, IUserState> {
	public validation: yup.ObjectSchema<{}> = yup.object().shape({
		username: yup.string().required().min(4).max(24),
		email: yup.string().required().email(),
		password: yup.string().required(),
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		role: yup.string().required(),
	});

	private setUser: (val: string) => void;
	private setEmail: (val: string) => void;
	private setPass: (val: string) => void;
	private setFirst: (val: string) => void;
	private setLast: (val: string) => void;
	private setRole: (val: string) => void;

	constructor(props: DialogProps & IDialogProps) {
		super(props);

		this.setUser = this.setField.bind(this, 'username');
		this.setEmail = this.setField.bind(this, 'email');
		this.setPass = this.setField.bind(this, 'password');
		this.setFirst = this.setField.bind(this, 'firstName');
		this.setLast = this.setField.bind(this, 'lastName');
		this.setRole = this.setField.bind(this, 'role');

		this.setupDialog({
			width: '500px',
			state: DialogStatus.LOADED,
		});
	}

	public componentWillReceiveProps(next: IDialog2Props): void {
		if (!next.saving && this.props.saving) {
			this.close();
		} else if (next.saving && !this.props.saving) {
			this.loading();
		}
	}

	public dialogDidOpen(): void {
		if (this.props.user) {
			this.setState({
				username: this.props.user.username,
				email: this.props.user.email,
				password: this.props.user.password,
				firstName: this.props.user.firstName,
				lastName: this.props.user.lastName,
				role: this.props.user.role,
			});
		}
	}

	public initialState(): IUserState {
		return { username: '', email: '', firstName: '', lastName: '', password: '', role: 'user' };
	}

	public renderDialog(): JSX.Element {
		return (
			<>
				<Form validation={this.validation} onSubmit={this.submit}>
					<DialogHeader> {this.props.user ? 'Update user' : 'Create new user'} </DialogHeader>
					<DialogContent>
						<div className='layout-row'>
							<div className='flex-50'>
								<Input placeholder='John' name='firstName' type='text' title='First Name' value={this.state.firstName} onChange={this.setFirst}/>
							</div>
							<div className='flex-50'>
								<Input placeholder='Doe' name='lastName' type='text' title='Last Name' value={this.state.lastName} onChange={this.setLast}/>
							</div>
						</div>

						<Input placeholder='Example' name='username' type='text' title='Username' value={this.state.username} onChange={this.setUser}/>
						<Input placeholder='example@example.org' name='email' type='email' title='Email' value={this.state.email} onChange={this.setEmail}/>
						{!this.props.user && <Input name='password' type='password' title='Password' value={this.state.password} onChange={this.setPass}/>}
						<Select title='Role' value={this.state.role} onChange={this.setRole}>
							<SelectItem name='User' value='user' />
							<SelectItem name='Admin' value='admin' />
						</Select>
					</DialogContent>

					<DialogFooter><Button type='submit' raised={true}>{this.props.user ? 'Save' : 'Create'}</Button></DialogFooter>
				</Form>
			</>
		);
	}

	private submit = (): void => {
		const data: IUser = {
			...(this.props.user || {}),
			avatar: this.props.user.avatar,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			role: this.state.role,
		};

		if (this.props.user && this.props.user.id) {
			this.props.updateUser(data);
		} else {
			this.props.createUser(data);
		}
	}

	private setField(name: keyof IUserState, value: string): void {
		this.setState({ [name]: value } as any);
	}
}

function mapStateToProps(state: IState, props: IDialogOwnProps): IDialog2Props {
	return {
		saving: props.user ? state.user.saving[props.user.id] : state.user.saving.create,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IDialogDispatchProps {
	return {
		createUser(user: IUser): void {
			dispatch(UserAction.createUserRequest(user));
		},
		updateUser(user: IUser): void {
			dispatch(UserAction.updateUserRequest(user));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
