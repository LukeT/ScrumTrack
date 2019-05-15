// package: ticket.common
// file: src/app/common/proto/common.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Error extends jspb.Message { 
    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        error: string,
    }
}

export class VoidResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): Error | undefined;
    setError(value?: Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoidResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VoidResponse): VoidResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoidResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoidResponse;
    static deserializeBinaryFromReader(message: VoidResponse, reader: jspb.BinaryReader): VoidResponse;
}

export namespace VoidResponse {
    export type AsObject = {
        error?: Error.AsObject,
    }
}

export class Status extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: boolean,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export enum TicketStatus {
    OPEN = 0,
    INPROGRESS = 1,
    CLOSED = 2,
}

export enum LogType {
    SPRINT_CHANGED = 0,
    TITLE_CHANGED = 1,
    ASSIGNEE_CHANGED = 2,
    WEIGHT_CHANGED = 3,
    LOCATION_CHANGED = 4,
    STATUS_CHANGED = 5,
    REPRIORITISED = 6,
}
