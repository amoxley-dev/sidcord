import React from "react";
import ReactDOM from "react-dom";

import { fetchUser } from "./actions/user_actions";
import { fetchServers, fetchServer, createServer, editServer, deleteServer } from "./actions/server_actions";
import { createServerMembership, deleteServerMembership } from "./util/server_membership_api_util";
import { fetchChannel, createChannel, updateChannel, deleteChannel } from "./util/channels_api_util";
import { fetchMessage, createMessage, updateMessage, deleteMessage } from "./util/messages_api_util";
import { fetchDmServers, fetchDmServer, createDmServer, deleteDmServer } from "./util/dm_server_api_util";
import { createDmMembership, deleteDmMembership } from "./util/dm_membership_util";
import { fetchDmMessage, createDmMessage, updateDmMessage, deleteDmMessage } from "./util/dm_messages_api_util";
import configureStore from "./store/store"
import Root from "./components/Root"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector('#root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Test Begins
  window.fetchUser = fetchUser;
  window.fetchServers = fetchServers;
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.editServer = editServer;
  window.deleteServer = deleteServer;
  window.createServerMembership = createServerMembership;
  window.deleteServerMembership = deleteServerMembership;
  window.fetchChannel = fetchChannel;
  window.createChannel = createChannel;
  window.updateChannel = updateChannel;
  window.deleteChannel = deleteChannel;
  window.fetchMessage = fetchMessage;
  window.createMessage = createMessage;
  window.updateMessage = updateMessage;
  window.deleteMessage = deleteMessage;
  window.fetchDmServers = fetchDmServers;
  window.fetchDmServer = fetchDmServer;
  window.createDmServer = createDmServer;
  window.deleteDmServer = deleteDmServer;
  window.createDmMembership = createDmMembership;
  window.deleteDmMembership = deleteDmMembership;
  window.fetchDmMessage = fetchDmMessage  
  window.createDmMessage = createDmMessage;
  window.updateDmMessage = updateDmMessage;
  window.deleteDmMessage = deleteDmMessage;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test End

  ReactDOM.render(<Root store={store}/>, root);
})