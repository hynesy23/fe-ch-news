import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LoginPage extends Component {
  state = {
    username: "",
    isLoggedIn: false
  };

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username, isLoggedIn: true });
  };

  handleSubmit = event => {
    const { username } = this.state;
    event.preventDefault();
    this.props.handleLogin(username);
  };

  render() {
    const { isLoggedIn, username } = this.state;
    return (
      <>
        <FontAwesomeIcon icon="user-circle" />
        {isLoggedIn ? (
          <p>Welcome back, {username}</p>
        ) : (
          <>
            <h1>Welcome to the login page</h1>
            <p>
              PLease note you will need to login to submit articles or comments,
              or should you wish to vote on any said articles or comments.
            </p>
            <p>Please login by completing the form below</p>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input type="text" onChange={this.handleChange} />
              </label>
              <button>login</button>
            </form>
          </>
        )}
      </>
    );
  }
}
