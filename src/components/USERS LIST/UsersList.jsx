import React, { Component } from "react";
import * as api from "../../utils/api";
import UserCard from "./UserCard";

export default class UsersList extends Component {
  state = {
    users: [],
    isLoading: true
  };
  componentDidMount() {
    api.fecthAllUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  }

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) return <p>Loading page...</p>;
    return (
      <>
        <h1>HELLO FROM USER LIST</h1>
        <UserCard users={users} />;
      </>
    );
  }
}
