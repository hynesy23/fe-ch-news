import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "./Login.module.css";
import AddAnArticle from "../SINGLE ARTICLE/AddAnArticle";

export default function LoggedInPage({ user, handleLogOut }) {
  const handleClick = event => {
    handleLogOut();
    navigate("/logout");
  };
  return (
    <>
      <h1>Hi {user.username}, welcome to your profile page</h1>
      <p>From here, you can add an article or continue browsing.</p>
      <br />
      <p>
        If you'd like to view your profile, just click{" "}
        <Link to={`/community/${user.username}`}>here</Link>, or, If you'd
        prefer to keep browsing, just click the button below to take you home.
      </p>
      <div className={styles.button_cont}>
        <button className={styles.login_button}>
          <Link to="/" className={styles.link}>
            Continue
          </Link>
        </button>
        <button className={styles.logout_button} onClick={handleClick}>
          Log Out
        </button>
      </div>
      <AddAnArticle user={user} />
    </>
  );
}
