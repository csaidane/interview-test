import React, { useState } from 'react';
import { StyledApp } from './components/styles/App.styled'; 
import Navbar from './components/Navbar';
import SearchOptions from './components/SearchOptions';
import Search from './components/Search';
import {Grid } from '@mui/material';
import {User} from "./types/User"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_URL = 'http://localhost:8099'

function App() {

  const [users, setUsers] = useState<User[]>([]);

  return (
    <StyledApp>  
      <Navbar/>
      <Grid container spacing={4} justifyContent="center" sx={{paddingBottom:"12px"}}>
        <Grid container item xs={12}>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={6}>
          <h2 style={{color:'#131221', marginBottom:"0"}}>Users</h2>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <SearchOptions setUsers={setUsers}/>
        </Grid>
        <Grid item xs={6}>
          <Search setUsers={setUsers} users={users}/>
        </Grid>
      </Grid>
    </StyledApp>
  );
}

export default App;
