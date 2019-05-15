import * as request from 'request-promise';
import { config } from './config';

// Service Discovery Endpoint
const CONSUL_API = `http://${config.consul.hostname}:${config.consul.port}`;

export interface IServiceDefinition {
	host: string;
	port: number;
}

// Registry of remote services.
const REGISTRY = new Map<string, IServiceDefinition>();

/**
 * Caching service registry.
 *
 * Maps a service identifier to the ip/port combo
 */
export module ServiceRegistry {
	/**
	 * Lookup a service name from the service discovery agent.
	 *
	 * @param name Service Name
	 */
	export function lookup(name: string): Promise<void> {
		return request.get(`${CONSUL_API}/v1/catalog/service/${name}`, { json: true })
			.then(data => {
				REGISTRY.set(name, { host: data[0].ServiceAddress, port: data[0].ServicePort });
			});
	}

	/**
	 * Fetch a service destination
	 *
	 * Fetches a service discovery agent, caching as we go
	 */
	export async function get(name: string): Promise<string> {
		// Fetch from the cache
		const def = REGISTRY.has(name);

		// hmm, doesn't exist.
		if (!def) {
			await lookup(name);
		}

		// It exists! return from the registry
		const item = REGISTRY.get(name);

		return `${item.host}:${item.port}`;
	}

	/**
	 * Remove a service from the registry.
	 *
	 * @param name  Name of the service.
	 */
	export function clear(name: string): void {
		REGISTRY.delete(name);
	}
}
