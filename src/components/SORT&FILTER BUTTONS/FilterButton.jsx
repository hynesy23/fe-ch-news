import React, { Component } from "react";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";
import styles from "./FilterandSortButton.module.css";

export default class FilterButton extends Component {
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
    console.log(value, "value log");
    this.setState({ topic: value }, () => {
      if (value === "all") {
        navigate(`/articles`);
      } else {
        navigate(`/articles/topic/${value}`);
      }
    });
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
        <label>
          Filter list by
          <select className={styles.button} onClick={this.handleClick}>
            <option selected disabled>
              Please choose a topic to filter by
            </option>
            {topics &&
              topics.map(topic => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            <option value="all">Show All</option>
          </select>
        </label>
      </form>
    );
  }
}
