import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as api from "../utils/api";

export default class Voting extends Component {
  state = {
    voteCount: 0
  };

  handleVote = numOfVotes => {
    console.log("votinggg");
    const { id } = this.props;
    this.setState(({ voteCount }) => {
      return { voteCount: voteCount + numOfVotes };
    });
    api.voteChange(id, numOfVotes);
  };

  render() {
    const { votes } = this.props;
    const { voteCount } = this.state;
    console.log(voteCount, "vote count");
    return (
      <>
        <p className="votesp">
          <FontAwesomeIcon icon="arrow-up" />
          {votes + voteCount}
        </p>
        <form>
          <FontAwesomeIcon
            icon="thumbs-up"
            className="leftthumb"
            onClick={() => this.handleVote(1)}
          />

          <FontAwesomeIcon
            icon="thumbs-down"
            className="righthumb"
            onClick={() => this.handleVote(-1)}
          />
        </form>
      </>
    );
  }
}
