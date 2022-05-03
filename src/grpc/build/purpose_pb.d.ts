import * as jspb from 'google-protobuf'



export class Mission extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Mission;

  getPayout(): number;
  setPayout(value: number): Mission;

  getCompleted(): boolean;
  setCompleted(value: boolean): Mission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mission.AsObject;
  static toObject(includeInstance: boolean, msg: Mission): Mission.AsObject;
  static serializeBinaryToWriter(message: Mission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mission;
  static deserializeBinaryFromReader(message: Mission, reader: jspb.BinaryReader): Mission;
}

export namespace Mission {
  export type AsObject = {
    title: string,
    payout: number,
    completed: boolean,
  }
}

export class MissionStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MissionStreamRequest): MissionStreamRequest.AsObject;
  static serializeBinaryToWriter(message: MissionStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionStreamRequest;
  static deserializeBinaryFromReader(message: MissionStreamRequest, reader: jspb.BinaryReader): MissionStreamRequest;
}

export namespace MissionStreamRequest {
  export type AsObject = {
  }
}

export class MissionStreamResponse extends jspb.Message {
  getType(): string;
  setType(value: string): MissionStreamResponse;

  getMissionsList(): Array<Mission>;
  setMissionsList(value: Array<Mission>): MissionStreamResponse;
  clearMissionsList(): MissionStreamResponse;
  addMissions(value?: Mission, index?: number): Mission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissionStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MissionStreamResponse): MissionStreamResponse.AsObject;
  static serializeBinaryToWriter(message: MissionStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissionStreamResponse;
  static deserializeBinaryFromReader(message: MissionStreamResponse, reader: jspb.BinaryReader): MissionStreamResponse;
}

export namespace MissionStreamResponse {
  export type AsObject = {
    type: string,
    missionsList: Array<Mission.AsObject>,
  }
}

export class AddMissionRequest extends jspb.Message {
  getMission(): Mission | undefined;
  setMission(value?: Mission): AddMissionRequest;
  hasMission(): boolean;
  clearMission(): AddMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMissionRequest): AddMissionRequest.AsObject;
  static serializeBinaryToWriter(message: AddMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMissionRequest;
  static deserializeBinaryFromReader(message: AddMissionRequest, reader: jspb.BinaryReader): AddMissionRequest;
}

export namespace AddMissionRequest {
  export type AsObject = {
    mission?: Mission.AsObject,
  }
}

export class AddMissionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddMissionResponse): AddMissionResponse.AsObject;
  static serializeBinaryToWriter(message: AddMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMissionResponse;
  static deserializeBinaryFromReader(message: AddMissionResponse, reader: jspb.BinaryReader): AddMissionResponse;
}

export namespace AddMissionResponse {
  export type AsObject = {
  }
}

export class RemoveMissionRequest extends jspb.Message {
  getMission(): Mission | undefined;
  setMission(value?: Mission): RemoveMissionRequest;
  hasMission(): boolean;
  clearMission(): RemoveMissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMissionRequest): RemoveMissionRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMissionRequest;
  static deserializeBinaryFromReader(message: RemoveMissionRequest, reader: jspb.BinaryReader): RemoveMissionRequest;
}

export namespace RemoveMissionRequest {
  export type AsObject = {
    mission?: Mission.AsObject,
  }
}

export class RemoveMissionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMissionResponse): RemoveMissionResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveMissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMissionResponse;
  static deserializeBinaryFromReader(message: RemoveMissionResponse, reader: jspb.BinaryReader): RemoveMissionResponse;
}

export namespace RemoveMissionResponse {
  export type AsObject = {
  }
}

