import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVERS: 
      return Object.assign({}, action.servers)
    case RECEIVE_SERVER:
      const newServer = { [action.server.id]: action.server };
      return Object.assign({}, state, newServer);
    case REMOVE_SERVER: 
      const newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState
    default:
      return state;
  };
};

export default serversReducer;