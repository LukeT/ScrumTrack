import * as $protobuf from "protobufjs";
/** ResultAction enum. */
export enum ResultAction {
    CONTINUE = 1,
    AVERAGE = 2,
    STRIP_OUTLIER = 3,
    REVOTE = 4,
    SKIP = 5
}

/** Properties of an Authenticate. */
export interface IAuthenticate {

    /** Authenticate jwt */
    jwt?: (string|null);
}

/** Represents an Authenticate. */
export class Authenticate implements IAuthenticate {

    /**
     * Constructs a new Authenticate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthenticate);

    /** Authenticate jwt. */
    public jwt: string;

    /**
     * Creates a new Authenticate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Authenticate instance
     */
    public static create(properties?: IAuthenticate): Authenticate;

    /**
     * Encodes the specified Authenticate message. Does not implicitly {@link Authenticate.verify|verify} messages.
     * @param message Authenticate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthenticate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Authenticate message, length delimited. Does not implicitly {@link Authenticate.verify|verify} messages.
     * @param message Authenticate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthenticate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Authenticate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Authenticate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authenticate;

    /**
     * Decodes an Authenticate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Authenticate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authenticate;

    /**
     * Verifies an Authenticate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Authenticate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Authenticate
     */
    public static fromObject(object: { [k: string]: any }): Authenticate;

    /**
     * Creates a plain object from an Authenticate message. Also converts values to other types if specified.
     * @param message Authenticate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Authenticate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Authenticate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BeginPlanningSession. */
export interface IBeginPlanningSession {

    /** BeginPlanningSession project */
    project?: (string|null);
}

/** Represents a BeginPlanningSession. */
export class BeginPlanningSession implements IBeginPlanningSession {

    /**
     * Constructs a new BeginPlanningSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBeginPlanningSession);

    /** BeginPlanningSession project. */
    public project: string;

    /**
     * Creates a new BeginPlanningSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeginPlanningSession instance
     */
    public static create(properties?: IBeginPlanningSession): BeginPlanningSession;

    /**
     * Encodes the specified BeginPlanningSession message. Does not implicitly {@link BeginPlanningSession.verify|verify} messages.
     * @param message BeginPlanningSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBeginPlanningSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BeginPlanningSession message, length delimited. Does not implicitly {@link BeginPlanningSession.verify|verify} messages.
     * @param message BeginPlanningSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBeginPlanningSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeginPlanningSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BeginPlanningSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BeginPlanningSession;

    /**
     * Decodes a BeginPlanningSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BeginPlanningSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BeginPlanningSession;

    /**
     * Verifies a BeginPlanningSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BeginPlanningSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BeginPlanningSession
     */
    public static fromObject(object: { [k: string]: any }): BeginPlanningSession;

    /**
     * Creates a plain object from a BeginPlanningSession message. Also converts values to other types if specified.
     * @param message BeginPlanningSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BeginPlanningSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BeginPlanningSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ParticipatePlanningSession. */
export interface IParticipatePlanningSession {

    /** ParticipatePlanningSession inSession */
    inSession?: (boolean|null);

    /** ParticipatePlanningSession project */
    project?: (string|null);
}

/** Represents a ParticipatePlanningSession. */
export class ParticipatePlanningSession implements IParticipatePlanningSession {

    /**
     * Constructs a new ParticipatePlanningSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: IParticipatePlanningSession);

    /** ParticipatePlanningSession inSession. */
    public inSession: boolean;

    /** ParticipatePlanningSession project. */
    public project: string;

    /**
     * Creates a new ParticipatePlanningSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ParticipatePlanningSession instance
     */
    public static create(properties?: IParticipatePlanningSession): ParticipatePlanningSession;

    /**
     * Encodes the specified ParticipatePlanningSession message. Does not implicitly {@link ParticipatePlanningSession.verify|verify} messages.
     * @param message ParticipatePlanningSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IParticipatePlanningSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ParticipatePlanningSession message, length delimited. Does not implicitly {@link ParticipatePlanningSession.verify|verify} messages.
     * @param message ParticipatePlanningSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IParticipatePlanningSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ParticipatePlanningSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ParticipatePlanningSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ParticipatePlanningSession;

    /**
     * Decodes a ParticipatePlanningSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ParticipatePlanningSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ParticipatePlanningSession;

    /**
     * Verifies a ParticipatePlanningSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ParticipatePlanningSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ParticipatePlanningSession
     */
    public static fromObject(object: { [k: string]: any }): ParticipatePlanningSession;

    /**
     * Creates a plain object from a ParticipatePlanningSession message. Also converts values to other types if specified.
     * @param message ParticipatePlanningSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ParticipatePlanningSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ParticipatePlanningSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Vote. */
export interface IVote {

    /** Vote weight */
    weight?: (number|null);

    /** Vote ticketId */
    ticketId?: (number|null);
}

/** Represents a Vote. */
export class Vote implements IVote {

    /**
     * Constructs a new Vote.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVote);

    /** Vote weight. */
    public weight: number;

    /** Vote ticketId. */
    public ticketId: number;

    /**
     * Creates a new Vote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vote instance
     */
    public static create(properties?: IVote): Vote;

    /**
     * Encodes the specified Vote message. Does not implicitly {@link Vote.verify|verify} messages.
     * @param message Vote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Vote message, length delimited. Does not implicitly {@link Vote.verify|verify} messages.
     * @param message Vote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vote;

    /**
     * Decodes a Vote message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vote;

    /**
     * Verifies a Vote message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Vote message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Vote
     */
    public static fromObject(object: { [k: string]: any }): Vote;

    /**
     * Creates a plain object from a Vote message. Also converts values to other types if specified.
     * @param message Vote
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Vote to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CastAction. */
export interface ICastAction {

    /** CastAction action */
    action?: (ResultAction|null);
}

/** Represents a CastAction. */
export class CastAction implements ICastAction {

    /**
     * Constructs a new CastAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICastAction);

    /** CastAction action. */
    public action: ResultAction;

    /**
     * Creates a new CastAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CastAction instance
     */
    public static create(properties?: ICastAction): CastAction;

    /**
     * Encodes the specified CastAction message. Does not implicitly {@link CastAction.verify|verify} messages.
     * @param message CastAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICastAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CastAction message, length delimited. Does not implicitly {@link CastAction.verify|verify} messages.
     * @param message CastAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICastAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CastAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CastAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastAction;

    /**
     * Decodes a CastAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CastAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastAction;

    /**
     * Verifies a CastAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CastAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CastAction
     */
    public static fromObject(object: { [k: string]: any }): CastAction;

    /**
     * Creates a plain object from a CastAction message. Also converts values to other types if specified.
     * @param message CastAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CastAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CastAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Authenticated. */
export interface IAuthenticated {

    /** Authenticated status */
    status?: (boolean|null);

    /** Authenticated message */
    message?: (string|null);
}

/** Represents an Authenticated. */
export class Authenticated implements IAuthenticated {

    /**
     * Constructs a new Authenticated.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthenticated);

    /** Authenticated status. */
    public status: boolean;

    /** Authenticated message. */
    public message: string;

    /**
     * Creates a new Authenticated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Authenticated instance
     */
    public static create(properties?: IAuthenticated): Authenticated;

    /**
     * Encodes the specified Authenticated message. Does not implicitly {@link Authenticated.verify|verify} messages.
     * @param message Authenticated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthenticated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Authenticated message, length delimited. Does not implicitly {@link Authenticated.verify|verify} messages.
     * @param message Authenticated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthenticated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Authenticated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Authenticated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Authenticated;

    /**
     * Decodes an Authenticated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Authenticated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Authenticated;

    /**
     * Verifies an Authenticated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Authenticated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Authenticated
     */
    public static fromObject(object: { [k: string]: any }): Authenticated;

    /**
     * Creates a plain object from an Authenticated message. Also converts values to other types if specified.
     * @param message Authenticated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Authenticated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Authenticated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserStatus. */
export interface IUserStatus {

    /** UserStatus status */
    status?: (boolean|null);

    /** UserStatus userId */
    userId?: (number|null);
}

/** Represents a UserStatus. */
export class UserStatus implements IUserStatus {

    /**
     * Constructs a new UserStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserStatus);

    /** UserStatus status. */
    public status: boolean;

    /** UserStatus userId. */
    public userId: number;

    /**
     * Creates a new UserStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserStatus instance
     */
    public static create(properties?: IUserStatus): UserStatus;

    /**
     * Encodes the specified UserStatus message. Does not implicitly {@link UserStatus.verify|verify} messages.
     * @param message UserStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserStatus message, length delimited. Does not implicitly {@link UserStatus.verify|verify} messages.
     * @param message UserStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserStatus;

    /**
     * Decodes a UserStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserStatus;

    /**
     * Verifies a UserStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserStatus
     */
    public static fromObject(object: { [k: string]: any }): UserStatus;

    /**
     * Creates a plain object from a UserStatus message. Also converts values to other types if specified.
     * @param message UserStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanSessionActive. */
export interface IPlanSessionActive {

    /** PlanSessionActive project */
    project?: (string|null);
}

/** Represents a PlanSessionActive. */
export class PlanSessionActive implements IPlanSessionActive {

    /**
     * Constructs a new PlanSessionActive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanSessionActive);

    /** PlanSessionActive project. */
    public project: string;

    /**
     * Creates a new PlanSessionActive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanSessionActive instance
     */
    public static create(properties?: IPlanSessionActive): PlanSessionActive;

    /**
     * Encodes the specified PlanSessionActive message. Does not implicitly {@link PlanSessionActive.verify|verify} messages.
     * @param message PlanSessionActive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanSessionActive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanSessionActive message, length delimited. Does not implicitly {@link PlanSessionActive.verify|verify} messages.
     * @param message PlanSessionActive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanSessionActive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanSessionActive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanSessionActive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanSessionActive;

    /**
     * Decodes a PlanSessionActive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanSessionActive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanSessionActive;

    /**
     * Verifies a PlanSessionActive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanSessionActive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanSessionActive
     */
    public static fromObject(object: { [k: string]: any }): PlanSessionActive;

    /**
     * Creates a plain object from a PlanSessionActive message. Also converts values to other types if specified.
     * @param message PlanSessionActive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanSessionActive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanSessionActive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlanSessionInactive. */
export interface IPlanSessionInactive {

    /** PlanSessionInactive project */
    project?: (string|null);
}

/** Represents a PlanSessionInactive. */
export class PlanSessionInactive implements IPlanSessionInactive {

    /**
     * Constructs a new PlanSessionInactive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlanSessionInactive);

    /** PlanSessionInactive project. */
    public project: string;

    /**
     * Creates a new PlanSessionInactive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlanSessionInactive instance
     */
    public static create(properties?: IPlanSessionInactive): PlanSessionInactive;

    /**
     * Encodes the specified PlanSessionInactive message. Does not implicitly {@link PlanSessionInactive.verify|verify} messages.
     * @param message PlanSessionInactive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlanSessionInactive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlanSessionInactive message, length delimited. Does not implicitly {@link PlanSessionInactive.verify|verify} messages.
     * @param message PlanSessionInactive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlanSessionInactive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlanSessionInactive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlanSessionInactive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlanSessionInactive;

    /**
     * Decodes a PlanSessionInactive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlanSessionInactive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlanSessionInactive;

    /**
     * Verifies a PlanSessionInactive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlanSessionInactive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlanSessionInactive
     */
    public static fromObject(object: { [k: string]: any }): PlanSessionInactive;

    /**
     * Creates a plain object from a PlanSessionInactive message. Also converts values to other types if specified.
     * @param message PlanSessionInactive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlanSessionInactive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlanSessionInactive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Session. */
export interface ISession {

    /** Session project */
    project?: (string|null);

    /** Session leader */
    leader?: (number|null);

    /** Session online */
    online?: (number[]|null);

    /** Session ticketId */
    ticketId?: (number|null);

    /** Session voted */
    voted?: (number[]|null);

    /** Session myVote */
    myVote?: (number|null);
}

/** Represents a Session. */
export class Session implements ISession {

    /**
     * Constructs a new Session.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISession);

    /** Session project. */
    public project: string;

    /** Session leader. */
    public leader: number;

    /** Session online. */
    public online: number[];

    /** Session ticketId. */
    public ticketId: number;

    /** Session voted. */
    public voted: number[];

    /** Session myVote. */
    public myVote: number;

    /**
     * Creates a new Session instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Session instance
     */
    public static create(properties?: ISession): Session;

    /**
     * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Session message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Session;

    /**
     * Decodes a Session message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Session;

    /**
     * Verifies a Session message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Session message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Session
     */
    public static fromObject(object: { [k: string]: any }): Session;

    /**
     * Creates a plain object from a Session message. Also converts values to other types if specified.
     * @param message Session
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Session to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LeftSession. */
export interface ILeftSession {

    /** LeftSession project */
    project?: (string|null);
}

/** Represents a LeftSession. */
export class LeftSession implements ILeftSession {

    /**
     * Constructs a new LeftSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILeftSession);

    /** LeftSession project. */
    public project: string;

    /**
     * Creates a new LeftSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LeftSession instance
     */
    public static create(properties?: ILeftSession): LeftSession;

    /**
     * Encodes the specified LeftSession message. Does not implicitly {@link LeftSession.verify|verify} messages.
     * @param message LeftSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILeftSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LeftSession message, length delimited. Does not implicitly {@link LeftSession.verify|verify} messages.
     * @param message LeftSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILeftSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LeftSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LeftSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LeftSession;

    /**
     * Decodes a LeftSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LeftSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LeftSession;

    /**
     * Verifies a LeftSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LeftSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LeftSession
     */
    public static fromObject(object: { [k: string]: any }): LeftSession;

    /**
     * Creates a plain object from a LeftSession message. Also converts values to other types if specified.
     * @param message LeftSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LeftSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LeftSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Voted. */
export interface IVoted {

    /** Voted userId */
    userId?: (number|null);
}

/** Represents a Voted. */
export class Voted implements IVoted {

    /**
     * Constructs a new Voted.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoted);

    /** Voted userId. */
    public userId: number;

    /**
     * Creates a new Voted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Voted instance
     */
    public static create(properties?: IVoted): Voted;

    /**
     * Encodes the specified Voted message. Does not implicitly {@link Voted.verify|verify} messages.
     * @param message Voted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Voted message, length delimited. Does not implicitly {@link Voted.verify|verify} messages.
     * @param message Voted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Voted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Voted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Voted;

    /**
     * Decodes a Voted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Voted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Voted;

    /**
     * Verifies a Voted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Voted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Voted
     */
    public static fromObject(object: { [k: string]: any }): Voted;

    /**
     * Creates a plain object from a Voted message. Also converts values to other types if specified.
     * @param message Voted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Voted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Voted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Weighted. */
export interface IWeighted {

    /** Weighted ticketId */
    ticketId?: (string|null);

    /** Weighted weight */
    weight?: (number|null);
}

/** Represents a Weighted. */
export class Weighted implements IWeighted {

    /**
     * Constructs a new Weighted.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeighted);

    /** Weighted ticketId. */
    public ticketId: string;

    /** Weighted weight. */
    public weight: number;

    /**
     * Creates a new Weighted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Weighted instance
     */
    public static create(properties?: IWeighted): Weighted;

    /**
     * Encodes the specified Weighted message. Does not implicitly {@link Weighted.verify|verify} messages.
     * @param message Weighted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeighted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Weighted message, length delimited. Does not implicitly {@link Weighted.verify|verify} messages.
     * @param message Weighted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeighted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Weighted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Weighted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Weighted;

    /**
     * Decodes a Weighted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Weighted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Weighted;

    /**
     * Verifies a Weighted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Weighted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Weighted
     */
    public static fromObject(object: { [k: string]: any }): Weighted;

    /**
     * Creates a plain object from a Weighted message. Also converts values to other types if specified.
     * @param message Weighted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Weighted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Weighted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NewTicket. */
export interface INewTicket {

    /** NewTicket ticketId */
    ticketId?: (number|null);
}

/** Represents a NewTicket. */
export class NewTicket implements INewTicket {

    /**
     * Constructs a new NewTicket.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewTicket);

    /** NewTicket ticketId. */
    public ticketId: number;

    /**
     * Creates a new NewTicket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewTicket instance
     */
    public static create(properties?: INewTicket): NewTicket;

    /**
     * Encodes the specified NewTicket message. Does not implicitly {@link NewTicket.verify|verify} messages.
     * @param message NewTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewTicket message, length delimited. Does not implicitly {@link NewTicket.verify|verify} messages.
     * @param message NewTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewTicket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewTicket;

    /**
     * Decodes a NewTicket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewTicket;

    /**
     * Verifies a NewTicket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewTicket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewTicket
     */
    public static fromObject(object: { [k: string]: any }): NewTicket;

    /**
     * Creates a plain object from a NewTicket message. Also converts values to other types if specified.
     * @param message NewTicket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewTicket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** CountdownReason enum. */
export enum CountdownReason {
    NOT_ENOUGH = 1,
    NEW_TICKET = 2,
    LOAD = 3
}

/** Properties of a Countdown. */
export interface ICountdown {

    /** Countdown durationMs */
    durationMs?: (number|null);

    /** Countdown reason */
    reason?: (CountdownReason|null);
}

/** Represents a Countdown. */
export class Countdown implements ICountdown {

    /**
     * Constructs a new Countdown.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICountdown);

    /** Countdown durationMs. */
    public durationMs: number;

    /** Countdown reason. */
    public reason: CountdownReason;

    /**
     * Creates a new Countdown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Countdown instance
     */
    public static create(properties?: ICountdown): Countdown;

    /**
     * Encodes the specified Countdown message. Does not implicitly {@link Countdown.verify|verify} messages.
     * @param message Countdown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICountdown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Countdown message, length delimited. Does not implicitly {@link Countdown.verify|verify} messages.
     * @param message Countdown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICountdown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Countdown message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Countdown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Countdown;

    /**
     * Decodes a Countdown message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Countdown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Countdown;

    /**
     * Verifies a Countdown message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Countdown message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Countdown
     */
    public static fromObject(object: { [k: string]: any }): Countdown;

    /**
     * Creates a plain object from a Countdown message. Also converts values to other types if specified.
     * @param message Countdown
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Countdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Countdown to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** EndSessionReason enum. */
export enum EndSessionReason {
    ADMIN_DONE = 1,
    NO_MORE = 2
}

/** Properties of an EndSession. */
export interface IEndSession {

    /** EndSession reason */
    reason?: (EndSessionReason|null);
}

/** Represents an EndSession. */
export class EndSession implements IEndSession {

    /**
     * Constructs a new EndSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEndSession);

    /** EndSession reason. */
    public reason: EndSessionReason;

    /**
     * Creates a new EndSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EndSession instance
     */
    public static create(properties?: IEndSession): EndSession;

    /**
     * Encodes the specified EndSession message. Does not implicitly {@link EndSession.verify|verify} messages.
     * @param message EndSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEndSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EndSession message, length delimited. Does not implicitly {@link EndSession.verify|verify} messages.
     * @param message EndSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEndSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EndSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EndSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EndSession;

    /**
     * Decodes an EndSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EndSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EndSession;

    /**
     * Verifies an EndSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EndSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EndSession
     */
    public static fromObject(object: { [k: string]: any }): EndSession;

    /**
     * Creates a plain object from an EndSession message. Also converts values to other types if specified.
     * @param message EndSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EndSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EndSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResultWeight. */
export interface IResultWeight {

    /** ResultWeight weight */
    weight?: (number|null);

    /** ResultWeight isOutlier */
    isOutlier?: (boolean|null);

    /** ResultWeight preferred */
    preferred?: (boolean|null);

    /** ResultWeight isMedian */
    isMedian?: (boolean|null);

    /** ResultWeight voters */
    voters?: (number[]|null);
}

/** Represents a ResultWeight. */
export class ResultWeight implements IResultWeight {

    /**
     * Constructs a new ResultWeight.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResultWeight);

    /** ResultWeight weight. */
    public weight: number;

    /** ResultWeight isOutlier. */
    public isOutlier: boolean;

    /** ResultWeight preferred. */
    public preferred: boolean;

    /** ResultWeight isMedian. */
    public isMedian: boolean;

    /** ResultWeight voters. */
    public voters: number[];

    /**
     * Creates a new ResultWeight instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResultWeight instance
     */
    public static create(properties?: IResultWeight): ResultWeight;

    /**
     * Encodes the specified ResultWeight message. Does not implicitly {@link ResultWeight.verify|verify} messages.
     * @param message ResultWeight message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResultWeight, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResultWeight message, length delimited. Does not implicitly {@link ResultWeight.verify|verify} messages.
     * @param message ResultWeight message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResultWeight, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResultWeight message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResultWeight
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResultWeight;

    /**
     * Decodes a ResultWeight message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResultWeight
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResultWeight;

    /**
     * Verifies a ResultWeight message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResultWeight message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResultWeight
     */
    public static fromObject(object: { [k: string]: any }): ResultWeight;

    /**
     * Creates a plain object from a ResultWeight message. Also converts values to other types if specified.
     * @param message ResultWeight
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResultWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResultWeight to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResultSet. */
export interface IResultSet {

    /** ResultSet weights */
    weights?: (IResultWeight[]|null);
}

/** Represents a ResultSet. */
export class ResultSet implements IResultSet {

    /**
     * Constructs a new ResultSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResultSet);

    /** ResultSet weights. */
    public weights: IResultWeight[];

    /**
     * Creates a new ResultSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResultSet instance
     */
    public static create(properties?: IResultSet): ResultSet;

    /**
     * Encodes the specified ResultSet message. Does not implicitly {@link ResultSet.verify|verify} messages.
     * @param message ResultSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResultSet message, length delimited. Does not implicitly {@link ResultSet.verify|verify} messages.
     * @param message ResultSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResultSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResultSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResultSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResultSet;

    /**
     * Decodes a ResultSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResultSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResultSet;

    /**
     * Verifies a ResultSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResultSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResultSet
     */
    public static fromObject(object: { [k: string]: any }): ResultSet;

    /**
     * Creates a plain object from a ResultSet message. Also converts values to other types if specified.
     * @param message ResultSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResultSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResultSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Results. */
export interface IResults {

    /** Results isFinal */
    isFinal?: (boolean|null);

    /** Results options */
    options?: (ResultAction[]|null);

    /** Results current */
    current?: (IResultSet|null);

    /** Results previous */
    previous?: (IResultSet|null);
}

/** Represents a Results. */
export class Results implements IResults {

    /**
     * Constructs a new Results.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResults);

    /** Results isFinal. */
    public isFinal: boolean;

    /** Results options. */
    public options: ResultAction[];

    /** Results current. */
    public current?: (IResultSet|null);

    /** Results previous. */
    public previous?: (IResultSet|null);

    /**
     * Creates a new Results instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Results instance
     */
    public static create(properties?: IResults): Results;

    /**
     * Encodes the specified Results message. Does not implicitly {@link Results.verify|verify} messages.
     * @param message Results message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Results message, length delimited. Does not implicitly {@link Results.verify|verify} messages.
     * @param message Results message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Results message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Results
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Results;

    /**
     * Decodes a Results message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Results
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Results;

    /**
     * Verifies a Results message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Results message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Results
     */
    public static fromObject(object: { [k: string]: any }): Results;

    /**
     * Creates a plain object from a Results message. Also converts values to other types if specified.
     * @param message Results
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Results, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Results to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
