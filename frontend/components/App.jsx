import React from "react";
import { 
  Route,
  Switch,
  Link
} from "react-router";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

import modal from "./modal/modal";
import SplashContainer from "./splash/splash_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ServerNavContainer from "./servers/server_nav_container";
import ServerInfoContainer from "./servers/server_info_container";


const App = () => (
  <div id='app'>
    <Route path='/' component={modal}></Route>
    <ProtectedRoute path="/channels" component={ServerNavContainer}/>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute 
                exact path="/channels/@me" 
                component={ServerInfoContainer} 
            />
      <ProtectedRoute 
                exact path="/channels/:serverId/:channelId" 
                component={ServerInfoContainer} 
            />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>

);

export default App;