import * as APIUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message: message
  };
};

const removeMessage = messageId => {
  return {
    type: REMOVE_MESSAGE,
    messageId
  }  
}

export const fetchMessage = messageId => dispatch => {
  APIUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
};

export const createMessage = (channelId, message) => {
  APIUtil.createMessage(channelId, message)
    .then(message => dispatch(receiveMessage(message)))
};

export const updateMessage = message => {
  APIUtil.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)))
}

export const deleteMessage = messageId => {
  APIUtil.deleteMessage(messageId)
    .then(message => dispatch(removeMessage(message)))
}


