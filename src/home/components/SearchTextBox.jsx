import React from "react";

const SearchTextBox = ({ currentSearchText, setCurrentSearchText }) => (
  <>
    <label>Filter out </label>{" "}
    <input
      type="text"
      value={currentSearchText}
      onChange={(event) => setCurrentSearchText(event.target.value)}
    />
  </>
);

export default SearchTextBox;
