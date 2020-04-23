import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <div>
      <img
        src={props.character.image}
        alt="pictures of Morty's characters"
      ></img>
      <StyleDiv>
        <h2>{props.character.name}</h2>
        <p>{props.character.status}</p>
        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
      </StyleDiv>
    </div>
  );
}
