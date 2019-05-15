// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_auth_proto_auth_pb = require('./auth_pb.js');

function serialize_ticket_svc_auth_Session(arg) {
  if (!(arg instanceof src_app_services_auth_proto_auth_pb.Session)) {
    throw new Error('Expected argument of type ticket.svc.auth.Session');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_auth_Session(buffer_arg) {
  return src_app_services_auth_proto_auth_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_auth_SessionState(arg) {
  if (!(arg instanceof src_app_services_auth_proto_auth_pb.SessionState)) {
    throw new Error('Expected argument of type ticket.svc.auth.SessionState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_auth_SessionState(buffer_arg) {
  return src_app_services_auth_proto_auth_pb.SessionState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_auth_Status(arg) {
  if (!(arg instanceof src_app_services_auth_proto_auth_pb.Status)) {
    throw new Error('Expected argument of type ticket.svc.auth.Status');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_auth_Status(buffer_arg) {
  return src_app_services_auth_proto_auth_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  create: {
    path: '/ticket.svc.auth.Auth/Create',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_auth_proto_auth_pb.SessionState,
    responseType: src_app_services_auth_proto_auth_pb.Session,
    requestSerialize: serialize_ticket_svc_auth_SessionState,
    requestDeserialize: deserialize_ticket_svc_auth_SessionState,
    responseSerialize: serialize_ticket_svc_auth_Session,
    responseDeserialize: deserialize_ticket_svc_auth_Session,
  },
  validate: {
    path: '/ticket.svc.auth.Auth/Validate',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_auth_proto_auth_pb.Session,
    responseType: src_app_services_auth_proto_auth_pb.SessionState,
    requestSerialize: serialize_ticket_svc_auth_Session,
    requestDeserialize: deserialize_ticket_svc_auth_Session,
    responseSerialize: serialize_ticket_svc_auth_SessionState,
    responseDeserialize: deserialize_ticket_svc_auth_SessionState,
  },
  destroy: {
    path: '/ticket.svc.auth.Auth/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_auth_proto_auth_pb.Session,
    responseType: src_app_services_auth_proto_auth_pb.Status,
    requestSerialize: serialize_ticket_svc_auth_Session,
    requestDeserialize: deserialize_ticket_svc_auth_Session,
    responseSerialize: serialize_ticket_svc_auth_Status,
    responseDeserialize: deserialize_ticket_svc_auth_Status,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
