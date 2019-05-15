// package: ticket.svc.ticket
// file: src/app/services/ticket/proto/ticket.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_ticket_proto_ticket_pb from "./ticket_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface ITicketsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ITicketsService_IGetAll;
    get: ITicketsService_IGet;
    create: ITicketsService_ICreate;
    update: ITicketsService_IUpdate;
    move: ITicketsService_IMove;
    moveWithinSprint: ITicketsService_IMoveWithinSprint;
    getComments: ITicketsService_IGetComments;
    createComment: ITicketsService_ICreateComment;
    getCategories: ITicketsService_IGetCategories;
}

interface ITicketsService_IGetAll extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.GetAllRequest, src_app_services_ticket_proto_ticket_pb.TicketsListResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.GetAllRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.GetAllRequest>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.TicketsListResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.TicketsListResponse>;
}
interface ITicketsService_IGet extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.GetRequest, src_app_services_ticket_proto_ticket_pb.TicketResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.GetRequest>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
}
interface ITicketsService_ICreate extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.Ticket, src_app_services_ticket_proto_ticket_pb.TicketResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.Ticket>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.Ticket>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
}
interface ITicketsService_IUpdate extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.Ticket, src_app_services_ticket_proto_ticket_pb.TicketResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.Ticket>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.Ticket>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.TicketResponse>;
}
interface ITicketsService_IMove extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.MoveRequest, common_pb.Status> {
    path: string; // "/ticket.svc.ticket.Tickets/Move"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.MoveRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.MoveRequest>;
    responseSerialize: grpc.serialize<common_pb.Status>;
    responseDeserialize: grpc.deserialize<common_pb.Status>;
}
interface ITicketsService_IMoveWithinSprint extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, common_pb.Status> {
    path: string; // "/ticket.svc.ticket.Tickets/MoveWithinSprint"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest>;
    responseSerialize: grpc.serialize<common_pb.Status>;
    responseDeserialize: grpc.deserialize<common_pb.Status>;
}
interface ITicketsService_IGetComments extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.GetRequest, src_app_services_ticket_proto_ticket_pb.CommentsListResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/GetComments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.GetRequest>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.CommentsListResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.CommentsListResponse>;
}
interface ITicketsService_ICreateComment extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.TicketComment, src_app_services_ticket_proto_ticket_pb.CommentResponse> {
    path: string; // "/ticket.svc.ticket.Tickets/CreateComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.TicketComment>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.TicketComment>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.CommentResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.CommentResponse>;
}
interface ITicketsService_IGetCategories extends grpc.MethodDefinition<src_app_services_ticket_proto_ticket_pb.GetAllRequest, src_app_services_ticket_proto_ticket_pb.Categories> {
    path: string; // "/ticket.svc.ticket.Tickets/GetCategories"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.GetAllRequest>;
    requestDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.GetAllRequest>;
    responseSerialize: grpc.serialize<src_app_services_ticket_proto_ticket_pb.Categories>;
    responseDeserialize: grpc.deserialize<src_app_services_ticket_proto_ticket_pb.Categories>;
}

export const TicketsService: ITicketsService;

export interface ITicketsServer {
    getAll: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.GetAllRequest, src_app_services_ticket_proto_ticket_pb.TicketsListResponse>;
    get: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.GetRequest, src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    create: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.Ticket, src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    update: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.Ticket, src_app_services_ticket_proto_ticket_pb.TicketResponse>;
    move: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.MoveRequest, common_pb.Status>;
    moveWithinSprint: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, common_pb.Status>;
    getComments: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.GetRequest, src_app_services_ticket_proto_ticket_pb.CommentsListResponse>;
    createComment: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.TicketComment, src_app_services_ticket_proto_ticket_pb.CommentResponse>;
    getCategories: grpc.handleUnaryCall<src_app_services_ticket_proto_ticket_pb.GetAllRequest, src_app_services_ticket_proto_ticket_pb.Categories>;
}

export interface ITicketsClient {
    getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_ticket_proto_ticket_pb.Ticket, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_ticket_proto_ticket_pb.Ticket, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
    getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
    getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
}

export class TicketsClient extends grpc.Client implements ITicketsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketsListResponse) => void): grpc.ClientUnaryCall;
    public get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public get(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_ticket_proto_ticket_pb.Ticket, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_ticket_proto_ticket_pb.Ticket, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_ticket_proto_ticket_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.TicketResponse) => void): grpc.ClientUnaryCall;
    public move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public move(request: src_app_services_ticket_proto_ticket_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public moveWithinSprint(request: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_ticket_proto_ticket_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentsListResponse) => void): grpc.ClientUnaryCall;
    public createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    public createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    public createComment(request: src_app_services_ticket_proto_ticket_pb.TicketComment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.CommentResponse) => void): grpc.ClientUnaryCall;
    public getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
    public getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
    public getCategories(request: src_app_services_ticket_proto_ticket_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_ticket_proto_ticket_pb.Categories) => void): grpc.ClientUnaryCall;
}
