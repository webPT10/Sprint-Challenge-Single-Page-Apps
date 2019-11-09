import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { element } from "prop-types";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  const [search, setSearch] = useState(""); //STATE set for search

  //handleChange
  const handleChange = event => {
    const {value} = event.target;
    setSearch(value)
  }

  //handleSubmit
  const handleSubmit = event => {
    event.preventDefault();
    const filteredQuery = character.filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
    setCharacter (filteredQuery);
  }

  useEffect(() => {
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
      <SearchForm 
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {character.map(attribute => {return (<CharacterCard attribute = {attribute}/>)})}
    </section>
  );
}
