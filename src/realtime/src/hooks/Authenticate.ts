import { Authenticate, Authenticated, PlanSessionActive } from '../../realtime/realtime';
import { validateJWT } from '../util/JWT';
import { IAppState, IUserState } from '../util/types';

/**
 * Authenticate a user with the service.
 *
 * @param app Application State
 * @param user User State
 * @param data Authentication Payload
 */
export function authenticate(app: IAppState, user: IUserState, data: Authenticate): void {
	// Verify that the token is valid
	validateJWT(data.jwt)
		.then(data => {
			user.userId = data.userId;
			user.role = data.role;

			// Keep track of the websocket
			if (app.users.has(data.userId)) {
				app.users.get(data.userId).add(user.ws);
			} else {
				app.users.set(data.userId, new Set([user.ws]));
			}

			console.debug(`🔑 New authenticated connection from ${data.userId} (${data.role})`);

			// Remind the user they're authenticated
			user.send(new Authenticated({ status: true }));

			// For all sessions, tell the user about projects
			app.sessions.forEach(session => {
				user.send(new PlanSessionActive({ project: session.projectId }));

				// If they're in the project, send down the state.
				if (session.isParticipant(data.userId)) {
					session.remindUser(data.userId);
				}
			});
		})
		.catch(() => {
			// Unable to authenticate the user.
			user.send(new Authenticated({ status: false, message: 'Invalid JWT' }));
		});
}
