import { connect } from "react-redux";

import { fetchCurrentUser, logout } from "../../actions/session_actions";
import { fetchServers, fetchServer, deleteServer } from "../../actions/server_actions";
import { deleteServerMembership } from "../../actions/server_membership_actions";
import ServerInfo from "./server_info";
import { fetchDmServers } from "../../actions/dm_server_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    channels: Object.values(state.entities.channels),
    dmServers: Object.values(state.entities.dmServers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    deleteServerMembership: membership => dispatch(deleteServerMembership(membership)),
    fetchDmServers: () => dispatch(fetchDmServers()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerInfo);