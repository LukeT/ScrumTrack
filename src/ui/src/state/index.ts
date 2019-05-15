import { IAppState } from './app';
import { IAuthState } from './auth';
import { IPlanningState } from './planning';
import { IProjectState } from './project';
import { ISprintState } from './sprint';
import { IUserState } from './user';

export interface IState {
	auth: IAuthState;
	user: IUserState;
	project: IProjectState;
	sprint: ISprintState;
	app: IAppState;
	planning: IPlanningState;
}
