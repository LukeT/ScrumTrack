// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_workflow_proto_workflow_pb = require('./workflow_pb.js');
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

function serialize_ticket_common_VoidResponse(arg) {
  if (!(arg instanceof common_pb.VoidResponse)) {
    throw new Error('Expected argument of type ticket.common.VoidResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_common_VoidResponse(buffer_arg) {
  return common_pb.VoidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_workflow_InitialColumn(arg) {
  if (!(arg instanceof src_app_services_workflow_proto_workflow_pb.InitialColumn)) {
    throw new Error('Expected argument of type ticket.svc.workflow.InitialColumn');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_workflow_InitialColumn(buffer_arg) {
  return src_app_services_workflow_proto_workflow_pb.InitialColumn.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_workflow_WorkflowConfiguration(arg) {
  if (!(arg instanceof src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration)) {
    throw new Error('Expected argument of type ticket.svc.workflow.WorkflowConfiguration');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_workflow_WorkflowConfiguration(buffer_arg) {
  return src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_workflow_WorkflowConfigurationResponse(arg) {
  if (!(arg instanceof src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse)) {
    throw new Error('Expected argument of type ticket.svc.workflow.WorkflowConfigurationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_workflow_WorkflowConfigurationResponse(buffer_arg) {
  return src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_workflow_WorkflowConfigurations(arg) {
  if (!(arg instanceof src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations)) {
    throw new Error('Expected argument of type ticket.svc.workflow.WorkflowConfigurations');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_workflow_WorkflowConfigurations(buffer_arg) {
  return src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_workflow_WorkflowId(arg) {
  if (!(arg instanceof src_app_services_workflow_proto_workflow_pb.WorkflowId)) {
    throw new Error('Expected argument of type ticket.svc.workflow.WorkflowId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_workflow_WorkflowId(buffer_arg) {
  return src_app_services_workflow_proto_workflow_pb.WorkflowId.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkflowService = exports.WorkflowService = {
  get: {
    path: '/ticket.svc.workflow.Workflow/Get',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurations,
    requestSerialize: serialize_ticket_common_Empty,
    requestDeserialize: deserialize_ticket_common_Empty,
    responseSerialize: serialize_ticket_svc_workflow_WorkflowConfigurations,
    responseDeserialize: deserialize_ticket_svc_workflow_WorkflowConfigurations,
  },
  getOne: {
    path: '/ticket.svc.workflow.Workflow/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_workflow_proto_workflow_pb.WorkflowId,
    responseType: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse,
    requestSerialize: serialize_ticket_svc_workflow_WorkflowId,
    requestDeserialize: deserialize_ticket_svc_workflow_WorkflowId,
    responseSerialize: serialize_ticket_svc_workflow_WorkflowConfigurationResponse,
    responseDeserialize: deserialize_ticket_svc_workflow_WorkflowConfigurationResponse,
  },
  create: {
    path: '/ticket.svc.workflow.Workflow/Create',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration,
    responseType: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse,
    requestSerialize: serialize_ticket_svc_workflow_WorkflowConfiguration,
    requestDeserialize: deserialize_ticket_svc_workflow_WorkflowConfiguration,
    responseSerialize: serialize_ticket_svc_workflow_WorkflowConfigurationResponse,
    responseDeserialize: deserialize_ticket_svc_workflow_WorkflowConfigurationResponse,
  },
  update: {
    path: '/ticket.svc.workflow.Workflow/Update',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_workflow_proto_workflow_pb.WorkflowConfiguration,
    responseType: src_app_services_workflow_proto_workflow_pb.WorkflowConfigurationResponse,
    requestSerialize: serialize_ticket_svc_workflow_WorkflowConfiguration,
    requestDeserialize: deserialize_ticket_svc_workflow_WorkflowConfiguration,
    responseSerialize: serialize_ticket_svc_workflow_WorkflowConfigurationResponse,
    responseDeserialize: deserialize_ticket_svc_workflow_WorkflowConfigurationResponse,
  },
  delete: {
    path: '/ticket.svc.workflow.Workflow/Delete',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_workflow_proto_workflow_pb.WorkflowId,
    responseType: common_pb.VoidResponse,
    requestSerialize: serialize_ticket_svc_workflow_WorkflowId,
    requestDeserialize: deserialize_ticket_svc_workflow_WorkflowId,
    responseSerialize: serialize_ticket_common_VoidResponse,
    responseDeserialize: deserialize_ticket_common_VoidResponse,
  },
  getInitialColumn: {
    path: '/ticket.svc.workflow.Workflow/GetInitialColumn',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: src_app_services_workflow_proto_workflow_pb.InitialColumn,
    requestSerialize: serialize_ticket_common_Empty,
    requestDeserialize: deserialize_ticket_common_Empty,
    responseSerialize: serialize_ticket_svc_workflow_InitialColumn,
    responseDeserialize: deserialize_ticket_svc_workflow_InitialColumn,
  },
};

exports.WorkflowClient = grpc.makeGenericClientConstructor(WorkflowService);
