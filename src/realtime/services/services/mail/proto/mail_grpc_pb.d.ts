// package: ticket.svc.mail
// file: src/app/services/mail/proto/mail.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as src_app_services_mail_proto_mail_pb from "./mail_pb";

interface IMailService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    post: IMailService_IPost;
}

interface IMailService_IPost extends grpc.MethodDefinition<src_app_services_mail_proto_mail_pb.Envelope, src_app_services_mail_proto_mail_pb.Stamp> {
    path: string; // "/ticket.svc.mail.Mail/Post"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_app_services_mail_proto_mail_pb.Envelope>;
    requestDeserialize: grpc.deserialize<src_app_services_mail_proto_mail_pb.Envelope>;
    responseSerialize: grpc.serialize<src_app_services_mail_proto_mail_pb.Stamp>;
    responseDeserialize: grpc.deserialize<src_app_services_mail_proto_mail_pb.Stamp>;
}

export const MailService: IMailService;

export interface IMailServer {
    post: grpc.handleUnaryCall<src_app_services_mail_proto_mail_pb.Envelope, src_app_services_mail_proto_mail_pb.Stamp>;
}

export interface IMailClient {
    post(request: src_app_services_mail_proto_mail_pb.Envelope, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
    post(request: src_app_services_mail_proto_mail_pb.Envelope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
    post(request: src_app_services_mail_proto_mail_pb.Envelope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
}

export class MailClient extends grpc.Client implements IMailClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public post(request: src_app_services_mail_proto_mail_pb.Envelope, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
    public post(request: src_app_services_mail_proto_mail_pb.Envelope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
    public post(request: src_app_services_mail_proto_mail_pb.Envelope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_app_services_mail_proto_mail_pb.Stamp) => void): grpc.ClientUnaryCall;
}
