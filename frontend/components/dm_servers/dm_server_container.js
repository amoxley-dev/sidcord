import { connect } from "react-redux";
import DmServer from "./dm_server";
import { fetchDmServers } from "../../actions/dm_server_actions";

const getUser = (state, ownProps) => {
  // console.log(state)
  let dmServer = state.entities.dmServers[ownProps.match.params.dmServerId];
  if (dmServer) {
    let currentUser = state.entities.users[state.session.id];
    let userIds = Object.keys(dmServer.users);
    let userId = userIds.filter(id => {
      if (id !== currentUser.id.toString()) {
        return id
      }
    });
    return dmServer.users[userId[0]];
  }
} 

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return {
    dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
    currentUser: state.entities.users[state.session.id],
    user: getUser(state, ownProps)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDmServers: () => dispatch(fetchDmServers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DmServer)