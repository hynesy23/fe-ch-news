import React, { Component } from "react";
import * as api from "../../utils/api";

export default class SingleUser extends Component {
  state = {
    user: null,
    isLoading: true
  };

  componentDidMount() {
    console.log("have i mounted?");
    api.fetchSingleUser(this.props.username).then(user => {
      //   console.log(user, "user log");
      this.setState({ user, isLoading: false });
    });
  }

  //   componentDidUpdate(prevProps) {
  //     console.log(this.props.username, "update log");
  //     if (prevProps.username !== this.props.username) {
  //       api.fetchSingleUser(this.props.username).then(user => {
  //         console.log(user, "user log");
  //       });
  //     }
  //   }
  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <p>Page loading...</p>;
    return (
      <div>
        <h1>HELLO I'M A SINGLE USER</h1>
        {user && (
          <ul>
            <li>
              <img src={user.avatar_url} alt="user pic" />
            </li>
            <li>{user.username}</li>
          </ul>
        )}
        {user && (
          <>
            <h3>User Bio:</h3>
            <p>Hi, I'm {user.name}</p>
          </>
        )}
      </div>
    );
  }
}
