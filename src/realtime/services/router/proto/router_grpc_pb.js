// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_router_proto_router_pb = require('../../../../src/app/router/proto/router_pb.js');

function serialize_ticket_router_Request(arg) {
  if (!(arg instanceof src_app_router_proto_router_pb.Request)) {
    throw new Error('Expected argument of type ticket.router.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_router_Request(buffer_arg) {
  return src_app_router_proto_router_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_router_Response(arg) {
  if (!(arg instanceof src_app_router_proto_router_pb.Response)) {
    throw new Error('Expected argument of type ticket.router.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_router_Response(buffer_arg) {
  return src_app_router_proto_router_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var RouterService = exports.RouterService = {
  call: {
    path: '/ticket.router.Router/Call',
    requestStream: false,
    responseStream: false,
    requestType: src_app_router_proto_router_pb.Request,
    responseType: src_app_router_proto_router_pb.Response,
    requestSerialize: serialize_ticket_router_Request,
    requestDeserialize: deserialize_ticket_router_Request,
    responseSerialize: serialize_ticket_router_Response,
    responseDeserialize: deserialize_ticket_router_Response,
  },
};

exports.RouterClient = grpc.makeGenericClientConstructor(RouterService);
