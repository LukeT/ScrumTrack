import * as React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IState } from '../../../state';
import { ITicket } from '../../../util/models/Issue';
import { IProject } from '../../../util/models/Project';
import User from '../../common/layout/User';
import * as styles from './BacklogTicket.scss';
import { Category } from '../../../components/status/Category';

export interface IBacklogTicketOwnProps {
	id: number;
	index: number;
}

export interface IBacklogTicketProps {
	ticket: ITicket;
	project: IProject;
}

export type BacklogTicketProps = IBacklogTicketOwnProps & IBacklogTicketProps;

class BacklogTicket extends React.PureComponent<BacklogTicketProps> {
	public render(): JSX.Element {
		const { ticket } = this.props;

		const weight: JSX.Element = ticket.weight ? (
			<div className={`${styles.ticket__weighting}`}>
				{ticket.weight}
			</div>
		) : <></>;

		return (
			<Draggable
				key={ticket.id}
				draggableId={ticket.id}
				index={this.props.index}>
				{(provided: DraggableProvided): JSX.Element => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}>
						<Link to={`/${this.props.project ? this.props.project.shortcode : ''}/backlog/${(ticket.id).split('-')[1]}`}>
							<div className={`${styles.ticket} layout-row layout-align-center-center`}>
								<strong>{ticket.id}</strong>
								<div className='flex'> {ticket.title} </div>



								{ ticket.assigneeId && <User userId={ticket.assigneeId} />}
								{ticket.category && <Category category={ticket.category} />}
								{weight}
							</div>
						</Link>
					</div>
				)}
			</Draggable>
		);
	}
}

function mapStateToProps(state: IState, props: IBacklogTicketOwnProps): IBacklogTicketProps {
	return {
		ticket: state.project.entities.tickets[props.id],
		project: state.project.entities.projects[state.project.activeProject],
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(BacklogTicket);
