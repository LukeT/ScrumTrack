import { Avatar } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../../state';
import { IUser } from '../../../state/auth';

import * as styles from './User.scss';
export interface IUserProps {
	user: IUser;
}

export interface IUserOwnProps {
	userId: number;
}

export type UserProps = IUserProps & IUserOwnProps;

class User extends React.PureComponent<UserProps> {
	public render(): JSX.Element {
		let avatar: any = { email: 'example@example.org' };

		if (this.props.user) {
			avatar = { avatar: this.props.user.avatar };
		}

		return (
			<div className='layout-row layout-align-start-center'>
				<div className={styles.avatar}>
					<Avatar data={avatar} size={20} />
				</div>
				<div className={styles.name}>
					{this.props.user ? this.props.user.firstName : 'Anonymous'}
				</div>
			</div>
		);
	}
}

function mapPropsToState(state: IState, props: IUserOwnProps): IUserProps {
	return {
		user: state.user.users.find((i: IUser) => i.id === props.userId),
	};
}

// tslint:disable-next-line
export default connect(mapPropsToState)(User);
