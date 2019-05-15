import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../../state/auth';
import { HttpService } from './HttpService';

export interface IPasswordChange {
	password: string;
	newPassword: string;
}

export class User {
	constructor(private http: HttpService) {}

	public getAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>('user');
	}

	public getCurrent(): Observable<IUser> {
		return this.http.get<IUser>('user/current');
	}

	public adminGetAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>('admin/user/');
	}

	public adminUpdate(user: IUser): Observable<IUser> {
		return this.http.patch<IUser>(`admin/user/${user.id}`, user);
	}

	public create(user: IUser): Observable<IUser> {
		return this.http.post<{ id: number }>('admin/user/', user)
			.pipe(map((resp: { id: number }) => {
				user.id = resp.id;

				return user;
			}));
	}

	public destroy(user: number): Observable<void> {
		return this.http.delete<void>(`admin/user/${user}`);
	}

	public updatePassword(pass: IPasswordChange): Observable<void> {
		return this.http.post<void>(`user/current/password`, pass);
	}

	public update(user: IUser): Observable<IUser> {
		return this.http.patch<IUser>(`user/current`, user);
	}
}
