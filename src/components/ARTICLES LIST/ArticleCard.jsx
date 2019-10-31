import React from "react";
import styles from "./ArticleList.module.css";
import { Link } from "@reach/router";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <li className={styles.cardOther}>
                <Moment fromNow>{article.created_at}</Moment>
              </li>
              <li className={styles.cardOther}>
                <FontAwesomeIcon
                  icon="comments"
                  className="comment-icon"
                  size="lg"
                />
                {article.comment_count}
              </li>
              <li className={styles.cardOther}>
                {" "}
                <FontAwesomeIcon icon="arrow-up" className="up-arrow-icon" />
                {article.votes}
              </li>
              <li className={styles.cardBody}>{article.body}</li>
            </div>
          );
        })}
    </ul>
  );
}
