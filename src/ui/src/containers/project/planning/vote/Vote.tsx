import * as React from 'react';
import { calculateFibonacii, dedupe } from '../../../../util/calculateFibonacii';
import VoteOption from './VoteOption';

const OPTIONS: number[] = dedupe(calculateFibonacii(14)).slice(1);

import { connect } from 'react-redux';
import { CountdownReason } from '../../../../realtime/realtime';
import { IState } from '../../../../state';
import * as styles from './Vote.scss';

export interface IVoteProps {
	myVote: number;
	time: Date;
	reason: CountdownReason;
}

class Vote extends React.PureComponent<IVoteProps, { date: Date }> {
	private timer: any;

	constructor(props: IVoteProps) {
		super(props);

		this.state = { date: new Date() };
	}

	public componentDidMount(): void {
		this.timer = setInterval(() => {
			this.setState({ date: new Date() });
		},                       1000);
	}

	public componentWillUnmount(): void {
		clearTimeout(this.timer);
	}

	public render(): JSX.Element {

		// const seconds: number = Math.round((+this.props.time - +this.state.date) / 1000);

		return (
			<div className={`layout-column flex ${styles.vote}`} style={{ padding: '0px 15px' }}>
				<div>
					<div className={`layout-row layout-wrap layout-align-center-center ${styles.options}`}>
						{OPTIONS.map((i: number) => this.getOption(i))}
					</div>
				</div>
			</div>
		);
	}

	private getOption(val: number): JSX.Element {
		const vote: number = this.props.myVote;

		return (
			<VoteOption key={val} value={val} selected={val === vote} />
		);
	}
}
function mapStateToProps(state: IState): IVoteProps {
	return {
		myVote: state.planning.myVote,
		time: state.planning.turnEndsAt,
		reason: state.planning.turnReason,
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(Vote);
