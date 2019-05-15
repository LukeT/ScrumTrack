// package: ticket.svc.auth
// file: src/app/services/auth/proto/auth.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_auth_proto_auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAuthService_ICreate;
    validate: IAuthService_IValidate;
    destroy: IAuthService_IDestroy;
}

interface IAuthService_ICreate extends grpc.MethodDefinition<src_app_services_auth_proto_auth_pb.SessionState, src_app_services_auth_proto_auth_pb.Session> {
    path: string; // "/ticket.svc.auth.Auth/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.SessionState>;
    requestDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.SessionState>;
    responseSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.Session>;
    responseDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.Session>;
}
interface IAuthService_IValidate extends grpc.MethodDefinition<src_app_services_auth_proto_auth_pb.Session, src_app_services_auth_proto_auth_pb.SessionState> {
    path: string; // "/ticket.svc.auth.Auth/Validate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.Session>;
    requestDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.Session>;
    responseSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.SessionState>;
    responseDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.SessionState>;
}
interface IAuthService_IDestroy extends grpc.MethodDefinition<src_app_services_auth_proto_auth_pb.Session, src_app_services_auth_proto_auth_pb.Status> {
    path: string; // "/ticket.svc.auth.Auth/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.Session>;
    requestDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.Session>;
    responseSerialize: grpc.serialize<src_app_services_auth_proto_auth_pb.Status>;
    responseDeserialize: grpc.deserialize<src_app_services_auth_proto_auth_pb.Status>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    create: grpc.handleUnaryCall<src_app_services_auth_proto_auth_pb.SessionState, src_app_services_auth_proto_auth_pb.Session>;
    validate: grpc.handleUnaryCall<src_app_services_auth_proto_auth_pb.Session, src_app_services_auth_proto_auth_pb.SessionState>;
    destroy: grpc.handleUnaryCall<src_app_services_auth_proto_auth_pb.Session, src_app_services_auth_proto_auth_pb.Status>;
}

export interface IAuthClient {
    create(request: src_app_services_auth_proto_auth_pb.SessionState, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_auth_proto_auth_pb.SessionState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_auth_proto_auth_pb.SessionState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    validate(request: src_app_services_auth_proto_auth_pb.Session, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    validate(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    validate(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    destroy(request: src_app_services_auth_proto_auth_pb.Session, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
    destroy(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
    destroy(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: src_app_services_auth_proto_auth_pb.SessionState, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_auth_proto_auth_pb.SessionState, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_auth_proto_auth_pb.SessionState, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Session) => void): grpc.ClientUnaryCall;
    public validate(request: src_app_services_auth_proto_auth_pb.Session, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    public validate(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    public validate(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.SessionState) => void): grpc.ClientUnaryCall;
    public destroy(request: src_app_services_auth_proto_auth_pb.Session, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
    public destroy(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
    public destroy(request: src_app_services_auth_proto_auth_pb.Session, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_auth_proto_auth_pb.Status) => void): grpc.ClientUnaryCall;
}
