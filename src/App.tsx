import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { StyledApp } from './components/styles/App.styled'; 
import { StyledSearch } from './components/styles/Search.styled'
const API_URL = 'http://localhost:8099'

function App() {
  return (
    <StyledApp>
      <Navbar/>
      <Search/>
    </StyledApp>
  );
}

export default App;
