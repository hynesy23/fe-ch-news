import React, { Component } from "react";
import * as api from "../../utils/api";
import Comments from "../COMMENTS/Comments";
import { Link } from "@reach/router";
import styles from "./SingleArticle.module.css";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Voting from "../Voting";
import LoadingPage from "../LoadingPage";

export default class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    votes: 0
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log("mount");
    api.fetchArticleById(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  handleVotes = votes => {
    console.log(votes, "votes log");
    this.setState({ votes });
  };

  render() {
    const { article, isLoading, votes } = this.state;
    const { user } = this.props;
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <ul className={styles.article_list}>
          <li>
            <h1 className={styles.article_title}>{article.title}</h1>
          </li>
          <li className={styles.article_author}>
            <Link to={`/community/${article.author}`}>{article.author}</Link>
          </li>
          <li className={styles.list_item}>
            <Moment fromNow>{article.created_at}</Moment>
          </li>
          <li className={styles.list_item}>
            filed to: {article.topic.toUpperCase()}
          </li>

          {/* <li className={styles.list_item}>
            <FontAwesomeIcon icon="arrow-up" className="up-arrow-icon" />
            {article.votes + votes}
          </li> */}
          <li className={styles.list_item}>
            <FontAwesomeIcon icon="comments" className="comment-icon" />
            {article.comment_count}
          </li>
          <li className={styles.art_body}>{article.body}</li>
        </ul>
        <Voting
          id={article.article_id}
          marker="articles"
          votes={article.votes}
          handleArticleVotes={this.handleVotes}
        />
        <Comments article_id={article.article_id} user={user} />
      </>
    );
  }
}
