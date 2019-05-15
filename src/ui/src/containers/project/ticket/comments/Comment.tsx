import * as React from 'react';

import { ITicketComment } from '../../../../util/models/Issue';
import User from '../../../common/layout/User';
import * as styles from './Comment.scss';

export interface ICommentProps {
	comment: ITicketComment;
}

export class Comment extends React.PureComponent<ICommentProps> {
	public render(): JSX.Element {
		return (
			<div className={styles.comment}>
				<User userId={this.props.comment.userId} />
				<div className={styles.comment__content} dangerouslySetInnerHTML={{ __html: this.props.comment.body }}></div> { /* tslint:disable-line */}
			</div>
		);
	}
}
