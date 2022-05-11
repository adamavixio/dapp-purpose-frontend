/**
 * @fileoverview gRPC-Web generated client stub for purpose
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as purpose_pb from './purpose_pb';


export class PurposeClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorMissionStream = new grpcWeb.MethodDescriptor(
    '/purpose.Purpose/MissionStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    purpose_pb.MissionStreamRequest,
    purpose_pb.MissionStreamResponse,
    (request: purpose_pb.MissionStreamRequest) => {
      return request.serializeBinary();
    },
    purpose_pb.MissionStreamResponse.deserializeBinary
  );

  missionStream(
    request: purpose_pb.MissionStreamRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<purpose_pb.MissionStreamResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/purpose.Purpose/MissionStream',
      request,
      metadata || {},
      this.methodDescriptorMissionStream);
  }

  methodDescriptorAddMission = new grpcWeb.MethodDescriptor(
    '/purpose.Purpose/AddMission',
    grpcWeb.MethodType.UNARY,
    purpose_pb.AddMissionRequest,
    purpose_pb.AddMissionResponse,
    (request: purpose_pb.AddMissionRequest) => {
      return request.serializeBinary();
    },
    purpose_pb.AddMissionResponse.deserializeBinary
  );

  addMission(
    request: purpose_pb.AddMissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<purpose_pb.AddMissionResponse>;

  addMission(
    request: purpose_pb.AddMissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: purpose_pb.AddMissionResponse) => void): grpcWeb.ClientReadableStream<purpose_pb.AddMissionResponse>;

  addMission(
    request: purpose_pb.AddMissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: purpose_pb.AddMissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/purpose.Purpose/AddMission',
        request,
        metadata || {},
        this.methodDescriptorAddMission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/purpose.Purpose/AddMission',
    request,
    metadata || {},
    this.methodDescriptorAddMission);
  }

  methodDescriptorRemoveMission = new grpcWeb.MethodDescriptor(
    '/purpose.Purpose/RemoveMission',
    grpcWeb.MethodType.UNARY,
    purpose_pb.RemoveMissionRequest,
    purpose_pb.RemoveMissionResponse,
    (request: purpose_pb.RemoveMissionRequest) => {
      return request.serializeBinary();
    },
    purpose_pb.RemoveMissionResponse.deserializeBinary
  );

  removeMission(
    request: purpose_pb.RemoveMissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<purpose_pb.RemoveMissionResponse>;

  removeMission(
    request: purpose_pb.RemoveMissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: purpose_pb.RemoveMissionResponse) => void): grpcWeb.ClientReadableStream<purpose_pb.RemoveMissionResponse>;

  removeMission(
    request: purpose_pb.RemoveMissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: purpose_pb.RemoveMissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/purpose.Purpose/RemoveMission',
        request,
        metadata || {},
        this.methodDescriptorRemoveMission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/purpose.Purpose/RemoveMission',
    request,
    metadata || {},
    this.methodDescriptorRemoveMission);
  }

}

