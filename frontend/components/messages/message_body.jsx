import React, { useEffect, userRef, useState } from "react";

function MessageBody(props) {
  const [body, setBody] = useState(props.message.body)
  const [edit, setEdit] = useState(false)

  const messageBody = () => {
    return (
      <div>
        <div>
          {body}
        </div>
        <div className="message-button-container">
          <div onClick={() => setEdit(!edit)}>edit</div>
          <div>options</div>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let message = props.message;
    message.body = body;
    props.updateMessage(message)
    setEdit(!edit)
  }

  const messageEdit = () => {
    return (
      <div>
        Edit Form
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={body} onChange={(e) => setBody(e.currentTarget.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  const bodyContent = () => {
    if (!edit) {
      return messageBody()
    } else {
      return messageEdit()
    }
  }

  

  return (
    <div className="message-body">
      {bodyContent()}

    </div>
  )
}

export default MessageBody