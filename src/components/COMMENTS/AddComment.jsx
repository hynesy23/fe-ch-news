import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";
import styles from "./Comments.module.css";

export default class AddComment extends Component {
  state = {
    body: ""
  };

  handleChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    const { user } = this.props;
    const { body } = this.state;
    const comment = {
      username: user.username,
      body
    };
    event.preventDefault();
    this.props.addComment(comment);
    this.setState({ body: "" });
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextareaAutosize
          rows={6}
          className="text-box"
          onChange={this.handleChange}
          value={body}
          placeholder="Please enter your comment"
          required
        />
        <button className={styles.addCommentButton}>Add comment</button>
      </form>
    );
  }
}
