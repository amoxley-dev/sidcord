import React from "react";

class ServerPublicForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(bool) {
    bool ? this.props.publicTrue() : this.props.publicFalse();
    this.props.openModal('serverCreate');
  }

  render() {
    return (
      <div className="server-public-form-container">
        <div className="server-public-header">
          <h3>Tell Us more about your server</h3>
          <div>
            In order to help you with your setup, 
            is your new server for just a few friends or a larger community?
          </div>
        </div>
        <div className="server-public-content">
          <button
            onClick={() => this.handleClick(true)}
            className="server-public-create-button"
          >For a club or community</button>
          <button
            onClick={() => this.handleClick(false)}
            className="server-public-create-button"
          >For me and my friends</button>
          <div>Not sure? You can <span>skip this question</span> for now.</div>
        </div>
        <button
          onClick={() => this.props.openModal('serverForm')}
          className="server-public-back-button"
        >Back</button>
      </div>
    )
  }
}

export default ServerPublicForm