import React from "react";
import ReactDOM from "react-dom";

import { signup, login, logout } from "./actions/session_actions";
import configureStore from "./store/store"
import Root from "./components/Root"

document.addEventListener("DOMContentLoaded", () => {
  // const h1 = <h1>Sidcord</h1>;
  const root = document.querySelector('#root');
  const store = configureStore();

  // Test Begins
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Test End

  ReactDOM.render(<Root store={store}/>, root);
})