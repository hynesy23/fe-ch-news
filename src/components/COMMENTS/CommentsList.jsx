import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./Comments.module.css";
import Moment from "react-moment";
import Voting from "../Voting";
import DeleteComment from "./DeleteComment";
import ErrMessage from "../ErrMessage";

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

    // if (err)
    //   return (
    //     <p className="error_text">{err.status}: Oops, an error occurred</p>
    //   );

    const { comments, user, deleteComment } = this.props;
    return comments.map(comment => {
      return (
        <ul className={styles.table} key={comment.comment_id}>
          <li className={styles.tableItem}>
            <div>
              <Link to={`/community/${comment.author}`}>{comment.author}</Link>
            </div>
            <div>
              <Moment fromNow>{comment.created_at}</Moment>
            </div>
            <div>{comment.body}</div>
            <div>
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
            </div>
          </li>
        </ul>
      );
    });
  }
}
