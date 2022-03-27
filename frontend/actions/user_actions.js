import * as userApiUtil from "../util/users_api_util"

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export const fetchUser = userId => dispatch => {
  return userApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}