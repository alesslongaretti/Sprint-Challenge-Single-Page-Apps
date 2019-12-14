import React, { useState, useEffect } from "react";


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();

  useEffect((props) => {}, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);

    const results = props.characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };


 
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name"> Search: </label>
        <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        onChange={handleChange}
        value={searchTerm}
        />
      </form>
      {/* <div>
        <ul>
          {searchResults.map(character => {
            return<li key={character}>{character}</li>
          })}
        </ul>
      </div> */}
    </section>
  );
}
