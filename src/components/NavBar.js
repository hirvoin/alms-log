import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavBar = styled.ul`
  margin: 0 0 40px;
  background: rgba(71, 12, 69);
  box-shadow: -1px 3px 2px slategray;
  display: flex;
`

const StyledNavBarItem = styled.li`
  font: italic 2em monospace;
  color: lightgray;
  text-align: center;
  display: block;
  margin: 20px;
  text-shadow: 2px 2px 1px #1f1f1f;
  text-decoration: none;

  &:hover {
    color: #fff7a4;
  }
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link style={{ textDecoration: 'none' }} to="/">
        <StyledNavBarItem>Home</StyledNavBarItem>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/about">
        <StyledNavBarItem>About</StyledNavBarItem>
      </Link>
    </StyledNavBar>
  )
}

export default NavBar
