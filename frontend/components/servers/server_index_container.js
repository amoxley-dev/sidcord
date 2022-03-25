import { connect } from "react-redux"
import 'regenerator-runtime/runtime'

import ServerIndex from "./server_index"
import { closeModal } from "../../actions/modal_actions"
import { fetchServers } from "../../actions/server_actions"

const allPublicServers = state => {
  if (Object.keys(state.entities.servers).length === 0) return [];

  let serversSet = new Set();
  const currentUser = state.entities.users[state.session.id]

  Object.keys(state.entities.servers).map(serverId => (
    serversSet.add(serverId)
  ))

  currentUser.servers.map(serverId => {
    return serversSet.delete(serverId.toString())
  })

  let servers = [...serversSet]
  let publicServers = []
  servers.map(serverId => {
    if (state.entities.servers[parseInt(serverId)].public) {
      return publicServers.push(state.entities.servers[parseInt(serverId)])
    }
  });
    
  // console.log(publicServers)
  return publicServers
}

const mapStateToProps = state => {
  return {
    servers: allPublicServers(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchServers: () => dispatch(fetchServers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);