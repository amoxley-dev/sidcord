import React from "react";
import { Route } from "react-router";

import Greeting_container from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container"

const App = () => (
  <div>
    <h1>Sidcord</h1>
    <Greeting_container />

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;