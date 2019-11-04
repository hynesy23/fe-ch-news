import React from "react";
import { Link } from "@reach/router";

export default function ErrMessage({ err }) {
  return (
    <>
      <div className="error">
        <h1 className="error_text">{err.status}</h1>
        <p className="error_text">{err.msg}</p>
      </div>
      <Link to="/articles" className="home">
        Go Home
      </Link>
    </>
  );
}
