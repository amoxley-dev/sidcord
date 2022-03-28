import React from "react"

class UserOptions extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout()
    this.props.closeModal()
  }

  render() {
    return (
      <div>
        <button className="logout-button" onClick={() => this.handleClick()}>
          Log Out
        </button>
      </div>
    )
  }
}

export default UserOptions;