import { Avatar, Icon, Tooltip } from '@streamjar/ui-react';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../../../state';
import { IUser } from '../../../../state/auth';
import * as styles from './TeamMember.scss';

export interface ITeamMemberProps {
	onlineUsers: number[];
	votedUsers: number[];
}

export interface ITeamMemberOwnProps {
	user: IUser;
}

export type TeamMemberProps = ITeamMemberOwnProps & ITeamMemberProps;

export class TeamMember extends React.PureComponent<TeamMemberProps> {
	public render(): JSX.Element {
		const online: boolean = this.props.onlineUsers.includes(this.props.user.id);
		const voted: boolean = this.props.votedUsers.includes(this.props.user.id);

		const classes: string = classNames({
			'layout-row': true,
			'layout-align-center-center': true,
			[styles.teamMember]: true,
			[styles.teamMember__offline]: !online,
			[styles.teamMember__online]: online,
			[styles.teamMember__voted]: voted,
		});

		const onlineIcon: JSX.Element = <div className={styles.onlineIcon}></div>;
		const votedIcon: JSX.Element = (
			<div className={`${styles.teamMember__hasVoted} layout-row layout-align-center-center`}>
				<Icon icon='check' />
				<p>Voted</p>
			</div>
		);

		let tooltip: string = this.props.user.username;

		if (online) {
			tooltip += ' (online)';
		}

		return (
			<div className={classes}>
				<Tooltip message={tooltip}>
					<Avatar data={this.props.user} size={35} />

					{online && onlineIcon}
				</Tooltip>

				<p className={`${styles.teamMember__name} flex`}>{this.props.user.firstName} {this.props.user.lastName}</p>

				{voted && votedIcon}
			</div>
		);
	}
}

function mapStateToProps(state: IState): ITeamMemberProps {
	return {
		onlineUsers: state.planning.online,
		votedUsers: state.planning.voted,
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(TeamMember);
