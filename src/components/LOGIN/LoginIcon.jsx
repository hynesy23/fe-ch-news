import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../HEADER/Header.module.css";
import { Link } from "@reach/router";

export default class LoginIcon extends Component {
  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <div className={styles.login}>
        {isLoggedIn ? (
          // <Link to={`login/${user}`}>
          //   <FontAwesomeIcon
          //     icon="user-circle"
          //     size="4x"
          //     className={styles.login}
          //   />
          // </Link>
          <Link to={`login/${user.username}`}>
            <img
              src={user.avatar_url}
              alt="User profile pic"
              className={styles.login}
            />
            <p className={styles.login_p}>{user.username}</p>
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
      </div>
    );
  }
}
