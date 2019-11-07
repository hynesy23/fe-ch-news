import React, { Component } from "react";
import * as api from "../../utils/api";
import Comments from "../COMMENTS/Comments";
import { Link } from "@reach/router";
import styles from "./SingleArticle.module.css";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Voting from "../Voting";
import ErrMessage from "../ErrMessage";
import LoadingPage from "../LoadingPage";
import coding from "../../IMAGES/coding.jpeg";
import football from "../../IMAGES/football.jpeg";
import cooking from "../../IMAGES/cooking.jpeg";

export default class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    votes: 0,
    err: null,
    images: {
      coding,
      football,
      cooking
    }
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .fetchArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg }
        });
      });
  }

  handleVotes = votes => {
    this.setState({ votes });
  };

  render() {
    const { article, isLoading, err, images } = this.state;
    const { user } = this.props;
    if (err) return <ErrMessage err={err} />;
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <ul className={styles.article_list}>
          <li>
            <h1>{article.title}</h1>
          </li>
          <li className={styles.article_author}>
            <Link to={`/community/${article.author}`}>{article.author},</Link>{" "}
            <em>
              <Moment fromNow>{article.created_at}</Moment>
            </em>
          </li>

          <li className={styles.list_item}>
            filed to: {article.topic.toUpperCase()}
          </li>
          <li className={styles.list_item}>
            <FontAwesomeIcon
              icon="comments"
              className="comment-icon"
              size="lg"
            />
            {article.comment_count}
          </li>
          <li>
            <img src={images[article.topic]} alt="coding" />
          </li>
          <li className={styles.art_body}>{article.body}</li>
        </ul>
        {user && user.username !== article.author && (
          <Voting
            id={article.article_id}
            marker="articles"
            votes={article.votes}
            handleArticleVotes={this.handleVotes}
            className={styles.voting}
          />
        )}
        <Comments
          article_id={article.article_id}
          comment_count={article.comment_count}
          user={user}
        />
      </>
    );
  }
}
