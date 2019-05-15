import { Tooltip } from '@streamjar/ui-react';
import * as React from 'react';

// tslint:disable-next-line function-name
export function OptionalTooltip(props: { text: string; enabled: boolean; children: JSX.Element}): JSX.Element {
	if (props.enabled) {
		return props.children;
	}

	return (
		<Tooltip message={props.text}>
			{props.children}
		</Tooltip>
	);
}
