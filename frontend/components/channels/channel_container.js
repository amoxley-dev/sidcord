import { connect } from "react-redux";

import Channel from "./channel";
import { fetchUser } from "../../actions/user_actions";

const serverUsersId = (state, ownProps) => {
  if (Object.keys(state.entities.servers).length === 0) return [];
  return state.entities.servers[ownProps.match.params.serverId].users;
}

const serverUsers = (state, ownProps) => {
  if (Object.keys(state.entities.servers).length === 0) return [];
  let users = []
  state.entities.servers[ownProps.match.params.serverId].users.map(userId => {
    if (state.entities.users[userId]) {
      users.push(state.entities.users[userId])
    }
  })

  return users;
}

const mapStateToProps = (state, ownProps) => {
  return {
    usersId: serverUsersId(state, ownProps),
    users: serverUsers(state, ownProps)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)