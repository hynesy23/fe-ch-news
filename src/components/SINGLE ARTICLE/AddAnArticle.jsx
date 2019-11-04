import React, { Component } from "react";
import * as api from "../../utils/api";
import styles from "./SingleArticle.module.css";

export default class AddAnArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    username: ""
  };

  handleChange = event => {
    const value = this.target.value;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const {
      user: { username }
    } = this.props;
    const article = {
      title,
      body,
      topic,
      username
    };
    api.insertArticle(article).then(article => {});
  };

  render() {
    return (
      <div className={styles.new_art}>
        <form onSubmit={this.handleSubmit} className={styles.article_form}>
          <label>
            Select topic
            <input type="radio" name="topic" value="coding"></input>
            <input type="radio" name="topic" value="football"></input>
            <input type="radio" name="topic" value="cooking"></input>
          </label>
          <input type="text" placeholder="title" required />
          <label htmlFor="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit article</button>
        </form>
      </div>
    );
  }
}
