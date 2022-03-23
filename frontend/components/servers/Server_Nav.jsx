import React from "react";
import ServerNavItems from "./Server_Nav_Items"
import { Link } from "react-router-dom";

class ServerNav extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  render() {
    return (
      <div className="server-nav-container">
        <div className="server-nav-bar-container">
          <div className="server-nav-button"></div>
          <div className="seperator"></div>
          <ul>
            {
              this.props.servers.map(server => {
                return (
                  <ServerNavItems 
                    server={server}
                    history={this.props.history}
                    key={server.id}
                  />
                )
              })
            }
          </ul>
          <div className="seperator"></div>
          <div 
            className="server-nav-button create-server-button" 
            onClick={() => { this.props.history.push('/servers/create') }}
          ><svg 
            aria-hidden="false" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            ><path 
              fill="currentColor" 
              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
              ></path></svg></div>
          <div className="server-nav-button">find a public server</div>
        </div>
        <div className="user-info-container">
          <img src={this.props.currentUser.profilePicUrl} alt="profile picture" />
          <div className="user-handle">
            <div className="user-username">{this.props.currentUser.username}</div>
            <div className="user-tag">{this.props.currentUser.tag}</div>
          </div>
          <div>mute</div>
          <div>deafen</div>
        </div>
      </div>
    )
  }
}

export default ServerNav