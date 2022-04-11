import React from 'react';
import { ReactComponent as Logo } from '../public/logo.svg';
import { StyledNavbar } from './styles/Navbar.styled';


export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo/>
      <h1>Planned test</h1>
    </StyledNavbar>
  );
}