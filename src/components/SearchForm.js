import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  border-color: tomato
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor='search' hidden>Search Form</label>
       <input 
          type='text'
          name='search'
          placeholder='search form...'
       />
       <Button>Search!</Button>
     </form>
    </section>
  );
}
