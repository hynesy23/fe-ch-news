import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";

export default class SingleUser extends Component {
  state = {
    user: null,
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { username } = this.props;
    const author = username;
    const user = api.fetchSingleUser(username);
    const articles = api.fetchAllArticles(username);

    return Promise.all([user, articles]).then(([user, articles]) => {
      this.setState({ user, articles, isLoading: false });
    });
  }

  render() {
    const { user, isLoading, articles } = this.state;
    if (isLoading) return <p>Page loading...</p>;
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
            <p>Hi, I'm {user.name}</p>
          </>
        )}
        {user && articles && (
          <ul>
            {articles.map(article => {
              return (
                <p>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </p>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
