// package: ticket.svc.auth
// file: src/app/services/auth/proto/auth.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class SessionState extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): void;

    getRole(): string;
    setRole(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionState.AsObject;
    static toObject(includeInstance: boolean, msg: SessionState): SessionState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionState;
    static deserializeBinaryFromReader(message: SessionState, reader: jspb.BinaryReader): SessionState;
}

export namespace SessionState {
    export type AsObject = {
        userid: number,
        role: string,
    }
}

export class Session extends jspb.Message { 
    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        token: string,
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
