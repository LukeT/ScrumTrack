export interface IUser {
	id?: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	password?: string;
	role: string;
	avatar: string;
}

export enum IAuthStatus {
	AUTHENTICATED,
	UNAUTHENTICATED,
	PENDING,
}

export interface IAuthState {
	user: IUser;
	loading: {
		login: boolean;
		saving: boolean;
	};
	state: {
		auth: IAuthStatus;
	};
}
