// package: ticket.svc.project
// file: src/app/services/project/proto/project.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_project_proto_project_pb from "./project_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface IProjectsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IProjectsService_IGet;
    getAll: IProjectsService_IGetAll;
}

interface IProjectsService_IGet extends grpc.MethodDefinition<src_app_services_project_proto_project_pb.Shortcode, src_app_services_project_proto_project_pb.ProjectResponse> {
    path: string; // "/ticket.svc.project.Projects/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_project_proto_project_pb.Shortcode>;
    requestDeserialize: grpc.deserialize<src_app_services_project_proto_project_pb.Shortcode>;
    responseSerialize: grpc.serialize<src_app_services_project_proto_project_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_project_proto_project_pb.ProjectResponse>;
}
interface IProjectsService_IGetAll extends grpc.MethodDefinition<common_pb.Empty, src_app_services_project_proto_project_pb.ProjectsResponse> {
    path: string; // "/ticket.svc.project.Projects/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<src_app_services_project_proto_project_pb.ProjectsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_project_proto_project_pb.ProjectsResponse>;
}

export const ProjectsService: IProjectsService;

export interface IProjectsServer {
    get: grpc.handleUnaryCall<src_app_services_project_proto_project_pb.Shortcode, src_app_services_project_proto_project_pb.ProjectResponse>;
    getAll: grpc.handleUnaryCall<common_pb.Empty, src_app_services_project_proto_project_pb.ProjectsResponse>;
}

export interface IProjectsClient {
    get(request: src_app_services_project_proto_project_pb.Shortcode, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    get(request: src_app_services_project_proto_project_pb.Shortcode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    get(request: src_app_services_project_proto_project_pb.Shortcode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
}

export class ProjectsClient extends grpc.Client implements IProjectsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: src_app_services_project_proto_project_pb.Shortcode, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public get(request: src_app_services_project_proto_project_pb.Shortcode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public get(request: src_app_services_project_proto_project_pb.Shortcode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_project_proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
}
