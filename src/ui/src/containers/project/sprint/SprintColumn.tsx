import * as classnames from 'classnames';
import * as React from 'react';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../actions/project';
import { IState } from '../../../state';
import { ITicket } from '../../../util/models/Issue';
import { IWorkflowRule } from '../../../util/models/Sprint';
import * as styles from './SprintColumn.scss';
import { SprintColumnHeader } from './SprintColumnHeader';
import SprintColumnSettings from './SprintColumnSettings';
import { SprintTicket } from './SprintTicket';

export interface ISprintColumnOwnProps {
	index: number;
	editable: boolean;
	targetable: boolean;
	active: boolean;
	workflow: IWorkflowRule;
}

export interface ISprintColumnProps {
	tickets: ITicket[];
	projectId: string;
}

export interface ISprintColumnDispatchProps {
	loadColumn(projectId: string, workflowId: number): void;
}

export type SprintColumnProps = ISprintColumnOwnProps & ISprintColumnProps & ISprintColumnDispatchProps;
class SprintColumn extends React.Component<SprintColumnProps> {

	public componentDidMount(): void {
		this.props.loadColumn(this.props.projectId, this.props.workflow.id);
	}

	public render(): JSX.Element {

		return this.wrappedColumn(
			<>
				{!this.props.tickets.length && <p style={{ textAlign: 'center', opacity: 0.5, paddingTop: 15 }}> No tickets are in this column </p>}

				{this.props.tickets.map((ticket: ITicket, id: number) => {
					return <SprintTicket key={id} editable={this.props.editable} index={id} project={this.props.projectId} id={+ticket.id.split('-')[1]} ticket={ticket} />;
				})}
			</>,
		);
	}

	private getColumn = (provider: DraggableProvided, el: JSX.Element): JSX.Element => {
		const ref: any = provider ? provider.innerRef : null;
		const extraProps: any = provider ? provider.draggableProps : {};

		let ticketWrapper: (elem: JSX.Element) => JSX.Element = (elem: JSX.Element): JSX.Element => (
			<div className={styles.columnContainer}>
				{elem}
			</div>
		);

		if (!this.props.editable) {
			ticketWrapper = (elem: JSX.Element): JSX.Element => this.wrapItems(elem);
		}

		const column: string = classnames(styles.sprintColumn, {
			[styles.sprintColumn__bad]: this.props.workflow.maxItems && this.props.workflow.maxItems <= this.props.tickets.length,
			[styles.sprintColumn__active]: this.props.active,
			[styles.sprintColumn__untargetable]: !this.props.targetable,
			[styles.sprintColumn__editing]: this.props.editable,
		});

		return (
			<div className={`${styles.sprintColumnContainer} flex-20 flex-100-xs flex-50-sm flex-33-md flex-20-lg`} ref={ref} {...extraProps}>
				<div className={column}>
					<SprintColumnHeader items={this.props.tickets.length} rule={this.props.workflow} provided={provider} />

					{ticketWrapper(el)}


					{this.props.editable && <SprintColumnSettings rule={this.props.workflow} />}
				</div>
			</div>
		);
	}

	private wrapItems = (items: JSX.Element): JSX.Element => {
		return (
			<Droppable
				isDropDisabled={!this.props.targetable}
				droppableId={`wf-${this.props.workflow.id}`}
				type='row'
				direction='vertical'
				ignoreContainerClipping={false}
				isCombineEnabled={false}>
				{(provided: DroppableProvided): JSX.Element => (
					<div className={styles.columnContainer} ref={provided.innerRef} {...provided.droppableProps}>
						{items}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}

	private wrappedColumn = (el: JSX.Element): JSX.Element => {
		if (!this.props.editable) {
			return this.getColumn(null, el);
		}

		return (
			<Draggable
				key={this.props.index}
				draggableId={`wf-${this.props.workflow.id}`}
				index={this.props.index}>
				{(provided: DraggableProvided): JSX.Element => this.getColumn(provided, el)}
			</Draggable>
		);
	}
}

function mapStateToProps(state: IState, props: ISprintColumnOwnProps): ISprintColumnProps {
	return {
		projectId: state.project.activeProject,
		tickets: (state.project.workflow[props.workflow.id] || []).map(i => state.project.entities.tickets[i]).filter(a => !!a),
	};
}

function mapPropsToDispatch(dispatch: Dispatch): ISprintColumnDispatchProps {
	return {
		loadColumn(projectId: string, workflowId: number): void {
			dispatch(ProjectAction.fetchTicketsByWorkflow(projectId, workflowId));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(SprintColumn);
