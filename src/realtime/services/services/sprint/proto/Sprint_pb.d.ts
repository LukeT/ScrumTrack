// package: ticket.svc.sprint
// file: src/app/services/sprint/proto/Sprint.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class SprintById extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintById.AsObject;
    static toObject(includeInstance: boolean, msg: SprintById): SprintById.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintById, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintById;
    static deserializeBinaryFromReader(message: SprintById, reader: jspb.BinaryReader): SprintById;
}

export namespace SprintById {
    export type AsObject = {
        id: number,
    }
}

export class SprintByProject extends jspb.Message { 
    getProjectid(): string;
    setProjectid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintByProject.AsObject;
    static toObject(includeInstance: boolean, msg: SprintByProject): SprintByProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintByProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintByProject;
    static deserializeBinaryFromReader(message: SprintByProject, reader: jspb.BinaryReader): SprintByProject;
}

export namespace SprintByProject {
    export type AsObject = {
        projectid: string,
    }
}

export class Sprint extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDuration(): number;
    setDuration(value: number): void;

    getStartedat(): number;
    setStartedat(value: number): void;

    getEndat(): number;
    setEndat(value: number): void;

    getProjectcode(): string;
    setProjectcode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sprint.AsObject;
    static toObject(includeInstance: boolean, msg: Sprint): Sprint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sprint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sprint;
    static deserializeBinaryFromReader(message: Sprint, reader: jspb.BinaryReader): Sprint;
}

export namespace Sprint {
    export type AsObject = {
        id: number,
        name: string,
        duration: number,
        startedat: number,
        endat: number,
        projectcode: string,
    }
}

export class SprintResponse extends jspb.Message { 

    hasSprint(): boolean;
    clearSprint(): void;
    getSprint(): Sprint | undefined;
    setSprint(value?: Sprint): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SprintResponse): SprintResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintResponse;
    static deserializeBinaryFromReader(message: SprintResponse, reader: jspb.BinaryReader): SprintResponse;
}

export namespace SprintResponse {
    export type AsObject = {
        sprint?: Sprint.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class SprintsResponse extends jspb.Message { 
    clearSprintsList(): void;
    getSprintsList(): Array<Sprint>;
    setSprintsList(value: Array<Sprint>): void;
    addSprints(value?: Sprint, index?: number): Sprint;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SprintsResponse): SprintsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintsResponse;
    static deserializeBinaryFromReader(message: SprintsResponse, reader: jspb.BinaryReader): SprintsResponse;
}

export namespace SprintsResponse {
    export type AsObject = {
        sprintsList: Array<Sprint.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class SprintComment extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getAuthorid(): number;
    setAuthorid(value: number): void;

    getProjectcode(): string;
    setProjectcode(value: string): void;

    getType(): string;
    setType(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;

    getSprintid(): number;
    setSprintid(value: number): void;

    getResolvedid(): number;
    setResolvedid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintComment.AsObject;
    static toObject(includeInstance: boolean, msg: SprintComment): SprintComment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintComment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintComment;
    static deserializeBinaryFromReader(message: SprintComment, reader: jspb.BinaryReader): SprintComment;
}

export namespace SprintComment {
    export type AsObject = {
        id: number,
        authorid: number,
        projectcode: string,
        type: string,
        message: string,
        createdat: number,
        sprintid: number,
        resolvedid: number,
    }
}

export class SprintCommentResponse extends jspb.Message { 

    hasComment(): boolean;
    clearComment(): void;
    getComment(): SprintComment | undefined;
    setComment(value?: SprintComment): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintCommentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SprintCommentResponse): SprintCommentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintCommentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintCommentResponse;
    static deserializeBinaryFromReader(message: SprintCommentResponse, reader: jspb.BinaryReader): SprintCommentResponse;
}

export namespace SprintCommentResponse {
    export type AsObject = {
        comment?: SprintComment.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class SprintCommentsResponse extends jspb.Message { 
    clearCommentsList(): void;
    getCommentsList(): Array<SprintComment>;
    setCommentsList(value: Array<SprintComment>): void;
    addComments(value?: SprintComment, index?: number): SprintComment;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintCommentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SprintCommentsResponse): SprintCommentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintCommentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintCommentsResponse;
    static deserializeBinaryFromReader(message: SprintCommentsResponse, reader: jspb.BinaryReader): SprintCommentsResponse;
}

export namespace SprintCommentsResponse {
    export type AsObject = {
        commentsList: Array<SprintComment.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class SprintCommentId extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getProject(): string;
    setProject(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintCommentId.AsObject;
    static toObject(includeInstance: boolean, msg: SprintCommentId): SprintCommentId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintCommentId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintCommentId;
    static deserializeBinaryFromReader(message: SprintCommentId, reader: jspb.BinaryReader): SprintCommentId;
}

export namespace SprintCommentId {
    export type AsObject = {
        id: number,
        project: string,
    }
}

export class SprintCommentIdWithSprint extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getProject(): string;
    setProject(value: string): void;

    getSprintid(): number;
    setSprintid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintCommentIdWithSprint.AsObject;
    static toObject(includeInstance: boolean, msg: SprintCommentIdWithSprint): SprintCommentIdWithSprint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintCommentIdWithSprint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintCommentIdWithSprint;
    static deserializeBinaryFromReader(message: SprintCommentIdWithSprint, reader: jspb.BinaryReader): SprintCommentIdWithSprint;
}

export namespace SprintCommentIdWithSprint {
    export type AsObject = {
        id: number,
        project: string,
        sprintid: number,
    }
}

export class SprintIdAndProject extends jspb.Message { 
    getSprintid(): number;
    setSprintid(value: number): void;

    getProject(): string;
    setProject(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SprintIdAndProject.AsObject;
    static toObject(includeInstance: boolean, msg: SprintIdAndProject): SprintIdAndProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SprintIdAndProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SprintIdAndProject;
    static deserializeBinaryFromReader(message: SprintIdAndProject, reader: jspb.BinaryReader): SprintIdAndProject;
}

export namespace SprintIdAndProject {
    export type AsObject = {
        sprintid: number,
        project: string,
    }
}
