import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { ISprint } from '../../../../util/models/Sprint';
import { RetrospectiveHeader } from './RetrospectiveHeader';
import { Spinner } from '@streamjar/ui-react';
import { Dispatch } from 'redux';
import { IState } from '../../../../state';
import { SprintAction } from '../../../../actions/sprint';
import { combineLatest } from 'rxjs';
import { getApi } from '../../../../util/helpers';
import { Ticket, ITicket, ITicketHistory } from '../../../../util/models/Issue';
import { RetrospectiveParse } from '../RetrospectiveParse';
import { Graph } from './Graph';
import { Comments } from '../comments/Comments';
import { take } from 'rxjs/operators';

export interface IRetrospectiveOwnProps {
	match: {
		params: {
			id: number;
		};
	};
}

export interface IRetrospectiveProps {
	project: string;
	retrospective: ISprint;
}

export interface IRetrospectiveDispatchProps {
	selectRetrospective(id: number): void;
}

type RetrospectiveProps = IRetrospectiveProps & IRetrospectiveDispatchProps & IRetrospectiveOwnProps;

export interface IRetrospectiveState {
	parse: RetrospectiveParse;
}

class Retrospective extends React.PureComponent<RetrospectiveProps, IRetrospectiveState> {

	constructor(props: RetrospectiveProps) {
		super(props);
		this.state = { parse: null };
	}

	public componentDidMount(): void {
		this.props.selectRetrospective(+this.props.match.params.id);

		if (this.props.retrospective && this.props.retrospective.id === +this.props.match.params.id) {
			this.getRetrospective(+this.props.match.params.id);
		}
	}

	public componentWillReceiveProps(newProps: RetrospectiveProps): void {
		if (
			this.props.match.params.id !== newProps.match.params.id
		) {
			this.props.selectRetrospective(+newProps.match.params.id);
		}

		if (newProps.retrospective !== this.props.retrospective) {
			this.getRetrospective(+newProps.match.params.id);
		}
	}

	public getRetrospective(sprintId: number): void {
		combineLatest(
			getApi(Ticket).getAll(this.props.project, `sprint/${sprintId}`),
			getApi(Ticket).getHistoryBySprint(this.props.project, sprintId),
		).pipe(take(1)).subscribe((data: [ITicket[], ITicketHistory[]]) => {
			this.setState({ parse: new RetrospectiveParse(this.props.retrospective.startAt, data[0], data[1]) });
		}, console.error);
	}

	public render(): JSX.Element {
		if (!this.props.retrospective) {
			return <Spinner />;
		}

		return (
			<div className='flex' style={{ overflowY: 'auto' }}>
				<RetrospectiveHeader sprint={this.props.retrospective} />

				<Graph data={this.state.parse}  start={this.props.retrospective.startAt} end={this.props.retrospective.endAt} />

				<Comments sprintId={this.props.retrospective.id} project={this.props.project} />
			</div>
		);
	}
}

function mapStateToProps(state: IState): IRetrospectiveProps {
	return {
		project: state.project.activeProject,
		retrospective: state.sprint.entities.sprints[state.sprint.activeRetrospective],
	};
}

function mapDispatchToProps(dispatch: Dispatch): IRetrospectiveDispatchProps {
	return {
		selectRetrospective(id: number): void {
			dispatch(SprintAction.selectRetrospective(id));
			// a
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Retrospective) as any);
