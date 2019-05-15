import { IUserState, IAppState } from './../util/types';
import { Vote, CastAction } from './../../realtime/realtime';

/**
 * Executed when a user casts a vote on a ticket
 *
 * @param app Application State
 * @param user User State
 * @param data Vote payload
 */
export async function cast(app: IAppState, user: IUserState, data: CastAction): Promise<void> {
	const session = app.sessions.get(user.ws.state.session);

	// Check whether the user is in a session.
	if (!session || user.userId !== session.creatorId ) {
		return;
	}

	session.act(data);
}
