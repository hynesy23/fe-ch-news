import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import styles from "./Login.module.css";
import * as api from "../../utils/api";
import ErrMessage from "../ErrMessage";

export default class LoginPage extends Component {
  state = {
    existing_user: "",
    new_username: "",
    URL: "",
    fullname: "",
    isLoggedIn: false,
    failedLogIn: false,
    newUserCreated: false,
    err: null
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  handleUserLogin = event => {
    const { existing_user } = this.state;
    event.preventDefault();
    const bool = this.props.handleLogin(existing_user);
    if (bool) {
      navigate(`/login/${existing_user}`);
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ failedLogIn: true, existing_user: "" });
    }
  };

  handleNewUser = event => {
    event.preventDefault();
    const { new_username, URL, fullname } = this.state;
    const newUserObj = {
      username: new_username,
      avatar_url: URL
        ? URL
        : "https://icon-library.net/images/user-icon-image/user-icon-image-20.jpg",
      name: fullname
    };
    api
      .insertNewUser(newUserObj)
      .then(() => {
        navigate(`/login/${new_username}`);
        this.setState({ isLoggedIn: true });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: err.response.data.msg
          }
        });
      });
  };

  render() {
    const {
      existing_user,
      isLoggedIn,
      failedLogIn,
      new_username,
      URL,
      fullname,
      err
    } = this.state;

    if (err) return <ErrMessage err={err} />;

    return (
      <>
        {isLoggedIn && (
          <div>
            <p>
              Welcome back, {existing_user}. To view your profile page, just
              click on the link below. Otherwise, choose an area from the navbar
              above, or click on HOME below to go to our homepage.
            </p>
            <p>
              <Link to={`/login/${existing_user}`}>View my profile</Link>
            </p>
          </div>
        )}
        <div>
          <h1>Welcome to the login page</h1>
          <p>
            Please note you will need to login to submit articles, or should you
            wish to vote or comment.
          </p>
          <p>Please login by entering you username below.</p>
          <form onSubmit={this.handleUserLogin} className={styles.login_form}>
            <label>
              Username:
              <input
                type="text"
                name="existing_user"
                onChange={this.handleChange}
                value={existing_user}
                required
              />
            </label>
            <button>login</button>
          </form>
          {failedLogIn && (
            <p className="invalid">This is an invalid username</p>
          )}
          <p>
            <b>
              Or, if you are not yet a user, please create an account below:
            </b>
          </p>
          <form onSubmit={this.handleNewUser} className={styles.newuser_form}>
            <label>
              Username:
              <input
                type="text"
                name="new_username"
                onChange={this.handleChange}
                value={new_username}
                required
              />
            </label>
            <label>
              Avatar URL:
              <input
                type="text"
                onChange={this.handleChange}
                value={URL}
                placeholder="optional"
                name="URL"
              />
            </label>
            <label>
              Fullname:
              <input
                type="text"
                onChange={this.handleChange}
                value={fullname}
                name="fullname"
                required
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}
