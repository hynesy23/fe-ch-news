import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../HEADER/Header.module.css";
import { Link } from "@reach/router";

export default class LoginIcon extends Component {
  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <section className={styles.login}>
            <Link to={`login/${user.username}`}>
              <img
                src={user.avatar_url}
                alt="User profile pic"
                className={styles.login}
              />
              <p>{user.username}</p>
            </Link>
          </section>
        ) : (
          <section className={styles.login}>
            <Link to="/login">
              <FontAwesomeIcon
                icon="user"
                size="4x"
                onClick={this.handleClick}
              />
              <p>
                <b>
                  <em>log in</em>
                </b>
              </p>
            </Link>
          </section>
        )}
      </div>
    );
  }
}
