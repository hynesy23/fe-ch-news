import React, { Component } from "react";
import "./App.css";
import * as api from "./utils/api";
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
    isLoading: true
  };

  handleLogin = username => {
    const { users, user } = this.state;
    // Users is array of OBJECTS. Unsure of how to check names of users
    console.log(this.state.users, "users from app");
    // Logic to check username entered against usernames in database. If no match, not allowed to log in.
    this.setState(
      { user: username, isLoggedIn: true, isLoading: false },
      () => {
        this.saveData();
      }
    );
  };

  handleLogOut = () => {
    this.setState({ user: null, isLoggedIn: false });
  };

  saveData = () => {
    const { user, isLoggedIn } = this.state;
    localStorage.setItem("user", JSON.stringify(user));
  };

  componentDidMount() {
    const newUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(newUser);
    api.fecthAllUsers().then(users => {
      this.setState({ users, user: parsedUser, isLoggedIn: true });
    });
  }

  render() {
    const { isLoggedIn, user } = this.state;
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
              isLoggedIn={isLoggedIn}
            />
          )}
          <LoggedOutPage path="/logout" />
          <ArticleList path="/" />
          <ArticleList path="/articles" className="art_list" />
          <TopicsList path="/topics" />
          <ArticleList path="/articles/topic/:slug" />
          <UsersList path="/community" />
          <SingleUser path="/community/:username" />
          <SingleArticle path="/articles/:article_id" user={user} />
        </Router>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
