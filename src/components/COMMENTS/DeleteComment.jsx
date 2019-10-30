import React from "react";
import * as api from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteComment({ comment, deleteComment }) {
  const handleClick = event => {
    event.preventDefault();
    deleteComment(comment.comment_id);
    api.removeComment(comment.comment_id);
  };

  return (
    <form onClick={handleClick}>
      <FontAwesomeIcon icon="trash" size="2x" className="icon_button" />

      <p>Delete Comment</p>
    </form>
  );
}
