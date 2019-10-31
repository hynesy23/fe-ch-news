import React, { Component } from "react";
import "./App.css";
import * as api from "./utils/api";
import * as helper from "./utils/helpers";
import Header from "./components/HEADER/Header";
import ArticleList from "./components/ARTICLES LIST/ArticleList";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import UsersList from "./components/USERS LIST/UsersList";
import SingleUser from "./components/SINGLE USER/SingleUser";
import NavBar from "./components/NavBar";
import SingleArticle from "./components/SINGLE ARTICLE/SingleArticle";
import TopicsList from "./components/TopicsList";
import LoginPage from "./components/LOGIN/LoginPage";
import LoggedInPage from "./components/LOGIN/LoggedInPage";
import LoggedOutPage from "./components/LOGIN/LoggedOutPage";

class App extends Component {
  state = {
    users: [],
    user: null,
    isLoggedIn: false,
    isLoading: true,
    failedLogIn: false
  };

  handleLogin = username => {
    const { users } = this.state;

    const usernames = helper.getUsernamesFromUsers(users);
    console.log(usernames, "usernaes");
    if (usernames.includes(username)) {
      this.setState(
        { user: username, isLoggedIn: true, isLoading: false },
        () => {
          this.saveData();
        }
      );
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
      api.fecthAllUsers().then(users => {
        this.setState({ users, user: parsedUser, isLoggedIn: true });
      });
    } else {
      api.fecthAllUsers().then(users => {
        this.setState({ users });
      });
    }
  }

  render() {
    const { isLoggedIn, user, failedLogIn, users } = this.state;
    return (
      <div className="container">
        <Header className="header" isLoggedIn={isLoggedIn} user={user} />
        <NavBar />
        <Router>
          {isLoggedIn ? (
            <LoggedInPage
              path="/login/:username"
              user={user}
              handleLogOut={this.handleLogOut}
            />
          ) : (
            <LoginPage
              path="/login"
              handleLogin={this.handleLogin}
              failedLogIn={failedLogIn}
            />
          )}
          <LoggedOutPage path="/logout" />
          <ArticleList path="/" />
          <ArticleList path="/articles" className="art_list" />
          <TopicsList path="/topics" />
          <ArticleList path="/articles/topic/:slug" />
          <UsersList path="/community" users={users} />
          <SingleUser path="/community/:username" />
          <SingleArticle path="/articles/:article_id" user={user} />
        </Router>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
