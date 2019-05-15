// package: ticket.svc.history
// file: src/app/services/history/proto/history.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_history_proto_history_pb from "./history_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface IHistoryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBySprint: IHistoryService_IGetBySprint;
    getByTicket: IHistoryService_IGetByTicket;
    log: IHistoryService_ILog;
}

interface IHistoryService_IGetBySprint extends grpc.MethodDefinition<src_app_services_history_proto_history_pb.LogSprint, src_app_services_history_proto_history_pb.LogsResponse> {
    path: string; // "/ticket.svc.history.History/GetBySprint"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogSprint>;
    requestDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogSprint>;
    responseSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogsResponse>;
}
interface IHistoryService_IGetByTicket extends grpc.MethodDefinition<src_app_services_history_proto_history_pb.LogTicket, src_app_services_history_proto_history_pb.LogsResponse> {
    path: string; // "/ticket.svc.history.History/GetByTicket"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogTicket>;
    requestDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogTicket>;
    responseSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogsResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogsResponse>;
}
interface IHistoryService_ILog extends grpc.MethodDefinition<src_app_services_history_proto_history_pb.LogItem, src_app_services_history_proto_history_pb.LogResponse> {
    path: string; // "/ticket.svc.history.History/Log"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogItem>;
    requestDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogItem>;
    responseSerialize: grpc.serialize<src_app_services_history_proto_history_pb.LogResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_history_proto_history_pb.LogResponse>;
}

export const HistoryService: IHistoryService;

export interface IHistoryServer {
    getBySprint: grpc.handleUnaryCall<src_app_services_history_proto_history_pb.LogSprint, src_app_services_history_proto_history_pb.LogsResponse>;
    getByTicket: grpc.handleUnaryCall<src_app_services_history_proto_history_pb.LogTicket, src_app_services_history_proto_history_pb.LogsResponse>;
    log: grpc.handleUnaryCall<src_app_services_history_proto_history_pb.LogItem, src_app_services_history_proto_history_pb.LogResponse>;
}

export interface IHistoryClient {
    getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    log(request: src_app_services_history_proto_history_pb.LogItem, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
    log(request: src_app_services_history_proto_history_pb.LogItem, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
    log(request: src_app_services_history_proto_history_pb.LogItem, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
}

export class HistoryClient extends grpc.Client implements IHistoryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public getBySprint(request: src_app_services_history_proto_history_pb.LogSprint, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public getByTicket(request: src_app_services_history_proto_history_pb.LogTicket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogsResponse) => void): grpc.ClientUnaryCall;
    public log(request: src_app_services_history_proto_history_pb.LogItem, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
    public log(request: src_app_services_history_proto_history_pb.LogItem, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
    public log(request: src_app_services_history_proto_history_pb.LogItem, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_history_proto_history_pb.LogResponse) => void): grpc.ClientUnaryCall;
}
