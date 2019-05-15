import {
	BaseDialog, Button, DialogStatus
} from '@streamjar/ui-react';
import { IDialogProps } from '@streamjar/ui-react/dist/lib/dialog/dialog'; // tslint:disable-line
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SprintAction } from '../../../../actions/sprint';
import { IState } from '../../../../state';
import { getApi } from '../../../../util/helpers';
import { Ticket, LogType, ITicket } from '../../../../util/models/Issue';
import { IWorkflowRule } from '../../../../util/models/Sprint';
import { SprintColumnHeader } from '../SprintColumnHeader';
import { combineLatest } from 'rxjs';
import { StandupTicket } from './StandupTicket';

// tslint:disable-next-line
export interface IDialogOwnProps {
}

export interface IStandupDialogProps {
	project: string;
	sprint: number;
	workflow: IWorkflowRule[];
}

export interface IStandupDialogDispatchProps {
}

export type DialogProps = IDialogOwnProps & IStandupDialogDispatchProps & IStandupDialogProps;

export interface IStandupDialogState {
	changes: { [key: string]: [number, number] };
	tickets: ITicket[];
}

class StandupDialog extends BaseDialog<DialogProps & IDialogProps, IStandupDialogState> {
	constructor(props: DialogProps & IDialogProps) {
		super(props);

		this.setupDialog({
			width: '90vw',
			height: '90vh',
			state: DialogStatus.LOADING,
		});
	}

	public dialogDidOpen() {
		combineLatest(
			getApi(Ticket).getHistoryBySprint(this.props.project, this.props.sprint, +new Date() - 1000 * 60 * 60 * 24),
			getApi(Ticket).getAll(this.props.project, `sprint/${this.props.sprint}`),
		)
		.subscribe(history => {
			const changes: { [key: string]: [number, number] } = {};

			history[0].filter(i => i.type === LogType.LOCATION).forEach(i => {
				changes[i.ticketId] = [+i.oldValue, null];
			})

			history[0].filter(i => i.type === LogType.SPRINT).forEach(i => {
				if (i.newValue !== "") {
					changes[i.ticketId] = [+i.newValue, null];
				}
			})

			history[1].forEach(i => {
				if (changes[i.id]) {
					changes[i.id][1] = i.workflowId;
				}
			});

			this.setState({ changes, tickets: history[1] });

			this.loaded();
		}, () => this.close());
	}

	public initialState(): IStandupDialogState {
		return { changes: {}, tickets: [] };
	}

	public renderDialog(): JSX.Element {
		return (
			<>
				<div className='layout-row layout-align-between-center' style={{ paddingLeft: 15 }}>
					<h5> Daily Standup (last 24h) </h5>
					<Button round icon="close" onClick={this.onClose} />
				</div>

				<div className='layout-row' style={{ padding: 15 }}>
					{this.props.workflow.map(i => this.getWf(i))}
				</div>
			</>
		);
	}

	public getWf(wf: IWorkflowRule) {
		const ours = Object.keys(this.state.changes).filter(i => this.state.changes[i][1] === wf.id).map(i => {
			const ticket = this.state.tickets.find(j => j.id === i);
			const wf = this.props.workflow.find(j => j.id === this.state.changes[i][0]);

			if (!ticket) {
				return null;
			}

			return <StandupTicket key={ticket.id} ticket={ticket} source={wf} />
		}).filter(i => i !== null);


		return (
			<div key={wf.id} className='flex' style={{ margin: 10, borderRadius: 4, background: '#343334' }}>
				<SprintColumnHeader rule={wf} items={0} provided={null} />

				{ours}
			</div>
		);
	}

	private onClose = () => {
		this.close();
	}
}

function mapStateToProps(state: IState): IStandupDialogProps {
	return {
		project: state.project.activeProject,
		sprint: state.sprint.currentSprint.id,
		workflow: state.sprint.workflow,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IStandupDialogDispatchProps {
	return {
		createSprint(project: string, goal: string, duration: number): void {
			dispatch(SprintAction.createSprint(project, goal, duration));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(StandupDialog);
