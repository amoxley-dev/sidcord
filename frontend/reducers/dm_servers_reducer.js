import {RECEIVE_DM_SERVERS, RECEIVE_DM_SERVER, REMOVE_DM_SERVER} from "../actions/dm_server_actions";

const dmServersReducer = (state={}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_DM_SERVERS:
      return Object.assign({}, action.dmServers);
    case RECEIVE_DM_SERVER:
      newState = Object.assign({}, state);
      newState[action.dmServer.id] = action.dmServer
      return newState;
    case REMOVE_DM_SERVER:
      newState = Object.assign({}, state);
      delete newState[action.dmServerId];
      return newState;
    default:
      return state;
  }
};

export default dmServersReducer;