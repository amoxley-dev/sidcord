import React from "react";
// import mountains from "../../../public/splash_mountains.svg"

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  navBar() {
    let linkText = ''
    this.props.currentUser ? linkText = 'Open Sidcord' : linkText = 'Login'

    return (
      <nav className="splash-header-container">
        <div className="splash-logo">
          <span className="splash-logo-discord"><i className="fab fa-discord"></i></span>
          <span >Sidcord</span>
        </div>
        <ul className="nav-links">
          <li><a href="https://github.com/amoxley-dev/sidcord">Github</a></li>
          <li><a href="https://www.linkedin.com/in/alex-moxley-3a86a9237/">LinkedIn</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <button className="nav-button" onClick={() => { this.props.history.push('/login') }}>{linkText}</button>
      </nav>
    )
  }

  render() {
    return (
      <div className="splash">
        <header className="splash-content">
          {this.navBar()}
        </header>
        <main className="splash-content">
          <div className="splash-main-content">
            <h1 className="splash-h1">IMAGINE A PLACE...</h1>
            <div className="splash-description">...where you can belong to a school club, a gaming group, or a worldwide art community. 
              Where just you and a handful of friends can spend time together. 
              A place that makes it easy to talk every day and hang out more often.
            </div>
            <button 
              className="splash-button" 
              onClick={() => { this.props.history.push('/login') }}>Open Sidcord in your browser</button>
          </div>
        </main>
      </div>
    )
  }
}

export default Splash;