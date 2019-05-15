import {
	BaseDialog, Button, DialogContent, DialogFooter, DialogHeader, DialogStatus,
} from '@streamjar/ui-react';
import { IDialogProps } from '@streamjar/ui-react/dist/lib/dialog/dialog'; // tslint:disable-line
import * as React from 'react';

export interface IDeleteWorkflowDialogProps {
	name: string;
	destination: string;
}

export default class DeleteWorkflowDialog extends BaseDialog<IDeleteWorkflowDialogProps & IDialogProps> {
	constructor(props: IDeleteWorkflowDialogProps & IDialogProps) {
		super(props);

		this.setupDialog({
			width: '500px',
			height: '100px',
			state: DialogStatus.LOADED,
		});
	}

	public initialState(): {} {
		return {

		};
	}

	public renderDialog(): JSX.Element {
		const { destination, name } = this.props;

		return (
			<>
				<DialogHeader> Delete Rule </DialogHeader>

				<DialogContent>
					<p style={{ fontSize: 16, lineHeight: 1.5 }}>
						Deleting workflow rule <strong>{name}</strong> will move all tickets
						into the inital workflow <strong>{destination}</strong>.
					</p>
				</DialogContent>

				<DialogFooter>
					<Button type='button' onClick={this.dismiss}>Dismiss</Button>
					<Button type='submit' onClick={this.deleteRule} raised={true} colour='danger' icon='delete'>Delete</Button>
				</DialogFooter>
			</>
		);
	}

	private readonly dismiss = (): void => {
		this.close({ action: false });
	}

	private readonly deleteRule = (): void => {
		this.close({ action: true });
	}
}
