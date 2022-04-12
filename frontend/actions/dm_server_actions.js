import * as  APIUtil from "../util/dm_server_api_util";

export const RECEIVE_DM_SERVERS = "RECEIVE_DM_SERVERS";
export const RECEIVE_DM_SERVER = "RECEIVE_DM_SERVER";
export const REMOVE_DM_SERVER = "REMOVE_DM_SERVER";

const receiveDmServers = dmServers => {
  return {
    type: RECEIVE_DM_SERVERS,
    dmServers: dmServers
  }
};

const receiveDmServer = dmServer => {
  return {
    type: RECEIVE_DM_SERVER,
    dmServer: dmServer
  }
};

const removeDmServer = dmServerId => {
  return {
    type: REMOVE_DM_SERVER,
    dmServerId: dmServerId
  }
};

export const fetchDmServers = () => dispatch => {
  return APIUtil.fetchDmServers()
    .then(servers => dispatch(receiveDmServers(servers)))
}

export const fetchDmServer = dmServerId => dispatch => {
  return APIUtil.fetchDmServer(dmServerId)
    .then(server => dispatch(receiveDmServer(server)))
}

export const createDmServer = () => dispatch => {
  return APIUtil.createDmServer()
    .then(server => dispatch(receiveDmServer(server)))
}

export const deleteDmServer = dmServerId => dispatch => {
  return APIUtil.deleteDmServer(dmServerId)
    .then(() => dispatch(removeDmServer(dmServerId)))
}