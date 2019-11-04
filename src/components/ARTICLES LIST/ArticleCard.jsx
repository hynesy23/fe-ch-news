import React from "react";
import { Link } from "@reach/router";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ArticleList.module.css";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`} className={styles.link}>
      <div className={styles.card} key={article.title}>
        <li className={styles.cardTitle}>{article.title}</li>
        <li className={styles.cardOther}>{article.author}</li>
        <li className={styles.cardOther}>
          <Moment fromNow>{article.created_at}</Moment>
        </li>
        <li className={styles.cardOther}>
          <FontAwesomeIcon icon="comments" className="comment-icon" size="lg" />
          {article.comment_count}
        </li>
        <li className={styles.cardOther}>
          {" "}
          <FontAwesomeIcon icon="arrow-up" className="up-arrow-icon" />
          {article.votes}
        </li>
        <li className={styles.cardBody}>{article.body}</li>
      </div>
    </Link>
  );
}
