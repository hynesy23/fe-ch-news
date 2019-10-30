import React from "react";
import Popup from "reactjs-popup";
import { Link } from "@reach/router";
import styles from "./Comments.module.css";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Voting from "../Voting";
import DeleteComment from "./DeleteComment";

export default function CommentsList({ comments, user, deleteComment }) {
  return comments.map(comment => {
    return (
      <div className={styles.tableItem} key={comment.comment_id}>
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
            <DeleteComment comment={comment} deleteComment={deleteComment} />
          )}
        </li>
      </div>
    );
  });
}
