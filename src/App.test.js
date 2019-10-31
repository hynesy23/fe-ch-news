import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getUsernamesFromUsers } from "./utils/helpers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("findCorrectUser", () => {
  it("Returns empty array is passed empty array", () => {
    const input = [];
    const actualResult = getUsernamesFromUsers(input);
    const expectedResult = [];
    expect(actualResult).toEqual(expectedResult);
  });
  it("If given array of one object with key of username and a username as arguments, returns object if username key matches given username", () => {
    const inputArray = [
      {
        username: "tickle122",
        avatar_url:
          "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
        name: "Tom Tickle"
      }
    ];
    const inputUsername = "tickle122";
    const actualResult = getUsernamesFromUsers(inputArray, inputUsername);
    const expectedResult = {
      username: "tickle122",
      avatar_url:
        "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
      name: "Tom Tickle"
    };
    expect(actualResult).toEqual(expectedResult);
  });
  it.only("If given array of multiple objects,returns first object whose username is equal to given username", () => {
    const inputArray = [
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
    const inputUsername = "tickle122";
    const actualResult = getUsernamesFromUsers(inputArray, inputUsername);
    const expectedResult = {
      username: "tickle122",
      avatar_url:
        "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
      name: "Tom Tickle"
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
