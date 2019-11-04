import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleList.module.css";

export default function ArticleCards({ articles }) {
  return (
    <ul className={styles.cardTable}>
      {articles &&
        articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
    </ul>
  );
}
