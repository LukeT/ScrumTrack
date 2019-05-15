import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../state';

export interface IPlanningTimeRemainingProps {
	myVote: number;
	time: Date;
	hasResults: boolean
}

export interface IPlanningTimeRemainingState {
	date: Date;
}

class PlanningTimeRemaining extends React.PureComponent<IPlanningTimeRemainingProps, IPlanningTimeRemainingState> {
	private timer?: any;

	constructor(props: IPlanningTimeRemainingProps) {
		super(props);

		this.state = { date: new Date() };
	}

	public componentDidMount(): void {
		this.timer = setInterval(() => {
			this.setState({ date: new Date() });
		},                       200);
	}

	public componentWillUnmount(): void {
		clearTimeout(this.timer);
	}

	public render(): JSX.Element {
		if (this.props.hasResults) {
			return <>Waiting for team leader</>;
		}

		const seconds: number = Math.min(Math.floor((+this.props.time - +this.state.date) / 1000) + 1, 15);

		return <>{`00:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</>;
	}
}

function mapStateToProps(state: IState): IPlanningTimeRemainingProps {
	return {
		myVote: state.planning.myVote,
		hasResults: !!state.planning.result,
		time: state.planning.turnEndsAt,
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(PlanningTimeRemaining);
