import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { StyledApp } from './components/styles/App.styled'; 
import SearchOptions from './components/SearchOptions';
import Search from './components/Search';
import {Grid, Hidden } from '@mui/material';

const API_URL = 'http://localhost:8099'
interface User {
  age: number;
  country: string;
  email: string;
  name:{firstName:string;
    lastName:string;
  }
};

function App() {

  const [users, setUsers] = useState<User[]>([]);

  return (
    <StyledApp>  
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={12}>
          <h2>Users</h2>
        </Grid>
        <Grid item xs={3}>
          <SearchOptions setUsers={setUsers} users={users}/>
        </Grid>
        <Grid item xs={6}>
          <Search/>
        </Grid>
        <Grid item xs={8}>
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
