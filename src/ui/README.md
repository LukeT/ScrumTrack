# UI
The UI is a react/redux application that consumes the Realtime websocket API and the HTTP API exposed by the api/services. React is the frontend framework utilised, all application state is stored in redux. 

## Application Structure
- `src/actions` - Redux actions
- `src/assets` - All non-code assets (images)
- `src/components` - Presentation components (Not relying on redux state)
- `src/containers` - All components attached to the Redux state.
- `src/epics` - Redux epics (handles side effects from actions)
- `src/reducers` - Redux Reducers - Takes an action and modifies the state.
- `src/util` - Utilities shared between components.
- `src/util/models` - Typescript wrapper around the API

# Configuration
All configuration is stored in `config.ts` where defaults are provided. It's unlikely these need to be changed.

# Installation
Assuming you have NodeJS >= 10.x installed:

Install NodeJS:
```bash
npm install
```

Boot the UI:
```bash
npm run serve
````

The UI will be served on http://127.0.0.1:8082.
