import { IUserState, IAppState } from './../util/types';
import { Vote } from './../../realtime/realtime';

/**
 * Executed when a user casts a vote on a ticket
 *
 * @param app Application State
 * @param user User State
 * @param data Vote payload
 */
export async function vote(app: IAppState, user: IUserState, data: Vote): Promise<void> {
	// Check whether the user is in a session.
	if (!app.sessions.has(user.ws.state.session)) {
		return;
	}

	app.sessions
		.get(user.ws.state.session)
		.vote(user.userId, data.weight);
}
