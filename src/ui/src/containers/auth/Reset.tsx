import { Button, Form, Input, Popup, Spinner, toasts } from '@streamjar/ui-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { getApi } from '../../util/helpers';
import { Auth } from '../../util/models/Auth';

export interface IResetProps {
	history: string[];
	match: {
		params: {
			id: string;
			token: string;
		};
	};
}

export interface IResetState {
	password: string;
	loading: boolean;
}

export class Reset extends React.PureComponent<IResetProps, IResetState> {
	private readonly validation: yup.ObjectSchema<{}> = yup.object().shape({
		password: yup.string().required(),
	});

	constructor(props: IResetProps) {
		super(props);

		this.state = { password: '', loading: false  };
	}

	public submit = (): void => {
		this.setState({ loading: true });

		getApi(Auth).reset({
			id: this.props.match.params.id,
			token: this.props.match.params.token,
			password: this.state.password,
		}).subscribe(() => {
			toasts.success('Your password has been updated! You may now login.');
			this.props.history.push(`/login`);
		},           (err: Error) => {
			toasts.error(err.message, 5000);
			this.setState({ loading: false, password: ''});
		});
	}

	public updatePassword = (value: string): void => {
		this.setState({ password: value });
	}

	public render(): JSX.Element {
		return (
			<Popup title='Reset Password' tag='Please pick a new password'>
				<div style={{ width: '100%' }}>
					{this.getForm()}
				</div>
			</Popup>
		);
	}

	public getForm(): JSX.Element {
		return (
			<Form validation={this.validation} onSubmit={this.submit}>
				<div className='layout-column' >
					<Input name='password' title='New Password' value={this.state.password} onChange={this.updatePassword} />

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

}
