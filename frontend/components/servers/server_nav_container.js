import { connect } from "react-redux";
import { withRouter } from "react-router";

import { fetchServers, fetchServer } from "../../actions/server_actions";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import ServerNav from "./Server_Nav";
import { fetchDmServers, fetchDmServer } from "../../actions/dm_server_actions";
import { openModal } from "../../actions/modal_actions";

const currentUserServers = state => {
  if (Object.keys(state.entities.servers).length < state.entities.users[state.session.id].servers.length) return [];
  return state.entities.users[state.session.id].servers.map(serverId => (
    state.entities.servers[serverId]
  ))
}

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: currentUserServers(state),
    allServers: state.entities.servers,
    serversId: state.entities.users[state.session.id].ids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    fetchDmServers: () => dispatch(fetchDmServers()),
    fetchDmServer: dmServerId => dispatch(fetchDmServer(dmServerId)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerNav));