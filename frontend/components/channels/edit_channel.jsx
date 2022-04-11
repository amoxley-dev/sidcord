import React, { useState, useEffect } from "react";

function EditChannel(props) {

  const getServer = () => {
    let location = props.history.location.pathname.split('/');
    let serverId = location[2];
    return props.servers[serverId]
  };

  const getChannel = () => {
    let location = props.history.location.pathname.split('/');
    let channelId = location[3];
    return props.channels[channelId];
  };

  const server = getServer();
  const channel = getChannel();
  const [channelName, setChannelName] = useState(channel.channel_name)


  const handleDelete = () => {

    props.deleteChannel(channel.id)
      .then(() => {
        const firstChannel = Object.keys(server.channels)[0];
        props.history.push(`/channels/${server.id}/${firstChannel}`)
      })
    props.closeModal();

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    channel.channel_name = channelName;

    props.updateChannel(channel);
    props.closeModal();
  }

  return (
    <div>
      <div className="edit-channel-sidebar-container">
        <header>
          <div>
            {channel.channel_name.toUpperCase()}
          </div>
          <div>
            TEXT CHANNELS
          </div>
        </header>
        <main>
          <div>Overview</div>
          <div onClick={handleDelete}>Delete Channel</div>
        </main>
      </div>
      <main className="edit-channel-main-container">
        <h3>OVERVIEW</h3>
        <form onSubmit={handleSubmit}>
          <label>
            CHANNEL NAME
          </label>
          <input type="text" value={channelName} onChange={e => setChannelName(e.target.value)}/>
        </form>
      </main>
    </div>
  )
};

export default EditChannel;