import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as api from "../utils/api";

export default class Voting extends Component {
  state = {
    voteCount: 0,
    isClicked: false,
    err: null
  };

  handleVote = numOfVotes => {
    const { id, marker } = this.props;
    console.log(id, marker);
    const { isClicked } = this.state;
    if (!isClicked) {
      this.setState(({ voteCount }) => {
        return { voteCount: voteCount + numOfVotes, isClicked: true };
      });
      api
        .voteChange(id, numOfVotes, marker)
        .then(() => {})
        .catch(err => {
          this.setState({
            voteCount: 0,
            err: { status: err.response.status, msg: err.response.data.msg }
          });
        });
    }
  };

  render() {
    const { votes } = this.props;
    const { voteCount, err } = this.state;
    return (
      <>
        <p className="votesp">
          <FontAwesomeIcon icon="arrow-up" />
          {votes + voteCount}
        </p>
        <form className="thumbs-div">
          <FontAwesomeIcon
            icon="thumbs-up"
            className="leftthumb"
            onClick={() => this.handleVote(1)}
            size="lg"
          />

          <FontAwesomeIcon
            icon="thumbs-down"
            className="rightthumb"
            onClick={() => this.handleVote(-1)}
            size="lg"
          />
        </form>
        {err && (
          <p className="error_text">{err.status}: Oops, an error occurred!</p>
        )}
      </>
    );
  }
}
