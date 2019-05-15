// package: ticket.router
// file: src/app/router/proto/router.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_router_proto_router_pb from "../../../../src/app/router/proto/router_pb";

interface IRouterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    call: IRouterService_ICall;
}

interface IRouterService_ICall extends grpc.MethodDefinition<src_app_router_proto_router_pb.Request, src_app_router_proto_router_pb.Response> {
    path: string; // "/ticket.router.Router/Call"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_router_proto_router_pb.Request>;
    requestDeserialize: grpc.deserialize<src_app_router_proto_router_pb.Request>;
    responseSerialize: grpc.serialize<src_app_router_proto_router_pb.Response>;
    responseDeserialize: grpc.deserialize<src_app_router_proto_router_pb.Response>;
}

export const RouterService: IRouterService;

export interface IRouterServer {
    call: grpc.handleUnaryCall<src_app_router_proto_router_pb.Request, src_app_router_proto_router_pb.Response>;
}

export interface IRouterClient {
    call(request: src_app_router_proto_router_pb.Request, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
    call(request: src_app_router_proto_router_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
    call(request: src_app_router_proto_router_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
}

export class RouterClient extends grpc.Client implements IRouterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public call(request: src_app_router_proto_router_pb.Request, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
    public call(request: src_app_router_proto_router_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
    public call(request: src_app_router_proto_router_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_router_proto_router_pb.Response) => void): grpc.ClientUnaryCall;
}
