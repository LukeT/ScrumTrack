// package: ticket.svc.history
// file: src/app/services/history/proto/history.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class LogItem extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;

    getSprintid(): number;
    setSprintid(value: number): void;

    getType(): common_pb.LogType;
    setType(value: common_pb.LogType): void;

    getOld(): string;
    setOld(value: string): void;

    getNew(): string;
    setNew(value: string): void;

    getInternal(): boolean;
    setInternal(value: boolean): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogItem.AsObject;
    static toObject(includeInstance: boolean, msg: LogItem): LogItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogItem;
    static deserializeBinaryFromReader(message: LogItem, reader: jspb.BinaryReader): LogItem;
}

export namespace LogItem {
    export type AsObject = {
        id: number,
        projectcode: string,
        ticketid: number,
        sprintid: number,
        type: common_pb.LogType,
        old: string,
        pb_new: string,
        internal: boolean,
        createdat: number,
    }
}

export class LogSprint extends jspb.Message { 
    getProjectcode(): string;
    setProjectcode(value: string): void;

    getSprintid(): number;
    setSprintid(value: number): void;

    getFrom(): number;
    setFrom(value: number): void;

    getTo(): number;
    setTo(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogSprint.AsObject;
    static toObject(includeInstance: boolean, msg: LogSprint): LogSprint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogSprint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogSprint;
    static deserializeBinaryFromReader(message: LogSprint, reader: jspb.BinaryReader): LogSprint;
}

export namespace LogSprint {
    export type AsObject = {
        projectcode: string,
        sprintid: number,
        from: number,
        to: number,
    }
}

export class LogTicket extends jspb.Message { 
    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogTicket.AsObject;
    static toObject(includeInstance: boolean, msg: LogTicket): LogTicket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogTicket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogTicket;
    static deserializeBinaryFromReader(message: LogTicket, reader: jspb.BinaryReader): LogTicket;
}

export namespace LogTicket {
    export type AsObject = {
        projectcode: string,
        ticketid: number,
    }
}

export class LogsResponse extends jspb.Message { 
    clearLogsList(): void;
    getLogsList(): Array<LogItem>;
    setLogsList(value: Array<LogItem>): void;
    addLogs(value?: LogItem, index?: number): LogItem;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogsResponse): LogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogsResponse;
    static deserializeBinaryFromReader(message: LogsResponse, reader: jspb.BinaryReader): LogsResponse;
}

export namespace LogsResponse {
    export type AsObject = {
        logsList: Array<LogItem.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class LogResponse extends jspb.Message { 

    hasLog(): boolean;
    clearLog(): void;
    getLog(): LogItem | undefined;
    setLog(value?: LogItem): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogResponse): LogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogResponse;
    static deserializeBinaryFromReader(message: LogResponse, reader: jspb.BinaryReader): LogResponse;
}

export namespace LogResponse {
    export type AsObject = {
        log?: LogItem.AsObject,
        error?: common_pb.Error.AsObject,
    }
}
