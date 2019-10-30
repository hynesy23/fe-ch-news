import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "./Login.module.css";

export default function LoggedInPage({ user, handleLogOut }) {
  const handleClick = event => {
    handleLogOut();
    navigate("/logout");
  };
  return (
    <>
      <h1>Hi {user}, welcome to your profile page</h1>
      <p>
        From here, you can add an article to an existing topic, or even create a
        topic of your own!
      </p>
      <p>
        If you'd prefer to keep browsing, just click the button below to take
        you home.
      </p>
      <div className={styles.button_cont}>
        <button className={styles.log_button}>
          <Link to="/">Continue</Link>
        </button>
        <button className={styles.log_button} onClick={handleClick}>
          Log Out
        </button>
      </div>
    </>
  );
}
