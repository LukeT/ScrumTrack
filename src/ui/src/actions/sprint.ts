import { action, ActionsUnion } from '../util/helpers';
import { ISprint, IWorkflowRule, IWorkflowBaseRule } from '../util/models/Sprint';

export enum SprintActionTypes {
	GET_CURRENT_SPRINT = 'GET_CURRENT_SPRINT',
	SET_CURRENT_SPRINT = 'SET_CURRENT_SPRINT',

	TOGGLE_EDIT = 'TOGGLE_EDIT',

	GET_WORKFLOW = 'GET_WORKFLOW',
	SET_WORKFLOW = 'SET_WORKFLOW',

	CREATE_WORKFLOW = 'CREATE_WORKFLOW',
	CREATED_WORKFLOW = 'CREATED_WORKFLOW',

	UPDATE_WORKFLOW = 'UPDATE_WORKFLOW',
	UPDATED_WORKFLOW = 'UPDATED_WORKFLOW',

	DELETE_WORKFLOW = 'DELETE_WORKFLOW',
	DELETED_WORKFLOW = 'DELETED_WORKFLOW',

	START_SPRINT = 'START_SPRINT',
	STOP_SPRINT = 'STOP_SPRINT',
	CREATE_SPRINT = 'CREATE_SPRINT',
	SET_WORKFLOW_ITEMS = 'SET_WORKFLOW_ITEMS',

	GET_HISTORIC_SPRINTS = 'GET_HISTORIC_SPRINTS',
	SET_HISTORIC_SPRINTS = 'SET_HISTORIC_SPRINTS',

	SELECT_RETROSPECTIVE = 'SELECT_RETROSPECTIVE',
}

// tslint:disable
export const SprintAction = {
	// Sprint actions
	getCurrentSprint: (projectId: string) => action(SprintActionTypes.GET_CURRENT_SPRINT, { projectId }),
	setCurrentSprint: (sprint: ISprint) => action(SprintActionTypes.SET_CURRENT_SPRINT, { sprint }),
	startSprint: (projectId: string) => action(SprintActionTypes.START_SPRINT, { projectId }),
	stopSprint: (projectId: string) => action(SprintActionTypes.STOP_SPRINT, { projectId }),

	createSprint: (projectId: string, goal: string, duration: number) => action(SprintActionTypes.CREATE_SPRINT, { projectId, goal, duration}),
	setWorkflowItems: (wf: { [key: number]: string[] }) => action(SprintActionTypes.SET_WORKFLOW_ITEMS, { wf }),

	// Workflow Actions
	getWorkflow: () => action(SprintActionTypes.GET_WORKFLOW),
	setWorkflow: (workflow: IWorkflowRule[]) => action(SprintActionTypes.SET_WORKFLOW, { workflow }),
	toggleEdit: (enabled: boolean) => action(SprintActionTypes.TOGGLE_EDIT, { enabled }),

	createWorkflow: (rule: IWorkflowBaseRule) => action(SprintActionTypes.CREATE_WORKFLOW, { rule }),
	createdWorkflow: (rule: IWorkflowRule) => action(SprintActionTypes.CREATED_WORKFLOW, { rule }),

	updateWorkflow: (rule: IWorkflowRule) => action(SprintActionTypes.UPDATE_WORKFLOW, { rule }),
	updatedWorkflow: (rule: IWorkflowRule) => action(SprintActionTypes.UPDATED_WORKFLOW, { rule }),
	deleteWorkflow: (rule: number) => action(SprintActionTypes.DELETE_WORKFLOW, { id: rule }),
	deletedWorkflow: (rule: number) => action(SprintActionTypes.DELETED_WORKFLOW, { id: rule }),

	getHistoricSprints: (projectId: string) => action(SprintActionTypes.GET_HISTORIC_SPRINTS, { projectId }),
	setHistoricSprints: (sprints: ISprint[]) => action(SprintActionTypes.SET_HISTORIC_SPRINTS, { sprints }),

	selectRetrospective: (id: number) => action(SprintActionTypes.SELECT_RETROSPECTIVE, { id }),
};

export type SprintAction = ActionsUnion<typeof SprintAction>;
