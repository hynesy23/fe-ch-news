import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a comment:
          <TextareaAutosize
            rows={6}
            className="text-box"
            onChange={this.handleChange}
            value={this.state.body}
          />
        </label>
        <button>Add comment</button>
      </form>
    );
  }
}
