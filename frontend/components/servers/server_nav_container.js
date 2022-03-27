import { connect } from "react-redux";

import { fetchServers, fetchServer } from "../../actions/server_actions";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import ServerNav from "./Server_Nav";
import { openModal } from "../../actions/modal_actions";

const currentUserServers = state => {
  if (Object.keys(state.entities.servers).length === 0) return [];
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
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);