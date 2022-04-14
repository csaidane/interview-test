import React, { Dispatch, SetStateAction } from 'react';
import { Paper, Stack, TextField, InputAdornment, Divider, Box, Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as SortArrows } from '../public/sort-arrows.svg';
import UserListItem from './UserListItem';

interface User {
  age: number;
  country: string;
  email: string;
  name:{firstName:string;
    lastName:string;
  }
};

interface SearchProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}


const Search = ({users, setUsers}:SearchProps) => {
  
  return (
    <Paper>
      <Stack spacing={3} p={3}>
        <TextField id="outlined-basic" variant="outlined" placeholder="Search Users"
          InputProps={{startAdornment: <InputAdornment position="start">
          <SearchIcon/>
          </InputAdornment>}} InputLabelProps={{shrink: false}}
        />
        <Divider/>
        <Box 
          sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `". name . . . . age"`,
          }}
        >
          <Box sx={{ gridArea: 'name', display: 'flex', flexDirection:'row', alignItems:"center" }}>
            <h3>Name</h3>
            <SortArrows style={{paddingLeft:"3px",height:'8px'}}/>
          </Box>
          <Box sx={{ gridArea: 'age', display: 'flex', flexDirection:'row', alignItems:"center" }}>
            <h3>Age</h3>
            <SortArrows style={{paddingLeft:"3px",height:'8px'}}/>
          </Box>
        </Box>
        {users.map((user)=><UserListItem user={user}/>)}
      </Stack>
    </Paper>
  );
}

export default Search;