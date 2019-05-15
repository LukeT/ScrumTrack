import { Icon, Ripple } from '@streamjar/ui-react';
import * as React from 'react';
import { ISprint } from '../../../../util/models/Sprint';

import * as styles from './AvailableSprint.scss';

export class AvailableSprint extends React.PureComponent<{ sprint: ISprint; onClick(sprint: ISprint): void }> {
	public render(): JSX.Element {
		const { sprint } = this.props;

		const fromTime: string = new Intl.DateTimeFormat('en-GB', {
			month: 'long',
			day: '2-digit',
		}).format(new Date(sprint.startAt * 1000));

		const endTime: string = new Intl.DateTimeFormat('en-GB', {
			month: 'long',
			day: '2-digit',
		}).format(new Date(sprint.endAt * 1000));

		return (
			<div role='button' className={`layout-row ${styles.sprint}`} onClick={this.click}>
				<div className='layout-column flex'>
					<h5>
						#{sprint.id} {sprint.name}
					</h5>

					<div className={styles.sprint__date}>
						{fromTime} - {endTime}
					</div>
				</div>

				<Ripple />
				<Icon icon='chevron_right' />
			</div>
		);
	}

	private click: () => void = (): void => {
		this.props.onClick(this.props.sprint);
	}
}
