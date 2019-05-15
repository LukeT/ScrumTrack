import { Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../actions/project';
import { IState } from '../../state';
import { IProject } from '../../util/models/Project';
import Backlog from './backlog/Backlog';
import Sprint from './sprint/Sprint';
import Planning from './planning/Planning';
import Retrospectives from './retrospectives/Retrospectives';

export interface IProjectDispatchProps {
	selectProject(projectName: string): void;
	getCategories(projectName: string): void;
}

export interface IProjectProps {
	project: IProject;
	loading: boolean;
	isPlanning: boolean;
}

export interface IProjectOwnProps {
	match: {
		params: {
			projectId: string;
		};
	};
}

export type ProjectProps = IProjectOwnProps & IProjectDispatchProps & IProjectProps;

class Project extends React.Component<ProjectProps> {
	public componentWillMount(): void {
		this.props.selectProject(this.props.match.params.projectId);
		this.props.getCategories(this.props.match.params.projectId)
	}

	public componentWillUnmount(): void {
		this.props.selectProject(null);
	}

	public componentWillReceiveProps(old: ProjectProps): void {
		if (
			old.match.params.projectId !== this.props.match.params.projectId
		) {
			this.props.selectProject(old.match.params.projectId);
			this.props.getCategories(old.match.params.projectId)
		}
	}

	public render(): JSX.Element {
		if (!this.props.loading && !this.props.project) {
			return <Redirect to='/' />;
		}

		if (this.props.loading) {
			return <Spinner size={45} />;
		}

		return (
			<>
				{this.props.isPlanning && <Planning />}
				<Route path='/:projectId/backlog' component={Backlog}  />
				<Route path='/:projectId/sprint' component={Sprint}  />
				<Route path='/:projectId/retrospectives' component={Retrospectives}  />
			</>
		);
	}
}

function mapStateToProps(state: IState): IProjectProps {
	return {
		isPlanning: state.planning.inSession,
		project: state.project.activeProject ? state.project.entities.projects[state.project.activeProject] : null,
		loading: state.project.fetching,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IProjectDispatchProps {
	return {
		selectProject(name: string): void {
			dispatch(ProjectAction.selectProject(name));
		},
		getCategories(name: string): void {
			dispatch(ProjectAction.getCategories(name));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project) as any);
