import React, { useState } from "react";
import { useParams } from "react-router";

function ChannelMessageCreate(props) {
  const [body, setBody] = useState(props.message.body)
  const params = useParams()

  const channel = props.channels[params.channelId]

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let message = { body: body }
    props.createMessage(params.channelId, message)
    setBody("")
  }

  return (
    <div className="message-form-container" >
      <form className="message-form" onSubmit={e => handleSubmit(e)}>
        <input 
          type="text" 
          value={body} 
          onChange={(e) => setBody(e.currentTarget.value)}
          placeholder={`Message #${channel.channel_name}`}
        />
      </form>
    </div>
  )
}

export default ChannelMessageCreate