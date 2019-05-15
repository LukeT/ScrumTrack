// package: ticket.svc.workflow
// file: src/app/services/workflow/proto/workflow.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_workflow_proto_workflow_pb from "./workflow_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface IWorkflowService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IWorkflowService_IGet;
    getOne: IWorkflowService_IGetOne;
    create: IWorkflowService_ICreate;
    update: IWorkflowService_IUpdate;
    delete: IWorkflowService_IDelete;
    getInitialColumn: IWorkflowService_IGetInitialColumn;
}

interface IWorkflowService_IGet extends grpc.MethodDefinition<common_pb.Empty, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations> {
    path: string; // "/ticket.svc.workflow.Workflow/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations>;
    responseDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations>;
}
interface IWorkflowService_IGetOne extends grpc.MethodDefinition<src_app_services_workflow_proto_workflow_pb.WorkflowId, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse> {
    path: string; // "/ticket.svc.workflow.Workflow/GetOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowId>;
    requestDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowId>;
    responseSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
}
interface IWorkflowService_ICreate extends grpc.MethodDefinition<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse> {
    path: string; // "/ticket.svc.workflow.Workflow/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration>;
    requestDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration>;
    responseSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
}
interface IWorkflowService_IUpdate extends grpc.MethodDefinition<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse> {
    path: string; // "/ticket.svc.workflow.Workflow/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration>;
    requestDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration>;
    responseSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
}
interface IWorkflowService_IDelete extends grpc.MethodDefinition<src_app_services_workflow_proto_workflow_pb.WorkflowId, common_pb.VoidResponse> {
    path: string; // "/ticket.svc.workflow.Workflow/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.WorkflowId>;
    requestDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.WorkflowId>;
    responseSerialize: grpc.serialize<common_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<common_pb.VoidResponse>;
}
interface IWorkflowService_IGetInitialColumn extends grpc.MethodDefinition<common_pb.Empty, src_app_services_workflow_proto_workflow_pb.InitialColumn> {
    path: string; // "/ticket.svc.workflow.Workflow/GetInitialColumn"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<src_app_services_workflow_proto_workflow_pb.InitialColumn>;
    responseDeserialize: grpc.deserialize<src_app_services_workflow_proto_workflow_pb.InitialColumn>;
}

export const WorkflowService: IWorkflowService;

export interface IWorkflowServer {
    get: grpc.handleUnaryCall<common_pb.Empty, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations>;
    getOne: grpc.handleUnaryCall<src_app_services_workflow_proto_workflow_pb.WorkflowId, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    create: grpc.handleUnaryCall<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    update: grpc.handleUnaryCall<src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse>;
    delete: grpc.handleUnaryCall<src_app_services_workflow_proto_workflow_pb.WorkflowId, common_pb.VoidResponse>;
    getInitialColumn: grpc.handleUnaryCall<common_pb.Empty, src_app_services_workflow_proto_workflow_pb.InitialColumn>;
}

export interface IWorkflowClient {
    get(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    get(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    get(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    getInitialColumn(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
    getInitialColumn(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
    getInitialColumn(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
}

export class WorkflowClient extends grpc.Client implements IWorkflowClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    public get(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    public get(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations) => void): grpc.ClientUnaryCall;
    public getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_workflow_proto_workflow_pb.WorkflowId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public getInitialColumn(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
    public getInitialColumn(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
    public getInitialColumn(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_workflow_proto_workflow_pb.InitialColumn) => void): grpc.ClientUnaryCall;
}
