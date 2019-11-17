import React, { Component } from "react";
import * as api from "../../utils/api";
import styles from "./SingleArticle.module.css";
import TextareaAutosize from "react-autosize-textarea";
import ErrMessage from "../ErrMessage";

export default class AddAnArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    submitted: false,
    err: null
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const { user } = this.props;
    const article = {
      title,
      body,
      topic,
      username: user.username
    };
    api
      .insertArticle(article)
      .then(article => {
        this.setState({ submitted: true });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: "Oops, looks like somethings went wrong"
          }
        });
      });
  };

  render() {
    const { title, body, submitted, err } = this.state;
    if (err) return <ErrMessage err={err} />;
    return (
      <div className={styles.form_cont}>
        {!submitted && (
          <p className={styles.p_art}>
            <b>You can submit your article by filling out the fields below:</b>
          </p>
        )}
        {!submitted && (
          <form onSubmit={this.handleSubmit} className={styles.art_form}>
            <label>
              Select a topic:
              <select
                name="topic"
                onChange={this.handleChange}
                className={styles.dropdown}
                required
              >
                <option value=""></option>
                <option value="coding">Coding</option>
                <option value="cooking">Cooking</option>
                <option value="football">Football</option>
              </select>
            </label>
            <TextareaAutosize
              rows={2}
              onChange={this.handleChange}
              className={styles.title_box}
              name="title"
              value={title}
              required
              placeholder="Please enter the title of your article"
            />
            <TextareaAutosize
              rows={6}
              className={styles.art_box}
              onChange={this.handleChange}
              name="body"
              value={body}
              required
              placeholder="Please create your article here"
            />
            <button type="submit" className={styles.post_button}>
              Post Article
            </button>
          </form>
        )}
        {submitted && (
          <p className={styles.submitted}>
            Thank you. Your article has been posted
          </p>
        )}
      </div>
    );
  }
}
