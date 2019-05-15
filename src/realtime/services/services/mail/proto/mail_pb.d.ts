// package: ticket.svc.mail
// file: src/app/services/mail/proto/mail.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Envelope extends jspb.Message { 
    getTo(): string;
    setTo(value: string): void;

    getName(): string;
    setName(value: string): void;

    getTemplate(): string;
    setTemplate(value: string): void;


    getVariablesMap(): jspb.Map<string, string>;
    clearVariablesMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Envelope.AsObject;
    static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Envelope;
    static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope;
}

export namespace Envelope {
    export type AsObject = {
        to: string,
        name: string,
        template: string,

        variablesMap: Array<[string, string]>,
    }
}

export class Stamp extends jspb.Message { 
    getSent(): boolean;
    setSent(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stamp.AsObject;
    static toObject(includeInstance: boolean, msg: Stamp): Stamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stamp;
    static deserializeBinaryFromReader(message: Stamp, reader: jspb.BinaryReader): Stamp;
}

export namespace Stamp {
    export type AsObject = {
        sent: boolean,
    }
}
