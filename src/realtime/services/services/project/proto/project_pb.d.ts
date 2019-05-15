// package: ticket.svc.project
// file: src/app/services/project/proto/project.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class Shortcode extends jspb.Message { 
    getShortcode(): string;
    setShortcode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shortcode.AsObject;
    static toObject(includeInstance: boolean, msg: Shortcode): Shortcode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shortcode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shortcode;
    static deserializeBinaryFromReader(message: Shortcode, reader: jspb.BinaryReader): Shortcode;
}

export namespace Shortcode {
    export type AsObject = {
        shortcode: string,
    }
}

export class Project extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getShortcode(): string;
    setShortcode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        name: string,
        shortcode: string,
    }
}

export class ProjectResponse extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): Project | undefined;
    setProject(value?: Project): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectResponse): ProjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectResponse;
    static deserializeBinaryFromReader(message: ProjectResponse, reader: jspb.BinaryReader): ProjectResponse;
}

export namespace ProjectResponse {
    export type AsObject = {
        project?: Project.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class ProjectsResponse extends jspb.Message { 
    clearProjectList(): void;
    getProjectList(): Array<Project>;
    setProjectList(value: Array<Project>): void;
    addProject(value?: Project, index?: number): Project;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectsResponse): ProjectsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectsResponse;
    static deserializeBinaryFromReader(message: ProjectsResponse, reader: jspb.BinaryReader): ProjectsResponse;
}

export namespace ProjectsResponse {
    export type AsObject = {
        projectList: Array<Project.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}
