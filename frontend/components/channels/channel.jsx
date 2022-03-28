import React from "react";

class Channel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
  }

  render() {
    if (!this.props.channel) return null

    return (
      <div>
        <div>{this.props.channel.channel_name}</div>
        <div>Messages container</div>

        <div className="users-list">
          <div>Members - {this.props.users.length}</div>
          <ul>
            {
              this.props.users.map(user => {
                return (
                  <div key={user.id}>
                    <div>{user.username}</div>
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

export default Channel