import React, { Component } from "react";
import UserCard from "./UserCard";
import LoadingPage from "../LoadingPage";
import styles from "./UserList.module.css";

export default class UsersList extends Component {
  state = {
    users: [],
    isLoading: true
  };

  render() {
    const { users, isLoading } = this.props;
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <h1>Community List</h1>
        <p className={styles.text}>
          Below is a list of our current users. You can select each one to see a
          bit more about them, as well as any articles they have authored.
        </p>
        <UserCard users={users} />
      </>
    );
  }
}
