import { AuthClient } from '../../services/services/auth/proto/auth_grpc_pb';
import * as grpc from 'grpc';
import { Session } from '../../services/services/auth/proto/auth_pb';
import { ServiceRegistry } from './ServiceRegistry';

/**
 * Verify an authentication token is valid
 *
 * @param token JWT token
 */
export function validateJWT(token: string): Promise<{ role: string; userId: number }> {
	let client: AuthClient;

	return new Promise(async (resolve, reject) => {
		// Connect to the authentication service
		client = new AuthClient(await ServiceRegistry.get('ticket.svc.auth'), grpc.credentials.createInsecure());

		const sess = new Session();
		sess.setToken(token);

		// Check the token is valid
		client.validate(sess, (err, data) => {
			client.close();

			if (err) {
				ServiceRegistry.clear('ticket.svc.auth');

				return reject(err);
			}

			return resolve({ role: data.getRole(), userId: data.getUserid() });
		});
	});
}
