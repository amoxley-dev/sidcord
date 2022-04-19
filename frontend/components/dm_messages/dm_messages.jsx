import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable";
import CreateDmMessageContainer from "./create_dm_message_container";
import DmMessagesBodyContainer from "./dm_messages_body_container";

function DmMessages(props) {
  const [dmMessages, setDmMessages] = useState([])
  const params = useParams();

  useEffect(() => {
    props.fetchDmServer(params.dmServerId)

    const cable = createConsumer("ws://localhost:3000/cable")
    // const cable = createConsumer("wss://sidcord-1.herokuapp.com/cable")
    
    const paramsToSend = {
      channel: "DirectMessageChannel",
      id: params.dmServerId
    }

    const handlers = {
      received(data) {
        console.log(data)
        setDmMessages([...dmMessages, data])
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
      console.log("unsubbing from ", params.dmServerId)
      subscription.unsubscribe()
    }
  }, [params.dmServerId, dmMessages])

  const messageProfile = (userId) => {
    let user
    (userId === props.user.id) ? user = props.user : user = props.currentUser
    if (!user) return null
    let profilePicUrl
    (user.profilePicUrl === '') ?
    profilePicUrl = "https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png" :
    profilePicUrl = user.profilePicUrl

    return (
      <img className="message-profile" src={profilePicUrl} alt="message user profile" />
    )
  }

  const messageDate = (timestamp) => {
    const timeStamp = timestamp.slice(0, 10).split("-")
    const year = timeStamp.shift()
    timeStamp.push(year)
    const date = timeStamp.join("/")
    return (
      <div className="message-date">{date}</div>
    )
  }

  return (
    <div className="dm-messages-container">
      <div className="dm-messages-body">
        <ul>
          {
            props.dmMessages.map(dmMessage => {
              return (
                <li className="channel-message" key={dmMessage.id * dmMessage.body.length * Math.random(10000)} id={`dmMessage-${dmMessage.id}`}>
                  {messageProfile(dmMessage.user.id)}
                  <div className="message-info-container">
                    <div className="message-info">
                      <div className="message-username">{dmMessage.user.username}</div>
                      {messageDate(dmMessage.created_at)}
                    </div>
                    <div className="message-body-container" id={dmMessage.id}>
                      <DmMessagesBodyContainer dmMessage={dmMessage}/>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

      <CreateDmMessageContainer user={props.user}/>
    </div>
  )
}

export default DmMessages;