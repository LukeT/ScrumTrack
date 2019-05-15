import * as React from 'react';
import { IResults, IResultWeight } from '../../../../realtime/realtime';

import * as classNames from 'classnames';

export interface IResultsProps {
	results: IResults;
}

import * as styles from './Results.scss';

export class Results extends React.PureComponent<IResultsProps> {
	public render(): JSX.Element {
		const { results } = this.props;

		return (
			<div className={`${styles.tlContainer} flex`}>
				<p> Voting is over. Here are the results: </p>

				<div className="timeline layout-row layout-wrap layout-align-around-center" style={{ flex: `${100 / 13}%` }}>
					{results.current.weights.map(i => this.getWeight(i))}
				</div>

				<div className={styles.tl}></div>

				<div className={`${styles.legend} layout-row`}>
					<div className='layout-row layout-align-center-center'>
						<div className={`${styles.block} ${styles.block__primary}`}></div> <p>Preferred Weight</p>
					</div>

					<div className='layout-row layout-align-center-center'>
						<div className={`${styles.block} ${styles.block__outlier}`}></div> <p>Outlier</p>
					</div>

					<div className='layout-row layout-align-center-center'>
						<div className={`${styles.block} ${styles.block__median}`}></div> <p>Median</p>
					</div>
				</div>
			</div>
		);
	}

	private getWeight(i: IResultWeight): JSX.Element {

		const classes = classNames(styles.section, {
			[styles.median]: i.isMedian,
			[styles.outlier]: i.isOutlier,
			[styles.noVotes]: i.voters.length === 0,
			[styles.primary]: i.preferred,
		});

		return (
			<div className={classes} key={i.weight}>
				<div className={styles.needleTop}>{i.weight}</div>
				<div className={styles.needle}>
				</div>
				<div className={styles.needleLower}>
					<div className={styles.needleLowerA}>{i.voters.length}</div>
					<div className={styles.needleLowerB}>votes</div>
				</div>
			</div>
		)
	}
}
