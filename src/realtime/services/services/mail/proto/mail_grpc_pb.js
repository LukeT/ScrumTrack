// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_app_services_mail_proto_mail_pb = require('./mail_pb.js');

function serialize_ticket_svc_mail_Envelope(arg) {
  if (!(arg instanceof src_app_services_mail_proto_mail_pb.Envelope)) {
    throw new Error('Expected argument of type ticket.svc.mail.Envelope');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_mail_Envelope(buffer_arg) {
  return src_app_services_mail_proto_mail_pb.Envelope.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ticket_svc_mail_Stamp(arg) {
  if (!(arg instanceof src_app_services_mail_proto_mail_pb.Stamp)) {
    throw new Error('Expected argument of type ticket.svc.mail.Stamp');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ticket_svc_mail_Stamp(buffer_arg) {
  return src_app_services_mail_proto_mail_pb.Stamp.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailService = exports.MailService = {
  post: {
    path: '/ticket.svc.mail.Mail/Post',
    requestStream: false,
    responseStream: false,
    requestType: src_app_services_mail_proto_mail_pb.Envelope,
    responseType: src_app_services_mail_proto_mail_pb.Stamp,
    requestSerialize: serialize_ticket_svc_mail_Envelope,
    requestDeserialize: deserialize_ticket_svc_mail_Envelope,
    responseSerialize: serialize_ticket_svc_mail_Stamp,
    responseDeserialize: deserialize_ticket_svc_mail_Stamp,
  },
};

exports.MailClient = grpc.makeGenericClientConstructor(MailService);
