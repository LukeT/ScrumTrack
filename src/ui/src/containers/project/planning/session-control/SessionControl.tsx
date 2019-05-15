import * as React from 'react';
import { ResultAction, IResults } from '../../../../realtime/realtime';
import { Button } from '@streamjar/ui-react';
import { connect } from 'react-redux';
import { IState } from '../../../../state';
import { Dispatch } from 'redux';
import { PlanningAction } from '../../../../actions/planning';

export interface ISessionControlProps {
	availableActions: ResultAction[];
	project: string;
}

export interface ISessionControlDispatchProps {
	end(projectId: string): void;
	castAction(projectId: string, action: ResultAction): void;
}

export type SessionControlProps = ISessionControlProps & ISessionControlDispatchProps;

class SessionControl extends React.PureComponent<SessionControlProps> {

	public render(): JSX.Element {
		const actions: { [key: string]: () => JSX.Element } = {
			[ResultAction.AVERAGE]: this.getAverage,
			[ResultAction.CONTINUE]: this.getContinue,
			[ResultAction.STRIP_OUTLIER]: this.getOutlier,
			[ResultAction.REVOTE]: this.getRevote,
		}

		return (
			<>
				<p> Session Actions: </p>
				{this.getEnd()}
				{this.getSkip()}

				{this.props.availableActions.length && <p> Ticket Actions:</p>}
				{this.props.availableActions.map(i => actions[i]())}
			</>
		);
	}

	private castAction(action: ResultAction): void {
		this.props.castAction(this.props.project, action);
	}

	private end = (): void => {
		this.props.end(this.props.project);
	}

	private getEnd: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="danger" onClick={this.end}> End Session </Button>
		);
	}

	private skip = (): void => {
		this.castAction(ResultAction.SKIP);
	}

	private getSkip: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="accent" onClick={this.skip}> Skip Ticket </Button>
		);
	}

	private revote = (): void => {
		this.castAction(ResultAction.REVOTE);
	}

	private getRevote: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="danger" onClick={this.revote}> Revote this ticket </Button>
		);
	}

	private outlier = (): void => {
		this.castAction(ResultAction.STRIP_OUTLIER);
	}

	private getOutlier: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="accent" onClick={this.outlier}> Remove outliers </Button>
		);
	}

	private continue = (): void => {
		this.castAction(ResultAction.CONTINUE);
	}

	private getContinue: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="success" onClick={this.continue}> Use chosen value </Button>
		);
	}

	private average = (): void => {
		this.castAction(ResultAction.AVERAGE);
	}

	private getAverage: () => JSX.Element = (): JSX.Element => {
		return (
			<Button raised colour="accent" onClick={this.average}> Calculate Median </Button>
		);
	}
}

function mapStateToProps(state: IState): ISessionControlProps {
	const result: IResults = state.planning.result;

	return {
		project: state.planning.currentSession,
		availableActions: (result ? result.options : []),
	}
}

function mapPropsToDispatch(dispatch: Dispatch): ISessionControlDispatchProps {
	return {
		castAction(projectId: string, action: ResultAction): void {
			dispatch(PlanningAction.castAction(projectId, action));
		},
		end(projectId: string): void {
			dispatch(PlanningAction.leaveSession(projectId));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(SessionControl);

