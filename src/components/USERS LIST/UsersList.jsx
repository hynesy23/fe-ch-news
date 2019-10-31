import React, { Component } from "react";
import UserCard from "./UserCard";
import LoadingPage from "../LoadingPage";

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
        <h1>HELLO FROM USER LIST</h1>
        <UserCard users={users} />
      </>
    );
  }
}
