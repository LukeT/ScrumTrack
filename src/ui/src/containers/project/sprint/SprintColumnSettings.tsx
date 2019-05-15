import { Button, Input, Select, SelectItem, Icon } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { SprintAction } from '../../../actions/sprint';
import { IState } from '../../../state';
import { IWorkflowRule } from '../../../util/models/Sprint';
import { OptionalTooltip } from '../../../util/OptionalTooltip';
import DeleteWorkflowDialog from './delete-workflow/DeleteWorkflowDialog';
import * as styles from './SprintColumnSettings.scss';

export interface ISprintSettingsProps {
	workflow: IWorkflowRule[];
}

export interface ISprintSettingsOwnProps {
	rule: IWorkflowRule;
}

export interface ISprintSettingsDispatchProps {
	update(rule: IWorkflowRule): void;
	remove(id: number): void;
}

export type SprintSettings = ISprintSettingsProps & ISprintSettingsOwnProps & ISprintSettingsDispatchProps;

export interface ISprintSettingsState {
	name: string;
	maxItems: number;
	allow: number[];
	showDelete: boolean;
	status: 'open' | 'in-progress' | 'closed';
}

class SprintColumnSettings extends React.PureComponent<SprintSettings, ISprintSettingsState> {

	constructor(props: SprintSettings) {
		super(props);

		this.state = { name: '', maxItems: 0, allow: [], showDelete: false, status: 'open' };
	}

	public componentWillMount(): void {
		this.setState({
			name: this.props.rule.name,
			maxItems: this.props.rule.maxItems || 0,
			allow: this.props.rule.allow || [],
			status: this.props.rule.status || 'open',
		});
	}

	public setName = (value: string): void => this.setState({ name: value });
	public setMaxItems = (value: string): void => this.setState({ maxItems: +value });
	public setAllow = (value: any): void => this.setState({ allow: value });
	public setStatus = (value: any): void => this.setState({ status: value });

	public save = (): void => {
		const wf: IWorkflowRule = {
			...this.props.rule,
			name: this.state.name,
			maxItems: this.state.maxItems,
			allow: this.state.allow,
			status: this.canDelete() ? this.state.status : this.props.rule.status,
		};

		this.props.update(wf);
	}

	public remove = (): void => this.props.remove(this.props.rule.id);

	public render(): JSX.Element {
		const rules: IWorkflowRule[] = this.props.workflow
			.filter((i: IWorkflowRule) => i.id !== this.props.rule.id);

		const destinations: JSX.Element[] = rules
			.map((i: IWorkflowRule) => <SelectItem key={i.id} name={i.name} value={i.id} />);

		const canDelete: boolean = this.canDelete();

		const status = (
			<Select title='Column Status' value={this.state.status} onChange={this.setStatus}>
				<SelectItem name='Open' value='open' />
				<SelectItem name='In Progress' value='in-progress' />
				<SelectItem name='Closed' value='closed' />
			</Select>
		);

		const noStatus = (
			<div style={{ color: '#FFF', padding: 5, paddingTop: 15, opacity: 0.5 }} className='layout-row'>
				<Icon icon="error_outline"></Icon>
				<p style={{ paddingLeft: 10 }}> This column must remain status "new". </p>
			</div>
		);

		return (
			<div className={styles.settings}>
				<Input title='Name' value={this.state.name} onChange={this.setName} />

				<div style={{width: '50%'}}>
					<Input type='number' title='Maximum Tickets' value={this.state.maxItems as any} onChange={this.setMaxItems} />
				</div>


				{canDelete && status}
				{!canDelete && noStatus}

				<Select title='Supported Destinations' value={this.state.allow as any} multiple={true} onChange={this.setAllow}>
					{destinations}
					{!destinations.length && <p style={{ textAlign: 'center', opacity: 0.5 }}> No other rules exist </p>}
				</Select>

				<br />

				<div className='layout-row layout-align-end-center'>
					<OptionalTooltip
						enabled={canDelete}
						text='At-least 1 workflow rule must exist'>
						<Button disabled={!canDelete} onClick={this.toggleDialog} colour='danger' raised={true} icon='delete'></Button>
					</OptionalTooltip>
					<span className='flex'></span>
					<Button onClick={this.save} raised={true} icon='save'> Save </Button>
				</div>

				{canDelete && <DeleteWorkflowDialog
					show={this.state.showDelete}
					onClose={this.shouldDelete}
					name={this.state.name}
					destination={rules[0].name} /> }
			</div>
		);
	}

	private readonly toggleDialog = (): void => {
		this.setState((state: ISprintSettingsState) => ({ showDelete: !state.showDelete }));
	}

	private readonly shouldDelete = (action: { action: boolean }): void => {
		const shouldDelete: boolean = action && action.action;
		this.toggleDialog();

		if (shouldDelete) {
			this.remove();
		}
	}

	private readonly canDelete: () => boolean = (): boolean => {
		return this.props.rule.status !== 'open' || this.props.workflow
			.filter((i: IWorkflowRule) => i.id !== this.props.rule.id)
			.filter((i: IWorkflowRule) => i.status === 'open')
			.length >= 1;
	}
}

function mapStateToProps(state: IState): ISprintSettingsProps {
	return {
		workflow: state.sprint.workflow,
	};
}

function mapPropsToDispatch(dispatch: Dispatch): ISprintSettingsDispatchProps {
	return {
		update(rule: IWorkflowRule): void {
			dispatch(SprintAction.updateWorkflow(rule));
		},

		remove(rule: number): void {
			dispatch(SprintAction.deleteWorkflow(rule));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapPropsToDispatch)(SprintColumnSettings);
