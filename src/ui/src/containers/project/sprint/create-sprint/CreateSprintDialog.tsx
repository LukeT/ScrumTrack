import {
	BaseDialog, Button, DialogContent, DialogFooter, DialogHeader, DialogStatus, Form, Input, Select, SelectItem,
} from '@streamjar/ui-react';
import { IDialogProps } from '@streamjar/ui-react/dist/lib/dialog/dialog'; // tslint:disable-line
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as yup from 'yup';

import { SprintAction } from '../../../../actions/sprint';
import { IState } from '../../../../state';

// tslint:disable-next-line
export interface IDialogOwnProps {
}

export interface IDialogCreateSprintDialogProps {
	project: string;
}

export interface IDialogCreateSprintDialogDispatchProps {
	createSprint(projectId: string, goal: string, duration: number): void;
}

export type DialogProps = IDialogOwnProps & IDialogCreateSprintDialogDispatchProps & IDialogCreateSprintDialogProps;

export interface ICreateSprintDialogState {
	goal: string;
	duration: number;
}

class CreateSprintDialog extends BaseDialog<DialogProps & IDialogProps, ICreateSprintDialogState> {
	public validation: yup.ObjectSchema<{}> = yup
		.object()
		.shape({
			goal: yup.string().required(),
		});

	constructor(props: DialogProps & IDialogProps) {
		super(props);

		this.setupDialog({
			width: '500px',
			state: DialogStatus.LOADED,
		});
	}

	public initialState(): ICreateSprintDialogState {
		return { goal: '', duration: 2 };
	}

	private closeDialog = (): void => {
		this.close();
	}

	public renderDialog(): JSX.Element {
		const sprintDuration: string = `${this.state.duration}`;

		return (
			<>
				<Form validation={this.validation} onSubmit={this.submit}>
					<DialogHeader onClose={this.closeDialog}> Create Sprint </DialogHeader>

					<DialogContent>
						<Input type='text' title='Sprint Goal' name='goal' value={this.state.goal} onChange={this.setGoal} />

						<Select title='Sprint Duration' value={sprintDuration} onChange={this.setDuration}>
							<SelectItem name='1 Week' value='1'></SelectItem>
							<SelectItem name='2 Weeks' value='2'></SelectItem>
							<SelectItem name='1 Month' value='5'></SelectItem>
						</Select>
					</DialogContent>

					<DialogFooter><Button type='submit' raised={true}>Create</Button></DialogFooter>
				</Form>
			</>
		);
	}

	public submit = (): void => {
		this.props.createSprint(this.props.project, this.state.goal, this.state.duration);
		this.close(null);
	}

	private setGoal = (value: string): void => this.setState({ goal: value });
	private setDuration = (value: string): void => this.setState({ duration: +value });
}

function mapStateToProps(state: IState): IDialogCreateSprintDialogProps {
	return {
		project: state.project.activeProject,
	};
}

function mapDispatchToProps(dispatch: Dispatch): IDialogCreateSprintDialogDispatchProps {
	return {
		createSprint(project: string, goal: string, duration: number): void {
			dispatch(SprintAction.createSprint(project, goal, duration));
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(CreateSprintDialog);
