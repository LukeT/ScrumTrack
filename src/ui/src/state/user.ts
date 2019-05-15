import { IUser } from './auth';

export interface IUserState {
	users: IUser[];
	saving: { [key: string]: boolean; create: boolean };
	loading: boolean;
	updatedPassword: boolean;
}
