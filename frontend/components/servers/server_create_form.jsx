import React from "react";

class ServerCreateForm extends React.Component {
  constructor(props) {
    super(props)

    const serverName = `${props.currentUser.username}'s server`

    this.state = {
      server_name: serverName,
      public: props.serverPublic,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.createServer(this.state)
      .then(serverId => {
        let membership = { user_id: this.props.currentUser.id, server_id: serverId };
        this.props.createServerMembership(membership);
      })
      .then(() => this.props.closeModal())
  }

  update() {
    return e => this.setState({server_name: e.currentTarget.value})
  }

  render() {
    let errorMessage
    (this.props.errors.length > 0) ? errorMessage = 'Must be between 2 and 100 in length' : '';

    return (
      <form className="server-create-container modal-white" onSubmit={this.handleSubmit}>
        <svg 
          className="close-button"
          width="24"
          height="24" 
          viewBox="0 0 24 24"
          onClick={() => this.props.closeModal()}
        ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
        </svg>
        <div className="server-create-header">
          <h3>Customize your server</h3>
          <div>
            Give your new server a personality with a name and icon.
            You can always change it later.
          </div>
        </div>

        <div className="server-create-content">
          <div>{errorMessage}</div>
          <div className="server-create-input">
            <label>SERVER NAME</label>
            <input 
              type="text"
              value={this.state.server_name}
              onChange={this.update()}
            />
          </div>
          <div className="server-disclaimer">
            By creating a server, you agree to Discord's <span><a className="server-modal-link-text" href="https://discord.com/guidelines">Community Guidelines</a></span>
          </div>
        </div>
        <div className="server-create-footer">
          <div
            type="button"
            onClick={() => this.props.openModal('serverPublicForm')}
            className="server-modal-back-button"
          >Back</div>
          <button type="submit">Create</button>
        </div>
      </form>

      
    )
  }
}

export default ServerCreateForm;