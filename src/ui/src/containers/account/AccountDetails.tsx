import { Button, Form, Input, Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { AuthAction } from '../../actions/auth';
import { IState } from '../../state';
import { IUser } from '../../state/auth';

export interface IAccountDetailsProps {
	user: IUser;
	saving: boolean;
}

export interface IAccountDetailsDispatchProps {
	save(user: IUser): void;
}

export type AccountDetailsProps = IAccountDetailsProps & IAccountDetailsDispatchProps;

export interface IAccountDetailsState {
	user: IUser;
}

class AccountDetails extends React.PureComponent<AccountDetailsProps, IAccountDetailsState> {
	public validation: yup.ObjectSchema<{}> = yup.object().shape({
		username: yup.string().required().min(4).max(24),
		email: yup.string().required().email(),
		firstName: yup.string().required(),
		lastName: yup.string().required(),
	});

	private setUser: (val: string) => void;
	private setEmail: (val: string) => void;
	private setFirst: (val: string) => void;
	private setLast: (val: string) => void;

	constructor(props: AccountDetailsProps) {
		super(props);

		this.setUser = this.setField.bind(this, 'username');
		this.setEmail = this.setField.bind(this, 'email');
		this.setFirst = this.setField.bind(this, 'firstName');
		this.setLast = this.setField.bind(this, 'lastName');
	}

	public componentWillMount(): void {
		this.setState({ user: this.props.user });
	}

	public submit = (): void => {
		this.props.save(this.state.user);
	}

	public setField(key: string, value: string): void {
		this.setState((state: IAccountDetailsState) => {
			return { user: { ...state.user, [key]: value }};
		});
	}

	public render(): JSX.Element {
		return (
			<div className='card flex-50 flex-100-xs'>
				<div>
					<Form validation={this.validation} onSubmit={this.submit}>
						<h5>User Details</h5>

						<div className='layout-row'>
							<div className='flex-50'>
								<Input name='firstName' title='First Name' value={this.props.user.firstName} onChange={this.setFirst} />
							</div>

							<div className='flex-50'>
								<Input name='lastName' title='Last Name' value={this.props.user.lastName} onChange={this.setLast} />
							</div>
						</div>

						<Input name='username' title='Username' value={this.props.user.username} onChange={this.setUser} />
						<Input name='email' title='Email' value={this.props.user.email} onChange={this.setEmail} />

						<div className='layout-row'>
							<span className='flex'></span>
							{this.props.saving && <Spinner size={35} />}
							<Button type='submit' disabled={this.props.saving} raised> Save </Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

function mapPropsToState(state: IState): IAccountDetailsProps {
	return {
		user: state.auth.user,
		saving: state.auth.loading.saving,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IAccountDetailsDispatchProps {
	return {
		save(user: IUser): void {
			dispatch(AuthAction.updateCurrentRequest(user));
		},
	};
}

// tslint:disable-next-line
export default connect(mapPropsToState, mapDispatchToProps)(AccountDetails);
