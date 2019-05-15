import * as WebSocket from 'ws';

import { PlanningSession } from '../lib/PlanningSession';

export interface IUserState {
	ws: WebSocketWithState;
	send(data: any): void;
	userId?: number;
	role?: string;
	session: string | null;
}

export interface IAppState {
	sessions: Map<string, PlanningSession>;
	users: Map<number, Set<WebSocketWithState>>
}

export interface WebSocketWithState extends WebSocket {
	state: IUserState;
}
