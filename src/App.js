import React, { Component } from "react";
import "./App.css";
import Header from "./components/HEADER/Header";
import Login from "./components/HEADER/Login";
import ArticleList from "./components/ARTICLES LIST/ArticleList";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import UsersList from "./components/USERS LIST/UsersList";
import SingleUser from "./components/SINGLE USER/SingleUser";
import NavBar from "./components/NavBar";
import SingleArticle from "./components/SINGLE ARTICLE/SingleArticle";
import TopicsList from "./components/TopicsList";
import FilterButton from "./components/SORT&FILTER BUTTONS/FilterButton";

class App extends Component {
  state = {
    user: {
      username: "grumpy19",
      avatar_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYHMnQqGVPwxAMBtr4jONR5oGDId21XQ1-kuPFExLG0x38r2B7",
      name: "Cillian"
    }
  };

  render() {
    return (
      <div className="container">
        <Header className="header" />
        <NavBar />
        <Router>
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
