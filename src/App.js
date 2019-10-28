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

function App() {
  return (
    <div className="container">
      <Header className="header" />
      <Login className="login" />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/articles" className="art_list" />
        <UsersList path="/community" />
        <SingleUser path="/community/:username" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
      <Footer className="footer" />
    </div>
  );
}

export default App;
