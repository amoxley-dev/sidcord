import React from "react";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchServers()
  }

  handleClick(serverId) {
    const membership = { user_id: this.props.currentUser.id, server_id: serverId }
    this.props.createServerMembership(membership);
    this.props.closeModal();
  }

  serverInitial(server) {
    let serverInitial = '';
    const words = server.server_name.split(" ");
    words.map(word => (
      serverInitial += word[0]
    ))
    return serverInitial;
  }

  render() {
    return (
      <div className="modal-white">
        <svg 
          className="close-button"
          width="24"
          height="24" 
          viewBox="0 0 24 24"
          onClick={() => this.props.closeModal()}
        ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
        </svg>
        <div className="server-index-modal">
          <div className="server-modal-header">
            <h3>Join a Server</h3>
          </div>
          <ul className="server-index-modal-content">
            {
              this.props.servers.map(server => {
                let serverInitial = this.serverInitial(server);
                return (
                  <div 
                    className="server-button-container" 
                    onClick={() => this.handleClick(server.id)}
                    key={server.id}
                  >
                    <div className="server-button-image-text">
                      <div className="server-initial-modal">
                        {serverInitial}
                      </div>
                      <div>
                        {server.server_name}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ServerIndex;