import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link } from "@reach/router";
import styles from "./Comments.module.css";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Voting from "../Voting";
import DeleteComment from "./DeleteComment";
import ErrMessage from "../ErrMessage";

export default class CommentsList extends Component {
  state = {
    err: null
  };

  errorFunction = err => {
    console.log(err, "err from comments (first)");

    this.setState({
      err: { status: err.response.status, msg: err.response.data.msg }
    });
  };

  render() {
    const { err } = this.state;
    console.log(err, "err from comments");

    if (err) return <ErrMessage err={this.state.err} />;

    const { comments, user, deleteComment } = this.props;
    return comments.map(comment => {
      return (
        <ul className={styles.table} key={comment.comment_id}>
          <li>
            <Link to={`/community/${comment.author}`}>{comment.author}</Link>
          </li>
          <li>
            <Moment fromNow>{comment.created_at}</Moment>
          </li>
          <li>{comment.body}</li>
          <li>
            {user && (
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
          </li>
        </ul>
      );
    });
  }
}
