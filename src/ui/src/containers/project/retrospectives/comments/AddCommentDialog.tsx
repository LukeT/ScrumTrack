import {
	BaseDialog, Button, DialogContent, DialogFooter, DialogHeader, DialogStatus, Textarea, toasts,
} from '@streamjar/ui-react';
import { IDialogProps } from '@streamjar/ui-react/dist/lib/dialog/dialog'; // tslint:disable-line
import * as React from 'react';
import { getApi } from '../../../../util/helpers';
import { Sprint, ISprintCommentKind } from '../../../../util/models/Sprint';

export interface IAddCommentDialogProps {
	kind: ISprintCommentKind;
	projectId: string;
	sprintId: number;
}

export default class AddCommentDialog extends BaseDialog<IAddCommentDialogProps & IDialogProps, { message: string }> {
	constructor(props: IAddCommentDialogProps & IDialogProps) {
		super(props);

		this.setupDialog({
			width: '500px',
			height: '100px',
			state: DialogStatus.LOADED,
		});
	}

	public initialState(): { message: string } {
		return {
			message: ''
		}
	}

	public renderDialog(): JSX.Element {
		return (
			<>
				<DialogHeader> Add comment </DialogHeader>

				<DialogContent>
					<Textarea title="Comment" value={this.state.message} onChange={this.setMessage}>

					</Textarea>
				</DialogContent>

				<DialogFooter>
					<Button type='submit' onClick={this.add} raised={true} icon='add'>Post</Button>
				</DialogFooter>
			</>
		);
	}

	private setMessage = (message: string): void => {
		this.setState({ message });
	}

	private add = (): void => {
		this.loading();

		getApi(Sprint).createComment(this.props.projectId, this.props.sprintId, this.props.kind, this.state.message)
			.subscribe(data => {
				this.close(data);
			}, (err) => {
				this.loaded();
				toasts.error(err.message);
			});
	}
}
