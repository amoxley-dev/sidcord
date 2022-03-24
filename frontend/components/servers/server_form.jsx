import React from "react";

class ServerForm extends React.Component {
  render() {
    return (
      <div className="server-form-container">
        <div className="server-form-header">
          <h3>Create a server</h3>
          <div>
            Your server is where you and your friends hang out. 
            Make yours and start talking.
          </div>
        </div>
        <div className="server-form-main">
          <button
            onClick={() => this.props.openModal('serverPublicForm')}
            className="server-form-create-button"
          >Create My Own</button>
          <button 
            onClick={() => this.props.openModal('serverForm')}
            className="server-form-find-button"
          >Join a Server</button>
        </div>
      </div>
    )
  }
}

export default ServerForm;