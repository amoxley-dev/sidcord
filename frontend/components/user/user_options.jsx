import React, { useEffect, userRef, useState } from "react";

function UserOptions(props) {
  const [username, setUsername] = useState(props.currentUser.username);
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [email, setEmail] = useState(props.currentUser.email);
  const [emailEdit, setEmailEdit] = useState(false);

  
  const handleClick = () => {
    props.logout()
    props.closeModal()
  }


  const userProfile = () => {
    let profilePicUrl
    (props.currentUser.profilePicUrl === '') ? 
    profilePicUrl = "https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png" :
    profilePicUrl = user.profilePicUrl

    return (
      <div className="user-settings-name-email">
        <div className="settings-profile">
          <img src={profilePicUrl} alt="user profile picture" />
        </div>
        <div className="user-settings-handle">
          <span>{props.currentUser.username}</span>
          <span>#{props.currentUser.tag}</span>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let user = props.currentUser;
    user.username = username;
    user.email = email;
    props.updateUser(user);

    setUsernameEdit(false);
    setEmailEdit(false);
  }

  const usernameEditDisplay = () => {
    let usernameBody
    if (usernameEdit) {
      usernameBody = (
        <div className="user-edit-container username-edit">
          <form onSubmit={(e) => handleSubmit(e)} className="user-edit-form">
            <input type="text" value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
          </form>
        </div>
      )
    } else {
      usernameBody = (
        <div className="user-edit-container username-edit">
            <div className="user-edit-info">
              <h3>USERNAME</h3>
              <span>{props.currentUser.username}</span>
              <span id="user-options-tag">#{props.currentUser.tag}</span>
            </div>
            <div className="user-edit-button" onClick={() => setUsernameEdit(!usernameEdit)}>
              Edit
            </div>
        </div>
      )
    }

    return usernameBody
  }

  const emailEditDisplay = () => {
    let emailBody
    if (emailEdit) {
      emailBody = (
        <div className="user-edit-container">
          <form onSubmit={(e) => handleSubmit(e)} className="user-edit-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
          </form>
        </div>
      )
    } else {
      emailBody = (
        <div className="user-edit-container">
            <div className="user-edit-info">
              <h3>EMAIL</h3>
              <span>{props.currentUser.email}</span>
            </div>
            <div className="user-edit-button" onClick={() => setEmailEdit(!emailEdit)}>
              Edit
            </div>
        </div>
      )
    }

    return emailBody
  }


  const editDisplay = () => {

    return (
      <div className="user-options-edit-container">
        {usernameEditDisplay()}
        {emailEditDisplay()}
      </div>
    )
  }

  return (
    <div className="user-options">
      <div className="close-button-circle">
        <div className="close-button-svg-container">
          <svg 
            className="close-button-circle-x"
            width="24"
            height="24" 
            viewBox="0 0 24 24"
            onClick={() => props.closeModal()}
            ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
          </svg>
        </div>
        <div id="esc">
          ESC
        </div>
      </div>
      <div className="user-settings-container">
        <h3>USER SETTINGS</h3>
        <div id="my-account">My Account</div>
        <div className="logout-button" onClick={() => handleClick()}>
          <div>
            Log Out
          </div>
          <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"></path></svg>
        </div>
      </div>
      <div className="account-settings-container">
        <h3>My Account</h3>
        <div className="account-settings-box">
          <div className="user-banner"></div>
          <div>
            {userProfile()}
            {editDisplay()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserOptions;