// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_history_proto_history_pb = require('./history_pb.js');
var common_pb = require('../../../common/proto/common_pb.js');

function serialize_ticket_svc_history_LogItem(arg) {
  if (!(arg instanceof src_app_services_history_proto_history_pb.LogItem)) {
    throw new Error('Expected argument of type ticket.svc.history.LogItem');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_history_LogItem(buffer_arg) {
  return src_app_services_history_proto_history_pb.LogItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_history_LogResponse(arg) {
  if (!(arg instanceof src_app_services_history_proto_history_pb.LogResponse)) {
    throw new Error('Expected argument of type ticket.svc.history.LogResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_history_LogResponse(buffer_arg) {
  return src_app_services_history_proto_history_pb.LogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_history_LogSprint(arg) {
  if (!(arg instanceof src_app_services_history_proto_history_pb.LogSprint)) {
    throw new Error('Expected argument of type ticket.svc.history.LogSprint');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_history_LogSprint(buffer_arg) {
  return src_app_services_history_proto_history_pb.LogSprint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_history_LogTicket(arg) {
  if (!(arg instanceof src_app_services_history_proto_history_pb.LogTicket)) {
    throw new Error('Expected argument of type ticket.svc.history.LogTicket');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_history_LogTicket(buffer_arg) {
  return src_app_services_history_proto_history_pb.LogTicket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_history_LogsResponse(arg) {
  if (!(arg instanceof src_app_services_history_proto_history_pb.LogsResponse)) {
    throw new Error('Expected argument of type ticket.svc.history.LogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_history_LogsResponse(buffer_arg) {
  return src_app_services_history_proto_history_pb.LogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HistoryService = exports.HistoryService = {
  getBySprint: {
    path: '/ticket.svc.history.History/GetBySprint',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_history_proto_history_pb.LogSprint,
    responseType: src_app_services_history_proto_history_pb.LogsResponse,
    requestSerialize: serialize_ticket_svc_history_LogSprint,
    requestDeserialize: deserialize_ticket_svc_history_LogSprint,
    responseSerialize: serialize_ticket_svc_history_LogsResponse,
    responseDeserialize: deserialize_ticket_svc_history_LogsResponse,
  },
  getByTicket: {
    path: '/ticket.svc.history.History/GetByTicket',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_history_proto_history_pb.LogTicket,
    responseType: src_app_services_history_proto_history_pb.LogsResponse,
    requestSerialize: serialize_ticket_svc_history_LogTicket,
    requestDeserialize: deserialize_ticket_svc_history_LogTicket,
    responseSerialize: serialize_ticket_svc_history_LogsResponse,
    responseDeserialize: deserialize_ticket_svc_history_LogsResponse,
  },
  log: {
    path: '/ticket.svc.history.History/Log',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_history_proto_history_pb.LogItem,
    responseType: src_app_services_history_proto_history_pb.LogResponse,
    requestSerialize: serialize_ticket_svc_history_LogItem,
    requestDeserialize: deserialize_ticket_svc_history_LogItem,
    responseSerialize: serialize_ticket_svc_history_LogResponse,
    responseDeserialize: deserialize_ticket_svc_history_LogResponse,
  },
};

exports.HistoryClient = grpc.makeGenericClientConstructor(HistoryService);
