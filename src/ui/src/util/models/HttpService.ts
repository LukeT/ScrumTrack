import * as cookies from 'js-cookie';
import { Observable, Subject } from 'rxjs';
import { config } from './../../../config';

export class InvalidResponseError extends Error {
	public statusCode: number;
	public response: Response;

	constructor(response: Response) {
		super(`Error ${response.status}`);
		this.statusCode = response.status;
		this.response = response;

		Object.setPrototypeOf(this, InvalidResponseError.prototype);
	}
}

export class HttpService {
	public static ENDPOINT: string = config.apiHostname;

	// tslint:disable-next-line
	public get<T>(uri: string): Observable<T> {
		return this.request<T>('GET', uri);
	}

	public post<T>(uri: string, body: any): Observable<T> {
		return this.request<T>('POST', uri, body);
	}

	public patch<T>(uri: string, body: any): Observable<T> {
		return this.request<T>('PATCH', uri, body);
	}

	public put<T>(uri: string, body: any): Observable<T> {
		return this.request<T>('PUT', uri, body);
	}

	// tslint:disable-next-line
	public delete<T>(uri: string): Observable<T> {
		return this.request<T>('DELETE', uri);
	}

	private request<T>(method: string, url: string, body?: string): Observable<T> {
		const obs: Subject<T> = new Subject<T>();
		const headers: { [key: string]: string } = {};

		let bodyValue: string;

		if (cookies.get('token')) {
			headers.Authorization = `Bearer ${cookies.get('token')}`;
		}

		if (body) {
			bodyValue = JSON.stringify(body);
			headers['Content-Type'] = 'application/json';
		}

		fetch(this.buildUrl(url), {
			method: method.toUpperCase(),
			headers: headers,
			body: bodyValue,
		}).then((value: Response) => {
			if (!value.ok) {
				throw new InvalidResponseError(value);
			}

			if (value.status === 204) {
				return null;
			}

			return value.json();
		}).then((value: any) => {
			obs.next(value.data);
			obs.complete();
		}).catch((err: InvalidResponseError) => {
			(err.response.json ? err.response.json() : Promise.reject())
				.then((cErr: { error: string }) => {
					obs.error(new Error(cErr.error));
					obs.complete();
				})
				.catch(() => {
					obs.error(err);
					obs.complete();
				});
		});

		return obs;
	}

	private buildUrl(url: string): string {
		return `${HttpService.ENDPOINT}/${url}`;
	}
}
