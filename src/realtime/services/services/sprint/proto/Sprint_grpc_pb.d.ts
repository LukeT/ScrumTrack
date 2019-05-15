// package: ticket.svc.sprint
// file: src/app/services/sprint/proto/Sprint.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_sprint_proto_Sprint_pb from "./Sprint_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface ISprintsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getActiveSprint: ISprintsService_IGetActiveSprint;
    getHistoricSprints: ISprintsService_IGetHistoricSprints;
    getById: ISprintsService_IGetById;
    create: ISprintsService_ICreate;
    update: ISprintsService_IUpdate;
    getComments: ISprintsService_IGetComments;
    pastComments: ISprintsService_IPastComments;
    addComment: ISprintsService_IAddComment;
    deleteComment: ISprintsService_IDeleteComment;
    resolveComment: ISprintsService_IResolveComment;
}

interface ISprintsService_IGetActiveSprint extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintByProject, src_app_services_sprint_proto_Sprint_pb.SprintResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/GetActiveSprint"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintByProject>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintByProject>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
}
interface ISprintsService_IGetHistoricSprints extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintByProject, src_app_services_sprint_proto_Sprint_pb.SprintsResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/GetHistoricSprints"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintByProject>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintByProject>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintsResponse>;
}
interface ISprintsService_IGetById extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintById, src_app_services_sprint_proto_Sprint_pb.SprintResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/GetById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintById>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintById>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
}
interface ISprintsService_ICreate extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.Sprint, src_app_services_sprint_proto_Sprint_pb.SprintResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.Sprint>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.Sprint>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
}
interface ISprintsService_IUpdate extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.Sprint, src_app_services_sprint_proto_Sprint_pb.SprintResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.Sprint>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.Sprint>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
}
interface ISprintsService_IGetComments extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/GetComments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
}
interface ISprintsService_IPastComments extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/PastComments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
}
interface ISprintsService_IAddComment extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintComment, src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse> {
    path: string; // "/ticket.svc.sprint.Sprints/AddComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintComment>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintComment>;
    responseSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse>;
}
interface ISprintsService_IDeleteComment extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintCommentId, common_pb.Status> {
    path: string; // "/ticket.svc.sprint.Sprints/DeleteComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentId>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentId>;
    responseSerialize: grpc.serialize<common_pb.Status>;
    responseDeserialize: grpc.deserialize<common_pb.Status>;
}
interface ISprintsService_IResolveComment extends grpc.MethodDefinition<src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, common_pb.Status> {
    path: string; // "/ticket.svc.sprint.Sprints/ResolveComment"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint>;
    requestDeserialize: grpc.deserialize<src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint>;
    responseSerialize: grpc.serialize<common_pb.Status>;
    responseDeserialize: grpc.deserialize<common_pb.Status>;
}

export const SprintsService: ISprintsService;

export interface ISprintsServer {
    getActiveSprint: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintByProject, src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    getHistoricSprints: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintByProject, src_app_services_sprint_proto_Sprint_pb.SprintsResponse>;
    getById: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintById, src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    create: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.Sprint, src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    update: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.Sprint, src_app_services_sprint_proto_Sprint_pb.SprintResponse>;
    getComments: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
    pastComments: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse>;
    addComment: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintComment, src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse>;
    deleteComment: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintCommentId, common_pb.Status>;
    resolveComment: grpc.handleUnaryCall<src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, common_pb.Status>;
}

export interface ISprintsClient {
    getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
}

export class SprintsClient extends grpc.Client implements ISprintsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getActiveSprint(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    public getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    public getHistoricSprints(request: src_app_services_sprint_proto_Sprint_pb.SprintByProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintsResponse) => void): grpc.ClientUnaryCall;
    public getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getById(request: src_app_services_sprint_proto_Sprint_pb.SprintById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_sprint_proto_Sprint_pb.Sprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintResponse) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public getComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public pastComments(request: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse) => void): grpc.ClientUnaryCall;
    public addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    public addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    public addComment(request: src_app_services_sprint_proto_Sprint_pb.SprintComment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse) => void): grpc.ClientUnaryCall;
    public deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public deleteComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public resolveComment(request: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
}
