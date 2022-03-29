import React from "react";
import ChannelMessages from "../messages/channelMessages";

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // const cable = createConsumer("ws://localhost:3000/cable")
    // const paramsToSend = {
    //   channel: "ConversationChannel",
    //   id: this.props.message.channel_id
    // }
    
    // const handlers = {
    //   received(data) {
    //     setMessages([...messages, data])
    //   },

    //   connected() {
    //     console.log("connected")
    //   },

    //   disconnected() {
    //     console.log("disconnected")
    //   }
    // }

    // const subscription = cable.subscriptions.create(paramsToSend, handlers)

    // return function cleanup() {
    //   console.log("unsubbing from ", params.id)
    //   subscription.unsubscribe()
    // }
  }

  render() {

    if (!this.props.channel) return null

    return (
      <div className="channel-container">
        <div className="channel-header">
          <i className="fa-solid fa-hashtag fa-lg" id="channel-message-hashtag"></i>
          <div>{this.props.channel.channel_name}</div>
        </div>

        <div className="channel-content-container">
          <div className="messages-container">
            <div className="messages-body">
              messages body
              <ChannelMessages />
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