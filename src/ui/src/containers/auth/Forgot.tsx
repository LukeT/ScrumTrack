import { Button, Form, Icon, Input, Popup, Spinner, toasts } from '@streamjar/ui-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { getApi } from '../../util/helpers';
import { Auth } from '../../util/models/Auth';

export interface IForgotState {
	email: string;
	loading: boolean;
	reset: boolean;
}

export class Forgot extends React.PureComponent<{}, IForgotState> {
	private validation: yup.ObjectSchema<{}> = yup.object().shape({
		email: yup.string().email().required(),
	});

	constructor(props: {}) {
		super(props);

		this.state = { email: '', loading: false, reset: false  };
	}

	public submit = (): void => {
		this.setState({ loading: true });

		getApi(Auth).forgot(this.state.email).subscribe((resp: boolean) => {
			if (resp) {
				this.setState({ loading: false, reset: true });
			} else {
				toasts.error('Unable to find an account with that email');
				this.setState({ loading: false, reset: false });
			}
		},                                              (err: Error) => {
			toasts.error(err.message, 5000);
			this.setState({ loading: false });
		});
		//
	}

	public updateEmail = (value: string): void => {
		this.setState({ email: value });
	}

	public render(): JSX.Element {
		return (
			<Popup title='Forgot' tag='Request a password reset'>
				<div style={{ width: '100%' }}>
					{this.state.reset ? this.getMessage() : this.getForm()}
				</div>
			</Popup>
		);
	}

	public getForm(): JSX.Element {
		return (
			<Form validation={this.validation} onSubmit={this.submit}>
				<div className='layout-column' >
					<Input name='email' title='Email' value={this.state.email} onChange={this.updateEmail} />

					<br />

					<div className='layout-row layout-align-between-center'>
						<Link to='/'><Button> Go back </Button></Link>
						{this.state.loading && <Spinner size={25} />}
						<Button type='submit' raised colour='accent' disabled={this.state.loading}> Reset </Button>
					</div>
				</div>
			</Form>
		);
	}

	public getMessage(): JSX.Element {
		return (
			<div style={{ textAlign: 'center' }}>
				<div style={{ padding: '10px'}}><Icon icon='check' colour='#FFF' /></div>
				<p> We've sent you an email with a link to reset your password. You should receive it shortly. </p>
			</div>
		);
	}

}
