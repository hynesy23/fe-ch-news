import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      const { slug } = this.props;
      this.props.getTopicToFilterBy(slug);
    }
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
