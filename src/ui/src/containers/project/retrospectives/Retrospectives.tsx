import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import PastRetrospectives from './PastRetrospectives';
import { PickRetrospective } from './PickRetrospective';
import Retrospective from './retrospective/Retrospective';
import { SprintAction } from '../../../actions/sprint';
import { Dispatch } from 'redux';

export interface IRetrospectivesOwnProps {
	match: {
		params: {
			projectId: string;
		};
	};
}

export interface IRetrospectivesDispatchProps {
	getSprint(projectId: string): void;
}

export type RetrospectivesProps = IRetrospectivesOwnProps & IRetrospectivesDispatchProps;

class Retrospectives extends React.Component<RetrospectivesProps> {
	public componentWillMount(): void {
		this.props.getSprint(this.props.match.params.projectId);
	}

	public render(): JSX.Element {
		return (
			<div className='layout-row' style={{ height: '100%', overflow: 'hidden' }}>
				<Helmet>
					<title>Retrospectives | {this.props.match.params.projectId} | ScrumTrack</title>
				</Helmet>

				<PastRetrospectives />

				<Route path='/:projectid/retrospectives/:id' component={Retrospective}/>
				<Route path='/:projectid/retrospectives' exact component={PickRetrospective} />
			</div>
		);
	}
}

function mapStateToProps(): {} {
	return {

	};
}

function mapDispatchToProps(dispatch: Dispatch): IRetrospectivesDispatchProps {
	return {
		getSprint(projectId: string): void {
			dispatch(SprintAction.getCurrentSprint(projectId));
		},
	}
}

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Retrospectives) as any);
