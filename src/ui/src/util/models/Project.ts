import { Observable } from 'rxjs';

import { HttpService } from './HttpService';

export interface IProject {
	shortcode: string;
	name: string;
}

export class Project {
	constructor(private http: HttpService) {}

	public getAll(): Observable<IProject[]> {
		return this.http.get('project');
	}

	public getOne(name: string): Observable<IProject> {
		return this.http.get(`project/${name}`);
	}
}
