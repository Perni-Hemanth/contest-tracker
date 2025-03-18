import React, { useState, useEffect } from "react";
import axios from "axios";

const SolutionUploader = () => {
  const [contests, setContests] = useState([]);
  const [selectedContest, setSelectedContest] = useState("");
  const [solutionLink, setSolutionLink] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/contests")
      .then(response => setContests(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedContest || !solutionLink) return alert("All fields are required!");

    try {
      await axios.put(`http://localhost:5000/api/contests/${selectedContest}`, { solutionLink });
      alert("Solution link added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update contest.");
    }
  };

  return (
    <div>
      <h3>Attach Solution Link</h3>
      <form onSubmit={handleSubmit}>
        <label>Select Contest:</label>
        <select value={selectedContest} onChange={(e) => setSelectedContest(e.target.value)}>
          <option value="">-- Select --</option>
          {contests.map((contest) => (
            <option key={contest._id} value={contest._id}>
              {contest.title} ({contest.platform})
            </option>
          ))}
        </select>
        
        <label>Solution Link:</label>
        <input type="text" value={solutionLink} onChange={(e) => setSolutionLink(e.target.value)} placeholder="Enter YouTube link" />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default SolutionUploader;
