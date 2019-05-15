import { Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../../actions/project';
import { IState } from '../../../../state';
import { ITicket, ITicketHistory } from '../../../../util/models/Issue';
import { IProject } from '../../../../util/models/Project';
import { HistoryItem } from './HistoryItem';

export interface IHistoryProps {
	ticket: ITicket;
	project: IProject;
	fetching: boolean;
	histories: ITicketHistory[];
}

export interface IHistoryDispatchProps {
	getHistory(ticket: string): void;
}

export type CommentsProps = IHistoryProps & IHistoryDispatchProps;

import * as styles from './History.scss';

class History extends React.PureComponent<CommentsProps> {
	public componentDidMount(): void {
		if (this.props.ticket) {
			this.props.getHistory(this.props.ticket.id);
		}
	}

	public render(): JSX.Element {
		const { fetching, histories } = this.props;

		return (
			<div>
				{fetching && <Spinner />}


				{!fetching && !histories.length && <p className={styles.noHistory}>This ticket has no history to display.</p>}
				{!fetching && this.props.histories.map((history: ITicketHistory) => <HistoryItem key={history.id} item={history} />)}
			</div>
		);
	}
}

function mapStateToProps(state: IState): IHistoryProps {
	return {
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		ticket: state.project.activeTicket ? state.project.entities.tickets[state.project.activeTicket] : null,
		histories: (state.project.histories.data[state.project.activeTicket] || [])
			.map((i: number) => state.project.entities.histories[i])
			.filter(i => !i.internal),
		fetching: state.project.histories.fetching[state.project.activeTicket],
	};
}

function mapDispatchToProps(dispatch: Dispatch): IHistoryDispatchProps {
	return {
		getHistory(ticket: string): void {
			dispatch(ProjectAction.fetchHistoryRequest(ticket));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(History);
