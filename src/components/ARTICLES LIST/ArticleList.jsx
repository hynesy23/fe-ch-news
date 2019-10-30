import React, { Component } from "react";
import * as api from "../../utils/api";
import ArticleCard from "./ArticleCard";
import FilterButton from "../SORT&FILTER BUTTONS/FilterButton";
import SortButton from "../SORT&FILTER BUTTONS/SortButton";
import LoadingPage from "../LoadingPage";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "",
    sort_by: ""
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.topic !== this.state.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      let { topic, sort_by } = this.state;
      if (topic === "all") topic = undefined;
      return (
        topic !== "Please choose a topic to filter by" &&
        api
          .fetchAllArticles(topic, sort_by)
          .then(articles => {
            this.setState({ articles });
          })
          .catch(err => {
            console.dir(err);
          })
      );
    }
  }

  getTopicToFilterBy = topic => {
    this.setState({ topic });
  };

  sortFunction = sort_by => {
    this.setState({ sort_by });
  };

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) {
      return <LoadingPage />;
    }
    return (
      <main className="art_list">
        <header>
          <h1>HI IM THE ARTICLE LIST</h1>
        </header>
        <FilterButton getTopicToFilterBy={this.getTopicToFilterBy} />
        <SortButton sortFunction={this.sortFunction} />
        <ArticleCard articles={articles} />
        <button>See More Articles</button>
      </main>
    );
  }
}
