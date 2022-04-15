import { RECEIVE_DM_MESSAGE, REMOVE_DM_MESSAGE } from "../actions/dm_message_actions";
import { RECEIVE_DM_SERVER } from "../actions/dm_server_actions";

const dmMessagesReducer = (state = {}, action) => {
  Object.freeze(state)

  let newState;
  switch (action.type) {
    case RECEIVE_DM_MESSAGE:
      newState = Object.assign({}, state);
      newState[action.dmMessage.id] = action.dmMessage;
      return newState;
    case REMOVE_DM_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.dmMessageId];
      return newState;
    case RECEIVE_DM_SERVER: 
      if (action.dmServer.messages) return action.dmServer.messages;
      return {};
    default:
      return state;
  }
};

export default dmMessagesReducer;