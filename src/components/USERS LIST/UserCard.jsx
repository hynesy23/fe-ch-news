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
              <Link to={`/community/${user.username}`} key={user.username}>
                <div className={styles.user_card} key={user.username}>
                  <li>
                    <img
                      src={user.avatar_url}
                      alt="user pic"
                      className="profile_pic"
                    />
                  </li>
                  <li>{user.username}</li>
                  <li>{user.name}</li>
                </div>
              </Link>
            );
          })}
      </ul>
    </section>
  );
}
