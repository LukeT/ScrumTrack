// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_sprint_proto_Sprint_pb = require('./Sprint_pb.js');
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

function serialize_ticket_svc_sprint_Sprint(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.Sprint)) {
    throw new Error('Expected argument of type ticket.svc.sprint.Sprint');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_Sprint(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.Sprint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintById(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintById)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintById');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintById(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintById.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintByProject(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintByProject)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintByProject');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintByProject(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintByProject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintComment(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintComment)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintComment');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintComment(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintComment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintCommentId(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintCommentId)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintCommentId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintCommentId(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintCommentId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintCommentIdWithSprint(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintCommentIdWithSprint');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintCommentIdWithSprint(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintCommentResponse(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintCommentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintCommentResponse(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintCommentsResponse(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintCommentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintCommentsResponse(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintIdAndProject(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintIdAndProject');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintIdAndProject(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintResponse(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintResponse)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintResponse(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_sprint_SprintsResponse(arg) {
  if (!(arg instanceof src_app_services_sprint_proto_Sprint_pb.SprintsResponse)) {
    throw new Error('Expected argument of type ticket.svc.sprint.SprintsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_sprint_SprintsResponse(buffer_arg) {
  return src_app_services_sprint_proto_Sprint_pb.SprintsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SprintsService = exports.SprintsService = {
  getActiveSprint: {
    path: '/ticket.svc.sprint.Sprints/GetActiveSprint',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintByProject,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintByProject,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintByProject,
    responseSerialize: serialize_ticket_svc_sprint_SprintResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintResponse,
  },
  getHistoricSprints: {
    path: '/ticket.svc.sprint.Sprints/GetHistoricSprints',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintByProject,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintsResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintByProject,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintByProject,
    responseSerialize: serialize_ticket_svc_sprint_SprintsResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintsResponse,
  },
  getById: {
    path: '/ticket.svc.sprint.Sprints/GetById',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintById,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintById,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintById,
    responseSerialize: serialize_ticket_svc_sprint_SprintResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintResponse,
  },
  create: {
    path: '/ticket.svc.sprint.Sprints/Create',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.Sprint,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintResponse,
    requestSerialize: serialize_ticket_svc_sprint_Sprint,
    requestDeserialize: deserialize_ticket_svc_sprint_Sprint,
    responseSerialize: serialize_ticket_svc_sprint_SprintResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintResponse,
  },
  update: {
    path: '/ticket.svc.sprint.Sprints/Update',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.Sprint,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintResponse,
    requestSerialize: serialize_ticket_svc_sprint_Sprint,
    requestDeserialize: deserialize_ticket_svc_sprint_Sprint,
    responseSerialize: serialize_ticket_svc_sprint_SprintResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintResponse,
  },
  getComments: {
    path: '/ticket.svc.sprint.Sprints/GetComments',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintIdAndProject,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintIdAndProject,
    responseSerialize: serialize_ticket_svc_sprint_SprintCommentsResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintCommentsResponse,
  },
  pastComments: {
    path: '/ticket.svc.sprint.Sprints/PastComments',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintIdAndProject,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintCommentsResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintIdAndProject,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintIdAndProject,
    responseSerialize: serialize_ticket_svc_sprint_SprintCommentsResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintCommentsResponse,
  },
  addComment: {
    path: '/ticket.svc.sprint.Sprints/AddComment',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintComment,
    responseType: src_app_services_sprint_proto_Sprint_pb.SprintCommentResponse,
    requestSerialize: serialize_ticket_svc_sprint_SprintComment,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintComment,
    responseSerialize: serialize_ticket_svc_sprint_SprintCommentResponse,
    responseDeserialize: deserialize_ticket_svc_sprint_SprintCommentResponse,
  },
  deleteComment: {
    path: '/ticket.svc.sprint.Sprints/DeleteComment',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintCommentId,
    responseType: common_pb.Status,
    requestSerialize: serialize_ticket_svc_sprint_SprintCommentId,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintCommentId,
    responseSerialize: serialize_ticket_common_Status,
    responseDeserialize: deserialize_ticket_common_Status,
  },
  resolveComment: {
    path: '/ticket.svc.sprint.Sprints/ResolveComment',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_sprint_proto_Sprint_pb.SprintCommentIdWithSprint,
    responseType: common_pb.Status,
    requestSerialize: serialize_ticket_svc_sprint_SprintCommentIdWithSprint,
    requestDeserialize: deserialize_ticket_svc_sprint_SprintCommentIdWithSprint,
    responseSerialize: serialize_ticket_common_Status,
    responseDeserialize: deserialize_ticket_common_Status,
  },
};

exports.SprintsClient = grpc.makeGenericClientConstructor(SprintsService);
