import { RECEIVE_CURRENT_USER,
          LOGOUT_CURRENT_USER,
          RECEIVE_ERRORS } from "../actions/session_actions";

const _nullSession = {
  id: null
};

const sessionReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state
  };
};

export default sessionReducer;