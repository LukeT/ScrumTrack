import * as React from 'react';
import { Icon } from '@streamjar/ui-react';

export class PickRetrospective extends React.PureComponent {
	public render(): JSX.Element {
		return (
			<div className='flex layout-align-center-center layout-column' style={{ color: '#FFF'}}>
				<div style={{ padding: 10 }}>
					<Icon icon="info" />
				</div>
				<h5> Pick a retrospective</h5>
				<p style={{ opacity: 0.5 }}> Please pick a retrospective to inspect it. </p>
			</div>
		);
	}
}
