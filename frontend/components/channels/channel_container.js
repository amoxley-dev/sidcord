import { connect } from "react-redux";

import Channel from "./channel";
import { fetchUser } from "../../actions/user_actions";
import { fetchServer } from "../../actions/server_actions";

// const serverUsersId = (state, ownProps) => {
//   if (Object.keys(state.entities.servers).length === 0) return [];
//   return state.entities.servers[ownProps.match.params.serverId].users;
// }

// const serverUsers = (state, ownProps) => {
//   console.log(!Object.prototype.hasOwnProperty.call(state.entities.servers, ownProps.match.params.serverId))
//   if (!Object.prototype.hasOwnProperty.call(state.entities.servers, ownProps.match.params.serverId)) return [];
//   let users = []
//   Object.values(state.entities.servers[ownProps.match.params.serverId].users).map(userId => {
//     if (state.entities.users[userId]) {
//       users.push(state.entities.users[userId])
//     }
//   })

//   return users;
// }

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    // usersId: serverUsersId(state, ownProps),
    server: state.entities.servers[ownProps.match.params.serverId],
    users: Object.values(state.entities.users),
    channel: state.entities.channels[ownProps.match.params.channelId],
    serverId: ownProps.match.params.serverId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchServer: serverId => dispatch(fetchServer(serverId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)