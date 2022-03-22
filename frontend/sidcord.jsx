import React from "react";
import ReactDOM from "react-dom";

import { fetchServers, fetchServer, createServer, editServer, deleteServer } from "./util/server_api_util";
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
  window.fetchServers = fetchServers;
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.editServer = editServer;
  window.deleteServer = deleteServer;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test End

  ReactDOM.render(<Root store={store}/>, root);
})