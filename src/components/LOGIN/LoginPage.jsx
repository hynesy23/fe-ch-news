import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

export default class LoginPage extends Component {
  state = {
    user: "",
    isLoggedIn: false
  };

  handleChange = event => {
    const user = event.target.value;
    this.setState({ user });
  };

  handleSubmit = event => {
    const { user } = this.state;
    event.preventDefault();
    this.props.handleLogin(user);
    navigate(`/login/${user}`);
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { user, isLoggedIn } = this.state;

    return (
      <>
        {isLoggedIn && (
          <div>
            <p>
              Welcome back, {user}. To view your profile page, just click on the
              link below. Otherwise, choose an area from the navbar above, or
              click on HOME below to go to our homepage.
            </p>
            <p>
              <Link to={`/login/${user}`}>View my profile</Link>
            </p>
          </div>
        )}
        <div>
          <h1>Welcome to the login page</h1>
          <p>
            PLease note you will need to login to submit articles or comments,
            or should you wish to vote or comment.
          </p>
          <p>Please login by entering you username below.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" onChange={this.handleChange} />
            </label>
            <button>login</button>
          </form>
        </div>
        )
      </>
    );
  }
}