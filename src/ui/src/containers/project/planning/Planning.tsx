import { Button, Tooltip } from '@streamjar/ui-react';
import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PlanningAction } from '../../../actions/planning';
import { IState } from '../../../state';
import { VIEW_SIZES } from '../../../util/viewport/ViewSize';
import * as styles from './Planning.scss';
import PlanningTimeRemaining from './PlanningTimeRemaining';
import Team from './team/Team';
import TicketsPreview from './tickets-preview/TicketsPreview';
import Vote from './vote/Vote';
import ActiveTicket from './active-ticket/ActiveTicket';
import SessionControl from './session-control/SessionControl';
import { IResults } from '../../../realtime/realtime';
import { Results } from './results/Results';

export interface IPlanningProps {
	projectId: string;
	isMobile: boolean;
	isLeader: boolean;
	canVote: boolean;
	result: IResults;
}

export interface IPlanningDispatchProps {
	leave(projectId: string): void;
}

export interface IPlanningState {
	showNavigation: boolean;
}

export type PlanningProps = IPlanningDispatchProps & IPlanningProps;

class Planning extends React.PureComponent<PlanningProps, IPlanningState> {
	constructor(props: PlanningProps) {
		super(props);

		this.state = { showNavigation: false };
	}

	public render(): JSX.Element {
		const { canVote, result } = this.props;
		const widthClass: string = `${this.props.isMobile ? 'flex-100' : 'flex-75 flex-50-sm'} layout-column`;
		const renderPanel = !this.props.isMobile || this.state.showNavigation;

		return (
			<div className={`${styles.planningOverlay} layout-column`}>
				<div className={`${styles.planningInner} layout-row`}>
					<div className={widthClass}>
						<div className='layout-row layout-align-center-center'>
							<h4 className='flex'> Ticket Estimation </h4>

							{this.props.isMobile && <h5> <PlanningTimeRemaining /> </h5>}
							<Button raised round icon='close' colour='accent' onClick={this.leave}></Button>
							{this.props.isMobile && <Button raised round icon='chevron_left' colour='accent' onClick={this.toggleSidebar}></Button>}
						</div>

						<div style={{ overflow: 'scroll' }} className='layout-column flex'>
							{canVote && <Vote />}
							{!canVote && <Results results={result} />}
							<ActiveTicket />
						</div>
					</div>

					{renderPanel && this.sidebar()}
				</div>
			</div>
		);
	}

	private sidebar(): JSX.Element {
		const classes: string = classNames({
			'flex-25': !this.props.isMobile,
			'flex-50-sm': !this.props.isMobile,
			[styles.mobileSidebar]: this.props.isMobile,
		});

		const nav: JSX.Element = (
			<div className='layout-row layout-align-between-center'>
				<Tooltip message='Leave Session'>
					<Button round icon='close' colour='danger' onClick={this.leave}></Button>
				</Tooltip>

				<Tooltip message='Hide Sidebar'>
					<Button round icon='chevron_right' colour='accent' onClick={this.toggleSidebar}></Button>
				</Tooltip>
			</div>
		);

		return (
			<div className={classes} style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
				{this.props.isMobile && nav}

				<div style={{ padding: 15, textAlign: 'center' }}>
					<h4> <PlanningTimeRemaining /> </h4>
					<p style={{ textTransform: 'uppercase', opacity: 0.5, fontWeight: 'bold', fontSize: 11 }}> time remaining</p>
				</div>

				<div style={{ padding: 15, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
					<TicketsPreview />
				</div>

				<div style={{ padding: 15, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
					<h5> Team Members: </h5>

					<Team />
				</div>

				{this.props.isLeader && this.getLeaderControls()}
			</div>
		 );
	}

	private getLeaderControls(): JSX.Element {
		return (
			<div style={{ padding: 15, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
				<h5> Team Leader: </h5>

				<SessionControl />
			</div>
		);
	}

	private readonly leave = (): void => this.props.leave(this.props.projectId);
	private readonly toggleSidebar = () => {
		this.setState(state => ({ showNavigation: !state.showNavigation}));
	}
}

function mapStateToProps(state: IState): IPlanningProps {
	return {
		projectId: state.project.activeProject,
		canVote: !state.planning.result,
		isLeader: state.planning.leader === state.auth.user.id,
		isMobile: state.app.viewport.lte(VIEW_SIZES.EXTRA_SMALL),
		result: state.planning.result,
	};
}

function mapPropsToDispatch(dispatch: Dispatch): IPlanningDispatchProps {
	return {
		leave(projectId: string): void {
			dispatch(PlanningAction.leaveSession(projectId));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(Planning);
