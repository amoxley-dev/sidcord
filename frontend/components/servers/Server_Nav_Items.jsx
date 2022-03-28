import React from "react";
import { Link } from "react-router-dom";


const ServerNavItems = props => {
  let serverInitial = '';
  const words = props.server.server_name.split(" ");
  words.map(word => (
    serverInitial += word[0]
  ))


  const defaultChannelId = Object.keys(props.server.channels)[0];

  const handleClick = () => {
    props.fetchServer(props.server.id)
    props.history.push(`/channels/${props.server.id}/${defaultChannelId}`)
  }

  return (
    <div className="server-nav-button" onClick={() => { handleClick() }}>{serverInitial}</div>
  )
}

export default ServerNavItems;