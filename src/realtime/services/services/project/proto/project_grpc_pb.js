// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_project_proto_project_pb = require('./project_pb.js');
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

function serialize_ticket_svc_project_ProjectResponse(arg) {
  if (!(arg instanceof src_app_services_project_proto_project_pb.ProjectResponse)) {
    throw new Error('Expected argument of type ticket.svc.project.ProjectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_project_ProjectResponse(buffer_arg) {
  return src_app_services_project_proto_project_pb.ProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_project_ProjectsResponse(arg) {
  if (!(arg instanceof src_app_services_project_proto_project_pb.ProjectsResponse)) {
    throw new Error('Expected argument of type ticket.svc.project.ProjectsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_project_ProjectsResponse(buffer_arg) {
  return src_app_services_project_proto_project_pb.ProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_project_Shortcode(arg) {
  if (!(arg instanceof src_app_services_project_proto_project_pb.Shortcode)) {
    throw new Error('Expected argument of type ticket.svc.project.Shortcode');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_project_Shortcode(buffer_arg) {
  return src_app_services_project_proto_project_pb.Shortcode.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectsService = exports.ProjectsService = {
  get: {
    path: '/ticket.svc.project.Projects/Get',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_project_proto_project_pb.Shortcode,
    responseType: src_app_services_project_proto_project_pb.ProjectResponse,
    requestSerialize: serialize_ticket_svc_project_Shortcode,
    requestDeserialize: deserialize_ticket_svc_project_Shortcode,
    responseSerialize: serialize_ticket_svc_project_ProjectResponse,
    responseDeserialize: deserialize_ticket_svc_project_ProjectResponse,
  },
  getAll: {
    path: '/ticket.svc.project.Projects/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: src_app_services_project_proto_project_pb.ProjectsResponse,
    requestSerialize: serialize_ticket_common_Empty,
    requestDeserialize: deserialize_ticket_common_Empty,
    responseSerialize: serialize_ticket_svc_project_ProjectsResponse,
    responseDeserialize: deserialize_ticket_svc_project_ProjectsResponse,
  },
};

exports.ProjectsClient = grpc.makeGenericClientConstructor(ProjectsService);
