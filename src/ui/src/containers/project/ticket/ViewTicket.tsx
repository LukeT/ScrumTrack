import { Button, Spinner, Tab, Tabs } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { ProjectAction } from '../../../actions/project';
import { IState } from '../../../state';
import { ITicket } from '../../../util/models/Issue';
import { IProject } from '../../../util/models/Project';
import Comments from './comments/Comments';
import * as styles from './CreateTicket.scss';
import History from './history/History';
import { Status } from '../../../components/status/Status';
import User from '../../common/layout/User';
import { Category } from '../../../components/status/Category';

export interface ICreateTicketOwnProps {
	match: {
		params: {
			ticketId: string;
		};
	};
}

export interface ICreateTicketProps {
	project: IProject;
	ticket: ITicket;
	fetching: boolean;
}

export interface ICreateTicketDispatchProps {
	selectTicket(projectId: string, id: string): void;
}

export enum ITicketTabs {
	COMMENTS = 'comments',
	HISTORY = 'history',
}

export interface ICreateTicketState {
	title: string;
	body: string;
	tab: ITicketTabs;
}

export type CreateTicketProps = ICreateTicketDispatchProps & ICreateTicketProps & ICreateTicketOwnProps;

class Ticket extends React.Component<CreateTicketProps, ICreateTicketState> {
	public validation: yup.ObjectSchema<{}> = yup.object().shape({
		title: yup.string().required().min(2).max(64),
	});

	constructor(props: CreateTicketProps) {
		super(props);

		this.state = { title: '', body: '', tab: ITicketTabs.COMMENTS };
	}

	public componentWillMount(): void {
		this.props.selectTicket(this.props.project.shortcode, this.props.match.params.ticketId);
	}

	public componentWillReceiveProps(old: CreateTicketProps): void {
		if (
			old.match.params.ticketId !== this.props.match.params.ticketId
		) {
			this.setState({ tab: ITicketTabs.COMMENTS });
			this.props.selectTicket(this.props.project.shortcode, old.match.params.ticketId);
		}
	}

	public render(): JSX.Element {
		if (this.props.fetching && !this.props.ticket) {
			return <Spinner />;
		}

		const { ticket } = this.props;

		const assignee: JSX.Element = this.props.ticket.assigneeId ? (
			<div className='layout-row layout-align-start-center' style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', paddingLeft: 15 }}>
				Assignee: &nbsp; <User userId={this.props.ticket.assigneeId} />
			</div>
		) : null;


		return (
			<div className={styles.ticket}>
				<div className={styles.ticket__container}>
					<div className='layout-row layout-align-between-center'>
						<h5> {ticket.id}: {ticket.title} </h5>
						<Link to={`/${this.props.project.shortcode}/backlog/${this.props.ticket.id.split('-')[1]}/edit`}>
							<Button round raised icon='edit'></Button>
						</Link>
					</div>

					<div className='layout-row layout-wrap layout-align-start-center'>
						<div>
							<Status status={this.props.ticket.status} />
						</div>

						<div>
							{this.props.ticket.category && <Category category={this.props.ticket.category} />}
						</div>

						<div className='layout-row layout-align-start-center' style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', paddingLeft: 15 }}>
							Weight: <div className={styles.weight}>{this.props.ticket.weight}</div>
						</div>

						<div className='layout-row layout-align-start-center' style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', paddingLeft: 15 }}>
							Creator: &nbsp; <User userId={this.props.ticket.creatorId} />
						</div>

						{assignee}
					</div>

					<hr style={{ opacity: 0.05 }} />

					<div style={{ color: '#FFF', padding: '15px 5px' }}>
						<div dangerouslySetInnerHTML={{ __html: ticket.body }}></div> { /* tslint:disable-line */}
					</div>

					<hr style={{ opacity: 0.05 }} />

					<Tabs onChange={this.setTab}>
						<Tab value={ITicketTabs.COMMENTS}> Comments </Tab>
						<Tab value={ITicketTabs.HISTORY}> History </Tab>
					</Tabs>

					{this.state.tab === ITicketTabs.COMMENTS && <Comments />}
					{this.state.tab === ITicketTabs.HISTORY && <History />}
				</div>
			</div>
		);
	}

	private readonly setTab: (tab: ITicketTabs) => void = (tab: ITicketTabs) => {
		if (!tab) {
			return;
		}

		this.setState({ tab });
	}
}

function mapStateToProps(state: IState): ICreateTicketProps {
	return {
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		fetching: state.project.fetchingTicket,
		ticket: state.project.activeTicket ? state.project.entities.tickets[state.project.activeTicket] : null,
	};
}

function mapDispatchToProps(dispatch: Dispatch): ICreateTicketDispatchProps {
	return {
		selectTicket(projectId: string, id: string): void {
			dispatch(ProjectAction.selectTicket(projectId, id));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ticket) as any);
