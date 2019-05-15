import { Button } from '@streamjar/ui-react';
import * as React from 'react';
import { DragDropContext, DragStart, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../actions/project';
import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { ISprint, IWorkflowBaseRule, IWorkflowRule } from '../../../util/models/Sprint';
import * as styles from './Sprint.scss';
import SprintColumn from './SprintColumn';
import SprintHeader from './SprintHeader';

// tslint:disable-next-line
const reorder = <T extends { order: number }>(list: T[], startIndex: number, endIndex: number): T[] => {
	const result: T[] = [...list];
	const [removed] = result.splice(startIndex, 1);

	result.splice(endIndex, 0, removed);

	if (typeof result[0] !== 'string') {
		result.forEach((item: T, idx: number) => { item.order = idx; });
	}

	return result;
};

type IFromTo = { [key: string]: [number, number] };

function cacheOrder<T extends { id: string | number; order: number }>(ft: IFromTo, list: T[], secondary = false): IFromTo {
	const itemIndex: number = secondary ? 1 : 0;

	list.forEach((i: T) => {
		if (!ft[i.id]) {
			ft[i.id] = [null, null];
		}

		ft[i.id][itemIndex] = i.order;
	});

	return ft;
}

function findChanged(ft: IFromTo): string[] {
	return Object.keys(ft)
		.map((id: string) => {
			if (ft[id][0] !== ft[id][1]) {
				return id;
			}

			return null;
		})
		.filter((i: string | null) => i !== null);
}

export interface ISprintProps {
	editing: boolean;
	workflow: IWorkflowRule[];
	isAdmin: boolean;
	projectId: string;
	sprint: ISprint;
	workflows: { [key: number]: string[] };
	match?: {
		params: {
			projectId: string;
		};
	};
}

export interface ISprintDispatchProps {
	toggleEdit(): void;
	loadWorkflow(): void;
	updateWorkflow(rules: IWorkflowRule[]): void;
	updateRule(rule: IWorkflowRule): void;
	setWorkflow(wf: { [key: number]: string[] }): void;
	getSprint(projectId: string): void;
	createRule(rule: IWorkflowBaseRule): void;
	moveInSprint(ticketId: string, workflowId: number, order: number): void;
	setStatus(ticketId: string, status: string): void;
}

export type SprintProps = ISprintDispatchProps & ISprintProps;

export interface ISprintState {
	sourceColumn: number;
}

class Sprint extends React.Component<SprintProps, ISprintState> {
	constructor(props: SprintProps) {
		super(props);

		this.state = { sourceColumn: null };
	}

	public componentWillMount(): void {
		this.props.loadWorkflow();
		this.props.getSprint(this.props.projectId);
	}

	public render(): JSX.Element {
		if (!this.props.sprint) {
			return <p> No sprint is currently active. </p>;
		}

		if (!this.props.sprint.endAt) {
			return <p> This sprint is not active. </p>;
		}

		return (
			<>
				{/* <Helmet>
					<title>Active Sprint | {this.props.match.params.projectId} | ScrumTrack</title>
				</Helmet> */}

				<SprintHeader />

				<DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
					{this.wrapBoard(
						<>
							{!this.props.workflow.length && <div style={{ textAlign: 'center', width: '100%', paddingTop: 45 }}>
								<h5> No workflow is configured. </h5>
								{!this.props.editing && <p> A workflow needs to be defined globally before you may continue. </p>}
								{this.props.editing && <p> No columns exist in this workflow. Click add column to get started. </p>}

								{ this.props.isAdmin && !this.props.editing && <Button raised icon='settings' onClick={this.props.toggleEdit}> Configure </Button>}
								{ this.props.isAdmin && this.props.editing && <Button icon='add' onClick={this.createRule} raised> Add Column </Button>}
							</div>}

							{...this.getColumns()}
						</>,
					)}
				</DragDropContext>
			</>
		);
	}

	private readonly getColumns = (): JSX.Element[] => {
		const columns: JSX.Element[] = [];
		const sourceColumn: IWorkflowRule = this.props.workflow.find((i: IWorkflowRule) => i.id === this.state.sourceColumn);

		this.props.workflow.forEach((column: IWorkflowRule) => {
			let isAllowed: boolean = sourceColumn ? (!sourceColumn.allow || sourceColumn.allow.includes(column.id)) : true;
			const active: boolean = column.id === this.state.sourceColumn;

			if (sourceColumn && sourceColumn.id === column.id) {
				isAllowed = true;
			}

			columns.push(
				<SprintColumn
					key={column.id}
					index={column.order}
					workflow={column}
					editable={this.props.editing}
					targetable={isAllowed}
					active={active}
				/>,
			);

		});

		return columns;
	}

	private wrapBoard(el: JSX.Element): JSX.Element {
		if (!this.props.editing) {
			return (
				<div className={`${styles.board} layout-row flex`}>
					{el}
				</div>
			);
		}

		return (
			<Droppable droppableId='sprint' type='COLUMN' direction='horizontal' ignoreContainerClipping={false} isCombineEnabled={false}>
				{(provided: DroppableProvided): JSX.Element => (
					<div className={`${styles.board} layout-row flex`} ref={provided.innerRef} {...provided.droppableProps}>
						{el}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}

	private readonly onDragStart = (initial: DragStart): void => {
		if (initial.source.droppableId.startsWith('wf')) {
			const id: number = +initial.source.droppableId.split('-')[1];

			this.setState({ sourceColumn: +id });
		}
	}

	private readonly onDragEnd = (drop: DropResult): void => {
		// Handle dropping outside of a valid area.
		if (!drop.destination) {
			this.setState({ sourceColumn: null });

			return;
		}

		const fromTo: IFromTo = {};

		// Column Drag
		if (drop.draggableId.startsWith('wf')) {
			// Starting location
			cacheOrder(fromTo, this.props.workflow);

			const workflow: IWorkflowRule[] = reorder([ ...this.props.workflow ], drop.source.index, drop.destination.index);

			// Cache new locations and diff.
			cacheOrder(fromTo, workflow, true);
			findChanged(fromTo).forEach((id: string) => {
				this.props.updateRule(workflow.find((i: IWorkflowRule) => i.id === +id));
			});

			// Sync the new state.
			this.props.updateWorkflow(workflow);
		}

		// Ticket Drag
		if (drop.draggableId.startsWith('ticket')) {
			const workflowId: number = +drop.destination.droppableId.split('-')[1];

			// Cache current order
			const destWorkflow: number = +drop.destination.droppableId.split('-')[1];
			let dest: string[] = [ ...this.props.workflows[destWorkflow]];
			cacheOrder(fromTo, this.props.workflows[destWorkflow].map((i: string, idx: number) => ({ id: i, order: idx })));

			// We're moving between workflows!
			if (drop.source.droppableId !== drop.destination.droppableId) {
				const sourceWorkflow: number = +drop.source.droppableId.split('-')[1];
				const item: string = this.props.workflows[sourceWorkflow][drop.source.index];

				dest.splice(drop.destination.index, 0, item);

				this.props.setWorkflow({
					[destWorkflow]: dest,
					[sourceWorkflow]: this.props.workflows[sourceWorkflow].filter((i: string) => i !== item),
				});

				this.props.setStatus(item, this.props.workflow.find(i => i.id === destWorkflow).status);
			} else {
				const wfid: number = +drop.source.droppableId.split('-')[1];
				dest = reorder(dest as any, drop.source.index, drop.destination.index) as any;

				this.props.setWorkflow({ [wfid]: dest });
			}

			// Cache new location
			cacheOrder(fromTo, dest.map((i: string, idx: number) => ({ id: i, order: idx })), true);

			findChanged(fromTo).forEach((id: string) => {
				this.props.moveInSprint(
					id,
					workflowId,
					dest.indexOf(id),
				);
			});
		}

		this.setState({ sourceColumn: null });
	}

	private readonly createRule: () => void = (): void => {
		this.props.createRule({
			allow: [],
			maxItems: 0,
			order: 0,
			name: 'New Rule',
			status: 'open',
		});
	}
}

function mapStateToProps(state: IState): ISprintProps {
	return {
		editing: state.sprint.edit,
		workflow: state.sprint.workflow,
		isAdmin: state.auth.user.role === 'admin',
		projectId: state.project.activeProject,
		sprint: state.sprint.currentSprint,
		workflows: state.project.workflow,
	};
}

function mapPropsToDispatch(dispatch: Dispatch): ISprintDispatchProps {
	return {
		toggleEdit(): void {
			dispatch(SprintAction.toggleEdit(true));
		},
		loadWorkflow(): void {
			dispatch(SprintAction.getWorkflow());
		},
		updateWorkflow(rules: IWorkflowRule[]): void {
			dispatch(SprintAction.setWorkflow(rules));
		},
		createRule(rule: IWorkflowBaseRule): void {
			dispatch(SprintAction.createWorkflow(rule));
		},
		updateRule(rule: IWorkflowRule): void {
			dispatch(SprintAction.updateWorkflow(rule));
		},
		getSprint(projectId: string): void {
			dispatch(SprintAction.getCurrentSprint(projectId));
		},
		setWorkflow(wf: { [key: number]: string[] }): void {
			dispatch(SprintAction.setWorkflowItems(wf));
		},
		moveInSprint(ticketId: string, workflowId: number, order: number): void {
			dispatch(ProjectAction.moveTicketSprint(ticketId, workflowId, order));
		},
		setStatus(ticketId: string, status: string): void {
			dispatch(ProjectAction.setTicketStatus(ticketId, status));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(Sprint);
