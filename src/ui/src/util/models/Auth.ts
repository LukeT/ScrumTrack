import { Observable } from 'rxjs';

import { HttpService } from './HttpService';

export class Auth {
	constructor(private http: HttpService) {}

	public login(username: string, password: string): Observable<{ token: string }> {
		return this.http.post('auth/login', { username, password });
	}

	public forgot(email: string): Observable<boolean> {
		return this.http.post<boolean>('auth/forgot', { email });
	}

	public reset(data: { id: string; token: string; password: string }): Observable<void> {
		return this.http.post<void>(`auth/reset/${data.id}/${data.token}`, { password: data.password });
	}
}
