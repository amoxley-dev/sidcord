import { connect } from "react-redux";

import Channel from "./channel";
import { fetchUser } from "../../actions/user_actions";
import { fetchServer } from "../../actions/server_actions";
import { createDmServer } from "../../actions/dm_server_actions";
import { createDmMembership } from "../../actions/dm_membership_action";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    users: Object.values(state.entities.users),
    channel: state.entities.channels[ownProps.match.params.channelId],
    serverId: ownProps.match.params.serverId,
    dmServers: Object.values(state.entities.dmServers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    createDmServer: () => dispatch(createDmServer()),
    createDmMembership: dmMembership => dispatch(createDmMembership(dmMembership))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)