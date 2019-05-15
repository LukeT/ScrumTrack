// package: ticket.svc.ticket
// file: src/app/services/ticket/proto/ticket.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class GetAllRequest extends jspb.Message { 
    getProjectsc(): string;
    setProjectsc(value: string): void;

    getLocationtype(): LocationType;
    setLocationtype(value: LocationType): void;

    clearStatusList(): void;
    getStatusList(): Array<common_pb.TicketStatus>;
    setStatusList(value: Array<common_pb.TicketStatus>): void;
    addStatus(value: common_pb.TicketStatus, index?: number): common_pb.TicketStatus;

    getSprintid(): number;
    setSprintid(value: number): void;

    getWorkflowid(): number;
    setWorkflowid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllRequest;
    static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
    export type AsObject = {
        projectsc: string,
        locationtype: LocationType,
        statusList: Array<common_pb.TicketStatus>,
        sprintid: number,
        workflowid: number,
    }
}

export class GetRequest extends jspb.Message { 
    getProjectsc(): string;
    setProjectsc(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        projectsc: string,
        ticketid: number,
    }
}

export class TicketsListResponse extends jspb.Message { 
    clearTicketsList(): void;
    getTicketsList(): Array<Ticket>;
    setTicketsList(value: Array<Ticket>): void;
    addTickets(value?: Ticket, index?: number): Ticket;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketsListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TicketsListResponse): TicketsListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketsListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketsListResponse;
    static deserializeBinaryFromReader(message: TicketsListResponse, reader: jspb.BinaryReader): TicketsListResponse;
}

export namespace TicketsListResponse {
    export type AsObject = {
        ticketsList: Array<Ticket.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class TicketResponse extends jspb.Message { 

    hasTicket(): boolean;
    clearTicket(): void;
    getTicket(): Ticket | undefined;
    setTicket(value?: Ticket): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TicketResponse): TicketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketResponse;
    static deserializeBinaryFromReader(message: TicketResponse, reader: jspb.BinaryReader): TicketResponse;
}

export namespace TicketResponse {
    export type AsObject = {
        ticket?: Ticket.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class Ticket extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getBody(): string;
    setBody(value: string): void;

    getWeight(): number;
    setWeight(value: number): void;

    getLocationtype(): LocationType;
    setLocationtype(value: LocationType): void;

    getSprintid(): number;
    setSprintid(value: number): void;

    getPreviousticket(): number;
    setPreviousticket(value: number): void;

    getWorkflowid(): number;
    setWorkflowid(value: number): void;

    getWorkflowposition(): number;
    setWorkflowposition(value: number): void;

    getCreatoruserid(): number;
    setCreatoruserid(value: number): void;

    getAssigneeuserid(): number;
    setAssigneeuserid(value: number): void;

    getCreatedat(): number;
    setCreatedat(value: number): void;

    getUpdatedat(): number;
    setUpdatedat(value: number): void;

    getCategory(): string;
    setCategory(value: string): void;

    getStatus(): common_pb.TicketStatus;
    setStatus(value: common_pb.TicketStatus): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ticket.AsObject;
    static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ticket;
    static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
    export type AsObject = {
        id: number,
        projectcode: string,
        title: string,
        body: string,
        weight: number,
        locationtype: LocationType,
        sprintid: number,
        previousticket: number,
        workflowid: number,
        workflowposition: number,
        creatoruserid: number,
        assigneeuserid: number,
        createdat: number,
        updatedat: number,
        category: string,
        status: common_pb.TicketStatus,
    }
}

export class TicketComment extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;

    getBody(): string;
    setBody(value: string): void;

    getUserid(): number;
    setUserid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketComment.AsObject;
    static toObject(includeInstance: boolean, msg: TicketComment): TicketComment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketComment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketComment;
    static deserializeBinaryFromReader(message: TicketComment, reader: jspb.BinaryReader): TicketComment;
}

export namespace TicketComment {
    export type AsObject = {
        id: number,
        projectcode: string,
        ticketid: number,
        body: string,
        userid: number,
    }
}

export class CommentResponse extends jspb.Message { 

    hasComment(): boolean;
    clearComment(): void;
    getComment(): TicketComment | undefined;
    setComment(value?: TicketComment): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommentResponse): CommentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentResponse;
    static deserializeBinaryFromReader(message: CommentResponse, reader: jspb.BinaryReader): CommentResponse;
}

export namespace CommentResponse {
    export type AsObject = {
        comment?: TicketComment.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class MoveRequest extends jspb.Message { 
    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;

    getPreviousticket(): number;
    setPreviousticket(value: number): void;

    getSprintid(): number;
    setSprintid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveRequest): MoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveRequest;
    static deserializeBinaryFromReader(message: MoveRequest, reader: jspb.BinaryReader): MoveRequest;
}

export namespace MoveRequest {
    export type AsObject = {
        projectcode: string,
        ticketid: number,
        previousticket: number,
        sprintid: number,
    }
}

export class MoveWithinSprintRequest extends jspb.Message { 
    getProjectcode(): string;
    setProjectcode(value: string): void;

    getTicketid(): number;
    setTicketid(value: number): void;

    getWorkflowid(): number;
    setWorkflowid(value: number): void;

    getOrder(): number;
    setOrder(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveWithinSprintRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveWithinSprintRequest): MoveWithinSprintRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveWithinSprintRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveWithinSprintRequest;
    static deserializeBinaryFromReader(message: MoveWithinSprintRequest, reader: jspb.BinaryReader): MoveWithinSprintRequest;
}

export namespace MoveWithinSprintRequest {
    export type AsObject = {
        projectcode: string,
        ticketid: number,
        workflowid: number,
        order: number,
    }
}

export class CommentsListResponse extends jspb.Message { 
    clearCommentsList(): void;
    getCommentsList(): Array<TicketComment>;
    setCommentsList(value: Array<TicketComment>): void;
    addComments(value?: TicketComment, index?: number): TicketComment;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentsListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommentsListResponse): CommentsListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentsListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentsListResponse;
    static deserializeBinaryFromReader(message: CommentsListResponse, reader: jspb.BinaryReader): CommentsListResponse;
}

export namespace CommentsListResponse {
    export type AsObject = {
        commentsList: Array<TicketComment.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class Category extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCount(): number;
    setCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        name: string,
        count: number,
    }
}

export class Categories extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<Category>;
    setCategoriesList(value: Array<Category>): void;
    addCategories(value?: Category, index?: number): Category;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Categories.AsObject;
    static toObject(includeInstance: boolean, msg: Categories): Categories.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Categories, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Categories;
    static deserializeBinaryFromReader(message: Categories, reader: jspb.BinaryReader): Categories;
}

export namespace Categories {
    export type AsObject = {
        categoriesList: Array<Category.AsObject>,
    }
}

export enum LocationType {
    BACKLOG = 0,
    SPRINT = 1,
    PENDING = 2,
}
