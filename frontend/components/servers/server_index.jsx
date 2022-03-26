import React from "react";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  handleClick(serverId) {
    const membership = { user_id: this.props.currentUser.id, server_id: serverId }
    this.props.createServerMembership(membership);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-white">
        <h1>Server Index Working</h1>
        <ul>
          {
            this.props.servers.map(server => (
              <div 
                className="server-button-container" 
                onClick={() => this.handleClick(server.id)}
                key={server.id}
              >
                <div className="server-button-image-text">
                  {/* <img 
                    src="https://sidcord-dev.s3.us-west-1.amazonaws.com/private_server_icon.png" 
                    alt="create-server-icon"
                    className="server-form-icon"
                  /> */}
                  <div>
                    {server.server_name}
                  </div>
                </div>
              </div>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default ServerIndex;