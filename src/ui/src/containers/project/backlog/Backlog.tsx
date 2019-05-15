import { Button } from '@streamjar/ui-react';
import * as React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../actions/project';
import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { ISprint } from '../../../util/models/Sprint';
import CreateSprintDialog from '../sprint/create-sprint/CreateSprintDialog';
import CreateTicket from '../ticket/CreateTicket';
import EditTicket from '../ticket/EditTicket';
import ViewTicket from '../ticket/ViewTicket';
import * as styles from './Backlog.scss';
import BacklogSection from './BacklogSection';
import BacklogSprint from './BacklogSprint';

export interface IBacklogProps {
	backlog: {
		pending: string[];
		backlog: string[];
	};

	sprint: ISprint | null;
	isAdmin: boolean;
}

export interface IBacklogOwnProps {
	match: {
		params: {
			projectId: string;
		};
	};
}

export interface IBacklogDispatchProps {
	getSprint(projectId: string): void;
	updateIssues(group: string, issues: string[]): void;
	moveIssue(fromType: string, dest: string, sprint?: number): void;
}

export type BacklogProps = IBacklogProps & IBacklogOwnProps & IBacklogDispatchProps;

export interface IBacklogState {
	show: boolean;
}

class Backlog extends React.Component<BacklogProps, IBacklogState> {

	constructor(props: BacklogProps) {
		super(props);

		this.state = { show: false };
	}

	public componentDidMount(): void {
		if (!this.props.sprint) {
			this.props.getSprint(this.props.match.params.projectId);
		}
	}

	/**
	 * When an element is dragged
	 */
	public onDragEnd: (result: DropResult) => void = (result: DropResult) => {
		const fromItem: string = this.props.backlog[result.source.droppableId][result.source.index];
		let dest: string[];

		// If they're moved between two drop zones
		if (result.source.droppableId !== result.destination.droppableId) {
			const sourceUpdate: string[] = this.props.backlog[result.source.droppableId].filter((i: string) => i !== fromItem);
			const destUpdate: string[] = this.props.backlog[result.destination.droppableId];

			destUpdate.splice(result.destination.index, 0, fromItem);

			dest = destUpdate;
			this.props.updateIssues(result.source.droppableId, sourceUpdate);
			this.props.updateIssues(result.destination.droppableId, destUpdate);
		} else {
			// If it's moved within the same zone.
			const update: string[] = this.props.backlog[result.destination.droppableId];

			update.splice(result.destination.index, 0, update.splice(result.source.index, 1)[0]);
			dest = update;

			this.props.updateIssues(result.destination.droppableId, update);
		}

		const prevItem: string = dest[result.destination.index - 1];

		this.props.moveIssue(fromItem, prevItem, result.destination.droppableId === 'sprint' ? this.props.sprint.id : null);
	}

	public render(): JSX.Element {
		return (
			<div className='layout-row' style={{ height: '100%', overflow: 'hidden' }}>
				<Helmet>
					<title>Backlog | {this.props.match.params.projectId} | ScrumTrack</title>
				</Helmet>

				<div className='flex-50'>
					<div className={styles.backlog}>
						<div className={`${styles.backlog__header} layout-row layout-align-between-center`}>
							<h5 style={{ margin: 0 }}> Backlog:</h5>

							{ !this.props.sprint && this.props.isAdmin && <Button raised onClick={this.showDialog}> Create Sprint</Button>}

							<CreateSprintDialog
								show={this.state.show}
								onClose={this.hideDialog}>
							</CreateSprintDialog>
						</div>

						<DragDropContext onDragEnd={this.onDragEnd}>
							<BacklogSprint sprint={this.props.sprint} />

							<div className={styles.backlogSection}>
								<h5 style={{ margin: 0, marginBottom: 10 }}> Backlog: </h5>

								<BacklogSection filter='backlog'/>
							</div>

							<div className={`${styles.backlog__header} layout-row layout-align-between-center`}>
								<h5> Unprioritised:</h5>

								<Link to={`/${this.props.match.params.projectId}/backlog`}>
									<Button raised={true}> Create </Button>
								</Link>
							</div>

							<BacklogSection filter='pending'/>
						</DragDropContext>
					</div>
				</div>

				<div className='flex-50' style={{}}>
					<Switch>
						<Route path='/:projectId/backlog/:ticketId/edit' component={EditTicket} />
						<Route path='/:projectId/backlog/:ticketId' component={ViewTicket} />
						<Route path='/:projectId/backlog' component={CreateTicket} />
					</Switch>
				</div>
			</div>
		);
	}

	private hideDialog = (): void => this.setState({ show: false });
	private showDialog = (): void => this.setState({ show: true });
}

function mapStateToProps(state: IState): IBacklogProps {
	return {
		backlog: state.project.tickets,
		sprint: state.sprint.currentSprint,
		isAdmin: state.auth.user.role === 'admin',
	};
}

function mapDispatchToProps(dispatch: Dispatch): IBacklogDispatchProps {
	return {
		getSprint(projectId: string): void {
			dispatch(SprintAction.getCurrentSprint(projectId));
		},

		updateIssues(project: string, issues: string[]): void {
			dispatch(ProjectAction.updateTickets(project, issues));
		},

		moveIssue(issue: string, prev: string, sprint?: number): void {
			dispatch(ProjectAction.moveTicket(issue, prev, sprint));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Backlog) as any);
