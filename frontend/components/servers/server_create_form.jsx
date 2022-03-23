import React from "react";

class ServerCreateForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="server-create-container">
        <div className="server-create-header">
          <h3>Customize your server</h3>
          <div>
            Give your new server a personality with a name and icon.
            You can always change it later.
          </div>
        </div>

        <div className="server-create-content">
          <label>SERVER NAME
            <input type="text" />
          </label>
          <div className="server-disclaimer">
            By createing a server, you agree to Discord's<span>Community Guidelines</span>
          </div>
          <button type="click">back</button>
          <button type="submit">Create</button>
        </div>
      </form>

      
    )
  }
}

export default ServerCreateForm;