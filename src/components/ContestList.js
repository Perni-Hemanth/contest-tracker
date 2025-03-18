import React, { useEffect, useState } from "react";
import axios from "axios";

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contests")
      .then(response => setContests(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Upcoming Contests</h2>
      <ul>
        {contests.map(contest => (
          <li key={contest._id}>
            {contest.title} - {new Date(contest.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestList;
