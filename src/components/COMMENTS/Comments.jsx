import React, { Component } from "react";
import * as api from "../../utils/api";
import styles from "./Comments.module.css";
import SortButton from "../SORT&FILTER BUTTONS/SortButton";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import AddComment from "./AddComment";
import { Link } from "@reach/router";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    sort_by: "",
    submitted: false
  };

  componentDidMount() {
    const { article_id, sort_by } = this.props;
    console.log(sort_by, "sort by from mount");
    api
      .fetchCommentsByArticleId(article_id, sort_by)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        console.dir(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (prevState.sort_by !== this.state.sort_by) {
      api
        .fetchCommentsByArticleId(article_id, this.state.sort_by)
        .then(comments => {
          this.setState({ comments, isLoading: false });
        })
        .catch(err => {
          console.dir(err);
        });
    }
  }

  sortFunction = sort_by => {
    this.setState({ sort_by });
  };

  addComment = comment => {
    const { article_id } = this.props;

    api.insertComment(comment, article_id).then(comment => {
      this.setState(currentState => {
        if (comment.body.length) {
          return {
            comments: [comment, ...currentState.comments],
            submitted: true
          };
        }
      });
    });
  };

  render() {
    const { user } = this.props;
    const { comments, isLoading, submitted } = this.state;
    if (isLoading) return <p>Comments loading...</p>;
    return (
      <div>
        <h1>LOOK AT ME I'M LOADS OF COMMENTS</h1>
        {comments && (
          <ul className={styles.table}>
            {user && !submitted && (
              <Popup
                trigger={
                  <button>
                    <FontAwesomeIcon
                      icon="comment-alt"
                      size="2x"
                      onClick={this.addComment}
                      className="comment-alt-icon"
                    />
                  </button>
                }
                position="right center"
              >
                <AddComment user={user} addComment={this.addComment} />
              </Popup>
            )}
            <SortButton comments={comments} sortFunction={this.sortFunction} />
            {comments.map(comment => {
              return (
                <div className={styles.tableItem} key={comment.comment_id}>
                  <li>
                    <Link to={`/community/${comment.author}`}>
                      {comment.author}
                    </Link>
                  </li>
                  <li>
                    <Moment fromNow>{comment.created_at}</Moment>
                  </li>
                  <li>
                    <FontAwesomeIcon icon="arrow-up" />
                    {comment.votes}
                  </li>
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
