import React, { useState, useEffect } from "react";

function ServerEdit(props) {

  const getServer = () => {
    let location = props.history.location.pathname.split('/');
    let serverId = location[2];
    return props.servers[serverId]
  };

  const server = getServer();
  const [serverName, setServerName] = useState(server.server_name)

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    server.server_name = serverName;

    props.editServer(server);
    props.closeModal();
  }

  const handleDelete = () => {
    const membership = {
      user_id: props.currentUserId,
      server_id: server.id
    }
    
    props.deleteServerMembership(membership);
    props.deleteServer(server.id);
    props.closeModal();
    props.history.push(`/channels/@me`);
  };

  return (
    <div>
      <div>
        Server Overview
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Server Name
          </label>
          <input type="text" value={serverName} onChange={e => setServerName(e.target.value)}/>
        </form>
      </div>
      <div onClick={handleDelete}>Delete Server</div>
    </div>
  )
};

export default ServerEdit;