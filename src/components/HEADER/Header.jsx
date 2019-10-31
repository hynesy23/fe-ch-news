import React from "react";
import styles from "./Header.module.css";
import LoginIcon from "../LOGIN/LoginIcon";
import Navbar from "./NavBar";

export default function Header({ isLoggedIn, user }) {
  console.log(isLoggedIn, "login from Header");

  return (
    <>
      <header className="header">
        <div className="title">
          <h1 className={styles.header}>CH News</h1>
          <p className={styles.trail_tag}>For your essential news...</p>
          <Navbar className="title" />
        </div>
        <LoginIcon isLoggedIn={isLoggedIn} user={user} className="login" />
      </header>
    </>
  );
}
