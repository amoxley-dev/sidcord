# Welcome to Sidcord!

[Sidcord](https://sidcord-1.herokuapp.com/#/) is a Discord clone where users can create servers and live chat with others.

## Technologies Used
* Ruby on Rails for the backend
* React/Redux for the frontend
* JavaScript/AJAX/JBuilder 
* PostgreSQL as the database
* HTML5 for website structure
* SCSS for styling
* AWS S3 and AWS IAM as cloud storage
* Action Cable and Websockets for live chatting
* Heroku for live deployment

## Features
* ### Joining servers

  The user can create servers based off any topic where others can join and have conversations. A difficult part of getting servers was having finding the appropriate servers for a user to join. When a user wants to join a server they click the navigate button, or the join a server button in the server creation form. This then opens up a modal of all the servers the user is not already subbed to. Initially I was approaching this filtering from an On<sup>2</sup>, however utilizing sets and object I was able to get it down to On.

  ```js
  //server_index_container.js

  const allPublicServers = state => {
    if (Object.keys(state.entities.servers).length === 0) return [];

    let serversSet = new Set();
    const currentUser = state.entities.users[state.session.id]

    Object.keys(state.entities.servers).map(serverId => (
      serversSet.add(serverId)
    ))

    currentUser.servers.map(serverId => {
      return serversSet.delete(serverId.toString())
    })

    let servers = [...serversSet]
    let publicServers = []
    servers.map(serverId => {
      if (state.entities.servers[parseInt(serverId)].public) {
        return publicServers.push(state.entities.servers[parseInt(serverId)])
      }
    });

    return publicServers
  }
  ```

* ### Live Chat Function

  A core component of Sidcord is live chatting with other users in the same channel. This required the use of websockets and action cable. The chat is able to detect message creations, edits, and deletions live and boradcast them to other users. Even though they are three different actions they go through the same messaging component for consistency.

  ```js
  // channel_messages.jsx

    return (
    <div className="channel-messages-container">
      <div className="messages-body">
        <ul>
          {
            props.messages.map(message => {
              return (
                <li className="channel-message" key={message.id * message.body.length * Math.random(10000)} id={`message-${message.id}`}>
                  {messageProfile(message.user.id)}
                  <div className="message-info-container">
                    <div className="message-info">
                      <div className="message-username">{message.user.username}</div>
                      {messageDate(message.created_at)}
                    </div>
                    <div className="message-body-container" id={message.id}>
                        <MessageBodyContainer message={message} />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

        <ChannelMessageCreateContainer />
    </div>
  )
  ```
  ## Next Steps
    * Impliment direct messaging
    * Create freindships
    * Allow servers to have images