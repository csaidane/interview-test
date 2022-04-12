import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Button, Paper, InputAdornment, TextField, Stack } from '@mui/material';
import axios from "axios";

interface User {
  age: number;
  country: string;
  email: string;
  name:{firstName:string;
    lastName:string;
  }
};

interface SearchOptionProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

const SearchOptions: React.FC<SearchOptionProps> = ({users, setUsers}:SearchOptionProps) => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [min, setMin] = useState<any>(0);
  const [max, setMax] = useState<any>(100);

  useEffect(() => {
    axios.all([axios.get('http://localhost:8099/users/kids'),
    axios.get('http://localhost:8099/users/adults'),
    axios.get('http://localhost:8099/users/seniors')])
   .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {  
     return setAllUsers([...firstResponse.data.data,...secondResponse.data.data, ...thirdResponse.data]);
    }))
    .catch(error => console.log(error));
  }, []);

  const fetchUsers = () => {
    if(!isNaN(parseInt(min)) && !isNaN(parseInt(max))){
      setUsers(allUsers.filter(user =>user.age>min && user.age<max))
    } else if(!isNaN(parseInt(min))){
      setUsers(allUsers.filter(user => user.age>min))
    } else if(!isNaN(parseInt(max))){
      setUsers(allUsers.filter(user =>user.age<max))
    } else{
      setUsers(allUsers)
    }
  }

  return (
      <Paper elevation={3}>
        <Stack spacing={2} p={3}>
          <TextField id="outlined-basic" variant="outlined" value={min} onChange={(e) => setMin(e.target.value)}
          InputProps={{startAdornment: <InputAdornment position="start">min</InputAdornment>}}/>
          <TextField id="outlined-basic" variant="outlined" value={max} onChange={(e) => setMax(e.target.value)}
          InputProps={{startAdornment: <InputAdornment position="start">max</InputAdornment>}}/>
          <Button onClick={()=>fetchUsers()} variant="contained" style={{maxWidth: "40%",backgroundColor: "#4caf50",borderRadius: 20}}>Retrieve Users</Button>
        </Stack>
      </Paper>
  );
}

export default SearchOptions;