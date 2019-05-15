import { Menu } from '@streamjar/ui-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ProjectAction } from '../../../actions/project';
import { ProjectSwitcherItem } from '../../../components/common/layout/ProjectSwitcherItem';
import { IState } from '../../../state';
import { IProject } from '../../../util/models/Project';

export interface IProjectSwitcherProps {
	projects: IProject[];
	selected: IProject | null;
}

export interface IProjectSwitcherDispatchProps {
	getProjects(): void;
}

export interface IAnchorState {
	anchor: HTMLButtonElement | null;
}

export type ProjectSwitcherProps = IProjectSwitcherDispatchProps & IProjectSwitcherProps;

class ProjectSwitcher extends React.PureComponent<ProjectSwitcherProps, IAnchorState> {
	constructor(props: ProjectSwitcherProps) {
		super(props);

		this.state = { anchor: null };
	}

	public componentDidMount(): void {
		if (!this.props.projects.length) {
			this.props.getProjects();
		}
	}

	public onClickMenu = (data?: MouseEvent): void => {
		const target: any = data && data.target;

		this.setState((state: IAnchorState) => {
			if (state.anchor || !target) {
				return { anchor: null };
			}

			return { anchor: target };
		});
	}

	public onClickTopLevel = (response: [React.MouseEvent<HTMLButtonElement>, IProject]): void => {
		this.onClickMenu(response[0] as any);
	}

	public render(): JSX.Element {
		return (
			<>
				<ProjectSwitcherItem
					onClick={this.onClickTopLevel}
					isTopLevel={true}
					project={this.props.selected} />

				<Menu anchor={this.state.anchor} onClose={this.onClickMenu} anchorWidth={true}>
					{this.getRemainingProjects()}

					{/* <hr className={styles.projectRule} /> */}

					{/* <Button icon='add'> Create new project </Button> */}
				</Menu>
			</>
		);
	}

	private getRemainingProjects(): JSX.Element[] {
		return this.props.projects
			.filter((i: IProject) => !this.props.selected || i.shortcode !== this.props.selected.shortcode).map((project: IProject) => (
				<ProjectSwitcherItem key={project.shortcode} project={project} />
			),
		);
	}
}

function mapStateToProps(state: IState): IProjectSwitcherProps {
	return {
		projects: state.project.results.map((i: string) => state.project.entities.projects[i]),
		selected: state.project.entities.projects[state.project.activeProject],
	};
}

function mapDispatchToProps(dispatch: Dispatch): IProjectSwitcherDispatchProps {
	return {
		getProjects(): void {
			dispatch(ProjectAction.getProjectsRequest());
		},
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSwitcher);
