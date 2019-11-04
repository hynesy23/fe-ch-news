import React, { Component } from "react";
import * as api from "../../utils/api";
import styles from "./Comments.module.css";
import SortButton from "../SORT&FILTER BUTTONS/SortButton";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import LoadingPage from "../LoadingPage";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    sort_by: "",
    submitted: false,
    err: null
  };

  componentDidMount() {
    const { article_id, sort_by } = this.props;
    this.getCommentsByArticleId(article_id, sort_by);
  }

  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (prevState.sort_by !== this.state.sort_by) {
      this.getCommentsByArticleId(article_id, this.state.sort_by);
    }
  }
  getCommentsByArticleId = (id, sort) => {
    const { article_id } = this.props;
    api
      .fetchCommentsByArticleId(article_id, this.state.sort_by)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: "Oops, looks like something went wrong"
          }
        });
      });
  };
  sortFunction = sort_by => {
    this.setState({ sort_by });
  };

  addComment = comment => {
    const { article_id } = this.props;

    api
      .insertComment(comment, article_id)
      .then(comment => {
        this.setState(currentState => {
          if (comment.body.length) {
            return {
              comments: [comment, ...currentState.comments],
              submitted: true
            };
          }
        });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg }
        });
      });
  };

  deleteComment = comment_id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(comment => {
          return comment.comment_id !== comment_id;
        })
      };
    });
  };

  render() {
    const { user } = this.props;
    const { comments, isLoading, err } = this.state;
    if (isLoading) return <LoadingPage />;
    return (
      <section>
        {comments && (
          <ul className={styles.table}>
            {user && (
              <>
                <AddComment user={user} addComment={this.addComment} />
              </>
            )}
            <p className={styles.comments}>Comments</p>

            <SortButton comments={comments} sortFunction={this.sortFunction} />
            {err && (
              <p className="error_text">
                {err.status}: Oops, something went wrong
              </p>
            )}
            <CommentsList
              deleteComment={this.deleteComment}
              comments={comments}
              user={user}
              className={styles.tableItem}
            />
          </ul>
        )}
      </section>
    );
  }
}
