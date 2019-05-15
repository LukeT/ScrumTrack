import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { ISprint } from '../../../util/models/Sprint';
import * as styles from './PastRetrospectives.scss';
import { AvailableSprint } from './sprints/AvailableSprint';
import { withRouter } from 'react-router';

export interface IPastRetrospectivesOwnProps {
	history: string[];
}

export interface IPastRetrospectivesProps {
	project: string;
	sprints: ISprint[];
	loading: boolean;
}

export interface IPastRetrospectivesDispatchProps {
	getSprints(project: string): void;
}

export type PastRetrospectivesProps = IPastRetrospectivesOwnProps & IPastRetrospectivesDispatchProps & IPastRetrospectivesProps;

class PastRetrospectives extends React.PureComponent<PastRetrospectivesProps> {
	public componentDidMount(): void {
		this.props.getSprints(this.props.project);
	}

	public componentDidUpdate(props: PastRetrospectivesProps) {
		if (this.props.project !== props.project) {
			this.props.getSprints(this.props.project);
		}
	}

	public render(): JSX.Element {
		const { loading, sprints } = this.props;

		return (
			<div className={styles.sidebar}>
				<h5> Past Retrospectives: </h5>
				{!loading && !sprints.length && <p className={styles.noSprints}> Past sprints will show up here as you complete them </p>}
				{!loading && sprints.map((sprint: ISprint) => <AvailableSprint key={sprint.id} sprint={sprint} onClick={this.loadSprint} />)}
			</div>
		);
	}

	private readonly loadSprint: (sprint: ISprint) => void = (sprint: ISprint): void => {
		this.props.history.push(`/${this.props.project}/retrospectives/${sprint.id}`);
	}
}

function mapStateToProps(state: IState): IPastRetrospectivesProps {
	return {
		project: state.project.activeProject,
		sprints: state.sprint.historic.data.map(i => state.sprint.entities.sprints[i]),
		loading: state.sprint.historic.fetching,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IPastRetrospectivesDispatchProps {
	return {
		getSprints(project: string): void {
			dispatch(SprintAction.getHistoricSprints(project));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PastRetrospectives) as any);
