import React from 'react';
import { ReactComponent as Logo } from '../public/logo.svg';
import { StyledNavbar } from './styles/Navbar.styled';


export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo/>
      <h3>Planned test</h3>
    </StyledNavbar>
  );
}