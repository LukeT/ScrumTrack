// package: ticket.svc.user
// file: src/app/services/user/proto/user.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_user_proto_user_pb from "./user_pb";
import * as common_pb from "../../../common/proto/common_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getById: IUserService_IGetById;
    getByUsername: IUserService_IGetByUsername;
    getByEmail: IUserService_IGetByEmail;
    getAll: IUserService_IGetAll;
    checkPassword: IUserService_ICheckPassword;
    create: IUserService_ICreate;
    update: IUserService_IUpdate;
    delete: IUserService_IDelete;
}

interface IUserService_IGetById extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.Id, src_app_services_user_proto_user_pb.AuthUser> {
    path: string; // "/ticket.svc.user.User/GetById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.Id>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.Id>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.AuthUser>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.AuthUser>;
}
interface IUserService_IGetByUsername extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.Username, src_app_services_user_proto_user_pb.AuthUser> {
    path: string; // "/ticket.svc.user.User/GetByUsername"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.Username>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.Username>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.AuthUser>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.AuthUser>;
}
interface IUserService_IGetByEmail extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.Email, src_app_services_user_proto_user_pb.AuthUser> {
    path: string; // "/ticket.svc.user.User/GetByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.Email>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.Email>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.AuthUser>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.AuthUser>;
}
interface IUserService_IGetAll extends grpc.MethodDefinition<common_pb.Empty, src_app_services_user_proto_user_pb.UserList> {
    path: string; // "/ticket.svc.user.User/GetAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.UserList>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.UserList>;
}
interface IUserService_ICheckPassword extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.PasswordCheck, common_pb.Status> {
    path: string; // "/ticket.svc.user.User/CheckPassword"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.PasswordCheck>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.PasswordCheck>;
    responseSerialize: grpc.serialize<common_pb.Status>;
    responseDeserialize: grpc.deserialize<common_pb.Status>;
}
interface IUserService_ICreate extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.AuthUser, src_app_services_user_proto_user_pb.Id> {
    path: string; // "/ticket.svc.user.User/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.AuthUser>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.AuthUser>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.Id>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.Id>;
}
interface IUserService_IUpdate extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.AuthUser, src_app_services_user_proto_user_pb.UserResponse> {
    path: string; // "/ticket.svc.user.User/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.AuthUser>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.AuthUser>;
    responseSerialize: grpc.serialize<src_app_services_user_proto_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.UserResponse>;
}
interface IUserService_IDelete extends grpc.MethodDefinition<src_app_services_user_proto_user_pb.Id, common_pb.VoidResponse> {
    path: string; // "/ticket.svc.user.User/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_user_proto_user_pb.Id>;
    requestDeserialize: grpc.deserialize<src_app_services_user_proto_user_pb.Id>;
    responseSerialize: grpc.serialize<common_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<common_pb.VoidResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    getById: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.Id, src_app_services_user_proto_user_pb.AuthUser>;
    getByUsername: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.Username, src_app_services_user_proto_user_pb.AuthUser>;
    getByEmail: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.Email, src_app_services_user_proto_user_pb.AuthUser>;
    getAll: grpc.handleUnaryCall<common_pb.Empty, src_app_services_user_proto_user_pb.UserList>;
    checkPassword: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.PasswordCheck, common_pb.Status>;
    create: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.AuthUser, src_app_services_user_proto_user_pb.Id>;
    update: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.AuthUser, src_app_services_user_proto_user_pb.UserResponse>;
    delete: grpc.handleUnaryCall<src_app_services_user_proto_user_pb.Id, common_pb.VoidResponse>;
}

export interface IUserClient {
    getById(request: src_app_services_user_proto_user_pb.Id, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getById(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getById(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByUsername(request: src_app_services_user_proto_user_pb.Username, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByUsername(request: src_app_services_user_proto_user_pb.Username, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByUsername(request: src_app_services_user_proto_user_pb.Username, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByEmail(request: src_app_services_user_proto_user_pb.Email, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByEmail(request: src_app_services_user_proto_user_pb.Email, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getByEmail(request: src_app_services_user_proto_user_pb.Email, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_user_proto_user_pb.AuthUser, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    create(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_user_proto_user_pb.AuthUser, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    update(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_user_proto_user_pb.Id, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    delete(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getById(request: src_app_services_user_proto_user_pb.Id, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getById(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getById(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByUsername(request: src_app_services_user_proto_user_pb.Username, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByUsername(request: src_app_services_user_proto_user_pb.Username, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByUsername(request: src_app_services_user_proto_user_pb.Username, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByEmail(request: src_app_services_user_proto_user_pb.Email, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByEmail(request: src_app_services_user_proto_user_pb.Email, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getByEmail(request: src_app_services_user_proto_user_pb.Email, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.AuthUser) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserList) => void): grpc.ClientUnaryCall;
    public checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public checkPassword(request: src_app_services_user_proto_user_pb.PasswordCheck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Status) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_user_proto_user_pb.AuthUser, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    public create(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.Id) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_user_proto_user_pb.AuthUser, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public update(request: src_app_services_user_proto_user_pb.AuthUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_user_proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_user_proto_user_pb.Id, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public delete(request: src_app_services_user_proto_user_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.VoidResponse) => void): grpc.ClientUnaryCall;
}
