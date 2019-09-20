import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import SearchForm from './SearchForm'
import styled from 'styled-components';

const CharacterListCard = styled.section `
display:flex;
flex-wrap:wrap;
text-align:center;
margin-left:10%;
margin-right:10%;
`

const H2 = styled.h2 `
margin:2%;
`
const CharacterDiv = styled.div `
background-color:lightgrey;
margin:2%;
width:20%;
`
const H1 = styled.h1 `
text-align:center;
`

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
          const characters = response.data.results;
          setCharacters(characters);
          console.log(characters)
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    getCharacters()
  }, []);

  return (
    <React.Fragment>
      <SearchForm />
      <H1>Check Everyone</H1>
      <CharacterListCard>
        
      
        {characters.map( character => (
          <CharacterDiv key={character.id}>
            <H2>{character.name}</H2>
            <p>{character.status}</p>
          </CharacterDiv>
        ))}
      </CharacterListCard>
      </React.Fragment>
  );
}

export default CharacterList;