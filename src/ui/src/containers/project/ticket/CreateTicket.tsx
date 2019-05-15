import { Button, Form, Input, Select, SelectItem } from '@streamjar/ui-react';
import * as React from 'react';
import ReactQuill from 'react-quill'; // tslint:disable-line
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { ProjectAction } from '../../../actions/project';
import { IState } from '../../../state';
import { IProject } from '../../../util/models/Project';
import * as styles from './CreateTicket.scss';
import { modules } from './editor';

export interface ICreateTicketProps {
	project: IProject;
	categories: string[];
}

export interface ICreateTicketDispatchProps {
	create(projectId: string, data: { title: string; body: string; category: string;}): void;
	addCategory(item: string): void;
}

export interface ICreateTicketState {
	title: string;
	body: string;
	category: string;
}

export type CreateTicketProps = ICreateTicketDispatchProps & ICreateTicketProps;

class Ticket extends React.Component<CreateTicketProps, ICreateTicketState> {
	public validation: yup.ObjectSchema<{}> = yup.object().shape({
		title: yup.string().required().min(2).max(64),
		search: yup.string(),
	});

	constructor(props: CreateTicketProps) {
		super(props);

		this.state = { title: '', body: '', category: null };
	}

	public updateTitle = (value: string): void => {
		this.setState({ title: value });
	}

	public updateBody = (value: string): void => {
		this.setState({ body: value });
	}

	public updateCategory = (value: string): void => {
		this.setState({ category: value });
	}

	public submit = (): void => {
		this.props.create(this.props.project.shortcode, {
			title: this.state.title,
			body: this.state.body,
			category: this.state.category,
		});
	}

	public render(): JSX.Element {
		const isDisabled: boolean = this.state.title.length === 0 || this.state.body.length === 0;

		return (
			<div className={styles.ticket}>
				<div className={styles.ticket__container}>
					<Form onSubmit={this.submit} validation={this.validation}>
						<h5> New Ticket </h5>
						<Input name='title' minLength={2} title='Title' value={this.state.title} onChange={this.updateTitle} />

						<Select title="Category" search searchAsOption={true} onAddItem={this.add} value={this.state.category} onChange={this.updateCategory}>
							{this.props.categories.map(i => <SelectItem key={i} name={i} value={i} /> )}
						</Select>

						<ReactQuill modules={modules} value={this.state.body} onChange={this.updateBody} />

						<div className='layout-row layout-align-end-center'>
							<Button type='submit' raised={true} disabled={isDisabled}> Save </Button>
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
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		categories: state.project.categories,
	};
}

function mapDispatchToProps(dispatch: Dispatch): ICreateTicketDispatchProps {
	return {
		create(projectId: string, data: { title: string; body: string }): void {
			dispatch(ProjectAction.createTicketRequest(projectId, data));
		},
		addCategory(item: string): void {
			dispatch(ProjectAction.addCategory(item));
		}
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
