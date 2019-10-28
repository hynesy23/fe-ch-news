import React, { Component } from "react";
import * as api from "../../utils/api";

export default class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true
    //comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log("mount");
    api.fetchArticleById(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <p>Page loading...</p>;
    return (
      <>
        <h1>I'M A SINGLE ARTICLE</h1>
        <ul>
          <li>
            <h3>{article.title}</h3>
          </li>
          <li>{article.author}</li>
          <li>{article.created_at}</li>
          <li>filed to: {article.topic.toUpperCase()}</li>

          <li>{article.votes} votes</li>
          <li>{article.comment_count} comments</li>
          <li>{article.body}</li>
        </ul>
      </>
    );
  }
}
