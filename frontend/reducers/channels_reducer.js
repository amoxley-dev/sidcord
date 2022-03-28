import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

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
    default:
      return state;
  }
}

export default channelsReducer;