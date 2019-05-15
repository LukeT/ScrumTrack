// package: ticket.svc.user
// file: src/app/services/user/proto/user.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as common_pb from "../../../common/proto/common_pb";

export class Id extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
    export type AsObject = {
        id: number,
    }
}

export class Username extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Username.AsObject;
    static toObject(includeInstance: boolean, msg: Username): Username.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Username, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Username;
    static deserializeBinaryFromReader(message: Username, reader: jspb.BinaryReader): Username;
}

export namespace Username {
    export type AsObject = {
        username: string,
    }
}

export class Email extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Email.AsObject;
    static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Email;
    static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
    export type AsObject = {
        email: string,
    }
}

export class UserPassword extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPassword.AsObject;
    static toObject(includeInstance: boolean, msg: UserPassword): UserPassword.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPassword, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPassword;
    static deserializeBinaryFromReader(message: UserPassword, reader: jspb.BinaryReader): UserPassword;
}

export namespace UserPassword {
    export type AsObject = {
        id: number,
        password: string,
    }
}

export class AuthUser extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getUsername(): string;
    setUsername(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getRole(): string;
    setRole(value: string): void;

    getActive(): boolean;
    setActive(value: boolean): void;

    getDisabled(): boolean;
    setDisabled(value: boolean): void;

    getResetToken(): string;
    setResetToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUser.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUser): AuthUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUser;
    static deserializeBinaryFromReader(message: AuthUser, reader: jspb.BinaryReader): AuthUser;
}

export namespace AuthUser {
    export type AsObject = {
        id: number,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string,
        role: string,
        active: boolean,
        disabled: boolean,
        resetToken: string,
    }
}

export class UserList extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<AuthUser>;
    setUsersList(value: Array<AuthUser>): void;
    addUsers(value?: AuthUser, index?: number): AuthUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserList.AsObject;
    static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserList;
    static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
    export type AsObject = {
        usersList: Array<AuthUser.AsObject>,
    }
}

export class UserResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): common_pb.Error | undefined;
    setError(value?: common_pb.Error): void;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): AuthUser | undefined;
    setUser(value?: AuthUser): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        error?: common_pb.Error.AsObject,
        user?: AuthUser.AsObject,
    }
}

export class PasswordCheck extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): void;

    getPassword(): string;
    setPassword(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PasswordCheck.AsObject;
    static toObject(includeInstance: boolean, msg: PasswordCheck): PasswordCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PasswordCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PasswordCheck;
    static deserializeBinaryFromReader(message: PasswordCheck, reader: jspb.BinaryReader): PasswordCheck;
}

export namespace PasswordCheck {
    export type AsObject = {
        userid: number,
        password: string,
    }
}
