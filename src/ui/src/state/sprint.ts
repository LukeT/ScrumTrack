import { ISprint, IWorkflowRule } from '../util/models/Sprint';

export interface ISprintState {
	entities: {
		sprints: { [key: string]: ISprint };
	};

	historic: {
		data: number[];
		fetching: boolean;
	};

	activeRetrospective: number;

	currentSprint: ISprint;

	edit: boolean;
	workflow: IWorkflowRule[];
	loading: boolean;
}
