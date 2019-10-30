import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../HEADER/Header.module.css";
import { Link } from "@reach/router";

export default class LoginIcon extends Component {
  handleClick = event => {
    console.log("hello");
  };
  render() {
    return (
      <section className="login">
        <Link to="/login">
          <FontAwesomeIcon
            icon="user"
            size="4x"
            className={styles.login}
            onClick={this.handleClick}
          />
        </Link>
      </section>
    );
  }
}
