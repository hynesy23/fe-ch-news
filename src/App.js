import React, { Component } from "react";
import "./App.css";
import Header from "./components/HEADER/Header";
import LoginIcon from "./components/LOGIN/LoginIcon";
import ArticleList from "./components/ARTICLES LIST/ArticleList";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import UsersList from "./components/USERS LIST/UsersList";
import SingleUser from "./components/SINGLE USER/SingleUser";
import NavBar from "./components/NavBar";
import SingleArticle from "./components/SINGLE ARTICLE/SingleArticle";
import TopicsList from "./components/TopicsList";
import LoginPage from "./components/LOGIN/LoginPage";
class App extends Component {
  state = {
    user: null
  };

  handleLogin = username => {
    console.log(username, "usernamwe from app");
    this.setState({ user: { username } });
  };

  render() {
    return (
      <div className="container">
        <Header className="header" />
        <NavBar />
        <Router>
          <LoginPage path="/login" handleLogin={this.handleLogin} />
          <ArticleList path="/" />
          <ArticleList path="/articles" className="art_list" />
          <TopicsList path="/topics" />
          <ArticleList path="/articles/topic/:slug" />
          <UsersList path="/community" />
          <SingleUser path="/community/:username" />
          <SingleArticle path="/articles/:article_id" user={this.state.user} />
        </Router>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
