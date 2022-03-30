import React, { useEffect, userRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable"
import ChannelMessageCreateContainer from "./channel_message_create_container";

function ChannelMessages(props) {
  const [messages, setMessages] = useState([])
  const params = useParams()

  useEffect(() => {
    props.fetchChannel(params.channelId)

    const cable = createConsumer("ws://localhost:3000/cable")

    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.channelId
    }

    const handlers = {
      received(data) {
        setMessages([...messages, data])
      },

      connected() {
        console.log("connected")
      },

      disconnected() {
        console.log("disconnected")
      }
    }

    const subscription = cable.subscriptions.create(paramsToSend, handlers)

    return function cleanup() {
      console.log("unsubbing from ", params.channelId)
      subscription.unsubscribe()
    }
  }, [params.channelId, messages])

  return (
    <div >
      <div className="messages-body">
        <ul>
          {
            props.messages.map(message => {
              return (
                <li key={message.id}>
                  <div>{message.body}</div>
                  <div>{message.created_at}</div>
                </li>
              )
            })
          }
        </ul>
        <ChannelMessageCreateContainer />
      </div>
      
    </div>
  )
}

export default ChannelMessages