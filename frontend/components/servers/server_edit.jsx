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

  const serverInitial = () => {
    const serverArray = serverName.split(" ")
    const serverInit = serverArray.map(word => word[0])
    return serverInit.join("");
  }

  return (
    <div className="server-options">
      <div className="close-button-circle">
        <div className="close-button-svg-container" onClick={() => props.closeModal()}>
          <svg 
            className="close-button-circle-x"
            width="24"
            height="24" 
            viewBox="0 0 24 24"
            ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
          </svg>
        </div>
        <div id="esc">
          ESC
        </div>
      </div>
      <div className="edit-server-sidebar-container">
        <div className="edit-server-sidebar">
          <header className="edit-server-sidebar-header">
            <h3>{serverName}</h3>
          </header>
          <main>
            <div className="edit-sidebar-content">Overview</div>
            <div className="edit-server-separator"></div>
            <div onClick={handleDelete} className="edit-server-delete edit-sidebar-content">
              Delete Server
              <svg 
                aria-hidden="false" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path>
              </svg>
            </div>
          </main>
        </div>
      </div>
      <main className="edit-server-main">
        <div className="edit-server-overview">
          Server Overview
        </div>
        <div className="edit-server-main-content">
          <div className="edit-server-server-initial">
            {serverInitial()}
          </div>
          <form onSubmit={handleSubmit} className="edit-server-form">
            <label>
              SERVER NAME
            </label>
            <input type="text" value={serverName} onChange={e => setServerName(e.target.value)}/>
          </form>
        </div>
      </main>
    </div>
  )
};

export default ServerEdit;