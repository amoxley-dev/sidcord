import { connect } from "react-redux";

import { fetchCurrentUser, logout } from "../../actions/session_actions";
import { fetchServers, fetchServer, deleteServer } from "../../actions/server_actions";
import { deleteServerMembership } from "../../actions/server_membership_actions";
import ServerInfo from "./server_info";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    deleteServer: serverId => dispatch(deleteServer(serverId)),
    deleteServerMembership: membership => dispatch(deleteServerMembership(membership))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerInfo);