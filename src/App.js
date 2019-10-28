import React from "react";
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

function App() {
  return (
    <div className="container">
      <Header className="header" />
      <Login className="login" />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/articles" className="art_list" />
        <TopicsList path="/topics" />
        <ArticleList path="/articles/topic/:slug" />
        <UsersList path="/community" />
        <SingleUser path="/community/:username" />
        <SingleArticle path="/articles/:article_id" />
        {/* <FilterButton path="/articles/:slug" /> */}
      </Router>
      <Footer className="footer" />
    </div>
  );
}

export default App;
