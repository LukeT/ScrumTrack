import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../../../state';
import { IUser } from '../../../../state/auth';
import * as styles from './Team.scss';
import TeamMember from './TeamMember';

export interface ITeamProps {
	users: IUser[];
}

class Team extends React.PureComponent<ITeamProps> {
	public render(): JSX.Element {
		return (
			<div className={`layout-column layout-wrap ${styles.teamBar}`}>
				{this.props.users.map((user: IUser) => <TeamMember key={user.id} user={user} />)}
			</div>
		);
	}
}

function mapStateToProps(state: IState): ITeamProps {
	return {
		users: state.user.users,
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(Team);
