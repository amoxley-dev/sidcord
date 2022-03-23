import React from "react";
import { 
  Route,
  Switch,
  Link
} from "react-router";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashContainer from "./splash/splash_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ServerNavContainer from "./servers/server_nav_container";
import ServerFormContainer from "./servers/server_form_container";


const App = () => (
  <div id='app'>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/servers/create" component={ServerFormContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
    <ProtectedRoute path="/servers" component={ServerNavContainer}/> 
  </div>

);

export default App;