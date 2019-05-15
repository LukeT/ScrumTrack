import * as React from 'react';

import * as styles from './Status.scss';

export class Status extends React.PureComponent<{ status: string }> {
	public render(): JSX.Element {
		const status: string = this.getText(this.props.status);

		return (
			<span className={`${styles.status} ${styles[`status--${this.props.status}`]}`}>{status}</span>
		);
	}

	private readonly getText: (str: string) => string = (status: string): string => {
		if (status === 'open') {
			return 'Open';
		}

		if (status === 'in-progress') {
			return 'In Progress';
		}

		return 'Closed';
	}
}
