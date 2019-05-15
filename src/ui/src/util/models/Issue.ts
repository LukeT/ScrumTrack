import { Observable } from 'rxjs';

import { HttpService } from './HttpService';
import { map } from 'rxjs/operators';

export interface ITicket {
	id: any;
	title: string;
	body: string;
	location: string;
	order: string;
	weight: number;
	workflowId: number;
	assigneeId: number;
	creatorId: number;
	status: string;
	category: string;
}

export interface ITicketComment {
	id: number;
	projectId: string;
	body: string;
	userId: number;
}

export enum LogType {
	SPRINT = 'sprint',
	TITLE = 'title',
	ASSIGNEE = 'assignee',
	WEIGHT = 'weight',
	LOCATION = 'location',
	STATUS = 'status',
	REPRIORITISED = 'reprioritised',
}

export interface ITicketHistory {
	id: number;
	createdAt: number;
	newValue: string;
	oldValue: string;
	sprintId: number;
	internal: boolean;
	ticketId: string;
	type: LogType; // tslint:disable-line
}

export class Ticket {
	constructor(private http: HttpService) {}

	public getCategories(projectId: string): Observable<string[]> {
		return this.http.get<{ name: string; count: number}[]>(`ticket/${projectId}/categories`)
			.pipe(map(i => i.map(i=>i.name)));
	}

	public getAll(projectId: string, scope: string, workflowId?: number): Observable<ITicket[]> {
		return this.http.get(`ticket/${projectId}/find/${scope}${workflowId ? `?workflowId=${workflowId}` : ''}`);
	}

	public getOne(projectId: string, id: string): Observable<ITicket> {
		return this.http.get(`ticket/${projectId}/${id}`);
	}

	public create(projectId: string, ticket: { title: string; body: string }): Observable<ITicket> {
		return this.http.post<ITicket>(`ticket/${projectId}`, ticket);
	}

	public update(projectId: string, ticketId: string, ticket: { title: string; body: string }): Observable<ITicket> {
		return this.http.patch<ITicket>(`ticket/${projectId}/${ticketId}`, ticket);
	}

	public getComments(ticketId: string): Observable<ITicketComment[]> {
		return this.http.get(`ticket/${ticketId.replace('-', '/')}/comments`);
	}

	public createComment(ticketId: string, body: string): Observable<ITicketComment> {
		return this.http.post(`ticket/${ticketId.replace('-', '/')}/comments`, { body });
	}

	public getHistory(ticketId: string): Observable<ITicketHistory[]> {
		return this.http.get<ITicketHistory[]>(`ticket/${ticketId.replace('-', '/')}/history`)
			.pipe(map((items: ITicketHistory[]) => {
				return items.sort((a: ITicketHistory, b: ITicketHistory) => {
					return a.createdAt - b.createdAt;
				});
			}));
	}

	public getHistoryBySprint(projectId: string, sprintId: number, from: number = 0): Observable<ITicketHistory[]> {
		return this.http.get<ITicketHistory[]>(`ticket/${projectId}/history/${sprintId}${from > 0 ? `?from=${Math.floor(from / 1000)}` : ''}`)
			.pipe(map((items: ITicketHistory[]) => {
				return items.sort((a: ITicketHistory, b: ITicketHistory) => {
					return a.createdAt - b.createdAt;
				});
			}));
	}

	public moveTicket(fromId: string, previousId: string, sprintId?: number): Observable<void> {
		const id: string = previousId ? previousId.split('-')[1] : null;
		const body: { sprintId: number; previousTicket: number } = { previousTicket: id ? +id : null , sprintId };

		if (!sprintId) {
			delete body.sprintId;
		}

		return this.http.post(`ticket/${fromId.replace('-', '/')}/move`, body);
	}

	public moveSprint(ticketId: string, workflowId: number, order: number): Observable<void> {
		return this.http.post(`ticket/${ticketId.replace('-', '/')}/move-sprint`, { workflowId, order});
	}
}
