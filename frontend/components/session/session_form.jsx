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
    
    console.log(this.state);
    const user = Object.assign({}, subset);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value })
  }

  emailError() {
    if (this.state.email === '') {
      this.state.errorEmail = ' - This field is required'
    } 
  }

  usernameError() {
    if (this.state.username === '') {
      this.state.errorUsername = ' - This field is required'
    } 
  }

  passwordError() {
    //display correct error for password
    if (this.state.password === '') {
      this.state.errorPassword = ' - This field is required'
    } 
  }

  renderErrors() {
    // reset errors
    this.props.errors.map((error, i) => {
      switch (true) {
        case /Email/.test(error):
          this.emailError();
        case /Username/.test(error):
          this.usernameError();
        case /Password/.test(error):
          this.passwordError();
      }
    })
  }

  email() {
    return(
      <label>EMAIL
        <span
          onChange={this.renderErrors()}
        >{this.state.errorEmail}</span>
        <input 
          type="text"
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
          <span
            onChange={this.renderErrors()}
          >{this.state.errorUsername}</span>
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
        <span
          onChange={this.renderErrors()}
        >{this.state.errorPassword}</span>
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