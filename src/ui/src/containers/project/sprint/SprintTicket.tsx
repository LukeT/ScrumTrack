import * as React from 'react';
import { Link } from 'react-router-dom';
import { Status } from '../../../components/status/Status';
import { ITicket } from '../../../util/models/Issue';
import User from '../../common/layout/User';
import * as styles from './SprintTicket.scss';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Category } from '../../../components/status/Category';


export class SprintTicket extends React.PureComponent<{ project: string; editable: boolean; id: number; ticket: ITicket; index: number }> {
	public render(): JSX.Element {
		return this.wrap(
			<div className={styles.sprintTicket}>
				<div>
					<Link to={`/${this.props.ticket.id.split('-')[0]}/backlog/${this.props.ticket.id.split('-')[1]}`}>
						<strong style={{ color: '#FFF' }}>{this.props.ticket.id}:</strong>
					</Link> {this.props.ticket.title}
				</div>
				<div style={{ marginTop: 10 }} className='layout-row layout-align-center-center'>
					{this.props.ticket.assigneeId && <User userId={this.props.ticket.assigneeId} />}
					<span className='flex' />
					{this.props.ticket.category && <Category category={this.props.ticket.category} />}
					<Status status={this.props.ticket.status} />
				</div>
			</div>,
		);
	}

	private wrap(el: JSX.Element): JSX.Element {
		const elClasses: string = `${styles.sprintTicketContainer} flex-20 flex-100-xs flex-50-sm flex-33-md flex-20-lg`;

		if (this.props.editable) {
			return <div className={elClasses}> {el} </div>;
		}

		return (
			<Draggable
				key={this.props.id}
				draggableId={`ticket-${this.props.id}`}
				index={this.props.index}>
				{(provided: DraggableProvided): JSX.Element => (
					<div className={elClasses} ref={provided.innerRef} {...provided.draggableProps} { ...provided.dragHandleProps}>
						{el}
						{provided.placeholder}
					</div>
				)}
			</Draggable>
		);
	}
}
