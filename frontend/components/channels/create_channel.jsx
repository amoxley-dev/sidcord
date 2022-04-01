import React, { useEffect, userRef, useState } from "react";


function CreateChannel(props) {
  const [name, setName] = useState("")
  let urlElements = window.location.href.split('/')
  // console.log(urlElements)
  // console.log(urlElements[5])
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let channel = { channel_name: name }
    props.createChannel(channel, urlElements[5])
      .then((channel) => {
        setName("")
        props.closeModal()
        // props.history.push(`/channels/${urlElements[5]}/${channel.id}`)
      })
    

  }


  return (
    <div className="create-channel-container">
      <form className="channel-create-form" onSubmit={e => handleSubmit(e)}>
        <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
      </form>
    </div>
  )
}

export default CreateChannel