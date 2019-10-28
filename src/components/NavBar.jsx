import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/topics">topics</Link>
      </li>
      <li>
        <Link to="/community">community</Link>
      </li>
    </nav>
  );
}
