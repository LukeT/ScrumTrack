import { HttpService } from './models/HttpService';

// tslint:disable no-reserved-keywords
export interface IAction<T extends string> {
	type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
	payload: P;
}

export function action<T extends string>(type: T): IAction<T>;
export function action<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>;
export function action<T extends string, P>(type: T, payload?: P): { type: T; payload?: P} {
	return payload === undefined ? { type } : { type, payload };
}

export type ActionsUnion<A extends { [actionCreator: string]: (...args: any[]) => any }> = ReturnType<A[keyof A]>;
// tslint:enable no-reserved-keywords

export const api: HttpService = new HttpService();

export const getApi: <T>(item: new (a: HttpService) => T) => T = <T>(item: new (a: HttpService) => T): T => {
	return new (<any>item)(api);
};
// https://stackoverflow.com/questions/23593052/format-javascript-date-to-yyyy-mm-dd
// tslint:disable
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
// tslint:enable

export function groupByDate<T>(data: T[], key: keyof T): { [key: string]: T[] } {
	const d: { [key: string]: any[] } = {};

	data.forEach((i: any) => {
		const date: string = formatDate(i[key] * 1000);

		if (!d[date]) {
			d[date] = [];
		}

		d[date].push(i);
	});

	return d;
}
