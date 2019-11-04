import React from "react";
import styles from "./Header.module.css";
import LoginIcon from "../LOGIN/LoginIcon";
import Navbar from "./NavBar";
import { Link } from "@reach/router";

export default function Header({ isLoggedIn, user }) {
  return (
    <>
      <header className="header">
        <div className="title">
          <Link to="/articles" className={styles.link}>
            <h1 className={styles.header}>CH News</h1>
          </Link>
          <p className={styles.trail_tag}>For your essential news...</p>
          <Navbar />
        </div>
        <LoginIcon isLoggedIn={isLoggedIn} user={user} className="login" />
      </header>
    </>
  );
}
