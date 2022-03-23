import * as sessionApiUtil from "../util/session_api_util";
import { fetchUser } from "../util/users_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const signup = user => dispatch => {
  return sessionApiUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const login = user => dispatch => (
  sessionApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);


export const logout = () => dispatch => {
  return sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser())
  );
};

export const fetchCurrentUser = userId => dispatch => {
  return fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}