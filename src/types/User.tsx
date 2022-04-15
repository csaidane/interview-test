import { Dispatch, SetStateAction } from 'react';

export interface User {
    age: number;
    country: string;
    email: string;
    name:{firstName:string;
      lastName:string;
    }
  };

export interface SearchProps {
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
}

export interface SearchOptionProps {
    setUsers: Dispatch<SetStateAction<User[]>>;
}
