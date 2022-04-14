import React from 'react';
import { Divider, Box, Checkbox, Typography } from '@mui/material';

interface User {
    age: number;
    country: string;
    email: string;
    name:{firstName:string;
      lastName:string;
    }
  };
  interface UserListProps {
    user: User;
  }

const UserListItem = ({user}:UserListProps) => {
    return (
        <>
        <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"checkbox name name name . . age"`,
          alignItems:"center",
          margin:"2px!important"
          }}
        >
        <Checkbox sx={{ gridArea: 'checkbox'}}/>
        <Typography variant="body1" sx={{ gridArea: 'name'}}>{user.name.firstName +" " + user.name.lastName}</Typography>
        <Typography variant="body1" sx={{ gridArea: 'age'}}>{user.age}</Typography>
        </Box>
        <Divider sx={{margin:"2px!important"}}/>
        </>
    );
  }
  
  export default UserListItem;