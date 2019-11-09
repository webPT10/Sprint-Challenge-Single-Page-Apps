import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)

      .then(response => {
        const characterInfo = response.data.results;
          console.log(characterInfo);
        setCharacter(characterInfo);
      })
      .catch(error => {
        console.log ("Error, oh to error", error)
      })
  }, []);

  return (
    <section className="character-list">
      {searchResults.map(item => {return (<SearchForm item = {item} />)})}
      
      {character.map(attribute => {return (<CharacterCard attribute = {attribute}/>)})}
    </section>
  );
}
