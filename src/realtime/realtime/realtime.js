/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * ResultAction enum.
     * @exports ResultAction
     * @enum {string}
     * @property {number} CONTINUE=1 CONTINUE value
     * @property {number} AVERAGE=2 AVERAGE value
     * @property {number} STRIP_OUTLIER=3 STRIP_OUTLIER value
     * @property {number} REVOTE=4 REVOTE value
     * @property {number} SKIP=5 SKIP value
     */
    $root.ResultAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "CONTINUE"] = 1;
        values[valuesById[2] = "AVERAGE"] = 2;
        values[valuesById[3] = "STRIP_OUTLIER"] = 3;
        values[valuesById[4] = "REVOTE"] = 4;
        values[valuesById[5] = "SKIP"] = 5;
        return values;
    })();
    
    $root.Authenticate = (function() {
    
        /**
         * Properties of an Authenticate.
         * @exports IAuthenticate
         * @interface IAuthenticate
         * @property {string|null} [jwt] Authenticate jwt
         */
    
        /**
         * Constructs a new Authenticate.
         * @exports Authenticate
         * @classdesc Represents an Authenticate.
         * @implements IAuthenticate
         * @constructor
         * @param {IAuthenticate=} [properties] Properties to set
         */
        function Authenticate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Authenticate jwt.
         * @member {string} jwt
         * @memberof Authenticate
         * @instance
         */
        Authenticate.prototype.jwt = "";
    
        /**
         * Creates a new Authenticate instance using the specified properties.
         * @function create
         * @memberof Authenticate
         * @static
         * @param {IAuthenticate=} [properties] Properties to set
         * @returns {Authenticate} Authenticate instance
         */
        Authenticate.create = function create(properties) {
            return new Authenticate(properties);
        };
    
        /**
         * Encodes the specified Authenticate message. Does not implicitly {@link Authenticate.verify|verify} messages.
         * @function encode
         * @memberof Authenticate
         * @static
         * @param {IAuthenticate} message Authenticate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authenticate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.jwt);
            return writer;
        };
    
        /**
         * Encodes the specified Authenticate message, length delimited. Does not implicitly {@link Authenticate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Authenticate
         * @static
         * @param {IAuthenticate} message Authenticate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authenticate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Authenticate message from the specified reader or buffer.
         * @function decode
         * @memberof Authenticate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Authenticate} Authenticate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authenticate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Authenticate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.jwt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Authenticate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Authenticate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Authenticate} Authenticate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authenticate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Authenticate message.
         * @function verify
         * @memberof Authenticate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Authenticate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                if (!$util.isString(message.jwt))
                    return "jwt: string expected";
            return null;
        };
    
        /**
         * Creates an Authenticate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Authenticate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Authenticate} Authenticate
         */
        Authenticate.fromObject = function fromObject(object) {
            if (object instanceof $root.Authenticate)
                return object;
            var message = new $root.Authenticate();
            if (object.jwt != null)
                message.jwt = String(object.jwt);
            return message;
        };
    
        /**
         * Creates a plain object from an Authenticate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Authenticate
         * @static
         * @param {Authenticate} message Authenticate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Authenticate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.jwt = "";
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                object.jwt = message.jwt;
            return object;
        };
    
        /**
         * Converts this Authenticate to JSON.
         * @function toJSON
         * @memberof Authenticate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Authenticate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Authenticate;
    })();
    
    $root.BeginPlanningSession = (function() {
    
        /**
         * Properties of a BeginPlanningSession.
         * @exports IBeginPlanningSession
         * @interface IBeginPlanningSession
         * @property {string|null} [project] BeginPlanningSession project
         */
    
        /**
         * Constructs a new BeginPlanningSession.
         * @exports BeginPlanningSession
         * @classdesc Represents a BeginPlanningSession.
         * @implements IBeginPlanningSession
         * @constructor
         * @param {IBeginPlanningSession=} [properties] Properties to set
         */
        function BeginPlanningSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * BeginPlanningSession project.
         * @member {string} project
         * @memberof BeginPlanningSession
         * @instance
         */
        BeginPlanningSession.prototype.project = "";
    
        /**
         * Creates a new BeginPlanningSession instance using the specified properties.
         * @function create
         * @memberof BeginPlanningSession
         * @static
         * @param {IBeginPlanningSession=} [properties] Properties to set
         * @returns {BeginPlanningSession} BeginPlanningSession instance
         */
        BeginPlanningSession.create = function create(properties) {
            return new BeginPlanningSession(properties);
        };
    
        /**
         * Encodes the specified BeginPlanningSession message. Does not implicitly {@link BeginPlanningSession.verify|verify} messages.
         * @function encode
         * @memberof BeginPlanningSession
         * @static
         * @param {IBeginPlanningSession} message BeginPlanningSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeginPlanningSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            return writer;
        };
    
        /**
         * Encodes the specified BeginPlanningSession message, length delimited. Does not implicitly {@link BeginPlanningSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BeginPlanningSession
         * @static
         * @param {IBeginPlanningSession} message BeginPlanningSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeginPlanningSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a BeginPlanningSession message from the specified reader or buffer.
         * @function decode
         * @memberof BeginPlanningSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BeginPlanningSession} BeginPlanningSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeginPlanningSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BeginPlanningSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a BeginPlanningSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BeginPlanningSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BeginPlanningSession} BeginPlanningSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeginPlanningSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a BeginPlanningSession message.
         * @function verify
         * @memberof BeginPlanningSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeginPlanningSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            return null;
        };
    
        /**
         * Creates a BeginPlanningSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BeginPlanningSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BeginPlanningSession} BeginPlanningSession
         */
        BeginPlanningSession.fromObject = function fromObject(object) {
            if (object instanceof $root.BeginPlanningSession)
                return object;
            var message = new $root.BeginPlanningSession();
            if (object.project != null)
                message.project = String(object.project);
            return message;
        };
    
        /**
         * Creates a plain object from a BeginPlanningSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BeginPlanningSession
         * @static
         * @param {BeginPlanningSession} message BeginPlanningSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeginPlanningSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.project = "";
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            return object;
        };
    
        /**
         * Converts this BeginPlanningSession to JSON.
         * @function toJSON
         * @memberof BeginPlanningSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeginPlanningSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return BeginPlanningSession;
    })();
    
    $root.ParticipatePlanningSession = (function() {
    
        /**
         * Properties of a ParticipatePlanningSession.
         * @exports IParticipatePlanningSession
         * @interface IParticipatePlanningSession
         * @property {boolean|null} [inSession] ParticipatePlanningSession inSession
         * @property {string|null} [project] ParticipatePlanningSession project
         */
    
        /**
         * Constructs a new ParticipatePlanningSession.
         * @exports ParticipatePlanningSession
         * @classdesc Represents a ParticipatePlanningSession.
         * @implements IParticipatePlanningSession
         * @constructor
         * @param {IParticipatePlanningSession=} [properties] Properties to set
         */
        function ParticipatePlanningSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ParticipatePlanningSession inSession.
         * @member {boolean} inSession
         * @memberof ParticipatePlanningSession
         * @instance
         */
        ParticipatePlanningSession.prototype.inSession = false;
    
        /**
         * ParticipatePlanningSession project.
         * @member {string} project
         * @memberof ParticipatePlanningSession
         * @instance
         */
        ParticipatePlanningSession.prototype.project = "";
    
        /**
         * Creates a new ParticipatePlanningSession instance using the specified properties.
         * @function create
         * @memberof ParticipatePlanningSession
         * @static
         * @param {IParticipatePlanningSession=} [properties] Properties to set
         * @returns {ParticipatePlanningSession} ParticipatePlanningSession instance
         */
        ParticipatePlanningSession.create = function create(properties) {
            return new ParticipatePlanningSession(properties);
        };
    
        /**
         * Encodes the specified ParticipatePlanningSession message. Does not implicitly {@link ParticipatePlanningSession.verify|verify} messages.
         * @function encode
         * @memberof ParticipatePlanningSession
         * @static
         * @param {IParticipatePlanningSession} message ParticipatePlanningSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParticipatePlanningSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inSession != null && message.hasOwnProperty("inSession"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.inSession);
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            return writer;
        };
    
        /**
         * Encodes the specified ParticipatePlanningSession message, length delimited. Does not implicitly {@link ParticipatePlanningSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ParticipatePlanningSession
         * @static
         * @param {IParticipatePlanningSession} message ParticipatePlanningSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParticipatePlanningSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ParticipatePlanningSession message from the specified reader or buffer.
         * @function decode
         * @memberof ParticipatePlanningSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ParticipatePlanningSession} ParticipatePlanningSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParticipatePlanningSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParticipatePlanningSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inSession = reader.bool();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ParticipatePlanningSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ParticipatePlanningSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ParticipatePlanningSession} ParticipatePlanningSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParticipatePlanningSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ParticipatePlanningSession message.
         * @function verify
         * @memberof ParticipatePlanningSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParticipatePlanningSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inSession != null && message.hasOwnProperty("inSession"))
                if (typeof message.inSession !== "boolean")
                    return "inSession: boolean expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            return null;
        };
    
        /**
         * Creates a ParticipatePlanningSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ParticipatePlanningSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ParticipatePlanningSession} ParticipatePlanningSession
         */
        ParticipatePlanningSession.fromObject = function fromObject(object) {
            if (object instanceof $root.ParticipatePlanningSession)
                return object;
            var message = new $root.ParticipatePlanningSession();
            if (object.inSession != null)
                message.inSession = Boolean(object.inSession);
            if (object.project != null)
                message.project = String(object.project);
            return message;
        };
    
        /**
         * Creates a plain object from a ParticipatePlanningSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ParticipatePlanningSession
         * @static
         * @param {ParticipatePlanningSession} message ParticipatePlanningSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParticipatePlanningSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inSession = false;
                object.project = "";
            }
            if (message.inSession != null && message.hasOwnProperty("inSession"))
                object.inSession = message.inSession;
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            return object;
        };
    
        /**
         * Converts this ParticipatePlanningSession to JSON.
         * @function toJSON
         * @memberof ParticipatePlanningSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParticipatePlanningSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ParticipatePlanningSession;
    })();
    
    $root.Vote = (function() {
    
        /**
         * Properties of a Vote.
         * @exports IVote
         * @interface IVote
         * @property {number|null} [weight] Vote weight
         * @property {number|null} [ticketId] Vote ticketId
         */
    
        /**
         * Constructs a new Vote.
         * @exports Vote
         * @classdesc Represents a Vote.
         * @implements IVote
         * @constructor
         * @param {IVote=} [properties] Properties to set
         */
        function Vote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Vote weight.
         * @member {number} weight
         * @memberof Vote
         * @instance
         */
        Vote.prototype.weight = 0;
    
        /**
         * Vote ticketId.
         * @member {number} ticketId
         * @memberof Vote
         * @instance
         */
        Vote.prototype.ticketId = 0;
    
        /**
         * Creates a new Vote instance using the specified properties.
         * @function create
         * @memberof Vote
         * @static
         * @param {IVote=} [properties] Properties to set
         * @returns {Vote} Vote instance
         */
        Vote.create = function create(properties) {
            return new Vote(properties);
        };
    
        /**
         * Encodes the specified Vote message. Does not implicitly {@link Vote.verify|verify} messages.
         * @function encode
         * @memberof Vote
         * @static
         * @param {IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weight != null && message.hasOwnProperty("weight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.weight);
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ticketId);
            return writer;
        };
    
        /**
         * Encodes the specified Vote message, length delimited. Does not implicitly {@link Vote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Vote
         * @static
         * @param {IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @function decode
         * @memberof Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.weight = reader.int32();
                    break;
                case 2:
                    message.ticketId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Vote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Vote message.
         * @function verify
         * @memberof Vote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                if (!$util.isInteger(message.ticketId))
                    return "ticketId: integer expected";
            return null;
        };
    
        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Vote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Vote} Vote
         */
        Vote.fromObject = function fromObject(object) {
            if (object instanceof $root.Vote)
                return object;
            var message = new $root.Vote();
            if (object.weight != null)
                message.weight = object.weight | 0;
            if (object.ticketId != null)
                message.ticketId = object.ticketId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Vote
         * @static
         * @param {Vote} message Vote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.weight = 0;
                object.ticketId = 0;
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                object.ticketId = message.ticketId;
            return object;
        };
    
        /**
         * Converts this Vote to JSON.
         * @function toJSON
         * @memberof Vote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Vote;
    })();
    
    $root.CastAction = (function() {
    
        /**
         * Properties of a CastAction.
         * @exports ICastAction
         * @interface ICastAction
         * @property {ResultAction|null} [action] CastAction action
         */
    
        /**
         * Constructs a new CastAction.
         * @exports CastAction
         * @classdesc Represents a CastAction.
         * @implements ICastAction
         * @constructor
         * @param {ICastAction=} [properties] Properties to set
         */
        function CastAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CastAction action.
         * @member {ResultAction} action
         * @memberof CastAction
         * @instance
         */
        CastAction.prototype.action = 1;
    
        /**
         * Creates a new CastAction instance using the specified properties.
         * @function create
         * @memberof CastAction
         * @static
         * @param {ICastAction=} [properties] Properties to set
         * @returns {CastAction} CastAction instance
         */
        CastAction.create = function create(properties) {
            return new CastAction(properties);
        };
    
        /**
         * Encodes the specified CastAction message. Does not implicitly {@link CastAction.verify|verify} messages.
         * @function encode
         * @memberof CastAction
         * @static
         * @param {ICastAction} message CastAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CastAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            return writer;
        };
    
        /**
         * Encodes the specified CastAction message, length delimited. Does not implicitly {@link CastAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CastAction
         * @static
         * @param {ICastAction} message CastAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CastAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CastAction message from the specified reader or buffer.
         * @function decode
         * @memberof CastAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CastAction} CastAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CastAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CastAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CastAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CastAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CastAction} CastAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CastAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CastAction message.
         * @function verify
         * @memberof CastAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CastAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CastAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CastAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CastAction} CastAction
         */
        CastAction.fromObject = function fromObject(object) {
            if (object instanceof $root.CastAction)
                return object;
            var message = new $root.CastAction();
            switch (object.action) {
            case "CONTINUE":
            case 1:
                message.action = 1;
                break;
            case "AVERAGE":
            case 2:
                message.action = 2;
                break;
            case "STRIP_OUTLIER":
            case 3:
                message.action = 3;
                break;
            case "REVOTE":
            case 4:
                message.action = 4;
                break;
            case "SKIP":
            case 5:
                message.action = 5;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CastAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CastAction
         * @static
         * @param {CastAction} message CastAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CastAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.action = options.enums === String ? "CONTINUE" : 1;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.ResultAction[message.action] : message.action;
            return object;
        };
    
        /**
         * Converts this CastAction to JSON.
         * @function toJSON
         * @memberof CastAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CastAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CastAction;
    })();
    
    $root.Authenticated = (function() {
    
        /**
         * Properties of an Authenticated.
         * @exports IAuthenticated
         * @interface IAuthenticated
         * @property {boolean|null} [status] Authenticated status
         * @property {string|null} [message] Authenticated message
         */
    
        /**
         * Constructs a new Authenticated.
         * @exports Authenticated
         * @classdesc Represents an Authenticated.
         * @implements IAuthenticated
         * @constructor
         * @param {IAuthenticated=} [properties] Properties to set
         */
        function Authenticated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Authenticated status.
         * @member {boolean} status
         * @memberof Authenticated
         * @instance
         */
        Authenticated.prototype.status = false;
    
        /**
         * Authenticated message.
         * @member {string} message
         * @memberof Authenticated
         * @instance
         */
        Authenticated.prototype.message = "";
    
        /**
         * Creates a new Authenticated instance using the specified properties.
         * @function create
         * @memberof Authenticated
         * @static
         * @param {IAuthenticated=} [properties] Properties to set
         * @returns {Authenticated} Authenticated instance
         */
        Authenticated.create = function create(properties) {
            return new Authenticated(properties);
        };
    
        /**
         * Encodes the specified Authenticated message. Does not implicitly {@link Authenticated.verify|verify} messages.
         * @function encode
         * @memberof Authenticated
         * @static
         * @param {IAuthenticated} message Authenticated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authenticated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Authenticated message, length delimited. Does not implicitly {@link Authenticated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Authenticated
         * @static
         * @param {IAuthenticated} message Authenticated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Authenticated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Authenticated message from the specified reader or buffer.
         * @function decode
         * @memberof Authenticated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Authenticated} Authenticated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authenticated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Authenticated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.bool();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Authenticated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Authenticated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Authenticated} Authenticated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Authenticated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Authenticated message.
         * @function verify
         * @memberof Authenticated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Authenticated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates an Authenticated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Authenticated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Authenticated} Authenticated
         */
        Authenticated.fromObject = function fromObject(object) {
            if (object instanceof $root.Authenticated)
                return object;
            var message = new $root.Authenticated();
            if (object.status != null)
                message.status = Boolean(object.status);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from an Authenticated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Authenticated
         * @static
         * @param {Authenticated} message Authenticated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Authenticated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = false;
                object.message = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this Authenticated to JSON.
         * @function toJSON
         * @memberof Authenticated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Authenticated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Authenticated;
    })();
    
    $root.UserStatus = (function() {
    
        /**
         * Properties of a UserStatus.
         * @exports IUserStatus
         * @interface IUserStatus
         * @property {boolean|null} [status] UserStatus status
         * @property {number|null} [userId] UserStatus userId
         */
    
        /**
         * Constructs a new UserStatus.
         * @exports UserStatus
         * @classdesc Represents a UserStatus.
         * @implements IUserStatus
         * @constructor
         * @param {IUserStatus=} [properties] Properties to set
         */
        function UserStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UserStatus status.
         * @member {boolean} status
         * @memberof UserStatus
         * @instance
         */
        UserStatus.prototype.status = false;
    
        /**
         * UserStatus userId.
         * @member {number} userId
         * @memberof UserStatus
         * @instance
         */
        UserStatus.prototype.userId = 0;
    
        /**
         * Creates a new UserStatus instance using the specified properties.
         * @function create
         * @memberof UserStatus
         * @static
         * @param {IUserStatus=} [properties] Properties to set
         * @returns {UserStatus} UserStatus instance
         */
        UserStatus.create = function create(properties) {
            return new UserStatus(properties);
        };
    
        /**
         * Encodes the specified UserStatus message. Does not implicitly {@link UserStatus.verify|verify} messages.
         * @function encode
         * @memberof UserStatus
         * @static
         * @param {IUserStatus} message UserStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            return writer;
        };
    
        /**
         * Encodes the specified UserStatus message, length delimited. Does not implicitly {@link UserStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserStatus
         * @static
         * @param {IUserStatus} message UserStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a UserStatus message from the specified reader or buffer.
         * @function decode
         * @memberof UserStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserStatus} UserStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.bool();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a UserStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserStatus} UserStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a UserStatus message.
         * @function verify
         * @memberof UserStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };
    
        /**
         * Creates a UserStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserStatus} UserStatus
         */
        UserStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.UserStatus)
                return object;
            var message = new $root.UserStatus();
            if (object.status != null)
                message.status = Boolean(object.status);
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a UserStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserStatus
         * @static
         * @param {UserStatus} message UserStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = false;
                object.userId = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };
    
        /**
         * Converts this UserStatus to JSON.
         * @function toJSON
         * @memberof UserStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UserStatus;
    })();
    
    $root.PlanSessionActive = (function() {
    
        /**
         * Properties of a PlanSessionActive.
         * @exports IPlanSessionActive
         * @interface IPlanSessionActive
         * @property {string|null} [project] PlanSessionActive project
         */
    
        /**
         * Constructs a new PlanSessionActive.
         * @exports PlanSessionActive
         * @classdesc Represents a PlanSessionActive.
         * @implements IPlanSessionActive
         * @constructor
         * @param {IPlanSessionActive=} [properties] Properties to set
         */
        function PlanSessionActive(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlanSessionActive project.
         * @member {string} project
         * @memberof PlanSessionActive
         * @instance
         */
        PlanSessionActive.prototype.project = "";
    
        /**
         * Creates a new PlanSessionActive instance using the specified properties.
         * @function create
         * @memberof PlanSessionActive
         * @static
         * @param {IPlanSessionActive=} [properties] Properties to set
         * @returns {PlanSessionActive} PlanSessionActive instance
         */
        PlanSessionActive.create = function create(properties) {
            return new PlanSessionActive(properties);
        };
    
        /**
         * Encodes the specified PlanSessionActive message. Does not implicitly {@link PlanSessionActive.verify|verify} messages.
         * @function encode
         * @memberof PlanSessionActive
         * @static
         * @param {IPlanSessionActive} message PlanSessionActive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanSessionActive.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            return writer;
        };
    
        /**
         * Encodes the specified PlanSessionActive message, length delimited. Does not implicitly {@link PlanSessionActive.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlanSessionActive
         * @static
         * @param {IPlanSessionActive} message PlanSessionActive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanSessionActive.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlanSessionActive message from the specified reader or buffer.
         * @function decode
         * @memberof PlanSessionActive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlanSessionActive} PlanSessionActive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanSessionActive.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanSessionActive();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlanSessionActive message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlanSessionActive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlanSessionActive} PlanSessionActive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanSessionActive.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlanSessionActive message.
         * @function verify
         * @memberof PlanSessionActive
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlanSessionActive.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            return null;
        };
    
        /**
         * Creates a PlanSessionActive message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlanSessionActive
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlanSessionActive} PlanSessionActive
         */
        PlanSessionActive.fromObject = function fromObject(object) {
            if (object instanceof $root.PlanSessionActive)
                return object;
            var message = new $root.PlanSessionActive();
            if (object.project != null)
                message.project = String(object.project);
            return message;
        };
    
        /**
         * Creates a plain object from a PlanSessionActive message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlanSessionActive
         * @static
         * @param {PlanSessionActive} message PlanSessionActive
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlanSessionActive.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.project = "";
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            return object;
        };
    
        /**
         * Converts this PlanSessionActive to JSON.
         * @function toJSON
         * @memberof PlanSessionActive
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlanSessionActive.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlanSessionActive;
    })();
    
    $root.PlanSessionInactive = (function() {
    
        /**
         * Properties of a PlanSessionInactive.
         * @exports IPlanSessionInactive
         * @interface IPlanSessionInactive
         * @property {string|null} [project] PlanSessionInactive project
         */
    
        /**
         * Constructs a new PlanSessionInactive.
         * @exports PlanSessionInactive
         * @classdesc Represents a PlanSessionInactive.
         * @implements IPlanSessionInactive
         * @constructor
         * @param {IPlanSessionInactive=} [properties] Properties to set
         */
        function PlanSessionInactive(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlanSessionInactive project.
         * @member {string} project
         * @memberof PlanSessionInactive
         * @instance
         */
        PlanSessionInactive.prototype.project = "";
    
        /**
         * Creates a new PlanSessionInactive instance using the specified properties.
         * @function create
         * @memberof PlanSessionInactive
         * @static
         * @param {IPlanSessionInactive=} [properties] Properties to set
         * @returns {PlanSessionInactive} PlanSessionInactive instance
         */
        PlanSessionInactive.create = function create(properties) {
            return new PlanSessionInactive(properties);
        };
    
        /**
         * Encodes the specified PlanSessionInactive message. Does not implicitly {@link PlanSessionInactive.verify|verify} messages.
         * @function encode
         * @memberof PlanSessionInactive
         * @static
         * @param {IPlanSessionInactive} message PlanSessionInactive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanSessionInactive.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            return writer;
        };
    
        /**
         * Encodes the specified PlanSessionInactive message, length delimited. Does not implicitly {@link PlanSessionInactive.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlanSessionInactive
         * @static
         * @param {IPlanSessionInactive} message PlanSessionInactive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlanSessionInactive.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlanSessionInactive message from the specified reader or buffer.
         * @function decode
         * @memberof PlanSessionInactive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlanSessionInactive} PlanSessionInactive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanSessionInactive.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlanSessionInactive();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlanSessionInactive message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlanSessionInactive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlanSessionInactive} PlanSessionInactive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlanSessionInactive.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlanSessionInactive message.
         * @function verify
         * @memberof PlanSessionInactive
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlanSessionInactive.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            return null;
        };
    
        /**
         * Creates a PlanSessionInactive message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlanSessionInactive
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlanSessionInactive} PlanSessionInactive
         */
        PlanSessionInactive.fromObject = function fromObject(object) {
            if (object instanceof $root.PlanSessionInactive)
                return object;
            var message = new $root.PlanSessionInactive();
            if (object.project != null)
                message.project = String(object.project);
            return message;
        };
    
        /**
         * Creates a plain object from a PlanSessionInactive message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlanSessionInactive
         * @static
         * @param {PlanSessionInactive} message PlanSessionInactive
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlanSessionInactive.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.project = "";
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            return object;
        };
    
        /**
         * Converts this PlanSessionInactive to JSON.
         * @function toJSON
         * @memberof PlanSessionInactive
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlanSessionInactive.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlanSessionInactive;
    })();
    
    $root.Session = (function() {
    
        /**
         * Properties of a Session.
         * @exports ISession
         * @interface ISession
         * @property {string|null} [project] Session project
         * @property {number|null} [leader] Session leader
         * @property {Array.<number>|null} [online] Session online
         * @property {number|null} [ticketId] Session ticketId
         * @property {Array.<number>|null} [voted] Session voted
         * @property {number|null} [myVote] Session myVote
         */
    
        /**
         * Constructs a new Session.
         * @exports Session
         * @classdesc Represents a Session.
         * @implements ISession
         * @constructor
         * @param {ISession=} [properties] Properties to set
         */
        function Session(properties) {
            this.online = [];
            this.voted = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Session project.
         * @member {string} project
         * @memberof Session
         * @instance
         */
        Session.prototype.project = "";
    
        /**
         * Session leader.
         * @member {number} leader
         * @memberof Session
         * @instance
         */
        Session.prototype.leader = 0;
    
        /**
         * Session online.
         * @member {Array.<number>} online
         * @memberof Session
         * @instance
         */
        Session.prototype.online = $util.emptyArray;
    
        /**
         * Session ticketId.
         * @member {number} ticketId
         * @memberof Session
         * @instance
         */
        Session.prototype.ticketId = 0;
    
        /**
         * Session voted.
         * @member {Array.<number>} voted
         * @memberof Session
         * @instance
         */
        Session.prototype.voted = $util.emptyArray;
    
        /**
         * Session myVote.
         * @member {number} myVote
         * @memberof Session
         * @instance
         */
        Session.prototype.myVote = 0;
    
        /**
         * Creates a new Session instance using the specified properties.
         * @function create
         * @memberof Session
         * @static
         * @param {ISession=} [properties] Properties to set
         * @returns {Session} Session instance
         */
        Session.create = function create(properties) {
            return new Session(properties);
        };
    
        /**
         * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
         * @function encode
         * @memberof Session
         * @static
         * @param {ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            if (message.leader != null && message.hasOwnProperty("leader"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.leader);
            if (message.online != null && message.online.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.online.length; ++i)
                    writer.int32(message.online[i]);
                writer.ldelim();
            }
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ticketId);
            if (message.voted != null && message.voted.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.voted.length; ++i)
                    writer.int32(message.voted[i]);
                writer.ldelim();
            }
            if (message.myVote != null && message.hasOwnProperty("myVote"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.myVote);
            return writer;
        };
    
        /**
         * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Session
         * @static
         * @param {ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Session message from the specified reader or buffer.
         * @function decode
         * @memberof Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Session();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.leader = reader.int32();
                    break;
                case 3:
                    if (!(message.online && message.online.length))
                        message.online = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.online.push(reader.int32());
                    } else
                        message.online.push(reader.int32());
                    break;
                case 4:
                    message.ticketId = reader.int32();
                    break;
                case 5:
                    if (!(message.voted && message.voted.length))
                        message.voted = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.voted.push(reader.int32());
                    } else
                        message.voted.push(reader.int32());
                    break;
                case 6:
                    message.myVote = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Session message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Session message.
         * @function verify
         * @memberof Session
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            if (message.leader != null && message.hasOwnProperty("leader"))
                if (!$util.isInteger(message.leader))
                    return "leader: integer expected";
            if (message.online != null && message.hasOwnProperty("online")) {
                if (!Array.isArray(message.online))
                    return "online: array expected";
                for (var i = 0; i < message.online.length; ++i)
                    if (!$util.isInteger(message.online[i]))
                        return "online: integer[] expected";
            }
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                if (!$util.isInteger(message.ticketId))
                    return "ticketId: integer expected";
            if (message.voted != null && message.hasOwnProperty("voted")) {
                if (!Array.isArray(message.voted))
                    return "voted: array expected";
                for (var i = 0; i < message.voted.length; ++i)
                    if (!$util.isInteger(message.voted[i]))
                        return "voted: integer[] expected";
            }
            if (message.myVote != null && message.hasOwnProperty("myVote"))
                if (!$util.isInteger(message.myVote))
                    return "myVote: integer expected";
            return null;
        };
    
        /**
         * Creates a Session message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Session
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Session} Session
         */
        Session.fromObject = function fromObject(object) {
            if (object instanceof $root.Session)
                return object;
            var message = new $root.Session();
            if (object.project != null)
                message.project = String(object.project);
            if (object.leader != null)
                message.leader = object.leader | 0;
            if (object.online) {
                if (!Array.isArray(object.online))
                    throw TypeError(".Session.online: array expected");
                message.online = [];
                for (var i = 0; i < object.online.length; ++i)
                    message.online[i] = object.online[i] | 0;
            }
            if (object.ticketId != null)
                message.ticketId = object.ticketId | 0;
            if (object.voted) {
                if (!Array.isArray(object.voted))
                    throw TypeError(".Session.voted: array expected");
                message.voted = [];
                for (var i = 0; i < object.voted.length; ++i)
                    message.voted[i] = object.voted[i] | 0;
            }
            if (object.myVote != null)
                message.myVote = object.myVote | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Session message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Session
         * @static
         * @param {Session} message Session
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.online = [];
                object.voted = [];
            }
            if (options.defaults) {
                object.project = "";
                object.leader = 0;
                object.ticketId = 0;
                object.myVote = 0;
            }
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            if (message.leader != null && message.hasOwnProperty("leader"))
                object.leader = message.leader;
            if (message.online && message.online.length) {
                object.online = [];
                for (var j = 0; j < message.online.length; ++j)
                    object.online[j] = message.online[j];
            }
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                object.ticketId = message.ticketId;
            if (message.voted && message.voted.length) {
                object.voted = [];
                for (var j = 0; j < message.voted.length; ++j)
                    object.voted[j] = message.voted[j];
            }
            if (message.myVote != null && message.hasOwnProperty("myVote"))
                object.myVote = message.myVote;
            return object;
        };
    
        /**
         * Converts this Session to JSON.
         * @function toJSON
         * @memberof Session
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Session;
    })();
    
    $root.LeftSession = (function() {
    
        /**
         * Properties of a LeftSession.
         * @exports ILeftSession
         * @interface ILeftSession
         * @property {string|null} [project] LeftSession project
         */
    
        /**
         * Constructs a new LeftSession.
         * @exports LeftSession
         * @classdesc Represents a LeftSession.
         * @implements ILeftSession
         * @constructor
         * @param {ILeftSession=} [properties] Properties to set
         */
        function LeftSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LeftSession project.
         * @member {string} project
         * @memberof LeftSession
         * @instance
         */
        LeftSession.prototype.project = "";
    
        /**
         * Creates a new LeftSession instance using the specified properties.
         * @function create
         * @memberof LeftSession
         * @static
         * @param {ILeftSession=} [properties] Properties to set
         * @returns {LeftSession} LeftSession instance
         */
        LeftSession.create = function create(properties) {
            return new LeftSession(properties);
        };
    
        /**
         * Encodes the specified LeftSession message. Does not implicitly {@link LeftSession.verify|verify} messages.
         * @function encode
         * @memberof LeftSession
         * @static
         * @param {ILeftSession} message LeftSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeftSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            return writer;
        };
    
        /**
         * Encodes the specified LeftSession message, length delimited. Does not implicitly {@link LeftSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LeftSession
         * @static
         * @param {ILeftSession} message LeftSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeftSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LeftSession message from the specified reader or buffer.
         * @function decode
         * @memberof LeftSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LeftSession} LeftSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeftSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LeftSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LeftSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LeftSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LeftSession} LeftSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeftSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LeftSession message.
         * @function verify
         * @memberof LeftSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeftSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project"))
                if (!$util.isString(message.project))
                    return "project: string expected";
            return null;
        };
    
        /**
         * Creates a LeftSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LeftSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LeftSession} LeftSession
         */
        LeftSession.fromObject = function fromObject(object) {
            if (object instanceof $root.LeftSession)
                return object;
            var message = new $root.LeftSession();
            if (object.project != null)
                message.project = String(object.project);
            return message;
        };
    
        /**
         * Creates a plain object from a LeftSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LeftSession
         * @static
         * @param {LeftSession} message LeftSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeftSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.project = "";
            if (message.project != null && message.hasOwnProperty("project"))
                object.project = message.project;
            return object;
        };
    
        /**
         * Converts this LeftSession to JSON.
         * @function toJSON
         * @memberof LeftSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeftSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LeftSession;
    })();
    
    $root.Voted = (function() {
    
        /**
         * Properties of a Voted.
         * @exports IVoted
         * @interface IVoted
         * @property {number|null} [userId] Voted userId
         */
    
        /**
         * Constructs a new Voted.
         * @exports Voted
         * @classdesc Represents a Voted.
         * @implements IVoted
         * @constructor
         * @param {IVoted=} [properties] Properties to set
         */
        function Voted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Voted userId.
         * @member {number} userId
         * @memberof Voted
         * @instance
         */
        Voted.prototype.userId = 0;
    
        /**
         * Creates a new Voted instance using the specified properties.
         * @function create
         * @memberof Voted
         * @static
         * @param {IVoted=} [properties] Properties to set
         * @returns {Voted} Voted instance
         */
        Voted.create = function create(properties) {
            return new Voted(properties);
        };
    
        /**
         * Encodes the specified Voted message. Does not implicitly {@link Voted.verify|verify} messages.
         * @function encode
         * @memberof Voted
         * @static
         * @param {IVoted} message Voted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Voted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };
    
        /**
         * Encodes the specified Voted message, length delimited. Does not implicitly {@link Voted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Voted
         * @static
         * @param {IVoted} message Voted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Voted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Voted message from the specified reader or buffer.
         * @function decode
         * @memberof Voted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Voted} Voted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Voted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Voted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Voted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Voted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Voted} Voted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Voted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Voted message.
         * @function verify
         * @memberof Voted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Voted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };
    
        /**
         * Creates a Voted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Voted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Voted} Voted
         */
        Voted.fromObject = function fromObject(object) {
            if (object instanceof $root.Voted)
                return object;
            var message = new $root.Voted();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Voted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Voted
         * @static
         * @param {Voted} message Voted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Voted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };
    
        /**
         * Converts this Voted to JSON.
         * @function toJSON
         * @memberof Voted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Voted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Voted;
    })();
    
    $root.Weighted = (function() {
    
        /**
         * Properties of a Weighted.
         * @exports IWeighted
         * @interface IWeighted
         * @property {string|null} [ticketId] Weighted ticketId
         * @property {number|null} [weight] Weighted weight
         */
    
        /**
         * Constructs a new Weighted.
         * @exports Weighted
         * @classdesc Represents a Weighted.
         * @implements IWeighted
         * @constructor
         * @param {IWeighted=} [properties] Properties to set
         */
        function Weighted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Weighted ticketId.
         * @member {string} ticketId
         * @memberof Weighted
         * @instance
         */
        Weighted.prototype.ticketId = "";
    
        /**
         * Weighted weight.
         * @member {number} weight
         * @memberof Weighted
         * @instance
         */
        Weighted.prototype.weight = 0;
    
        /**
         * Creates a new Weighted instance using the specified properties.
         * @function create
         * @memberof Weighted
         * @static
         * @param {IWeighted=} [properties] Properties to set
         * @returns {Weighted} Weighted instance
         */
        Weighted.create = function create(properties) {
            return new Weighted(properties);
        };
    
        /**
         * Encodes the specified Weighted message. Does not implicitly {@link Weighted.verify|verify} messages.
         * @function encode
         * @memberof Weighted
         * @static
         * @param {IWeighted} message Weighted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Weighted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticketId);
            if (message.weight != null && message.hasOwnProperty("weight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.weight);
            return writer;
        };
    
        /**
         * Encodes the specified Weighted message, length delimited. Does not implicitly {@link Weighted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Weighted
         * @static
         * @param {IWeighted} message Weighted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Weighted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Weighted message from the specified reader or buffer.
         * @function decode
         * @memberof Weighted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Weighted} Weighted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Weighted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Weighted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticketId = reader.string();
                    break;
                case 2:
                    message.weight = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Weighted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Weighted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Weighted} Weighted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Weighted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Weighted message.
         * @function verify
         * @memberof Weighted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Weighted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                if (!$util.isString(message.ticketId))
                    return "ticketId: string expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            return null;
        };
    
        /**
         * Creates a Weighted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Weighted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Weighted} Weighted
         */
        Weighted.fromObject = function fromObject(object) {
            if (object instanceof $root.Weighted)
                return object;
            var message = new $root.Weighted();
            if (object.ticketId != null)
                message.ticketId = String(object.ticketId);
            if (object.weight != null)
                message.weight = object.weight | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Weighted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Weighted
         * @static
         * @param {Weighted} message Weighted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Weighted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ticketId = "";
                object.weight = 0;
            }
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                object.ticketId = message.ticketId;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            return object;
        };
    
        /**
         * Converts this Weighted to JSON.
         * @function toJSON
         * @memberof Weighted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Weighted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Weighted;
    })();
    
    $root.NewTicket = (function() {
    
        /**
         * Properties of a NewTicket.
         * @exports INewTicket
         * @interface INewTicket
         * @property {number|null} [ticketId] NewTicket ticketId
         */
    
        /**
         * Constructs a new NewTicket.
         * @exports NewTicket
         * @classdesc Represents a NewTicket.
         * @implements INewTicket
         * @constructor
         * @param {INewTicket=} [properties] Properties to set
         */
        function NewTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NewTicket ticketId.
         * @member {number} ticketId
         * @memberof NewTicket
         * @instance
         */
        NewTicket.prototype.ticketId = 0;
    
        /**
         * Creates a new NewTicket instance using the specified properties.
         * @function create
         * @memberof NewTicket
         * @static
         * @param {INewTicket=} [properties] Properties to set
         * @returns {NewTicket} NewTicket instance
         */
        NewTicket.create = function create(properties) {
            return new NewTicket(properties);
        };
    
        /**
         * Encodes the specified NewTicket message. Does not implicitly {@link NewTicket.verify|verify} messages.
         * @function encode
         * @memberof NewTicket
         * @static
         * @param {INewTicket} message NewTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ticketId);
            return writer;
        };
    
        /**
         * Encodes the specified NewTicket message, length delimited. Does not implicitly {@link NewTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NewTicket
         * @static
         * @param {INewTicket} message NewTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NewTicket message from the specified reader or buffer.
         * @function decode
         * @memberof NewTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewTicket} NewTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticketId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NewTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NewTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewTicket} NewTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NewTicket message.
         * @function verify
         * @memberof NewTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                if (!$util.isInteger(message.ticketId))
                    return "ticketId: integer expected";
            return null;
        };
    
        /**
         * Creates a NewTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NewTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NewTicket} NewTicket
         */
        NewTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.NewTicket)
                return object;
            var message = new $root.NewTicket();
            if (object.ticketId != null)
                message.ticketId = object.ticketId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a NewTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NewTicket
         * @static
         * @param {NewTicket} message NewTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ticketId = 0;
            if (message.ticketId != null && message.hasOwnProperty("ticketId"))
                object.ticketId = message.ticketId;
            return object;
        };
    
        /**
         * Converts this NewTicket to JSON.
         * @function toJSON
         * @memberof NewTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NewTicket;
    })();
    
    /**
     * CountdownReason enum.
     * @exports CountdownReason
     * @enum {string}
     * @property {number} NOT_ENOUGH=1 NOT_ENOUGH value
     * @property {number} NEW_TICKET=2 NEW_TICKET value
     * @property {number} LOAD=3 LOAD value
     */
    $root.CountdownReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "NOT_ENOUGH"] = 1;
        values[valuesById[2] = "NEW_TICKET"] = 2;
        values[valuesById[3] = "LOAD"] = 3;
        return values;
    })();
    
    $root.Countdown = (function() {
    
        /**
         * Properties of a Countdown.
         * @exports ICountdown
         * @interface ICountdown
         * @property {number|null} [durationMs] Countdown durationMs
         * @property {CountdownReason|null} [reason] Countdown reason
         */
    
        /**
         * Constructs a new Countdown.
         * @exports Countdown
         * @classdesc Represents a Countdown.
         * @implements ICountdown
         * @constructor
         * @param {ICountdown=} [properties] Properties to set
         */
        function Countdown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Countdown durationMs.
         * @member {number} durationMs
         * @memberof Countdown
         * @instance
         */
        Countdown.prototype.durationMs = 0;
    
        /**
         * Countdown reason.
         * @member {CountdownReason} reason
         * @memberof Countdown
         * @instance
         */
        Countdown.prototype.reason = 1;
    
        /**
         * Creates a new Countdown instance using the specified properties.
         * @function create
         * @memberof Countdown
         * @static
         * @param {ICountdown=} [properties] Properties to set
         * @returns {Countdown} Countdown instance
         */
        Countdown.create = function create(properties) {
            return new Countdown(properties);
        };
    
        /**
         * Encodes the specified Countdown message. Does not implicitly {@link Countdown.verify|verify} messages.
         * @function encode
         * @memberof Countdown
         * @static
         * @param {ICountdown} message Countdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Countdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.durationMs != null && message.hasOwnProperty("durationMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.durationMs);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.reason);
            return writer;
        };
    
        /**
         * Encodes the specified Countdown message, length delimited. Does not implicitly {@link Countdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Countdown
         * @static
         * @param {ICountdown} message Countdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Countdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Countdown message from the specified reader or buffer.
         * @function decode
         * @memberof Countdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Countdown} Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Countdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Countdown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.durationMs = reader.int32();
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Countdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Countdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Countdown} Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Countdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Countdown message.
         * @function verify
         * @memberof Countdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Countdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.durationMs != null && message.hasOwnProperty("durationMs"))
                if (!$util.isInteger(message.durationMs))
                    return "durationMs: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a Countdown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Countdown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Countdown} Countdown
         */
        Countdown.fromObject = function fromObject(object) {
            if (object instanceof $root.Countdown)
                return object;
            var message = new $root.Countdown();
            if (object.durationMs != null)
                message.durationMs = object.durationMs | 0;
            switch (object.reason) {
            case "NOT_ENOUGH":
            case 1:
                message.reason = 1;
                break;
            case "NEW_TICKET":
            case 2:
                message.reason = 2;
                break;
            case "LOAD":
            case 3:
                message.reason = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Countdown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Countdown
         * @static
         * @param {Countdown} message Countdown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Countdown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.durationMs = 0;
                object.reason = options.enums === String ? "NOT_ENOUGH" : 1;
            }
            if (message.durationMs != null && message.hasOwnProperty("durationMs"))
                object.durationMs = message.durationMs;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.CountdownReason[message.reason] : message.reason;
            return object;
        };
    
        /**
         * Converts this Countdown to JSON.
         * @function toJSON
         * @memberof Countdown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Countdown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Countdown;
    })();
    
    /**
     * EndSessionReason enum.
     * @exports EndSessionReason
     * @enum {string}
     * @property {number} ADMIN_DONE=1 ADMIN_DONE value
     * @property {number} NO_MORE=2 NO_MORE value
     */
    $root.EndSessionReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ADMIN_DONE"] = 1;
        values[valuesById[2] = "NO_MORE"] = 2;
        return values;
    })();
    
    $root.EndSession = (function() {
    
        /**
         * Properties of an EndSession.
         * @exports IEndSession
         * @interface IEndSession
         * @property {EndSessionReason|null} [reason] EndSession reason
         */
    
        /**
         * Constructs a new EndSession.
         * @exports EndSession
         * @classdesc Represents an EndSession.
         * @implements IEndSession
         * @constructor
         * @param {IEndSession=} [properties] Properties to set
         */
        function EndSession(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EndSession reason.
         * @member {EndSessionReason} reason
         * @memberof EndSession
         * @instance
         */
        EndSession.prototype.reason = 1;
    
        /**
         * Creates a new EndSession instance using the specified properties.
         * @function create
         * @memberof EndSession
         * @static
         * @param {IEndSession=} [properties] Properties to set
         * @returns {EndSession} EndSession instance
         */
        EndSession.create = function create(properties) {
            return new EndSession(properties);
        };
    
        /**
         * Encodes the specified EndSession message. Does not implicitly {@link EndSession.verify|verify} messages.
         * @function encode
         * @memberof EndSession
         * @static
         * @param {IEndSession} message EndSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndSession.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            return writer;
        };
    
        /**
         * Encodes the specified EndSession message, length delimited. Does not implicitly {@link EndSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EndSession
         * @static
         * @param {IEndSession} message EndSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndSession.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EndSession message from the specified reader or buffer.
         * @function decode
         * @memberof EndSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EndSession} EndSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndSession.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EndSession();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EndSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EndSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EndSession} EndSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndSession.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EndSession message.
         * @function verify
         * @memberof EndSession
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndSession.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates an EndSession message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EndSession
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EndSession} EndSession
         */
        EndSession.fromObject = function fromObject(object) {
            if (object instanceof $root.EndSession)
                return object;
            var message = new $root.EndSession();
            switch (object.reason) {
            case "ADMIN_DONE":
            case 1:
                message.reason = 1;
                break;
            case "NO_MORE":
            case 2:
                message.reason = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an EndSession message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EndSession
         * @static
         * @param {EndSession} message EndSession
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EndSession.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "ADMIN_DONE" : 1;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.EndSessionReason[message.reason] : message.reason;
            return object;
        };
    
        /**
         * Converts this EndSession to JSON.
         * @function toJSON
         * @memberof EndSession
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EndSession.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EndSession;
    })();
    
    $root.ResultWeight = (function() {
    
        /**
         * Properties of a ResultWeight.
         * @exports IResultWeight
         * @interface IResultWeight
         * @property {number|null} [weight] ResultWeight weight
         * @property {boolean|null} [isOutlier] ResultWeight isOutlier
         * @property {boolean|null} [preferred] ResultWeight preferred
         * @property {boolean|null} [isMedian] ResultWeight isMedian
         * @property {Array.<number>|null} [voters] ResultWeight voters
         */
    
        /**
         * Constructs a new ResultWeight.
         * @exports ResultWeight
         * @classdesc Represents a ResultWeight.
         * @implements IResultWeight
         * @constructor
         * @param {IResultWeight=} [properties] Properties to set
         */
        function ResultWeight(properties) {
            this.voters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ResultWeight weight.
         * @member {number} weight
         * @memberof ResultWeight
         * @instance
         */
        ResultWeight.prototype.weight = 0;
    
        /**
         * ResultWeight isOutlier.
         * @member {boolean} isOutlier
         * @memberof ResultWeight
         * @instance
         */
        ResultWeight.prototype.isOutlier = false;
    
        /**
         * ResultWeight preferred.
         * @member {boolean} preferred
         * @memberof ResultWeight
         * @instance
         */
        ResultWeight.prototype.preferred = false;
    
        /**
         * ResultWeight isMedian.
         * @member {boolean} isMedian
         * @memberof ResultWeight
         * @instance
         */
        ResultWeight.prototype.isMedian = false;
    
        /**
         * ResultWeight voters.
         * @member {Array.<number>} voters
         * @memberof ResultWeight
         * @instance
         */
        ResultWeight.prototype.voters = $util.emptyArray;
    
        /**
         * Creates a new ResultWeight instance using the specified properties.
         * @function create
         * @memberof ResultWeight
         * @static
         * @param {IResultWeight=} [properties] Properties to set
         * @returns {ResultWeight} ResultWeight instance
         */
        ResultWeight.create = function create(properties) {
            return new ResultWeight(properties);
        };
    
        /**
         * Encodes the specified ResultWeight message. Does not implicitly {@link ResultWeight.verify|verify} messages.
         * @function encode
         * @memberof ResultWeight
         * @static
         * @param {IResultWeight} message ResultWeight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultWeight.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weight != null && message.hasOwnProperty("weight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.weight);
            if (message.isOutlier != null && message.hasOwnProperty("isOutlier"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOutlier);
            if (message.preferred != null && message.hasOwnProperty("preferred"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.preferred);
            if (message.isMedian != null && message.hasOwnProperty("isMedian"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isMedian);
            if (message.voters != null && message.voters.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.voters.length; ++i)
                    writer.int32(message.voters[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified ResultWeight message, length delimited. Does not implicitly {@link ResultWeight.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResultWeight
         * @static
         * @param {IResultWeight} message ResultWeight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultWeight.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ResultWeight message from the specified reader or buffer.
         * @function decode
         * @memberof ResultWeight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResultWeight} ResultWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultWeight.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResultWeight();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.weight = reader.int32();
                    break;
                case 2:
                    message.isOutlier = reader.bool();
                    break;
                case 3:
                    message.preferred = reader.bool();
                    break;
                case 4:
                    message.isMedian = reader.bool();
                    break;
                case 5:
                    if (!(message.voters && message.voters.length))
                        message.voters = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.voters.push(reader.int32());
                    } else
                        message.voters.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ResultWeight message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResultWeight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResultWeight} ResultWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultWeight.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ResultWeight message.
         * @function verify
         * @memberof ResultWeight
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultWeight.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            if (message.isOutlier != null && message.hasOwnProperty("isOutlier"))
                if (typeof message.isOutlier !== "boolean")
                    return "isOutlier: boolean expected";
            if (message.preferred != null && message.hasOwnProperty("preferred"))
                if (typeof message.preferred !== "boolean")
                    return "preferred: boolean expected";
            if (message.isMedian != null && message.hasOwnProperty("isMedian"))
                if (typeof message.isMedian !== "boolean")
                    return "isMedian: boolean expected";
            if (message.voters != null && message.hasOwnProperty("voters")) {
                if (!Array.isArray(message.voters))
                    return "voters: array expected";
                for (var i = 0; i < message.voters.length; ++i)
                    if (!$util.isInteger(message.voters[i]))
                        return "voters: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a ResultWeight message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ResultWeight
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ResultWeight} ResultWeight
         */
        ResultWeight.fromObject = function fromObject(object) {
            if (object instanceof $root.ResultWeight)
                return object;
            var message = new $root.ResultWeight();
            if (object.weight != null)
                message.weight = object.weight | 0;
            if (object.isOutlier != null)
                message.isOutlier = Boolean(object.isOutlier);
            if (object.preferred != null)
                message.preferred = Boolean(object.preferred);
            if (object.isMedian != null)
                message.isMedian = Boolean(object.isMedian);
            if (object.voters) {
                if (!Array.isArray(object.voters))
                    throw TypeError(".ResultWeight.voters: array expected");
                message.voters = [];
                for (var i = 0; i < object.voters.length; ++i)
                    message.voters[i] = object.voters[i] | 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ResultWeight message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ResultWeight
         * @static
         * @param {ResultWeight} message ResultWeight
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultWeight.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.voters = [];
            if (options.defaults) {
                object.weight = 0;
                object.isOutlier = false;
                object.preferred = false;
                object.isMedian = false;
            }
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            if (message.isOutlier != null && message.hasOwnProperty("isOutlier"))
                object.isOutlier = message.isOutlier;
            if (message.preferred != null && message.hasOwnProperty("preferred"))
                object.preferred = message.preferred;
            if (message.isMedian != null && message.hasOwnProperty("isMedian"))
                object.isMedian = message.isMedian;
            if (message.voters && message.voters.length) {
                object.voters = [];
                for (var j = 0; j < message.voters.length; ++j)
                    object.voters[j] = message.voters[j];
            }
            return object;
        };
    
        /**
         * Converts this ResultWeight to JSON.
         * @function toJSON
         * @memberof ResultWeight
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultWeight.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ResultWeight;
    })();
    
    $root.ResultSet = (function() {
    
        /**
         * Properties of a ResultSet.
         * @exports IResultSet
         * @interface IResultSet
         * @property {Array.<IResultWeight>|null} [weights] ResultSet weights
         */
    
        /**
         * Constructs a new ResultSet.
         * @exports ResultSet
         * @classdesc Represents a ResultSet.
         * @implements IResultSet
         * @constructor
         * @param {IResultSet=} [properties] Properties to set
         */
        function ResultSet(properties) {
            this.weights = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ResultSet weights.
         * @member {Array.<IResultWeight>} weights
         * @memberof ResultSet
         * @instance
         */
        ResultSet.prototype.weights = $util.emptyArray;
    
        /**
         * Creates a new ResultSet instance using the specified properties.
         * @function create
         * @memberof ResultSet
         * @static
         * @param {IResultSet=} [properties] Properties to set
         * @returns {ResultSet} ResultSet instance
         */
        ResultSet.create = function create(properties) {
            return new ResultSet(properties);
        };
    
        /**
         * Encodes the specified ResultSet message. Does not implicitly {@link ResultSet.verify|verify} messages.
         * @function encode
         * @memberof ResultSet
         * @static
         * @param {IResultSet} message ResultSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weights != null && message.weights.length)
                for (var i = 0; i < message.weights.length; ++i)
                    $root.ResultWeight.encode(message.weights[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ResultSet message, length delimited. Does not implicitly {@link ResultSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ResultSet
         * @static
         * @param {IResultSet} message ResultSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ResultSet message from the specified reader or buffer.
         * @function decode
         * @memberof ResultSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ResultSet} ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResultSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.weights && message.weights.length))
                        message.weights = [];
                    message.weights.push($root.ResultWeight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ResultSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ResultSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ResultSet} ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ResultSet message.
         * @function verify
         * @memberof ResultSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weights != null && message.hasOwnProperty("weights")) {
                if (!Array.isArray(message.weights))
                    return "weights: array expected";
                for (var i = 0; i < message.weights.length; ++i) {
                    var error = $root.ResultWeight.verify(message.weights[i]);
                    if (error)
                        return "weights." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ResultSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ResultSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ResultSet} ResultSet
         */
        ResultSet.fromObject = function fromObject(object) {
            if (object instanceof $root.ResultSet)
                return object;
            var message = new $root.ResultSet();
            if (object.weights) {
                if (!Array.isArray(object.weights))
                    throw TypeError(".ResultSet.weights: array expected");
                message.weights = [];
                for (var i = 0; i < object.weights.length; ++i) {
                    if (typeof object.weights[i] !== "object")
                        throw TypeError(".ResultSet.weights: object expected");
                    message.weights[i] = $root.ResultWeight.fromObject(object.weights[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ResultSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ResultSet
         * @static
         * @param {ResultSet} message ResultSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.weights = [];
            if (message.weights && message.weights.length) {
                object.weights = [];
                for (var j = 0; j < message.weights.length; ++j)
                    object.weights[j] = $root.ResultWeight.toObject(message.weights[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ResultSet to JSON.
         * @function toJSON
         * @memberof ResultSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ResultSet;
    })();
    
    $root.Results = (function() {
    
        /**
         * Properties of a Results.
         * @exports IResults
         * @interface IResults
         * @property {boolean|null} [isFinal] Results isFinal
         * @property {Array.<ResultAction>|null} [options] Results options
         * @property {IResultSet|null} [current] Results current
         * @property {IResultSet|null} [previous] Results previous
         */
    
        /**
         * Constructs a new Results.
         * @exports Results
         * @classdesc Represents a Results.
         * @implements IResults
         * @constructor
         * @param {IResults=} [properties] Properties to set
         */
        function Results(properties) {
            this.options = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Results isFinal.
         * @member {boolean} isFinal
         * @memberof Results
         * @instance
         */
        Results.prototype.isFinal = false;
    
        /**
         * Results options.
         * @member {Array.<ResultAction>} options
         * @memberof Results
         * @instance
         */
        Results.prototype.options = $util.emptyArray;
    
        /**
         * Results current.
         * @member {IResultSet|null|undefined} current
         * @memberof Results
         * @instance
         */
        Results.prototype.current = null;
    
        /**
         * Results previous.
         * @member {IResultSet|null|undefined} previous
         * @memberof Results
         * @instance
         */
        Results.prototype.previous = null;
    
        /**
         * Creates a new Results instance using the specified properties.
         * @function create
         * @memberof Results
         * @static
         * @param {IResults=} [properties] Properties to set
         * @returns {Results} Results instance
         */
        Results.create = function create(properties) {
            return new Results(properties);
        };
    
        /**
         * Encodes the specified Results message. Does not implicitly {@link Results.verify|verify} messages.
         * @function encode
         * @memberof Results
         * @static
         * @param {IResults} message Results message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Results.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isFinal != null && message.hasOwnProperty("isFinal"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isFinal);
            if (message.options != null && message.options.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.options.length; ++i)
                    writer.int32(message.options[i]);
                writer.ldelim();
            }
            if (message.current != null && message.hasOwnProperty("current"))
                $root.ResultSet.encode(message.current, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.previous != null && message.hasOwnProperty("previous"))
                $root.ResultSet.encode(message.previous, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Results message, length delimited. Does not implicitly {@link Results.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Results
         * @static
         * @param {IResults} message Results message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Results.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Results message from the specified reader or buffer.
         * @function decode
         * @memberof Results
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Results} Results
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Results.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Results();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isFinal = reader.bool();
                    break;
                case 2:
                    if (!(message.options && message.options.length))
                        message.options = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.options.push(reader.int32());
                    } else
                        message.options.push(reader.int32());
                    break;
                case 3:
                    message.current = $root.ResultSet.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.previous = $root.ResultSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Results message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Results
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Results} Results
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Results.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Results message.
         * @function verify
         * @memberof Results
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Results.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isFinal != null && message.hasOwnProperty("isFinal"))
                if (typeof message.isFinal !== "boolean")
                    return "isFinal: boolean expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i)
                    switch (message.options[i]) {
                    default:
                        return "options: enum value[] expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.current != null && message.hasOwnProperty("current")) {
                var error = $root.ResultSet.verify(message.current);
                if (error)
                    return "current." + error;
            }
            if (message.previous != null && message.hasOwnProperty("previous")) {
                var error = $root.ResultSet.verify(message.previous);
                if (error)
                    return "previous." + error;
            }
            return null;
        };
    
        /**
         * Creates a Results message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Results
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Results} Results
         */
        Results.fromObject = function fromObject(object) {
            if (object instanceof $root.Results)
                return object;
            var message = new $root.Results();
            if (object.isFinal != null)
                message.isFinal = Boolean(object.isFinal);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".Results.options: array expected");
                message.options = [];
                for (var i = 0; i < object.options.length; ++i)
                    switch (object.options[i]) {
                    default:
                    case "CONTINUE":
                    case 1:
                        message.options[i] = 1;
                        break;
                    case "AVERAGE":
                    case 2:
                        message.options[i] = 2;
                        break;
                    case "STRIP_OUTLIER":
                    case 3:
                        message.options[i] = 3;
                        break;
                    case "REVOTE":
                    case 4:
                        message.options[i] = 4;
                        break;
                    case "SKIP":
                    case 5:
                        message.options[i] = 5;
                        break;
                    }
            }
            if (object.current != null) {
                if (typeof object.current !== "object")
                    throw TypeError(".Results.current: object expected");
                message.current = $root.ResultSet.fromObject(object.current);
            }
            if (object.previous != null) {
                if (typeof object.previous !== "object")
                    throw TypeError(".Results.previous: object expected");
                message.previous = $root.ResultSet.fromObject(object.previous);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Results message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Results
         * @static
         * @param {Results} message Results
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Results.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (options.defaults) {
                object.isFinal = false;
                object.current = null;
                object.previous = null;
            }
            if (message.isFinal != null && message.hasOwnProperty("isFinal"))
                object.isFinal = message.isFinal;
            if (message.options && message.options.length) {
                object.options = [];
                for (var j = 0; j < message.options.length; ++j)
                    object.options[j] = options.enums === String ? $root.ResultAction[message.options[j]] : message.options[j];
            }
            if (message.current != null && message.hasOwnProperty("current"))
                object.current = $root.ResultSet.toObject(message.current, options);
            if (message.previous != null && message.hasOwnProperty("previous"))
                object.previous = $root.ResultSet.toObject(message.previous, options);
            return object;
        };
    
        /**
         * Converts this Results to JSON.
         * @function toJSON
         * @memberof Results
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Results.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Results;
    })();

    return $root;
});
