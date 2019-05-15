import * as React from 'react';
import { ISprintCommentKind, ISprintComment, Sprint } from '../../../../util/models/Sprint';
import { combineLatest } from 'rxjs';
import { getApi } from '../../../../util/helpers';
import * as classNames from 'classnames';

export interface ICommentProps {
	project: string;
	sprintId: number;
}

export interface ICommentState {
	fetching: boolean;
	feedback: ISprintComment[];
	lastSprint: ISprintComment[];


	addKind: ISprintCommentKind;
	showDialog: boolean;
}

import * as styles from './Comments.scss';
import { Button } from '@streamjar/ui-react';
import { Comment } from './Comment';
import AddCommentDialog from './AddCommentDialog';

export class Comments extends React.PureComponent<ICommentProps, ICommentState> {
	constructor(props: ICommentProps) {
		super(props);

		this.state = { fetching: true, feedback: [], lastSprint: [], showDialog: false, addKind: null };
	}

	public componentDidUpdate(props: ICommentProps): void {
		if (this.props.sprintId !== props.sprintId) {
			this.getBySprint(this.props.sprintId);
		}
	}

	public componentWillMount(): void {
		this.getBySprint(this.props.sprintId);
	}

	public getBySprint(id: number): void {
		this.setState({ fetching: false, feedback: [], lastSprint: [] });

		combineLatest(
			getApi(Sprint).getComments(this.props.project, id),
			getApi(Sprint).getPastComments(this.props.project, id),
		).subscribe(data => {
			this.setState({ fetching: false,  feedback: data[0], lastSprint: data[1].filter(i => i.resolvedId === null) })
		});
	}

	public render(): JSX.Element {
		return (
			<div className='layout-row layout-wrap'>
				{this.getColumn(ISprintCommentKind.GOOD)}
				{this.getColumn(ISprintCommentKind.BAD)}

				<AddCommentDialog show={this.state.showDialog} kind={this.state.addKind} sprintId={this.props.sprintId} projectId={this.props.project} onClose={this.hide} />
			</div>
		)
	}

	private getColumn(kind: ISprintCommentKind) {
		const classes = classNames(styles.commentBlock, 'flex', {
			[styles['commentBlock--good']]: kind === ISprintCommentKind.GOOD,
			[styles['commentBlock--bad']]: kind === ISprintCommentKind.BAD,
		})

		let tag = 'What could we do better?';

		if (kind === ISprintCommentKind.GOOD) {
			tag = 'What did we do well?';
		}

		const comments = this.state.feedback.filter(i => i.type === kind);

		const showPrevious = this.state.lastSprint.length && kind === ISprintCommentKind.BAD ? (
			<div className={`${styles.comments} ${styles.comments__alt}`}>
				<p> What we said we would improve previously: </p>

				{this.state.lastSprint.map(i => <Comment key={i.id} comment={i} canRemove={true} onDelete={this.delete} />)}
			</div>
		) : null;

		const fn = kind == ISprintCommentKind.BAD ? this.addBad : this.addGood;

		return (
			<div className='flex'>
				<div className={classes}>
					<div className={`${styles.commentHeader} layout-row layout-align-between-center`}>
						<h5> {tag} </h5>

						<Button raised round icon="add" colour="accent" onClick={fn} />
					</div>

					{showPrevious}

					<div className={styles.comments}>
						{!comments.length && <p> No comments have been added to this retrospective. </p>}
						{comments.map(i => <Comment key={i.id} comment={i} canRemove={false} onDelete={this.delete} />)}
					</div>
				</div>
			</div>
		);
	}

	private delete = (comment: ISprintComment): void => {
		this.setState(state => ({
			feedback: state.feedback.filter(i => i.id !== comment.id),
			lastSprint: state.lastSprint.filter(i => i.id !== comment.id),
		}))
	}

	private addGood = () => {
		this.setState({ addKind: ISprintCommentKind.GOOD, showDialog: true });
	}

	private addBad = () => {
		this.setState({ addKind: ISprintCommentKind.BAD, showDialog: true });
	}

	private hide = (a?: ISprintComment) => {
		if (a) {
			this.setState(state => ({ feedback: [...state.feedback, a]} ));
		}


		this.setState({ showDialog: false });
	}
}
