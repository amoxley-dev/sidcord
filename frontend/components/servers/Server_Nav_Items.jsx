import React from "react";
import { Link } from "react-router-dom";


const ServerNavItems = props => {
  let serverInitial = '';
  const words = props.server.server_name.split(" ");
  words.map(word => (
    serverInitial += word[0]
  ))

  return (
    <div className="server-nav-button" onClick={() => { props.history.push('/servers') }}>{serverInitial}</div>
  )
}

export default ServerNavItems;