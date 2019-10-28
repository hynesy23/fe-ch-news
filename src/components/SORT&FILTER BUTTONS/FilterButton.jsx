import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
import styles from "./FilterandSortButton.module.css";

export default class FilterandSortButton extends Component {
  state = {
    topics: [],
    topic: "",
    sort_by: ""
  };

  componentDidMount() {
    api.fetchAllTopics().then(topics => {
      this.setState({ topics });
    });
  }

  handleClick = event => {
    const value = event.target.value;
    this.setState({ topic: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.state.topic) {
      const { topic } = this.state;
      this.props.getTopicToFilterBy(topic);
    }
  }

  render() {
    const { topics } = this.state;
    return (
      <form>
        <label htmlFor="">
          Filter list by
          <select className={styles.button} onClick={this.handleClick}>
            <option selected disabled>
              Please choose a topic to filter by
            </option>
            {topics &&
              topics.map(topic => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
                  </option>
                );
              })}
          </select>
        </label>
      </form>
    );
  }
}
