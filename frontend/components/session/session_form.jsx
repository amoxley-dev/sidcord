import React from "react";

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
    } else if (error = 'Email has already been taken') {
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
    return(
      <label>EMAIL
        <span className="error-message">{this.state.errorEmail}</span>
        <input 
          type="email"
          value={this.state.email}
          onChange={this.update('email')}
        />
      </label>
    )
  }


  username() {
    if (this.props.formType === 'signup') {
      return (
        <label>USERNAME
          <span className="error-message">{this.state.errorUsername}</span>
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
        </label>
      )
    }
  }

  password() {
    return (
      <label>PASSWORD
        <span className="error-message">{this.state.errorPassword}</span>
        <input 
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />
      </label>
    )
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} >
          {this.email()}
          {this.username()}
          {this.password()}
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm