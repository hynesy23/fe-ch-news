import React from "react";

export default function SortButton({ sortArticles }) {
  const handleClick = event => {
    const sort_by = event.target.value;
    sortArticles(sort_by);
  };

  return (
    <form action="">
      <label htmlFor="">
        Sort by:
        <select onClick={handleClick}>
          <option value="created_at">Most Recent</option>
          <option value="votes">Most Popular</option>
          <option value="comment_count">Most commented on</option>
        </select>
      </label>
    </form>
  );
}
