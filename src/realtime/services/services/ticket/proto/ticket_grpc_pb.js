// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_ticket_proto_ticket_pb = require('./ticket_pb.js');
var common_pb = require('../../../common/proto/common_pb.js');

function serialize_ticket_common_Status(arg) {
  if (!(arg instanceof common_pb.Status)) {
    throw new Error('Expected argument of type ticket.common.Status');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_common_Status(buffer_arg) {
  return common_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_Categories(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.Categories)) {
    throw new Error('Expected argument of type ticket.svc.ticket.Categories');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_Categories(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.Categories.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_CommentResponse(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.CommentResponse)) {
    throw new Error('Expected argument of type ticket.svc.ticket.CommentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_CommentResponse(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.CommentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_CommentsListResponse(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.CommentsListResponse)) {
    throw new Error('Expected argument of type ticket.svc.ticket.CommentsListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_CommentsListResponse(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.CommentsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_GetAllRequest(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.GetAllRequest)) {
    throw new Error('Expected argument of type ticket.svc.ticket.GetAllRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_GetAllRequest(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.GetAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_GetRequest(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.GetRequest)) {
    throw new Error('Expected argument of type ticket.svc.ticket.GetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_GetRequest(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_MoveRequest(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.MoveRequest)) {
    throw new Error('Expected argument of type ticket.svc.ticket.MoveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_MoveRequest(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.MoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_MoveWithinSprintRequest(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest)) {
    throw new Error('Expected argument of type ticket.svc.ticket.MoveWithinSprintRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_MoveWithinSprintRequest(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_Ticket(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.Ticket)) {
    throw new Error('Expected argument of type ticket.svc.ticket.Ticket');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_Ticket(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.Ticket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_TicketComment(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.TicketComment)) {
    throw new Error('Expected argument of type ticket.svc.ticket.TicketComment');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_TicketComment(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.TicketComment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_TicketResponse(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.TicketResponse)) {
    throw new Error('Expected argument of type ticket.svc.ticket.TicketResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_TicketResponse(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.TicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_ticket_TicketsListResponse(arg) {
  if (!(arg instanceof src_app_services_ticket_proto_ticket_pb.TicketsListResponse)) {
    throw new Error('Expected argument of type ticket.svc.ticket.TicketsListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_ticket_TicketsListResponse(buffer_arg) {
  return src_app_services_ticket_proto_ticket_pb.TicketsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TicketsService = exports.TicketsService = {
  getAll: {
    path: '/ticket.svc.ticket.Tickets/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.GetAllRequest,
    responseType: src_app_services_ticket_proto_ticket_pb.TicketsListResponse,
    requestSerialize: serialize_ticket_svc_ticket_GetAllRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_GetAllRequest,
    responseSerialize: serialize_ticket_svc_ticket_TicketsListResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_TicketsListResponse,
  },
  get: {
    path: '/ticket.svc.ticket.Tickets/Get',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.GetRequest,
    responseType: src_app_services_ticket_proto_ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_svc_ticket_GetRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_GetRequest,
    responseSerialize: serialize_ticket_svc_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_TicketResponse,
  },
  create: {
    path: '/ticket.svc.ticket.Tickets/Create',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.Ticket,
    responseType: src_app_services_ticket_proto_ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_svc_ticket_Ticket,
    requestDeserialize: deserialize_ticket_svc_ticket_Ticket,
    responseSerialize: serialize_ticket_svc_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_TicketResponse,
  },
  update: {
    path: '/ticket.svc.ticket.Tickets/Update',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.Ticket,
    responseType: src_app_services_ticket_proto_ticket_pb.TicketResponse,
    requestSerialize: serialize_ticket_svc_ticket_Ticket,
    requestDeserialize: deserialize_ticket_svc_ticket_Ticket,
    responseSerialize: serialize_ticket_svc_ticket_TicketResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_TicketResponse,
  },
  move: {
    path: '/ticket.svc.ticket.Tickets/Move',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.MoveRequest,
    responseType: common_pb.Status,
    requestSerialize: serialize_ticket_svc_ticket_MoveRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_MoveRequest,
    responseSerialize: serialize_ticket_common_Status,
    responseDeserialize: deserialize_ticket_common_Status,
  },
  moveWithinSprint: {
    path: '/ticket.svc.ticket.Tickets/MoveWithinSprint',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.MoveWithinSprintRequest,
    responseType: common_pb.Status,
    requestSerialize: serialize_ticket_svc_ticket_MoveWithinSprintRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_MoveWithinSprintRequest,
    responseSerialize: serialize_ticket_common_Status,
    responseDeserialize: deserialize_ticket_common_Status,
  },
  getComments: {
    path: '/ticket.svc.ticket.Tickets/GetComments',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.GetRequest,
    responseType: src_app_services_ticket_proto_ticket_pb.CommentsListResponse,
    requestSerialize: serialize_ticket_svc_ticket_GetRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_GetRequest,
    responseSerialize: serialize_ticket_svc_ticket_CommentsListResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_CommentsListResponse,
  },
  createComment: {
    path: '/ticket.svc.ticket.Tickets/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.TicketComment,
    responseType: src_app_services_ticket_proto_ticket_pb.CommentResponse,
    requestSerialize: serialize_ticket_svc_ticket_TicketComment,
    requestDeserialize: deserialize_ticket_svc_ticket_TicketComment,
    responseSerialize: serialize_ticket_svc_ticket_CommentResponse,
    responseDeserialize: deserialize_ticket_svc_ticket_CommentResponse,
  },
  getCategories: {
    path: '/ticket.svc.ticket.Tickets/GetCategories',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_ticket_proto_ticket_pb.GetAllRequest,
    responseType: src_app_services_ticket_proto_ticket_pb.Categories,
    requestSerialize: serialize_ticket_svc_ticket_GetAllRequest,
    requestDeserialize: deserialize_ticket_svc_ticket_GetAllRequest,
    responseSerialize: serialize_ticket_svc_ticket_Categories,
    responseDeserialize: deserialize_ticket_svc_ticket_Categories,
  },
};

exports.TicketsClient = grpc.makeGenericClientConstructor(TicketsService);
