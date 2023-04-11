import React from "react";

const Search = ({ placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder="Search by name"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
