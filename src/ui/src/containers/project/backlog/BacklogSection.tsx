import * as React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../actions/project';
import { IState } from '../../../state';
import { ITicket } from '../../../util/models/Issue';
import BacklogTicket from './BacklogTicket';

export interface IBacklogSectionProps {
	tickets: ITicket[];
	projectId: string;
}

export interface IBacklogSectionDispatchProps {
	fetch(project: string): void;
}

export interface IBacklogSectionOwnProps {
	filter: string;
}

export type BacklogSectionProps = IBacklogSectionOwnProps & IBacklogSectionDispatchProps & IBacklogSectionProps;

class BacklogSection extends React.PureComponent<BacklogSectionProps> {
	public componentWillMount(): void {
		this.props.fetch(this.props.projectId);
	}

	public render(): JSX.Element {
		const isDropdownDisabled: boolean = this.props.filter === 'pending';
		const noTickets: JSX.Element = <p style={{ opacity: 0.2, paddingTop: 5 }}> No tickets { this.props.filter === 'sprint' && ' are in this sprint.' } </p>;

		return (
			<Droppable droppableId={this.props.filter} isDropDisabled={isDropdownDisabled}>
				{(provided: DroppableProvided): JSX.Element => (
					<div ref={provided.innerRef}>
						{!this.props.tickets.length && noTickets}
						{this.props.tickets.map((ticket: ITicket, idx: number) => <BacklogTicket key={ticket.id} index={idx} id={ticket.id} />)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}
}

function mapStateToProps(state: IState, props: IBacklogSectionOwnProps): IBacklogSectionProps {
	return {
		projectId: state.project.activeProject,
		tickets: (state.project.tickets[props.filter] || []).map((i: number) => state.project.entities.tickets[i]),
	};
}

function mapDispatchToProps(dispatch: Dispatch, props: IBacklogSectionOwnProps): IBacklogSectionDispatchProps {
	return {
		fetch(project: string): void {
			dispatch(ProjectAction.fetchTicketsRequest(project, props.filter));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(BacklogSection);
