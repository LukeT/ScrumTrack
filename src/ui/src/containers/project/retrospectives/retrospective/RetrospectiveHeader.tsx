import * as React from 'react';

import { ISprint } from '../../../../util/models/Sprint';

import { Status } from '../../../../components/status/Status';
import * as styles from './RetrospectiveHeader.scss';

export class RetrospectiveHeader extends React.PureComponent<{ sprint: ISprint }> {
	public render(): JSX.Element {
		const { sprint } = this.props;
		const status: string = sprint.endAt ? 'closed' : 'in-progress';

		return (
			<div className={`${styles.header} layout-row layout-align-between-center flex`}>
				<h5>
					<strong> Sprint #{this.props.sprint.id}</strong> - {this.props.sprint.name}
				</h5>

				<Status status={status} />
			</div>
		);
	}
}
