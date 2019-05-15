import { Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../../actions/project';
import { IState } from '../../../../state';
import { ITicket, ITicketComment } from '../../../../util/models/Issue';
import { IProject } from '../../../../util/models/Project';
import AddComment from './AddComment';
import { Comment } from './Comment';

import * as styles from './Comments.scss';

export interface ICommentsProps {
	ticket: ITicket;
	project: IProject;
	fetching: boolean;
	comments: ITicketComment[];
}

export interface ICommentsDispatchProps {
	getComments(ticket: string): void;
}

export type CommentsProps = ICommentsProps & ICommentsDispatchProps;

class Comments extends React.PureComponent<CommentsProps> {
	public componentDidMount(): void {
		if (this.props.ticket) {
			this.props.getComments(this.props.ticket.id);
		}
	}

	public render(): JSX.Element {
		const { fetching } = this.props;

		return (
			<div>
				{fetching && <Spinner />}
				{!fetching && !this.props.comments.length && <p className={styles.noComments}>This ticket hasn't been commented on yet.</p>}
				{!fetching && this.props.comments.map((comment: ITicketComment) => <Comment key={comment.id} comment={comment} />)}

				{!fetching && this.props.ticket && <AddComment ticketId={this.props.ticket.id} />}
			</div>
		);
	}
}

function mapStateToProps(state: IState): ICommentsProps {
	return {
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		ticket: state.project.activeTicket ? state.project.entities.tickets[state.project.activeTicket] : null,
		comments: (state.project.comments.data[state.project.activeTicket] || []).map((i: number) => state.project.entities.comments[i]),
		fetching: state.project.comments.fetching[state.project.activeTicket],
	};
}

function mapDispatchToProps(dispatch: Dispatch): ICommentsDispatchProps {
	return {
		getComments(ticket: string): void {
			dispatch(ProjectAction.fetchCommentsRequest(ticket));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
