import React, { Component } from "react";
import * as api from "../utils/api";
import styles from "./Comments.module.css";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchCommentsByArticleId(article_id).then(comments => {
      console.log("do i get here");
      this.setState({ comments, isLoading: false });
    });
  }
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Comments loading...</p>;
    return (
      <div>
        <h1>LOOK AT ME I'M LOADS OF COMMENTS</h1>
        {comments && (
          <ul className={styles.table}>
            {comments.map(comment => {
              return (
                <div className={styles.tableItem}>
                  <li>{comment.author}</li>
                  <li>{comment.created_at}</li>
                  <li>{comment.votes}</li>
                  <li>{comment.body}</li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
