import { Button } from '@streamjar/ui-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { IProject } from '../../../util/models/Project';
import * as styles from './ProjectSwitcherItem.scss';

export interface IProjectSwitcherItemProps {
	isTopLevel: boolean;
	project: IProject;
	onClick(response: [React.MouseEvent<HTMLButtonElement>, IProject]): void;
}

export class ProjectSwitcherItem extends React.PureComponent<IProjectSwitcherItemProps> {
	public static defaultProps: Partial<IProjectSwitcherItemProps> = {
		onClick: (): void => {
			//
		},
	};

	public onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		this.props.onClick([event, this.props.project]);
	}

	public render(): JSX.Element {
		const { project } = this.props;

		return (
			<div className={styles.projectSwitcherItem}>
				{project && this.getProject()}
				{!project && this.getNoProject()}
			</div>
		);
	}

	public getProject(): JSX.Element {
		const { project, isTopLevel } = this.props;

		if (isTopLevel) {
			return this.getBtn();
		}

		return (
			<Link to={`/${project ? project.shortcode : '..'}/backlog`}>{this.getBtn()}</Link>
		);
	}

	public getNoProject(): JSX.Element {
		const isTopLevel: string | null = this.props.isTopLevel ? 'arrow_drop_down' : null;

		return (
			<Button
				icon={isTopLevel}
				iconRight={true}
				onClick={this.onClick}>
				<p> No project selected</p>
			</Button>
		);
	}

	public getBtn(): JSX.Element {
		const { project, isTopLevel } = this.props;
		const btnIcon: string = isTopLevel ? 'arrow_drop_down' : null;

		return (
			<Button icon={btnIcon} iconRight={true} onClick={this.onClick}>
				<div className='project layout-row layout-align-start-center'>
					<div style={{
						backgroundColor: 'grey', fontSize: 10, borderRadius: 35,
						height: 35, width: 35, textAlign: 'center', lineHeight: '15px',
						padding: 10 }}>
						{project.shortcode}
					</div>

					<div className={`layout-column layout-align-center-start flex ${styles.projectSwitcherItem__content}`}>
						<h5 className={`${styles.projectSwitcherItem__name} jar-truncate`}>
							{project.name}
						</h5>
					</div>
				</div>
			</Button>
		);
	}
}
