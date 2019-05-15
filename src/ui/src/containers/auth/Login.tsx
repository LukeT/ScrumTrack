import { Button, Form, Input, Popup } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { AuthAction } from '../../actions/auth';
import { IState } from '../../state';

export interface ILoginProps {
	loading: boolean;
}

export interface ILoginState {
	username: string;
	password: string;
}

export interface ILoginDispatchProps {
	login(username: string, password: string): void;
}

export type LoginProps = ILoginProps & ILoginDispatchProps;

class Login extends React.PureComponent<LoginProps, ILoginState> {
	private validation: yup.ObjectSchema<{}> = yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required(),
	});

	private updateUsername: (val: string) => void;
	private updatePassword: (val: string) => void;

	constructor(props: LoginProps) {
		super(props);

		this.updateUsername = this.setValue.bind(this, 'username');
		this.updatePassword = this.setValue.bind(this, 'password');

		this.state = { username: '', password: ''};
	}

	public setValue = (key: keyof ILoginState, value: string): void => {
		this.setState({ [key]: value } as any);
	}

	public submit = (): void => {
		this.props.login(this.state.username, this.state.password);
	}

	public render(): JSX.Element {
		return (
			<Popup title='Login' tag='Contact an admin to create an account'>
				<div style={{ width: '100%' }}>
					<Form validation={this.validation} onSubmit={this.submit}>
						<div className='layout-column' >
							<Input name='username' title='Username' value={this.state.username} onChange={this.updateUsername} />
							<Input name='password' title='Password' value={this.state.password} onChange={this.updatePassword} type='password'/>

							<br />

							<div className='layout-row layout-align-between-center'>
								<Link to='/forgot'><Button> Forgot Password? </Button></Link>
								<Button type='submit' raised colour='accent'> Login </Button>
							</div>
						</div>
					</Form>
				</div>
			</Popup>
		);
	}
}

function mapStateToProps(state: IState): ILoginProps {
	return {
		loading: state.auth.loading.login,
	};
}

function mapDispatchToProps(dispatch: Dispatch): ILoginDispatchProps {
	return {
		login(username: string, password: string): void {
			dispatch(AuthAction.loginRequest({ username, password }));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Login);
