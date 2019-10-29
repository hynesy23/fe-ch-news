import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

export default class Login extends Component {
  render() {
    return (
      <section className="login">
        <FontAwesomeIcon icon="user" size="4x" className={styles.login} />
      </section>
    );
  }
}
