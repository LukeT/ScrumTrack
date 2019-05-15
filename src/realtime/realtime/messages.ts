// tslint:disable

import * as RT from './realtime';


export const messages = Object.keys(RT).map(i => RT[i]);

export function sendMessage(data): Uint8Array {
	console.log(`SENDING -> ${data.constructor.name}`, data);

	const msg = data.constructor.encode(data).finish();

	const arr = new Uint8Array(msg.length + 1);
	arr[0] = messages.findIndex(i => i.name === data.constructor.name);
	arr.set(msg, 1);

	return arr;
}

export function getMessageType(bytes: Uint8Array): { type: string, message: any } {
	console.log(`RECV -> ${messages[bytes[0]].name}`, messages[bytes[0]].decode(bytes.subarray(1)));

	return { type: messages[bytes[0]].name, message: messages[bytes[0]].decode(bytes.subarray(1)) };
}
