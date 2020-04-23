import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: beige;
  justify-content: space-around;
`;

export default function CharacterList() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [useData, setUseData] = useState([]);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {

    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const results = response.data.results.filter(character => {
        return character.name
          .toLowerCase()
          .includes(searchCharacter.toLowerCase());
      });
      setUseData(results);
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    });
  }, [searchCharacter]);

  const handleChange = e => {
    setSearchCharacter(e.target.value);
  };

  return (
    <section className="character-list">
      <div>
        <form>
          <label htmlFor="Search">Search:</label>
          <input
            id="search"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
          ></input>
        </form>
      </div>

      <WrapperDiv>
        {useData.map(characters => {
          return <CharacterCard key={characters.id} character={characters} />;
        })}
      </WrapperDiv>
    </section>
  );
}
