import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  const sessionLinks = () => (
    <nav>
      <Link to='/login'>Login</Link>
    </nav>
  );

  const personalGreeting = () => {
    console.log(props.currentUser)
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
        <button className="header-button" onClick={props.logout}>Log Out</button>
      </hgroup>
    )
  }

  return props.currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;