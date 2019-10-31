import React from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.css";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.navitem}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.navitem}>
          <Link to="/community">community</Link>
        </li>
      </ul>
    </nav>
  );
}
