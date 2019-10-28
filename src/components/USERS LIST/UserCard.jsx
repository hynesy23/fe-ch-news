import React from "react";
import { Link } from "@reach/router";

export default function UserCard({ users }) {
  return (
    <section>
      <ul>
        {users &&
          users.map(user => {
            return (
              <>
                <li>
                  <img src={user.avatar_url} alt="user pic" />
                </li>
                <li>
                  <Link to={`/community/${user.username}`}>
                    {user.username}
                  </Link>
                </li>
                <li>{user.name}</li>
              </>
            );
          })}
      </ul>
    </section>
  );
}
