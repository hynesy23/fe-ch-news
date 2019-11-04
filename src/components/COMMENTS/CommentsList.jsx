import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./Comments.module.css";
import Moment from "react-moment";
import Voting from "../Voting";
import DeleteComment from "./DeleteComment";

export default class CommentsList extends Component {
  state = {
    err: null
  };

  errorFunction = err => {
    this.setState({
      err: { status: err.response.status, msg: err.response.data.msg }
    });
  };

  render() {
    const { err } = this.state;

    const { comments, user, deleteComment } = this.props;
    return comments.map(comment => {
      return (
        <ul className={styles.tableItem} key={comment.comment_id}>
          <li>
            <Link to={`/community/${comment.author}`}>{comment.author}</Link>
          </li>

          <li>
            <Moment fromNow>{comment.created_at}</Moment>
          </li>

          <li className={styles.tableItemBody}>{comment.body}</li>
          <li>
            {user && user.username !== comment.author && (
              <Voting
                id={comment.comment_id}
                votes={comment.votes}
                marker="comments"
              />
            )}
            {user && user.username === comment.author && (
              <DeleteComment
                comment={comment}
                deleteComment={deleteComment}
                errorFunction={this.errorFunction}
              />
            )}
            {err && user && user.username === comment.author && (
              <p className="error_text">
                {err.status}: Oops, an error occurred
              </p>
            )}
          </li>
        </ul>
      );
    });
  }
}
