import * as classNames from 'classnames';
import * as React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

import { IWorkflowRule } from '../../../util/models/Sprint';
import * as styles from './SprintColumnHeader.scss';

export class SprintColumnHeader extends React.PureComponent<{ items: number; rule: IWorkflowRule; provided: DraggableProvided }> {
	public render(): JSX.Element {
		const handle: any = (this.props.provided ? this.props.provided.dragHandleProps : {});

		const itemCount: string = classNames(styles.header__itemCount, {
			[styles['header__itemCount-good']]: this.props.rule.maxItems && this.props.rule.maxItems > this.props.items,
			[styles['header__itemCount-bad']]: this.props.rule.maxItems && this.props.rule.maxItems <= this.props.items,
		});

		return (
			<div {...handle} className={`${styles.header} layout-row layout-align-start-center`}>
				<div>
					<div className={itemCount}>
						{this.props.items}{!!this.props.rule.maxItems && '/'}{!!this.props.rule.maxItems && this.props.rule.maxItems}
					</div>
				</div>

				<h5>
					{this.props.rule.name}
				</h5>
			</div>
		);
	}
}
