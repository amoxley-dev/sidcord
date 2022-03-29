import React, { useEffect, userRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable"

function ChannelMessages() {
  const [messages, setMessages] = useState([])
  const params = useParams()

  console.log(params)
  useEffect(() => {
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
    <div>Messages Body</div>
  )
}

export default ChannelMessages