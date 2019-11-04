import React, { Component } from "react";
import "./App.css";
import * as api from "./utils/api";
import * as helper from "./utils/helpers";
import Header from "./components/HEADER/Header";
import ArticleList from "./components/ARTICLES LIST/ArticleList";
import { Router } from "@reach/router";
import UsersList from "./components/USERS LIST/UsersList";
import SingleUser from "./components/SINGLE USER/SingleUser";
import SingleArticle from "./components/SINGLE ARTICLE/SingleArticle";
import LoginPage from "./components/LOGIN/LoginPage";
import LoggedInPage from "./components/LOGIN/LoggedInPage";
import LoggedOutPage from "./components/LOGIN/LoggedOutPage";
import ErrMessage from "./components/ErrMessage";

class App extends Component {
  state = {
    users: [],
    user: null,
    isLoggedIn: false,
    isLoading: true,
    failedLogIn: false,
    err: null
  };

  handleLogin = username => {
    const { users } = this.state;

    const user = helper.getUsernamesFromUsers(users, username);
    if (user) {
      this.setState({ user, isLoggedIn: true, isLoading: false }, () => {
        this.saveData();
      });
      return true;
    } else {
      this.setState({ failedLogIn: true });
    }
    return false;
  };

  handleLogOut = () => {
    this.setState({ user: null, isLoggedIn: false });
    localStorage.clear();
  };

  saveData = () => {
    const { user } = this.state;
    localStorage.setItem("user", JSON.stringify(user));
  };

  componentDidMount() {
    const loggedInUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(loggedInUser);
    if (loggedInUser) {
      api
        .fecthAllUsers()
        .then(users => {
          this.setState({ users, user: parsedUser, isLoggedIn: true });
        })
        .catch(err => {
          this.setState({
            err: {
              status: err.response.status,
              msg: "Oops, looks like something went wrong"
            }
          });
        });
    } else {
      api.fecthAllUsers().then(users => {
        this.setState({ users });
      });
    }
  }

  render() {
    const { isLoggedIn, user, failedLogIn, users, err } = this.state;
    if (err) return <ErrMessage err={err} />;
    return (
      <div className="container">
        <Header className="header" isLoggedIn={isLoggedIn} user={user} />

        <Router>
          <ErrMessage default err={{ status: "404", msg: "Route not found" }} />
          {isLoggedIn ? (
            <LoggedInPage
              path="/login/:username"
              user={user}
              handleLogOut={this.handleLogOut}
              className="login"
            />
          ) : (
            <LoginPage
              path="/login"
              handleLogin={this.handleLogin}
              failedLogIn={failedLogIn}
              className="login"
            />
          )}
          {/* Tried removing ternary but when url changed to /logout after pressng logout button the 'LoggedInPage' tried to render instead of the LoggedOutPage */}

          <LoggedOutPage path="/logout" />
          <ArticleList path="/" className="art_list" />
          <ArticleList path="/articles" className="art_list" />
          <ArticleList path="/articles/topic/:slug" className="art_list" />
          <UsersList path="/community" users={users} />
          <SingleUser path="/community/:username" />
          <SingleArticle path="/articles/:article_id" user={user} />
        </Router>
      </div>
    );
  }
}

export default App;
