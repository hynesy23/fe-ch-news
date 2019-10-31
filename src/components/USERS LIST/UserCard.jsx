import React from "react";
import { Link } from "@reach/router";
import styles from "./UserList.module.css";

export default function UserCard({ users }) {
  return (
    <section>
      <ul className={styles.user_list}>
        {users &&
          users.map(user => {
            return (
              <div className={styles.user_card} key={user.username}>
                <li>
                  <img
                    src={user.avatar_url}
                    alt="user pic"
                    className="profile_pic"
                  />
                </li>
                <li>
                  <Link to={`/community/${user.username}`}>
                    {user.username}
                  </Link>
                </li>
                <li>{user.name}</li>
              </div>
            );
          })}
      </ul>
    </section>
  );
}
