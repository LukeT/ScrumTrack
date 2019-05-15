import { Button, Tooltip } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { ISprint, IWorkflowBaseRule, IWorkflowRule } from '../../../util/models/Sprint';
import * as styles from './SprintHeader.scss';
import { withRouter } from 'react-router';
import Standup from './standup/Standup';

export interface ISprintHeaderProps {
	editing: boolean;
	isAdmin: boolean;
	sprint: ISprint;
	projectId: string;
	workflow: IWorkflowRule[];
}

export interface ISprintHeaderDispatchProps {
	toggle(val: boolean): void;
	createRule(wf: IWorkflowBaseRule): void;
	endSprint(projectId: string): void
}

export type SprintHeaderProps = { history: string[] } & ISprintHeaderProps & ISprintHeaderDispatchProps;

class SprintHeader extends React.PureComponent<SprintHeaderProps, { showDialog: boolean}> {
	constructor(props: SprintHeaderProps) {
		super(props);

		this.state = { showDialog: false };
	}

	public render(): JSX.Element {
		const isEditing: string = this.props.editing ? 'check' : 'settings';

		return (
			<div className={`${styles.sprint} layout-row layout-align-center-center`}>
				<div className={styles.sprint__name}>
					<strong>Sprint: {this.props.sprint.name}</strong>  <small>(Ends {new Date(this.props.sprint.endAt * 1000).toUTCString()})</small>
				</div>

				<span className='flex'></span>

				{!this.props.editing && <Button icon='person' onClick={this.showDialog}> Standup </Button>}
				{!this.props.editing && this.props.isAdmin && <Tooltip message='End sprint'><Button onClick={this.endSprint} icon={'jar_flag-checkered'} colour='danger' round></Button></Tooltip>}
				{this.props.editing && <Button icon='add' onClick={this.createRule}> Add Column </Button>}
				{this.props.isAdmin && <Tooltip message='Edit Workflow'><Button onClick={this.toggleEditing} icon={isEditing} round></Button></Tooltip>}
				<Standup show={this.state.showDialog} onClose={this.hideDialog} />
			</div>
		);

	}

	private showDialog = () => this.setState({ showDialog: true });
	private hideDialog = () => this.setState({ showDialog: false });

	private readonly toggleEditing = (): void => this.props.toggle(!this.props.editing);

	private readonly createRule: () => void = (): void => {
		this.props.createRule({
			allow: [],
			maxItems: 0,
			order: this.props.workflow.length ? this.props.workflow[this.props.workflow.length - 1].order + 1 : 0,
			name: 'New Rule',
			status: 'in-progress',
		});
	}

	private readonly endSprint: () => void = (): void => {
		this.props.endSprint(this.props.projectId);
		this.props.history.push(`/${this.props.projectId}/retrospectives/${this.props.sprint.id}`);
	}
}

function mapStateToProps(state: IState): ISprintHeaderProps {
	return {
		isAdmin: state.auth.user.role === 'admin',
		editing: state.sprint.edit,
		sprint: state.sprint.currentSprint,
		workflow: state.sprint.workflow,
		projectId: state.project.activeProject,
	};
}

function mapDispatchToProps(dispatch: Dispatch): ISprintHeaderDispatchProps {
	return {
		toggle(val: boolean): void {
			dispatch(SprintAction.toggleEdit(val));
		},
		createRule(wf: IWorkflowBaseRule): void {
			dispatch(SprintAction.createWorkflow(wf));
		},
		endSprint(projectId: string): void {
			dispatch(SprintAction.stopSprint(projectId));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SprintHeader) as any);
