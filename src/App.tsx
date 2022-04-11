import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import SearchOptions from './components/SearchOptions';
import { StyledApp } from './components/styles/App.styled'; 
const API_URL = 'http://localhost:8099'

function App() {
  return (
    <StyledApp>
      <Navbar/>
      <div>
        <h2>Users</h2>
      </div>
      <SearchOptions/>
    </StyledApp>
  );
}

export default App;
