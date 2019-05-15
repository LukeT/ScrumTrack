// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_user_proto_user_pb = require('./user_pb.js');
var common_pb = require('../../../common/proto/common_pb.js');

function serialize_ticket_common_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type ticket.common.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_common_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_common_Status(arg) {
  if (!(arg instanceof common_pb.Status)) {
    throw new Error('Expected argument of type ticket.common.Status');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_common_Status(buffer_arg) {
  return common_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_common_VoidResponse(arg) {
  if (!(arg instanceof common_pb.VoidResponse)) {
    throw new Error('Expected argument of type ticket.common.VoidResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_common_VoidResponse(buffer_arg) {
  return common_pb.VoidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_AuthUser(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.AuthUser)) {
    throw new Error('Expected argument of type ticket.svc.user.AuthUser');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_AuthUser(buffer_arg) {
  return src_app_services_user_proto_user_pb.AuthUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_Email(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.Email)) {
    throw new Error('Expected argument of type ticket.svc.user.Email');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_Email(buffer_arg) {
  return src_app_services_user_proto_user_pb.Email.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_Id(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.Id)) {
    throw new Error('Expected argument of type ticket.svc.user.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_Id(buffer_arg) {
  return src_app_services_user_proto_user_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_PasswordCheck(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.PasswordCheck)) {
    throw new Error('Expected argument of type ticket.svc.user.PasswordCheck');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_PasswordCheck(buffer_arg) {
  return src_app_services_user_proto_user_pb.PasswordCheck.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_UserList(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.UserList)) {
    throw new Error('Expected argument of type ticket.svc.user.UserList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_UserList(buffer_arg) {
  return src_app_services_user_proto_user_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_UserResponse(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.UserResponse)) {
    throw new Error('Expected argument of type ticket.svc.user.UserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_UserResponse(buffer_arg) {
  return src_app_services_user_proto_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_user_Username(arg) {
  if (!(arg instanceof src_app_services_user_proto_user_pb.Username)) {
    throw new Error('Expected argument of type ticket.svc.user.Username');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_user_Username(buffer_arg) {
  return src_app_services_user_proto_user_pb.Username.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getById: {
    path: '/ticket.svc.user.User/GetById',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.Id,
    responseType: src_app_services_user_proto_user_pb.AuthUser,
    requestSerialize: serialize_ticket_svc_user_Id,
    requestDeserialize: deserialize_ticket_svc_user_Id,
    responseSerialize: serialize_ticket_svc_user_AuthUser,
    responseDeserialize: deserialize_ticket_svc_user_AuthUser,
  },
  getByUsername: {
    path: '/ticket.svc.user.User/GetByUsername',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.Username,
    responseType: src_app_services_user_proto_user_pb.AuthUser,
    requestSerialize: serialize_ticket_svc_user_Username,
    requestDeserialize: deserialize_ticket_svc_user_Username,
    responseSerialize: serialize_ticket_svc_user_AuthUser,
    responseDeserialize: deserialize_ticket_svc_user_AuthUser,
  },
  getByEmail: {
    path: '/ticket.svc.user.User/GetByEmail',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.Email,
    responseType: src_app_services_user_proto_user_pb.AuthUser,
    requestSerialize: serialize_ticket_svc_user_Email,
    requestDeserialize: deserialize_ticket_svc_user_Email,
    responseSerialize: serialize_ticket_svc_user_AuthUser,
    responseDeserialize: deserialize_ticket_svc_user_AuthUser,
  },
  getAll: {
    path: '/ticket.svc.user.User/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: src_app_services_user_proto_user_pb.UserList,
    requestSerialize: serialize_ticket_common_Empty,
    requestDeserialize: deserialize_ticket_common_Empty,
    responseSerialize: serialize_ticket_svc_user_UserList,
    responseDeserialize: deserialize_ticket_svc_user_UserList,
  },
  checkPassword: {
    path: '/ticket.svc.user.User/CheckPassword',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.PasswordCheck,
    responseType: common_pb.Status,
    requestSerialize: serialize_ticket_svc_user_PasswordCheck,
    requestDeserialize: deserialize_ticket_svc_user_PasswordCheck,
    responseSerialize: serialize_ticket_common_Status,
    responseDeserialize: deserialize_ticket_common_Status,
  },
  create: {
    path: '/ticket.svc.user.User/Create',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.AuthUser,
    responseType: src_app_services_user_proto_user_pb.Id,
    requestSerialize: serialize_ticket_svc_user_AuthUser,
    requestDeserialize: deserialize_ticket_svc_user_AuthUser,
    responseSerialize: serialize_ticket_svc_user_Id,
    responseDeserialize: deserialize_ticket_svc_user_Id,
  },
  update: {
    path: '/ticket.svc.user.User/Update',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.AuthUser,
    responseType: src_app_services_user_proto_user_pb.UserResponse,
    requestSerialize: serialize_ticket_svc_user_AuthUser,
    requestDeserialize: deserialize_ticket_svc_user_AuthUser,
    responseSerialize: serialize_ticket_svc_user_UserResponse,
    responseDeserialize: deserialize_ticket_svc_user_UserResponse,
  },
  delete: {
    path: '/ticket.svc.user.User/Delete',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_user_proto_user_pb.Id,
    responseType: common_pb.VoidResponse,
    requestSerialize: serialize_ticket_svc_user_Id,
    requestDeserialize: deserialize_ticket_svc_user_Id,
    responseSerialize: serialize_ticket_common_VoidResponse,
    responseDeserialize: deserialize_ticket_common_VoidResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
