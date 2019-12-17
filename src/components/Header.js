import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-around;
  font-weight: bolder;
  margin-bottom: 5%;
  text-decoration: none;
  color: yellow;
`;

const Div = styled.div`
  text-decoration: none;
  color: black;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <WrapperDiv>
        <Link to="/">
          <Div className="home-button">Home</Div>
        </Link>
        <Link to="/character">
          {" "}
          <Div className="home-button">Characters</Div>
        </Link>
      </WrapperDiv>
    </header>
  );
}
