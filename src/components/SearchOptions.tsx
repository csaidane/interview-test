import React from 'react';
import { StyledOptions } from './styles/SearchOptions.styled';
//import { TextField } from '@mui/material';


export default function SearchOptions() {
  return (
    <StyledOptions>
        <button type="button">Retrieve Users</button>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />

    </StyledOptions>
  );
}