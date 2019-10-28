import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className={styles.h1}>CH News</h1>
      <p className={styles.p}>For your essential news...</p>
    </header>
  );
}
