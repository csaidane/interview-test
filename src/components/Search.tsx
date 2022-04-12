import React from 'react';
import { Paper, Stack, TextField, InputAdornment, Divider} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {
  return (
    <Paper>
      <Stack spacing={3} p={3}>
      <TextField id="outlined-basic" variant="outlined" placeholder="Search Users"
        InputProps={{startAdornment: <InputAdornment position="start">
        <SearchIcon/>
        </InputAdornment>}} InputLabelProps={{shrink: false}}
      />
      <Divider/>
      </Stack>
    </Paper>
  );
}

export default Search;