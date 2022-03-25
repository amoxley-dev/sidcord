import React from "react";
import { fetchServers } from "../../util/server_api_util"

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  // async selectPublicServers() {
  //   let allServers
  //   await fetchServers()
  //           .then(servers => allServers = servers)
  //   console.log(allServers)
  //   return allServers
  // }

  render() {
    return (
      <div className="modal-white">
        <h1>Server Index Working</h1>
        <ul>
          {
            this.props.servers.map(server => (
              server.server_name
            ))
          }
        </ul>
      </div>
    )
  }
}

export default ServerIndex;