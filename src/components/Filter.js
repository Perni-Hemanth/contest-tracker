import React from "react";

const Filter = ({ selectedPlatforms, onFilterChange }) => {
  const platforms = ["Codeforces", "LeetCode", "CodeChef"];

  return (
    <div className="filter-container">
      <h3>Filter by Platform</h3>
      {platforms.map((platform) => (
        <label key={platform}>
          <input
            type="checkbox"
            value={platform}
            checked={selectedPlatforms.includes(platform)}
            onChange={() => onFilterChange(platform)}
          />
          {platform}
        </label>
      ))}
    </div>
  );
};

export default Filter;
