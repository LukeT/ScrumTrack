import * as grpc from 'grpc';

import { ProjectsClient } from './../../services/services/project/proto/project_grpc_pb';
import { IUserState, IAppState } from './../util/types';
import { BeginPlanningSession } from './../../realtime/realtime';
import { ServiceRegistry } from '../util/ServiceRegistry';
import { Shortcode } from '../../services/services/project/proto/project_pb';
import { PlanningSession } from '../lib/PlanningSession';

/**
 * Create a new planning session
 *
 * @param app Application State
 * @param user User State
 * @param data Creation Payload
 */
export async function beginPlanningSession(app: IAppState, user: IUserState, data: BeginPlanningSession): Promise<void> {
	// Check that the user is admin and the project exists.
	if (app.sessions.has(data.project) || user.role !== 'admin') {
		return;
	}

	// Lookup to the project service
	const client = new ProjectsClient(await ServiceRegistry.get('ticket.svc.project'), grpc.credentials.createInsecure());
	const shortcode = new Shortcode();

	shortcode.setShortcode(data.project);

	// Fetch the project
	client.get(shortcode, (err, data) => {
		// Project can't be found.
		if (err || data.hasError()) {
			return;
		}

		// Create the session.
		const session = new PlanningSession(app, data.getProject().getShortcode(), user.userId);
		app.sessions.set(data.getProject().getShortcode(), session);

		console.debug(`🎚 Created new planning sesion for project: ${shortcode.getShortcode()}`);

		// add the user to the session
		user.session = session.projectId;
	});
}
