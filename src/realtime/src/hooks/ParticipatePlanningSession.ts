import { ParticipatePlanningSession, LeftSession } from '../../realtime/realtime';
import { IAppState, IUserState } from '../util/types';

/**
 * Handle a user joining or leaving a planning session
 *
 * @param app Application State
 * @param user User state
 * @param data Planning session payload
 */
export function participatePlanningSession(app: IAppState, user: IUserState, data: ParticipatePlanningSession): void {
	// Check whether a project has a session
	if (!app.sessions.has(data.project)) {
		console.warn('Attempting to join a project that doesn\'t exist.', data);

		return;
	}

	const session = app.sessions.get(data.project);

	// The user wishes to join
	if (data.inSession && !user.session) {
		user.session = data.project;
		session.addParticipant(user.userId);
		session.remindUser(user.userId);

		console.debug(`🎚 User: ${user.userId} has joined planning session ${data.project}`);

		// The user wishes to leave
	} else if (!data.inSession && user.session) {
		if (user.userId === session.creatorId) {
			session.end();

			return;
		}

		user.session = null;
		session.removeParticipant(user.userId);

		// The user is no longer planning.
		user.send(new LeftSession({ project: data.project }));
	}
}
