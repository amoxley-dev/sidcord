import React, { useState, useEffect } from "react";
import DmMessagesContainer from "../dm_messages/dm_messages_container";

function DmServer(props) {
  // console.log(props)

  // useEffect(() => {
  //   props.fetchDmServer(props.match.params.dmServerId)
  // }, [props.match.params.dmServerId])

  const dmServerContent = () => {
    if (!props.dmServer || !props.user) return null;
    return (
      <div>
        <header>
          {props.user.username}
        </header>
        <div>
          <DmMessagesContainer user={props.user}/>
        </div>
      </div>
    )
  }

  return (
    <div>
      {dmServerContent()}
    </div>
  )
};

export default DmServer;