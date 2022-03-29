import React from "react";
import { matchPath } from 'react-router'

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log("Channel Mount")

    // const match = matchPath(this.props.history.location.pathname, {
    //   path: `/channels/:serverId/:channelId`
    // })

    // if (match) this.props.fetchServer(match.params.serverId)
    // console.log(this.props)
    // console.log(match.params.serverId)
    // this.props.fetchServer(this.props.match.params.serverId)

  }

  render() {
    // console.log('rendering')
    // console.log(this.props.channel)
    if (!this.props.channel) return null

    return (
      <div className="channel-container">
        <div className="channel-header">
          <div>{this.props.channel.channel_name}</div>
        </div>

        <div className="channel-content-container">
          <div className="messages-container">
            <div className="messages-body">
              messages body
            </div>
            <div className="message-input-container">Message inupt container</div>
          </div>
          <div className="users-list-container">
            <div>Members - {this.props.users.length}</div>
            <ul className="users-list">
              {
                this.props.users.map(user => {
                  let profilePicUrl
                  (user.profilePicUrl === '') ? 
                  profilePicUrl = 'https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png' :
                  profilePicUrl = user.profilePicUrl
                  return (
                    <div key={user.id} className="server-user-info">
                      <img src={profilePicUrl} alt="profile picture" />
                      <div>{user.username}</div>
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Channel