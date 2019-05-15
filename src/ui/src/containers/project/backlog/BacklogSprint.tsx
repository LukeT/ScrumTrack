import { Button } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { ISprint } from '../../../util/models/Sprint';
import BacklogSection from './BacklogSection';
import * as styles from './BacklogSprint.scss';

export interface IBacklogSprintProps {
	projectId: string;
	isAdmin: boolean;
}

export interface IBacklogSprintDispatchProps {
	startSprint(projectId: string): void;
	stopSprint(projectId: string): void;
}

export interface IBacklogSprintOwnProps {
	sprint: ISprint;
}

export type BacklogSectionProps = IBacklogSprintOwnProps & IBacklogSprintDispatchProps & IBacklogSprintProps;

class BacklogSprint extends React.PureComponent<BacklogSectionProps> {
	public render(): JSX.Element {
		if (!this.props.sprint && this.props.isAdmin) {
			return (
				<div className={styles.backlogSprint}>
					<p> No sprint is currently being formed or running. </p>
				</div>
			);
		} else if (!this.props.sprint) {
			return <></>;
		}

		const endSprint: JSX.Element = (
			<Button type='button' raised={true} colour='danger' onClick={this.stopSprint}> End Sprint </Button>
		);

		const startSprint: JSX.Element = (
			<Button type='button' raised={true} colour='success' onClick={this.startSprint}> Start</Button>
		);

		return (
			<div className={styles.backlogSprint}>
				<div className='layout-row layout-align-between-center'>
					<h5 style={{ margin: 0 }}> {this.props.sprint.name} </h5>

					{this.props.isAdmin && !!this.props.sprint.endAt &&  endSprint}
					{this.props.isAdmin && !this.props.sprint.endAt && startSprint}
				</div>

				<BacklogSection filter='sprint' />
			</div>
		);
	}

	private stopSprint = (): void => this.props.stopSprint(this.props.projectId);
	private startSprint = (): void => this.props.startSprint(this.props.projectId);
}

function mapStateToProps(state: IState): IBacklogSprintProps {
	return {
		projectId: state.project.activeProject,
		isAdmin: state.auth.user.role === 'admin',
	};
}

function mapDispatchToProps(dispatch: Dispatch): IBacklogSprintDispatchProps {
	return {
		startSprint(projectId: string): void {
			dispatch(SprintAction.startSprint(projectId));
		},
		stopSprint(projectId: string): void {
			dispatch(SprintAction.stopSprint(projectId));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(BacklogSprint);
