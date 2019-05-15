import * as WebSocket from 'ws';

import { PlanningSession } from './lib/PlanningSession';
import { getMessageType, sendMessage } from '../realtime/messages';
import { IUserState, IAppState, WebSocketWithState } from './util/types';
import { authenticate } from './hooks/Authenticate';
import { participatePlanningSession } from './hooks/ParticipatePlanningSession';
import { beginPlanningSession } from './hooks/BeginPlanningSession';
import { vote } from './hooks/Vote';
import { config } from './util/config';
import { cast } from './hooks/CastAction';

// Create the web-socket server.
const server = new WebSocket.Server({ port: config.web.port, host: config.web.hostname });

// Global application state
const appState: IAppState = {
	sessions: new Map<string, PlanningSession>(),
	users: new Map<number, Set<WebSocketWithState>>(),
}

// Register all remote hooks
const hooks: { [key: string]: (app: IAppState, user: IUserState, msg: any) => void } = {
	Authenticate: authenticate,
	ParticipatePlanningSession: participatePlanningSession,
	BeginPlanningSession: beginPlanningSession,
	Vote: vote,
	CastAction: cast,
}

server.on('connection', (ws: WebSocketWithState) => {
	const state: IUserState = {
		ws,
		session: null,
		send(data: any) {
			ws.send(sendMessage(data));
		}
	}

	ws.state = state;

	// Handle authentication failure.
	setTimeout(() => {
		// If the client hasn't authenticated within 10 seconds, close the connection.
		if (ws.readyState === WebSocket.OPEN && !state.userId) {
			ws.close();
		}
	}, 10000);

	/**
	 * Handle remote messages
	 */
	ws.on('message', (data) => {
		// Infer message type from the protobuf
		const type = getMessageType(<Uint8Array>data.valueOf());


		if (hooks.hasOwnProperty(type.type)) {
			// If the hook isn't Authentication, the user is un-authenticated, bail.
			if (type.type !== 'Authenticate' && !state.userId) {
				return;
			}

			// Execute the hook
			hooks[type.type](appState, state, type.message);
		}
	});

	/**
	 * Handle client disconnections
	 */
	const handleError = () => {
		if (state.userId) {
			appState.users.get(state.userId).delete(ws);

			// If the user is in a session, remove them
			if (state.session && appState.sessions.has(state.session)) {
				appState.sessions.get(state.session).removeParticipant(state.userId);
			}
		}
	}

	// Handle client errors and disconnectons
	ws.on('close', handleError);
	ws.on('error', handleError);
})

console.debug(`✅ Realtime API listening at ws://${config.web.hostname}:${config.web.port}`);
