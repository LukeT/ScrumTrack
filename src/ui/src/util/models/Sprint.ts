import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpService } from './HttpService';

export interface ISprint {
	id: number;
	name: string;
	duration: number;
	startAt: number | null;
	endAt: number | null;
}

export enum ISprintCommentKind {
	GOOD = 'good',
	BAD = 'bad',
}

export interface ISprintComment {
	id: number;
	type: ISprintCommentKind;
	authorId: number;
	message: string;
	createdAt: number;
	sprintId: number;
	projectCode: string;
	resolvedId: number;
}

export interface IWorkflowBaseRule {
	allow: number[] | null;
	maxItems: number;
	name: string;
	order: number;
	status: 'open' | 'in-progress' | 'closed';
}

export interface IWorkflowRule extends IWorkflowBaseRule {
	id: number;
}

export class Sprint {
	constructor(private readonly http: HttpService) {}

	public getLatestSprint(projectId: string): Observable<ISprint> {
		return this.http.get<ISprint>(`sprint/${projectId}/active`);
	}

	public getHistoricSprints(projectId: string): Observable<ISprint[]> {
		return this.http.get<ISprint[]>(`sprint/${projectId}/history`)
			.pipe(map((items: ISprint[]) => {
				return items.sort((a: ISprint, b: ISprint) => {
					return b.endAt - a.endAt;
				});
			}));
	}

	public startSprint(projectId: string): Observable<ISprint> {
		return this.http.post<ISprint>(`sprint/${projectId}/active/start`, {});
	}

	public stopSprint(projectId: string): Observable<ISprint> {
		return this.http.post<ISprint>(`sprint/${projectId}/active/stop`, {});
	}

	public create(projectId: string, goal: string, duration: number): Observable<ISprint> {
		return this.http.post<ISprint>(`sprint/${projectId}`, { goal, duration });
	}

	public getWorkflow(): Observable<IWorkflowRule[]> {
		return this.http.get('workflow');
	}

	public createWorkflow(rule: IWorkflowBaseRule): Observable<IWorkflowRule> {
		return this.http.post(`admin/workflow`, rule);
	}

	public updateWorkflow(rule: IWorkflowRule): Observable<IWorkflowRule> {
		return this.http.patch(`admin/workflow/${rule.id}`, rule);
	}

	public deleteWorkflow(rule: number): Observable<void> {
		return this.http.delete(`admin/workflow/${rule}`);
	}

	public getComments(projectId: string, sprintId: number): Observable<ISprintComment[]> {
		return this.http.get<ISprintComment[]>(`sprint/${projectId}/${sprintId}/comments`);
	}

	public getPastComments(projectId: string, sprintId: number): Observable<ISprintComment[]> {
		return this.http.get<ISprintComment[]>(`sprint/${projectId}/${sprintId}/comments/past`);
	}

	public createComment(projectId: string, sprintId: number, type: ISprintCommentKind, message: string): Observable<ISprintComment> {
		return this.http.post<ISprintComment>(`sprint/${projectId}/${sprintId}/comments`, { type, message });
	}

	public deleteComment(projectId: string, sprintId: number, commentId: number): Observable<void> {
		return this.http.delete<void>(`sprint/${projectId}/${sprintId}/comments/${commentId}`);
	}

	public resolveComment(projectId: string, sprintId: number, commentId: number): Observable<void> {
		return this.http.post<void>(`sprint/${projectId}/${sprintId}/comments/${commentId}/resolve`, {});
	}
}
