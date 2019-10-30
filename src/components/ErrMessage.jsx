import React from "react";
import { Link } from "@reach/router";

export default function ErrMessage({ err }) {
  return (
    <>
      <p>{err.status}: Oops, something's went wrong</p>
      <Link to="/">Go Home</Link>
    </>
  );
}
