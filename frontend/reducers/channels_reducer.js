import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const channelsReducer = (state={}, action) => {
  Object.freeze(state)
  let newState
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = Object.assign({}, action.channel);
      newState[action.channel.id] = action.channel;
      return newState;
    case REMOVE_CHANNEL:
      newState = Object.assign({}, action.channel);
      delete newState[action.channel.id];
      return newState;
    case RECEIVE_SERVER: 
      return action.server.channels;
    case REMOVE_SERVER:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default channelsReducer;