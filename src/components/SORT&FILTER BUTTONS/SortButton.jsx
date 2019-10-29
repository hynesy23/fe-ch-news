import React from "react";

export default function SortButton({ sortFunction, comments }) {
  const handleClick = event => {
    const sort_by = event.target.value;
    //sortArticles(sort_by);
    //sortComments(sort_by);
    sortFunction(sort_by);
  };

  return (
    <>
      <form>
        <label>
          Sort by:
          <select onClick={handleClick}>
            <option value="created_at">Most Recent</option>
            <option value="votes">Most Popular</option>
            {!comments && (
              <option value="comment_count">Most commented on</option>
            )}
          </select>
        </label>
      </form>
    </>
  );
}
