import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  border-color: tomato
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function SearchForm() {
  const [searchForm, setSearchForm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchForm(event.target.value)
  }

  useEffect(() => {
    const results = characters.filter(character => 
      character.toLowerCase().includes(searchForm)
    );
    setSearchResults(results)
  }, [searchForm]);


  return (
    <section className="search-form">
     <form onSubmit={}>

       <label htmlFor='search' hidden>Search Form</label>
       <input 
          type='text'
          name='search'
          placeholder='search form...'
          value={searchForm}
          onChange={handleChange}
       />
       <Button type='submit'>Search!</Button>
     </form>
    </section>
  );
}
