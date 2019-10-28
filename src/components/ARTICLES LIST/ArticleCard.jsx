import React from "react";
import styles from "./ArticleCard.module.css";
import { Link } from "@reach/router";

export default function ArticleCard({ articles }) {
  return (
    <ul className={styles.cardTable}>
      {articles &&
        articles.slice(0, 9).map(article => {
          return (
            <div className={styles.card} key={article.title}>
              <li className={styles.cardTitle}>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
              <li className={styles.cardOther}>
                <Link to={`/community/${article.author}`}>
                  {article.author}
                </Link>
              </li>
              <li className={styles.cardOther}>{article.created_at}</li>
              <li className={styles.cardOther}>
                {article.comment_count} comments
              </li>
              <li className={styles.cardOther}> {article.votes} votes</li>
              <li className={styles.cardBody}>{article.body}</li>
            </div>
          );
        })}
    </ul>
  );
}
