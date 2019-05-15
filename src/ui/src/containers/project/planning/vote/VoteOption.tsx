import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PlanningAction } from '../../../../actions/planning';
import { IState } from '../../../../state';
import * as styles from './VoteOption.scss';
import { ViewSize, VIEW_SIZES } from '../../../../util/viewport/ViewSize';

export interface IVoteOptionProps {
	ticketId: number;
	view: ViewSize,
}

export interface IVoteOptionDispatchProps {
	vote(ticket: number, weight: number): void;
}

export interface IVoteOptionOwnProps {
	value: number;
	selected: boolean;
}

export type VoteOptionProps = IVoteOptionDispatchProps & IVoteOptionOwnProps & IVoteOptionProps;

class VoteOption extends React.PureComponent<VoteOptionProps> {

	public render(): JSX.Element {
		const classes: string = classNames({
			[styles.voteOption]: true,
			[styles['voteOption-selected']]: this.props.selected,
			[styles['voteOption--xs']]: this.props.view.eq(VIEW_SIZES.EXTRA_SMALL),
			[styles['voteOption--sm']]: this.props.view.eq(VIEW_SIZES.SMALL),
		});

		return (
			<div className={classes} onClick={this.vote} role='button'>
				{this.props.value}
			</div>
		);
	}

	public vote = (): void => this.props.vote(this.props.ticketId, this.props.value);
}

function mapStateToProps(state: IState): IVoteOptionProps {
	return {
		ticketId: state.planning.currentTicket,
		view: state.app.viewport,
	};
}

function mapPropsToDispatch(dispatch: Dispatch): IVoteOptionDispatchProps {
	return {
		vote(ticket: number, weight: number): void {
			dispatch(PlanningAction.vote(ticket, weight));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(VoteOption);
