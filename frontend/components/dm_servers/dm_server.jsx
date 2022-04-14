import React, { useState, useEffect } from "react";

function DmServer(props) {
  console.log(props)

  const dmServerContent = () => {
    if (!props.dmServer || !props.user) return null;
    return (
      <div>
        <header>
          {props.user.username}
        </header>
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