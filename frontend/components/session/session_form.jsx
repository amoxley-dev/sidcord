import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      errorEmail: '',
      errorUsername: '',
      errorPassword: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();    

    const subset = (
      ({email, username, password}) => ({email, username, password})
    )(this.state)

    const user = Object.assign({}, subset);
    this.props.processForm(user)
      .fail(() => this.renderErrors());
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value })
  }

  emailError(error) {
    if (this.state.email === '') {
      this.setState({errorEmail: ' - This field is required'}) 
    } else if (error === 'Email has already been taken') {
      this.setState({errorEmail: ' - This email has already been taken'}) 
    } else {
      this.setState({errorEmail: error}) 
    }
  }

  usernameError(error) {
    if (this.state.username === '') {
      this.setState({errorUsername: ' - This field is required'})
    } else {
      this.setState({errorUsername: ' - Must be 2 or more in length'})
    }
  }

  passwordError(error) {
    if (this.state.password === '') {
      this.setState({errorPassword: ' - This field is required'})
    } else if (error === 'Password is too short (minimum is 6 characters)') {
      this.setState({errorPassword: ' - Must be 6 or more in length'})
    } else {
      this.setState({errorPassword: error})
    }
  }

  renderErrors() {
    this.state.errorEmail = '';
    this.state.errorUsername = '';
    this.state.errorPassword = '';

    this.props.errors.map((error) => {
      switch (true) {
        case /Email/.test(error):
          this.emailError(error);
          break;
        case /Username/.test(error):
          this.usernameError(error);
          break;
        case /Password/.test(error):
          this.passwordError(error);
          break;
        default:
          this.emailError(error);
          this.passwordError(error);
          break;
      }
    })
  }

  email() {
    let inputClass = '';
    (this.state.errorEmail.length > 1) ? 
    inputClass = "input-container input-error" : inputClass = "input-container"

    return(
      <div className={inputClass}>
          <label>EMAIL
            <span className="error-message">{this.state.errorEmail}</span>
          </label>
          <input 
            type="email"
            value={this.state.email}
            onChange={this.update('email')}
          />
      </div>
    )
  }


  username() {
    if (this.props.formType === 'signup') {
      let inputClass = '';
      (this.state.errorUsername.length > 1) ? 
      inputClass = "input-container input-error" : inputClass = "input-container"

      return (
        <div className={inputClass}>
          <label>USERNAME
            <span className="error-message">{this.state.errorUsername}</span>
          </label>
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
        </div>
      )
    }
  }

  password() {
    let inputClass = '';
    (this.state.errorPassword.length > 1) ? 
    inputClass = "input-container input-error" : inputClass = "input-container"

    return (
      <div className={inputClass}>
        <label>PASSWORD
          <span className="error-message">{this.state.errorPassword}</span>
        </label>
        <input 
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />
      </div>
    )
  }

  link() {
    if (this.props.formType === 'signup') {
      return (
        <div className="session-link-container">
          <Link to="/login">Already have an account?</Link>
        </div>
      )
    } else {
      return (
        <div className="session-link-container">
          <span>Need an account? <Link to="/signup">Register</Link></span>
        </div>
      )
    }
  }

  formHeader() {
    if (this.props.formType === 'signup') {
      return (
        <div className="form-header">
          <h3>Create an account</h3>
        </div>
      )
    } else {
      return (
        <div className="form-header">
          <h3>Welcome back!</h3>
          <div>We're so excited to see you again!</div>
        </div>
      )
    }
  }

  demoUser() {
    if (this.props.formType === 'login') {
      return <button type="submit" className="session-button" id="demo-button" onClick={() => this.setState({email: 'demo@gmail.com', password: 'password'})}>Demo Login</button>
    } else {
      return null
    }
  }

  render() {
    let buttonText =''
    this.props.formType === 'signup' ? buttonText = 'Continue' : buttonText = 'Login'

    return (
      <div className="form-container">
        {this.formHeader()}
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.email()}
          {this.username()}
          {this.password()}
          <button type="submit" className="session-button">{buttonText}</button>
          {this.demoUser()}
          {this.link()}
        </form>
      </div>
    )
  }
}

export default SessionForm