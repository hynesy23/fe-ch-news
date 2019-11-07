import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
import LoadingPage from "../LoadingPage";
import styles from "./SingleUser.module.css";
import ErrMessage from "../ErrMessage";

export default class SingleUser extends Component {
  state = {
    user: null,
    articles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { username } = this.props;
    api
      .fetchSingleUser(username)
      .then(user => {
        this.setState({ user, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg }
        });
      })
      .then(() => {
        return api.fetchAllArticles(undefined, undefined, username);
      })
      .then(articles => {
        if (articles) {
          this.setState({ articles });
        }
      });
  }

  render() {
    const { user, isLoading, articles, err } = this.state;
    if (err) return <ErrMessage err={err} />;
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <h1>{user.username} Profile Page</h1>
        {user && (
          <ul>
            <li>
              <img
                src={user.avatar_url}
                alt="user pic"
                className={styles.prof_img}
              />
            </li>
          </ul>
        )}
        {user && (
          <div className={styles.user_bio}>
            <h2>User Bio:</h2>
            <p>
              Hi, I'm {user.username}. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores id dicta deserunt laudantium ipsam quo
              perspiciatis sapiente, reiciendis sit dolorum, aliquid quaerat
              explicabo ab, quam recusandae rerum? Nisi, neque numquam!
            </p>
          </div>
        )}
        {user && articles && (
          <div className={styles.art_list}>
            <h3>Articles by {user.username}:</h3>
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
          </div>
        )}
        {/* <AddAnArticle user={user} /> */}
      </>
    );
  }
}
