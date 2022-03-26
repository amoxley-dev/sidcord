import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER_MEMBERSHIP } from "../actions/server_membership_actions";

const usersReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SERVER_MEMBERSHIP:
      const newState = Object.assign({}, state);
      newState[action.membership.user_id] = action.membership.current_user
      return newState;
    default:
      return state;
  }
};

export default usersReducer;