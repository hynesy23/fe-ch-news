import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getUsernamesFromUsers } from "./utils/helpers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("getUsernamesFromUsers", () => {
  it("Returns empty array is passed empty array", () => {
    const input = [];
    const actualResult = getUsernamesFromUsers(input);
    const expectedResult = [];
    expect(actualResult).toEqual(expectedResult);
  });
  it("If given array of one object with key of username, returns username value in new array", () => {
    const input = [
      {
        username: "tickle122",
        avatar_url:
          "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
        name: "Tom Tickle"
      }
    ];
    const actualResult = getUsernamesFromUsers(input);
    const expectedResult = ["tickle122"];
    expect(actualResult).toEqual(expectedResult);
  });
  it.only("If given array of multiple objects,returns username values in new array", () => {
    const input = [
      {
        username: "tickle122",
        avatar_url:
          "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
        name: "Tom Tickle"
      },
      {
        username: "grumpy19",
        avatar_url:
          "https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg",
        name: "Paul Grump"
      },
      {
        username: "happyamy2016",
        avatar_url:
          "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
        name: "Amy Happy"
      },
      {
        username: "cooljmessy",
        avatar_url: "https://i.imgur.com/WfX0Neu.jpg",
        name: "Peter Messy"
      }
    ];
    const actualResult = getUsernamesFromUsers(input);
    const expectedResult = [
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy"
    ];
    expect(actualResult).toEqual(expectedResult);
  });
});
