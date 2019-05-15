import { Spinner } from '@streamjar/ui-react';
import * as classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../../actions/project';
import { IState } from '../../../../state';
import { ITicket } from '../../../../util/models/Issue';

import * as styles from './TicketsPreview.scss';

export interface ITicketsProps {
	tickets: ITicket[];
	currentTicket: number;
	project: string;
}

export interface ITicketsOwnProps {

}

export interface ITicketsDispatchProps {
	fetch(projectId: string): void;
}

export type TicketsProps = ITicketsProps & ITicketsOwnProps & ITicketsDispatchProps;

class TicketsPreview extends React.PureComponent<TicketsProps> {
	public componentWillMount(): void {
		this.props.fetch(this.props.project);
	}

	public render(): JSX.Element {
		if (!this.props.tickets) {
			return <div className='flex-50'></div>;
		}

		return (
			<div className='flex-35 flex-45-md flex-50-sm flex-100-xs'>
				{!this.props.tickets.length && <Spinner size={35} />}

				{this.getTickets()}
			</div>
		);
	}

	private getTickets(): JSX.Element {
		const currentTicket: string = `${this.props.project}-${this.props.currentTicket}`;
		let indexes: number[] = [];
		const idx: number = Math.max(0, this.props.tickets
			.findIndex((i: ITicket) => i.id === currentTicket));

		if (idx <= 0) {
			indexes = [idx, idx + 1, idx + 2];
		} else if (idx === this.props.tickets.length - 1) {
			indexes = [idx - 2, idx - 1, idx];
		} else {
			indexes = [idx - 1, idx, idx + 1];
		}

		const tickets: JSX.Element[] = indexes
			.map((id: number) => this.props.tickets[id])
			.filter((val: ITicket) => !!val)
			.map((ticket: ITicket) => {
				const classes: string = classnames({
					[styles.ticket]: true,
					[styles.ticket__active]: ticket.id === currentTicket,
					'layout-row': true,
					'layout-align-center-center': true,
				});

				const weight: JSX.Element = ticket.weight !== 0 ? (
					<div className={`${styles.ticket__weighting}`}>
						{ticket.weight}
					</div>
				) : <></>;

				return (
					<div className={classes} key={ticket.id}>
						<div className={styles.ticket__id}>
							{ticket.id}
						</div>
						<div className={`${styles.ticket__title} flex`}>
							{ticket.title}
						</div>
						{weight}
					</div>
				);
			});

		return <>
			{tickets}
		</>;
	}
}

function mapStateToProps(state: IState): ITicketsProps {
	return {
		currentTicket: state.planning.currentTicket,
		project: state.project.activeProject,
		tickets: (state.project.tickets.backlog || [])
			.map((i: string) => state.project.entities.tickets[i]),
	};
}

function mapPropsToDispatch(dispatch: Dispatch): ITicketsDispatchProps {
	return {
		fetch(projectId: string): void {
			dispatch(ProjectAction.fetchTicketsRequest(projectId, 'backlog'));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(TicketsPreview);
