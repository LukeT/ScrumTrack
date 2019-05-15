import { modules } from './editor';
import { Button, Form, Input, Select, SelectItem, Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import ReactQuill from 'react-quill'; // tslint:disable-line
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { ProjectAction } from '../../../actions/project';
import { IState } from '../../../state';
import { IUser } from '../../../state/auth';
import { ITicket } from '../../../util/models/Issue';
import { IProject } from '../../../util/models/Project';
import * as styles from './CreateTicket.scss';

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
	user: IUser[];
	categories: string[];
}

export interface ICreateTicketDispatchProps {
	selectTicket(projectId: string, id: string): void;
	addCategory(item: string): void;
	update(projectId: string, id: string, body: { body: string; title: string; weight: number, category: string, assigneeId: number | null }): void;
}

export interface ICreateTicketState {
	title: string;
	weight: number;
	body: string;
	category: string;
	assignee: string;
}

export type CreateTicketProps = ICreateTicketDispatchProps & ICreateTicketProps & ICreateTicketOwnProps;

class Ticket extends React.Component<CreateTicketProps, ICreateTicketState> {
	public validation: yup.ObjectSchema<{}> = yup.object().shape({
		title: yup.string().required().min(2).max(64),
		weight: yup.number().required().min(0).max(256),
		search: yup.string(),
	});

	constructor(props: CreateTicketProps) {
		super(props);

		this.state = { title: '', body: '', weight: 0, assignee: null, category: null };
	}

	public componentWillMount(): void {
		this.props.selectTicket(this.props.project.shortcode, this.props.match.params.ticketId);
	}

	public componentWillReceiveProps(old: CreateTicketProps): void {
		if (
			old.match.params.ticketId !== this.props.match.params.ticketId
			) {
			this.props.selectTicket(this.props.project.shortcode, old.match.params.ticketId);
		}

		if ((this.props.ticket && old.ticket && this.props.ticket.id !== old.ticket.id) || (!this.props.ticket && old.ticket && old.ticket.id)) {
			this.setState({
				body: old.ticket.body,
				title: old.ticket.title,
				weight: old.ticket.weight || 0,
				assignee: old.ticket.assigneeId as any,
				category: old.ticket.category,
			});
		}
	}

	public updateTitle = (value: string): void => {
		this.setState({ title: value });
	}

	public updateWeight = (weight: string): void => {
		this.setState({ weight: +weight });
	}
	public updateBody = (value: string): void => {
		this.setState({ body: value });
	}

	public updateAssn = (value: string): void => {
		this.setState({ assignee: value });
	}

	public updateCategory = (value: string): void => {
		this.setState({ category: value });
	}

	public submit = (): void => {
		this.props.update(this.props.project.shortcode, this.props.ticket.id.split('-')[1], {
			title: this.state.title,
			body: this.state.body,
			weight: this.state.weight,
			assigneeId: this.state.assignee as any,
			category: this.state.category,
		});
	}

	public render(): JSX.Element {
		if (this.props.fetching && !this.props.ticket) {
			return <Spinner />;
		}

		const { ticket } = this.props;

		const isDisabled: boolean = this.state.title.length === 0 || this.state.body.length === 0;

		return (
			<div className={styles.ticket}>
				<div className={styles.ticket__container}>
					<div className='layout-row layout-align-between-center'>
						<h5> {ticket.id}: {ticket.title} </h5>
						<Link to={`/${this.props.project.shortcode}/backlog/${this.props.ticket.id.split('-')[1]}`}>
							<Button round raised icon='close'></Button>
						</Link>
					</div>

					<hr style={{ opacity: 0.05 }} />

					<Form onSubmit={this.submit} validation={this.validation}>
						<div className='layout-row'>
							<div className='flex'>
								<Input name='title' minLength={2} title='Title' value={this.state.title} onChange={this.updateTitle} />
							</div>
							<div>
								{this.props.ticket.location !== 'pending' && <Input name='weight' type='number' title='Weight' value={`${this.state.weight}`} onChange={this.updateWeight} />}
							</div>
						</div>

						<Select title="Category" search searchAsOption={true} onAddItem={this.add} value={this.state.category} onChange={this.updateCategory}>
							{this.props.categories.map(i => <SelectItem key={i} name={i} value={i} /> )}
						</Select>

						<Select title='Assignee' onChange={this.updateAssn} value={this.state.assignee}>
							<SelectItem name='Unassigned' value={null} />
							{this.props.user.map(i => <SelectItem key={i.id} name={`${i.firstName} ${i.lastName}`} value={i.id} />)}
						</Select>

						<ReactQuill modules={modules} value={this.state.body} onChange={this.updateBody} />

						<div className='layout-row layout-align-end-center'>
							<Button
								type='submit'
								raised={true}
								disabled={isDisabled}>
								Save
							</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}

	private add = (item: string): void => {
		this.props.addCategory(item);

		this.setState({ category: item });
	}
}

function mapStateToProps(state: IState): ICreateTicketProps {
	return {
		user: state.user.users,
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		fetching: state.project.fetchingTicket,
		ticket: state.project.activeTicket ? state.project.entities.tickets[state.project.activeTicket] : null,
		categories: state.project.categories,
	};
}

function mapDispatchToProps(dispatch: Dispatch): ICreateTicketDispatchProps {
	return {
		selectTicket(projectId: string, id: string): void {
			dispatch(ProjectAction.selectTicket(projectId, id));
		},

		update(projectId: string, id: string, body: any): void {
			dispatch(ProjectAction.updateTicketRequest(projectId, id, body));
		},
		addCategory(item: string): void {
			dispatch(ProjectAction.addCategory(item));
		}
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ticket) as any);
