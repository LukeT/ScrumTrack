import { ISprintState } from '../state/sprint';
import { IWorkflowRule } from '../util/models/Sprint';
import { ProjectActionTypes } from './../actions/project';
import { SprintAction, SprintActionTypes } from './../actions/sprint';

export const defaultSprintState: ISprintState = {
	edit: false,
	workflow: [],
	currentSprint: null,
	loading: false,

	historic: {
		fetching: false,
		data: [],
	},
	entities: {
		sprints: {},
	},
	activeRetrospective: null,
};

export function sprint(state: ISprintState = defaultSprintState, action: SprintAction): ISprintState {
	switch (action.type) {
		case <any>ProjectActionTypes.SELECT_PROJECT:
			return {
				...state,
				currentSprint: null,
			};

		case SprintActionTypes.SET_CURRENT_SPRINT:
			return { ...state, currentSprint: action.payload.sprint };

		case SprintActionTypes.TOGGLE_EDIT:
			return { ...state, edit: action.payload.enabled };

		case SprintActionTypes.GET_WORKFLOW:
			return { ...state, loading: true };

		case SprintActionTypes.SET_WORKFLOW:
			return { ...state, workflow: action.payload.workflow.sort((a: IWorkflowRule, b: IWorkflowRule) => a.order - b.order), loading: false };

		case SprintActionTypes.CREATED_WORKFLOW:
			if (action.payload.rule === null) {
				return state;
			}

			let workflow: IWorkflowRule[] = [...state.workflow, action.payload.rule];

			return { ...state, workflow };

		case SprintActionTypes.UPDATED_WORKFLOW:
			let rules: IWorkflowRule[] = [...state.workflow];

			if (action.payload.rule) {
				rules = rules.map((r: IWorkflowRule) => {
					if (r.id === action.payload.rule.id) {
						return action.payload.rule;
					}

					return r;
				});
			}

			return { ...state, workflow: rules };


		case SprintActionTypes.DELETED_WORKFLOW:
			return { ...state, workflow: state.workflow.filter((i: IWorkflowRule) => i.id !== action.payload.id) };

		case SprintActionTypes.GET_HISTORIC_SPRINTS:
			return { ...state, historic: { ...state.historic, fetching: true } };

		case SprintActionTypes.SET_HISTORIC_SPRINTS:
			const data = action.payload.sprints.map(i => i.id);
			const sprints = { ...state.entities.sprints };

			action.payload.sprints.forEach(i => {
				sprints[i.id] = i;
			});

			return { ...state, historic: { ...state.historic, fetching: false, data }, entities: { ...state.entities, sprints }};

		case SprintActionTypes.SELECT_RETROSPECTIVE:
			return { ...state, activeRetrospective: action.payload.id };

		default:
			return state;
	}
}
