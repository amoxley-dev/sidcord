import * as APIUtil from '../util/dm_messages_api_util';

export const RECEIVE_DM_MESSAGE = 'RECEIVE_DM_MESSAGE';
export const REMOVE_DM_MESSAGE = 'REMOVE_DM_MESSAGE';

const receiveDmMessage = dmMessage => {
  return {
    type: RECEIVE_DM_MESSAGE,
    dmMessage: dmMessage
  }
};

const removeDmMessage = dmMessageId => {
  return {
    type: REMOVE_DM_MESSAGE,
    dmMessageId: dmMessageId
  }
};

export const fetchDmMessage = dmMessageId => dispatch => {
  return APIUtil.fetchDmMessage(dmMessageId)
    .then(dmMessage => dispatch(receiveDmMessage(dmMessage)))
};

export const createDmMessage = (dmServerId, dmMessage) => dispatch => {
  return APIUtil.createDmMessage(dmServerId, dmMessage)
    .then(dmMessage => dispatch(receiveDmMessage(dmMessage)))
};

export const updateDmMessage = dmMessage => dispatch => {
  return APIUtil.updateDmMessage(dmMessage)
    .then(dmMessage => dispatch(receiveDmMessage(dmMessage)))
}

export const deleteDmMessage = dmMessageId => dispatch => {
  return APIUtil.deleteDmMessage(dmMessageId)
    .then(() => dispatch(removeDmMessage(dmMessageId)))
}


