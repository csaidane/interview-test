import React, { useState, useEffect } from 'react';
import { Button, Paper, InputAdornment, TextField, Stack } from '@mui/material';
import axios from "axios";
import {User,SearchOptionProps} from "../types/User"


const SearchOptions: React.FC<SearchOptionProps> = ({setUsers}:SearchOptionProps) => {
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
    const validMin:boolean = !isNaN(parseInt(min));
    const validMax:boolean = !isNaN(parseInt(max));
    const sortUsers = (a:User,b:User) =>{
      const nameA = a.name.firstName.toLowerCase() + a.name.lastName.toLowerCase();
      const nameB = b.name.firstName.toLowerCase() + b.name.lastName.toLowerCase();
      if(nameA.localeCompare(nameB) > 0){
        return 1
      } else if(nameA.localeCompare(nameB) < 0){
        return -1
      } else{
        return a.age > b.age ? -1 : 1
      }
    }
    if(validMin && validMax){
      const filteredUsers = allUsers.filter(user =>user.age>min && user.age<max);
      const orderedUsers = filteredUsers.sort((a,b)=>sortUsers(a,b));
      setUsers(orderedUsers)
    } else if(validMin){
      const filteredUsers = allUsers.filter(user => user.age>min);
      const orderedUsers = filteredUsers.sort((a,b)=>sortUsers(a,b));
      setUsers(orderedUsers)
    } else if(validMax){
      const filteredUsers = allUsers.filter(user =>user.age<max);
      const orderedUsers = filteredUsers.sort((a,b)=>sortUsers(a,b));
      setUsers(orderedUsers)
    } else{
      const orderedUsers = allUsers.sort((a,b)=>sortUsers(a,b));
      setUsers(orderedUsers)
    }
  }

  return (
      <Paper elevation={3}>
        <Stack spacing={2} p={3}>
          <TextField id="outlined-basic" variant="outlined" value={min} onChange={(e) => setMin(e.target.value)}
          InputProps={{startAdornment: <InputAdornment position="start">min</InputAdornment>}}/>
          <TextField id="outlined-basic" variant="outlined" value={max} onChange={(e) => setMax(e.target.value)}
          InputProps={{startAdornment: <InputAdornment position="start">max</InputAdornment>}}/>
          <Button onClick={()=>fetchUsers()} variant="contained" style={{maxWidth: "45%",backgroundColor: "#3cb371",borderRadius: 20, textTransform:'none', marginBottom:'16px', display:"inline-block"}}>Retrieve Users</Button>
        </Stack>
      </Paper>
  );
}

export default SearchOptions;