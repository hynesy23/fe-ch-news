import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true,
    newTopic: null
  };

  componentDidMount() {
    api.fetchAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>Topics loading...</p>;
    return (
      <ul>
        {topics &&
          topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}
