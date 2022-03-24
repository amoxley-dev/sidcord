import React from "react";

class ServerForm extends React.Component {
  render() {
    return (
      <div className="server-form-container modal-white">
        <svg 
          className="close-button"
          width="24"
          height="24" 
          viewBox="0 0 24 24"
          onClick={() => this.props.closeModal()}
        ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
        </svg>
        <div className="server-form-header server-modal-header">
          <h3>Create a server</h3>
          <div>
            Your server is where you and your friends hang out. 
            Make yours and start talking.
          </div>
        </div>
        <div className="server-form-content" >
          <div 
            className="server-button-container" 
            onClick={() => this.props.openModal('serverPublicForm')}
          >
            <div className="server-button-image-text">
              <img 
                src="https://sidcord-dev.s3.us-west-1.amazonaws.com/create_server_icon.png" 
                alt="create-server-icon"
                className="server-form-icon"
              />
              <div>
                Create My Own
              </div>
            </div>
            <img 
              src="https://sidcord-dev.s3.us-west-1.amazonaws.com/server_modal_arrow.png" 
              alt="create-server-icon"
              className="server-form-icon"
            />
          </div>
        </div>
        <div className="server-form-footer">
          <div 
            onClick={() => this.props.openModal('serverForm')}
            className="server-form-find-button"
          >Join a Server</div>
        </div>
      </div>
    )
  }
}

export default ServerForm;