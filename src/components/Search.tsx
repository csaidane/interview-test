import React from 'react';
import SearchOptions from './SearchOptions';
import { StyledSearch } from './styles/Search.styled';


export default function Search() {
  return (
      <StyledSearch>
      <div>
      <h2>Users</h2>
      </div>
      <SearchOptions/>
      </StyledSearch>
  );
}