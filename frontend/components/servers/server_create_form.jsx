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
      .then(() => this.props.closeModal())
      // .fail(() => this.);
  }

  update() {
    return e => this.setState({server_name: e.currentTarget.value})
  }

  render() {
    let errorMessage
    (this.props.errors.length > 0) ? errorMessage = 'Must be between 2 and 100 in length' : '';
    
    return (
      <form className="server-create-container" onSubmit={this.handleSubmit}>
        <div className="server-create-header">
          <h3>Customize your server</h3>
          <div>
            Give your new server a personality with a name and icon.
            You can always change it later.
          </div>
        </div>

        <div className="server-create-content">
          <div>{errorMessage}</div>
          <label>SERVER NAME
            <input 
              type="text"
              value={this.state.server_name}
              onChange={this.update()}
            />
          </label>
          <div className="server-disclaimer">
            By creating a server, you agree to Discord's<span>Community Guidelines</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => this.props.openModal('serverPublicForm')}
          className="server-create-back-button"
        >Back</button>
        <button type="submit">Create</button>
      </form>

      
    )
  }
}

export default ServerCreateForm;