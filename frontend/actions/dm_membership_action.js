import * as APIUtil from '../util/dm_membership_util';

export const RECEIVE_DM_MEMBERSHIP = 'RECEIVE_DM_MEMBERSHIP';
export const REMOVE_DM_MEMBERSHIP = 'REMOVE_DM_MEMBERSHIP';

const receiveDmMembership = dmMembership => {
  return {
    type: RECEIVE_DM_MEMBERSHIP,
    dmMembership: dmMembership
  }
};

const removeDmMembership = dmMembership => {
  return {
    type: REMOVE_DM_MEMBERSHIP,
    dmMembership: dmMembership
  }
};

export const createDmMembership = dmMembership => dispatch => {
  return APIUtil.createDmMembership(dmMembership)
    .then(dmMembership => dispatch(receiveDmMembership(dmMembership)))
}

export const deleteDmMembership = dmMembership => dispatch => {
  return APIUtil.deleteDmMembership(dmMembership)
    .then(dmMembership => dispatch(removeDmMembership(dmMembership)))
}