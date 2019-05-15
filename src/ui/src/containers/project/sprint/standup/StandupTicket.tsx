import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './StandupTicket.scss';
import { ITicket } from '../../../../util/models/Issue';
import { IWorkflowRule } from '../../../../util/models/Sprint';
import User from '../../../common/layout/User';
import { Status } from '../../../../components/status/Status';
import { Category } from '../../../../components/status/Category';


export class StandupTicket extends React.PureComponent<{ ticket: ITicket, source: IWorkflowRule }> {
	public render(): JSX.Element {
		return (
			<div className={styles.standupTicket}>
				<div>
					<Link to={`/${this.props.ticket.id.split('-')[0]}/backlog/${this.props.ticket.id.split('-')[1]}`}>
						<strong style={{ color: '#FFF' }}>{this.props.ticket.id}:</strong>
					</Link> {this.props.ticket.title}
				</div>

				{this.props.source && <div style={{ padding: '10px 0px' }}>
					Moved from <span style={{ padding: 5, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 4 }}>{this.props.source.name} </span>
				</div>}

				<div style={{ marginTop: 10 }} className='layout-row layout-align-center-center'>
					{this.props.ticket.assigneeId && <User userId={this.props.ticket.assigneeId} />}
					<span className='flex' />
					{this.props.ticket.category && <Category category={this.props.ticket.category} />}
					<Status status={this.props.ticket.status} />
				</div>
			</div>
		);
	}
}
