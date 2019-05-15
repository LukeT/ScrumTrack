import { Button } from '@streamjar/ui-react';
import * as React from 'react';
import ReactQuill from 'react-quill'; // tslint:disable-line
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../../actions/project';
import { modules } from '../editor';

export interface IAddCommentProps {
	ticketId: string;
}

export interface IAddCommentDispatchProps {
	create(ticketId: string, body: string): void;
}

export interface IAddCommentState {
	body: string;
}

export type AddCommentProps = IAddCommentProps & IAddCommentDispatchProps;

class AddComment extends React.PureComponent<AddCommentProps, IAddCommentState> {

	constructor(props: AddCommentProps) {
		super(props);

		this.state = { body: '' };
	}

	public updateBody = (body: string): void => {
		this.setState({
			body,
		});
	}

	public submit = (): void => {
		this.props.create(this.props.ticketId, this.state.body);

		this.setState({ body: '' });
	}

	public render(): JSX.Element {
		return (
			<>
				<div className='small'>
					<ReactQuill modules={modules} value={this.state.body} onChange={this.updateBody} />
				</div>
				<div className='layout-row layout-align-end-center'>
					<Button onClick={this.submit} raised> Add </Button>
				</div>
			</>
		);
	}
}

export function mapDispatchToProps(dispatch: Dispatch): IAddCommentDispatchProps {
	return {
		create(ticket: string, body: string): void {
			dispatch(ProjectAction.createCommentRequest(ticket, body));
		},
	};
}

// tslint:disable-next-line
export default connect(() => ({}), mapDispatchToProps)(AddComment);
