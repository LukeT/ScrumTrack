// package: ticket.router
// file: src/app/router/proto/router.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Request extends jspb.Message { 
    getMethod(): string;
    setMethod(value: string): void;

    getPath(): string;
    setPath(value: string): void;


    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;


    getParamsMap(): jspb.Map<string, string>;
    clearParamsMap(): void;

    getBody(): string;
    setBody(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        method: string,
        path: string,

        headersMap: Array<[string, string]>,

        paramsMap: Array<[string, string]>,
        body: string,
    }
}

export class Response extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): void;


    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    getBody(): string;
    setBody(value: string): void;

    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        status: number,

        headersMap: Array<[string, string]>,
        body: string,
        error: string,
    }
}
