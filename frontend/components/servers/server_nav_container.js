import { connect } from "react-redux";
import { fetchServers, fetchServer } from "../../actions/server_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import ServerNav from "./Server_Nav";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerNav);