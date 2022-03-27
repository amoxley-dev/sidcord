import React from "react";

class Channel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    if (this.props.usersId.length !== 0) {
      if (this.props.usersId.length > this.props.users.length ) {
        this.props.usersId.map(userId => (
          this.props.fetchUser(userId)
        ))
      }
    }
  }

  componentDidUpdate() {
    let stateUsersId = this.props.users.map(user => user.id)
    let usersId = this.props.usersId

    let difIds = usersId.filter(userId => !stateUsersId.includes(userId))

    if (difIds.length > 0) {
      difIds.map(userId => (
        this.props.fetchUser(userId)
      ))
    }
  }

  render() {
    return (
      <div>
        <div>Channel Working</div>

        <div className="users-list">
          <div>Members - {this.props.usersId.length}</div>
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