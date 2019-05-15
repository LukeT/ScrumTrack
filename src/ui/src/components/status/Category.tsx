import * as React from 'react';

import * as styles from './Category.scss';

const ColorHash = require('color-hash');
const colorHash = new ColorHash();


export class Category extends React.PureComponent<{ category: string }> {
	public render(): JSX.Element {
		return (
			<span className={`${styles.category}`} style={{ backgroundColor: colorHash.hex(this.props.category )}}>{this.props.category}</span>
		);
	}
}
