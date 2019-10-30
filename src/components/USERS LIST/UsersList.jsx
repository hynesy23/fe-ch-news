import React, { Component } from "react";
import * as api from "../../utils/api";
import UserCard from "./UserCard";
import LoadingPage from "../LoadingPage";

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
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <h1>HELLO FROM USER LIST</h1>
        <UserCard users={users} />;
      </>
    );
  }
}
