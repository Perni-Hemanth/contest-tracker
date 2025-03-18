import React, { useState, useEffect } from "react";
import axios from "axios";

const Bookmark = ({ userId }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bookmarks/${userId}`)
      .then(response => setBookmarks(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      <h3>Bookmarked Contests</h3>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark._id}>
            <a href={bookmark.contestId.url} target="_blank" rel="noopener noreferrer">
              {bookmark.contestId.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmark;
