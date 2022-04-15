import React, { useState } from "react";
import { useParams } from "react-router";

function CreateDmMessage(props) {
  const [body, setBody] = useState(props.message.body)
  const params = useParams()
  
  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dmMessage = { body: body }
    props.createDmMessage(params.dmServerId,  dmMessage)
    setBody("")
  }

  return (
    <div className="message-form-container" >
      <form className="message-form" onSubmit={e => handleSubmit(e)}>
        <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)}/>
      </form>
    </div>
  )
};

export default CreateDmMessage;