import React from "react";
import ReactDOM from "react-dom";

import { signup, login, logout } from "./actions/session_actions";
import configureStore from "./store/store"
import Root from "./components/Root"

document.addEventListener("DOMContentLoaded", () => {
  // const h1 = <h1>Sidcord</h1>;
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
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test End

  ReactDOM.render(<Root store={store}/>, root);
})