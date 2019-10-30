import React from "react";
import styles from "./Header.module.css";
import LoginIcon from "../LOGIN/LoginIcon";

export default function Header({ isLoggedIn, user }) {
  console.log(isLoggedIn, "login from Header");

  return (
    <header className="header">
      <h1 className={styles.h1}>CH News</h1>

      <p className={styles.p}>For your essential news...</p>
      <LoginIcon isLoggedIn={isLoggedIn} user={user} />
    </header>
  );
}
