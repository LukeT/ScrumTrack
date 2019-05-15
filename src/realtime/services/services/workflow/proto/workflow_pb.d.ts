// package: ticket.svc.workflow
// file: src/app/services/workflow/proto/workflow.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class WorkflowConfiguration extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getMaxitems(): number;
    setMaxitems(value: number): void;

    getOrder(): number;
    setOrder(value: number): void;

    clearAllowList(): void;
    getAllowList(): Array<number>;
    setAllowList(value: Array<number>): void;
    addAllow(value: number, index?: number): number;

    getStatus(): common_pb.TicketStatus;
    setStatus(value: common_pb.TicketStatus): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowConfiguration): WorkflowConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowConfiguration;
    static deserializeBinaryFromReader(message: WorkflowConfiguration, reader: jspb.BinaryReader): WorkflowConfiguration;
}

export namespace WorkflowConfiguration {
    export type AsObject = {
        id: number,
        name: string,
        maxitems: number,
        order: number,
        allowList: Array<number>,
        status: common_pb.TicketStatus,
    }
}

export class WorkflowId extends jspb.Message { 
    getWorkflowid(): number;
    setWorkflowid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowId.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowId): WorkflowId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowId;
    static deserializeBinaryFromReader(message: WorkflowId, reader: jspb.BinaryReader): WorkflowId;
}

export namespace WorkflowId {
    export type AsObject = {
        workflowid: number,
    }
}

export class WorkflowConfigurations extends jspb.Message { 
    clearWorkflowsList(): void;
    getWorkflowsList(): Array<WorkflowConfiguration>;
    setWorkflowsList(value: Array<WorkflowConfiguration>): void;
    addWorkflows(value?: WorkflowConfiguration, index?: number): WorkflowConfiguration;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowConfigurations.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowConfigurations): WorkflowConfigurations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowConfigurations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowConfigurations;
    static deserializeBinaryFromReader(message: WorkflowConfigurations, reader: jspb.BinaryReader): WorkflowConfigurations;
}

export namespace WorkflowConfigurations {
    export type AsObject = {
        workflowsList: Array<WorkflowConfiguration.AsObject>,
        error?: common_pb.Error.AsObject,
    }
}

export class WorkflowConfigurationResponse extends jspb.Message { 

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): WorkflowConfiguration | undefined;
    setWorkflow(value?: WorkflowConfiguration): void;


    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowConfigurationResponse): WorkflowConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowConfigurationResponse;
    static deserializeBinaryFromReader(message: WorkflowConfigurationResponse, reader: jspb.BinaryReader): WorkflowConfigurationResponse;
}

export namespace WorkflowConfigurationResponse {
    export type AsObject = {
        workflow?: WorkflowConfiguration.AsObject,
        error?: common_pb.Error.AsObject,
    }
}

export class InitialColumn extends jspb.Message { 
    getWorkflowid(): number;
    setWorkflowid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitialColumn.AsObject;
    static toObject(includeInstance: boolean, msg: InitialColumn): InitialColumn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitialColumn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitialColumn;
    static deserializeBinaryFromReader(message: InitialColumn, reader: jspb.BinaryReader): InitialColumn;
}

export namespace InitialColumn {
    export type AsObject = {
        workflowid: number,
    }
}
