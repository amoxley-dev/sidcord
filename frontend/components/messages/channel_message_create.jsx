import React, { useState } from "react";
import { useParams } from "react-router";

function ChannelMessageCreate(props) {
  const [body, setBody] = useState(props.message.body)
  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault;
    e.stopPropogation
    // console.log(body)
    let message = { body: body }
    props.createMessage(params.channelId, message)
  }

  return (
    <div className="message-form-container" >
      <form className="message-form" onSubmit={e => handleSubmit(e)}>
        <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)}/>
        <button type="submit">Create Message</button>
      </form>
    </div>
  )
}

export default ChannelMessageCreate