import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
import styles from "./FilterandSortButton.module.css";

export default class FilterButton extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.fetchAllTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <ul className={styles.nav_list}>
        {topics.map(topic => {
          return (
            <li key={topic.slug}>
              <Link
                to={`/articles/topic/${topic.slug}`}
                className={styles.link}
              >
                {topic.slug.toUpperCase()}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="/articles" className={styles.link}>
            ALL
          </Link>
        </li>
      </ul>
    );
  }
}
