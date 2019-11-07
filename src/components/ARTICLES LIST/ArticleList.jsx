import React, { Component } from "react";
import * as api from "../../utils/api";
import ArticleCards from "./ArticleCards";
import FilterButton from "../SORT&FILTER BUTTONS/FilterButton";
import SortButton from "../SORT&FILTER BUTTONS/SortButton";
import LoadingPage from "../LoadingPage";
import ErrMessage from "../ErrMessage";
import styles from "./ArticleList.module.css";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "",
    sort_by: "",
    err: null
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.slug !== this.props.slug ||
      prevState.sort_by !== this.state.sort_by
    ) {
      const { slug, sort_by } = this.state;
      this.getArticles(slug, sort_by);
    }
  }

  getArticles = (filter, sort) => {
    const { sort_by } = this.state;
    const { slug } = this.props;
    api
      .fetchAllArticles(slug, sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: err.response.status,
            msg: "Oops, looks like something went wrong"
          }
        });
      });
  };

  sortFunction = sort_by => {
    this.setState({ sort_by });
  };

  render() {
    const { isLoading, articles, err } = this.state;
    if (err) return <ErrMessage err={err} />;
    if (isLoading) {
      return <LoadingPage />;
    }
    return (
      <main className="art_list">
        <ul className={styles.button_list}>
          <li>
            <FilterButton
              getTopicToFilterBy={this.getTopicToFilterBy}
              slug={this.props.slug}
            />
          </li>
          <li>
            <SortButton sortFunction={this.sortFunction} />
          </li>
        </ul>
        <ArticleCards articles={articles} />
      </main>
    );
  }
}
