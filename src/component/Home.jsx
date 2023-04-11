import React from "react";
import Body from "./Body";
import Search from "./Search";
import { useState, useEffect } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const [searchField, setSearchField] = useState([]);

  useEffect(() => {
    fetch("/List.json")
      .then((response) => response.json())
      .then((users) => setList(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredChange = list.filter((list) => {
    return (
      list.firstName.toLowerCase().includes(searchField) ||
      list.lastName.toLowerCase().includes(searchField) ||
      list.title.toLowerCase().includes(searchField)
    );
  });

  return (
    <>
      <Search onChangeHandler={onSearchChange} />
      <div className="lists">
        {filteredChange.map((items, id) => (
          <Body
            title={items.title}
            firstName={items.firstName}
            lastName={items.lastName}
            picture={items.picture}
            id={items.id}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
