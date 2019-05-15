import * as React from 'react';
import { ISprintComment, Sprint } from '../../../../util/models/Sprint';
import User from '../../../common/layout/User';

import * as styles from './Comment.scss'
import { Checkbox, Button } from '@streamjar/ui-react';
import { getApi } from '../../../../util/helpers';


export class Comment extends React.PureComponent<{ comment: ISprintComment, canRemove: boolean, onDelete(me: ISprintComment): void }> {

	public render(): JSX.Element {
		return (
			<div className={`${styles.comment} layout-column`}>
				<div className='layout-row layout-align-start-center'>
					{this.props.canRemove && <Checkbox value={false} onChange={this.resolve} />}
					{!this.props.canRemove && <Button icon="delete" round colour="danger" onClick={this.delete} />}
					<p className='flex'>
						{this.props.comment.message}
						{this.props.comment.resolvedId && <span> (resolved in #{this.props.comment.resolvedId})</span>}
					</p>
					<User userId={this.props.comment.authorId} />
				</div>
			</div>
		);
	}

	private resolve = () => {
		getApi(Sprint).resolveComment(this.props.comment.projectCode, this.props.comment.sprintId, this.props.comment.id)
			.subscribe(() => {
				this.props.onDelete(this.props.comment);
			})
	}

	private delete = () => {
		getApi(Sprint).deleteComment(this.props.comment.projectCode, this.props.comment.sprintId, this.props.comment.id)
			.subscribe(() => {
				this.props.onDelete(this.props.comment);
			})
	}
}
