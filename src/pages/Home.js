import React, { useState, useEffect } from "react";
import axios from "axios";
import ContestList from "../components/ContestList";
import Filter from "../components/Filter";
import Bookmark from "../components/Bookmark";

const Home = () => {
  const [contests, setContests] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(["Codeforces", "LeetCode", "CodeChef"]);
  const [userId] = useState("user123"); // Static userId for now

  useEffect(() => {
    axios.get("http://localhost:5000/api/contests")
      .then(response => setContests(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleFilterChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div>
      <h1>Contest Tracker</h1>
      <Filter selectedPlatforms={selectedPlatforms} onFilterChange={handleFilterChange} />
      <ContestList contests={contests.filter(contest => selectedPlatforms.includes(contest.platform))} />
      <Bookmark userId={userId} />
    </div>
  );
};

export default Home;
