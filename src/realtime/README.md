# Realtime

The realtime server is a Typescript powered Websocket server that exposes the realtime and non-transactional portioins of the system. This is centered around team sprint planning and estimation. It utilizes the existing golang services and builds upon that.

## Structure
- `realtime/` - This contains the RPC definitions of the server->browser communication
- `services/` - This contains a auto-generated code from the golang services. These are generated from the .proto files in `src/app`.
- `src/` - The application logic for this server


## RPC Definition
In the `realtime/` folder exists `realtime.proto`. This is the master definition for the protocol buffers. `realtime.js` and `realtime.d.ts` are generated from this (js and typescript definitions). `messages.ts` contains some helpers for encoding and decoding to/from raw bytes ready to transmit over sockets. A version of this folder is transfered to the `ui/` project. The command `npm run combine` will do all of the work.

## Installation
The installation of this project is no different from any other typescript project. Assuming NodeJS version >=10.x is installed:

Install the dependencies:
```bash
npm install
```

Start the server:
```bash
npm run start
```


A websocket will now listen on `http://localhost:8090`, awaiting connections from the frontend. At this time the service expects an instance of consul to be running on localhost on the default port.


## Configuration
Default configuration values can be found in `/config.json.default`, and can be ammended in `/config.json`. Configuration for the webserver, consul and various settings can be found here.


## Dependencies
This project depends on the following third party dependencies:
- `grpc`/`protobufjs` - The RPC framework for communicating with browsers and the internal services
- `request`/`request-promise` - A HTTP library for communicating with consul's REST endpoints.
- `ws` - WebSocket library for NodeJS.  
