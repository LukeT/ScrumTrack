import * as React from 'react';
import { ITicketHistory, LogType } from '../../../../util/models/Issue';
const Diff = require('react-stylable-diff').default;
import * as styles from './HistoryItem.scss';
import { Status } from '../../../../components/status/Status';
import User from '../../../common/layout/User';
const TimeAgo = require('react-timeago').default;

export interface IHistoryItemProps {
	item: ITicketHistory;
}

function format(log: ITicketHistory): JSX.Element {
	switch (log.type) {
		case LogType.WEIGHT:
			const dir: string = +log.oldValue < +log.newValue ? 'increased' : 'decreased';

			if (log.oldValue === '0') {
				return <p className={styles.leadText}> This ticket was weighted as <span className={styles.weight}>{log.newValue}</span> </p>;
			}

			return <p className={styles.leadText}> This tickets weighting was {dir} to <span className={styles.weight}>{log.newValue}</span> </p>;

		case LogType.TITLE:
			return (
				<>
					<p className={styles.leadText}> The <strong>title</strong> of the ticket was updated: </p>
					<Diff inputA={log.oldValue} inputB={log.newValue} />
				</>
			);

		case LogType.STATUS:
			return (
				<p> This ticket was moved from <strong>status</strong> <Status status={log.oldValue} /> to <Status status={log.newValue} /></p>
			);

		case LogType.SPRINT:
			const action: string = log.oldValue === '' ? 'added to' : 'removed from';
			const sprintId: string = action === 'added to' ? log.newValue : log.oldValue;

			return (
				<p> This ticket was <strong>{action}</strong> sprint <span className={styles.sprint}>#{sprintId}</span></p>
			);

		case LogType.ASSIGNEE:
			const from = <div className='layout-row'><User userId={+log.oldValue} /> <p>&nbsp; was unassigned </p></div>;
			const to = <div className='layout-row'><User userId={+log.newValue} /> <p>&nbsp; was assigned </p></div>;

			return (
				<>
					{from && from}
					{to && to}
				</>
			)

		default:
			return <> </>;
	}
}


export class HistoryItem extends React.PureComponent<IHistoryItemProps> {
	public render(): JSX.Element {
		return (
			<div className={`${styles.history} layout-row layout-align-between-center`}>
				<div>
					{format(this.props.item)}
				</div>

				<div className={styles.ago}>
					<TimeAgo date={this.props.item.createdAt * 1000} />
				</div>
			</div>
		);
	}
}
