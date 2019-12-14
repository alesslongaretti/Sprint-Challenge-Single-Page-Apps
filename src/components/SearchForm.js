import React, { useState} from "react";


export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const submitHandleChange = e => {
    e.preventDefault();
  
  const result = props.characters.filter(char => {
    return char.name.toLowerCase().indexOf(searchTerm.toLowerCase() !== -1);
  });
  props(result);
  };


  return (
    <section className="search-form">
      <form onSubmit={submitHandleChange}>
        <label htmlFor="name"> Search: </label>
        <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        onChange={handleChange}
        // value={search}
        />
      </form>
      </section>
  );};
  
