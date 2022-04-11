import React from 'react';
import { StyledOptions } from './styles/SearchOptions.styled';
import { Button, Paper, InputAdornment, TextField } from '@mui/material';


export default function SearchOptions() {
  return (
    <StyledOptions>
        <TextField id="outlined-basic" variant="outlined" 
        InputProps={{
          startAdornment: <InputAdornment position="start">min</InputAdornment>}}
        />
        <TextField id="outlined-basic" variant="outlined" 
        InputProps={{
          startAdornment: <InputAdornment position="start">max</InputAdornment>}}
        />
        <Button variant="contained">Retrieve Users</Button>
    </StyledOptions>
  );
}