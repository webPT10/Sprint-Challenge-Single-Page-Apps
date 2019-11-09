import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Button = styled.button`
  border-color: tomato
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function SearchForm({ search, handleChange, handleSubmit }) {

  return (
    <section className="search-form">
     <form onSubmit={handleSubmit}>

       <label htmlFor='search' hidden>Search Form</label>
       <input 
          type='text'
          name='search'
          placeholder='search form...'
          value={search}
          onChange={handleChange}
       />
       <Button type='submit'>Search!</Button>
     </form>
    </section>
  );
}
