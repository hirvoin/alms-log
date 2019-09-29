import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.ul`
  margin: 0 0 40px;
  background: rgba(71, 12, 69, 1);
  box-shadow: 0px 5px 2px slategray;
  display: flex;
`

const StyledNavBarItem = styled.li`
  font: italic 2em monospace;
  color: lightgray;
  text-align: center;
  display: block;
  margin: 20px;
  text-shadow: 2px 2px 1px #1f1f1f;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavBarItem>Home</StyledNavBarItem>
      <StyledNavBarItem>About</StyledNavBarItem>
    </StyledNavBar>
  )
}

export default NavBar
