import React from "react";
import { Link } from "@reach/router";

export default function UserCreated() {
  return (
    <h1>
      New user created, please go <Link to="/login"> back to login</Link>
    </h1>
  );
}
