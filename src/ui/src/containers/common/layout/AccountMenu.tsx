import { Avatar, Button, Menu } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import { AuthAction } from '../../../actions/auth';
import { IState } from '../../../state';
import { IUser } from '../../../state/auth';
import * as styles from './AccountMenu.scss';

export interface IAccountMenuProps {
	user: IUser;
	admin: boolean;
}

export interface IAccountMenuDispatchProps {
	logout(): void;
}

export interface IAccountMenuState {
	anchor: HTMLButtonElement | null;
}

export type AccountMenuProps = IAccountMenuProps & IAccountMenuDispatchProps;

class AccountMenu extends React.PureComponent<AccountMenuProps, IAccountMenuState> {
	constructor(props: AccountMenuProps) {
		super(props);

		this.state = { anchor:  null };
	}

	public onClick = (e?: React.MouseEvent<HTMLButtonElement> | MouseEvent): void => {
		if (e) {

			const target: HTMLButtonElement = e.currentTarget as any;

			this.setState((state: IAccountMenuState) => ({
				anchor: state.anchor ? null : target,
			}));
		} else {
			this.setState({
				anchor: null,
			});
		}
	}

	public logout = (): void => {
		setTimeout(() => {
			this.props.logout();
		},         100);
	}

	public render(): JSX.Element {
		return (
			<Button icon='arrow_drop_down' iconRight={true} onClick={this.onClick}>
				<div className='user-inner layout-row layout-align-center-center' style={{ padding: '5px 0px'}}>
					<Avatar size={35} data={this.props.user}></Avatar>
				</div>

				<Menu anchor={this.state.anchor} onClose={this.onClick} width={195}>
					<div className={styles.anchor}><Link to='/account'><Button> Account Settings </Button></Link></div>
					{ this.props.admin && <div className={styles.anchor}><Link to='/admin/users'><Button> Administration </Button></Link></div> }
					<hr className={styles.hr} />

					<p style={{ textAlign: 'center', fontSize: 11, opacity: 0.8, textTransform: 'uppercase' }}>
						<strong>{this.props.user.firstName} {this.props.user.lastName}</strong>
					</p>

					<Button onClick={this.logout}> Logout </Button>
				</Menu>
			</Button>
		);
	}
}

function mapStateToProps(state: IState): IAccountMenuProps {
	return {
		user: state.auth.user,
		admin: state.auth.user.role === 'admin',
	};
}

function mapDispatchToProps(dispatch: Dispatch): IAccountMenuDispatchProps {
	return {
		logout(): void {
			dispatch(AuthAction.logout());
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
