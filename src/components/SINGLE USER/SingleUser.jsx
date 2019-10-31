import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
import LoadingPage from "../LoadingPage";

export default class SingleUser extends Component {
  state = {
    user: null,
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { username } = this.props;
    const user = api.fetchSingleUser(username);
    const articles = api.fetchAllArticles(undefined, undefined, username);

    return Promise.all([user, articles]).then(([user, articles]) => {
      this.setState({ user, articles, isLoading: false });
    });
  }

  render() {
    const { user, isLoading, articles } = this.state;
    if (isLoading) return <LoadingPage />;
    return (
      <div>
        <h1>HELLO I'M A SINGLE USER</h1>
        {user && (
          <ul>
            <li>
              <img src={user.avatar_url} alt="user pic" />
            </li>
            <li>{user.username}</li>
          </ul>
        )}
        {user && (
          <>
            <h3>User Bio:</h3>
            <p>Hi, I'm {user.username}</p>
          </>
        )}
        {user && articles && (
          <ul>
            {articles.map(article => {
              return (
                <li key={article.id}>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
