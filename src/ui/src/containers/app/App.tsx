import { Button, Tab, Tabs, Tooltip, Spinner } from '@streamjar/ui-react';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';

import { PlanningAction } from '../../actions/planning';
import { UserAction } from '../../actions/user';
import { IState } from '../../state';
import { ITicket } from '../../util/models/Issue';
import { ISprint } from '../../util/models/Sprint';
import Account from '../account/Account';
import Admin from '../admin/Admin';
import AccountMenu from '../common/layout/AccountMenu';
import ProjectSwitcher from '../common/layout/ProjectSwitcher';
import Project from '../project/Project';

export interface IAppProps {
	inProject: boolean;
	admin: boolean;
	canStart: boolean;
	project: string;
	sprint: ISprint;
	planingSessions: string[];
	history?: string[];
	projects: string[];
}

export interface IAppDispatchProps {
	getAll(): void;
	joinSession(project: string): void;
	startSession(project: string): void;
}

enum NavigationTabs {
	BACKLOG,
	SPRINT,
	RETROSPECTIVES,
}

function HasSprintError(props: { children: JSX.Element; enabled: boolean}) {
	if (props.enabled) {
		return props.children;
	}

	return (
		<Tooltip message='No sprints are active'>
			{props.children}
		</Tooltip>
	);
}

class App extends React.Component<IAppProps & IAppDispatchProps> {
	public componentDidMount(): void {
		this.props.getAll();
	}

	public render(): JSX.Element {
		return (
			<div className='layout-column' style={{ height: '100vh'}}>
				<Helmet>
					<title>Home | ScrumTrack</title>
				</Helmet>

				<header className='layout-align-center-center layout-row layout-wrap'
					style={{
						background: 'url(/assets/blue.svg)',
						backgroundPosition: 'center bottom',
						backgroundSize: 'cover',
						padding: '0px 0px',
						minHeight: 64,
				}}>
					<Link to='/'><img className='hide-mobile' src='/assets/logo.svg' style={{ height: 50, opacity: 0.5 }} alt='Logo' /></Link>

					{this.props.inProject && <ProjectSwitcher />}

					<span className='hide-mobile flex'></span>

					{this.props.inProject && this.getTabs()}

					<AccountMenu />
				</header>

				<Switch>
					<Route path='/' exact children={this.props.projects.length ? <Redirect to={`/${this.props.projects[0]}/backlog`} /> : <Spinner />} />
					<Route path='/account' component={Account} />
					{this.props.admin && <Route path='/admin' component={Admin} />}

					<Route path='/:projectId' component={Project} />
				</Switch>
			</div>
		);
	}

	public getTabs(): JSX.Element {
		const isAdmin: boolean = this.props.admin;
		const canStart: boolean = this.props.canStart;
		const inPlanning: boolean = this.props.planingSessions.includes(this.props.project);
		const hasSprint: boolean = !!this.props.sprint && !!this.props.sprint.startAt;

		return (
			<div style={{ marginTop: '2.5px'}} className='layout-row layout-align-center-center'>
				<Tabs onChange={this.swapTab}>
					<Tab value={NavigationTabs.BACKLOG}> Backlog </Tab>
					<Tab disabled={!hasSprint} value={NavigationTabs.SPRINT}> <HasSprintError enabled={hasSprint}><>Sprint</></HasSprintError> </Tab>
					<Tab value={NavigationTabs.RETROSPECTIVES}> Retrospectives </Tab>
				</Tabs>

				{!inPlanning && isAdmin && canStart && <Button raised colour='accent' onClick={this.startSession}> Start Planning </Button>}
				{inPlanning && <Button raised colour='accent' onClick={this.joinSession}> Join Planning </Button>}
			</div>
		);
	}

	private readonly joinSession = (): void => {
		this.props.joinSession(this.props.project);
	}

	private readonly startSession = (): void => {
		this.props.startSession(this.props.project);
	}

	private readonly swapTab: (tab: NavigationTabs) => void = (tab: NavigationTabs): void => {
		if (tab === NavigationTabs.BACKLOG) {
			this.props.history.push(`/${this.props.project}/backlog`);
		} else if (tab === NavigationTabs.SPRINT) {
			this.props.history.push(`/${this.props.project}/sprint`);
		} else if (tab === NavigationTabs.RETROSPECTIVES) {
			this.props.history.push(`/${this.props.project}/retrospectives`);
		}
	}
}

function mapStateToProps(state: IState): IAppProps {
	return {
		inProject: state.app.showProject,
		projects: state.project.results,
		planingSessions: state.planning.sessionsActive,
		admin: state.auth.user.role === 'admin',
		project: state.project.activeProject,
		sprint: state.sprint.currentSprint,
		canStart: (state.project.tickets.backlog || [])
			.map((i: string) => state.project.entities.tickets[i])
			.filter((i: ITicket) => i.weight === 0).length !== 0,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IAppDispatchProps {
	return {
		getAll(): void {
			dispatch(UserAction.getUsersBasicRequest());
		},

		joinSession(project: string): void {
			dispatch(PlanningAction.joinSession(project));
		},

		startSession(project: string): void {
			dispatch(PlanningAction.startSession(project));
		},
	};
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App) as any);
