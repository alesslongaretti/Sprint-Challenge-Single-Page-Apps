import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm"

const WrapperDiv = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
background-color:beige;
justify-content:space-around;
`;



export default function CharacterList() {
  const [character, setCharacter] = useState([])
  const [useData, setUseData] = useState([]);

const search = char => {
  setUseData(char)
};

  // TODO: Add useState to track data from useEffect


  useEffect(() => {
    const getCharacter = () => {
      axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
        setUseData(response.data.results);

      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
    getCharacter();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <SearchForm character={character}/>
  
      <WrapperDiv>

      {useData.map(characters => {
        return (
          <CharacterCard 
          key={characters.id}
          character={characters}
          />
        );

        })}</WrapperDiv>
    </section>
  );
}
