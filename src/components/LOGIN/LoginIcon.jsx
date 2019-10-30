import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../HEADER/Header.module.css";
import { Link } from "@reach/router";

export default class LoginIcon extends Component {
  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <>
        {isLoggedIn ? (
          <Link to={`login/${user}`}>
            <FontAwesomeIcon
              icon="user-circle"
              size="4x"
              className={styles.login}
            />
          </Link>
        ) : (
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
        )}
      </>
    );
  }
}
