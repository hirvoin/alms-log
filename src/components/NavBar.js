import React from 'react'
import styled from 'styled-components'

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
      <StyledNavBarItem as="a" href="/">
        Home
      </StyledNavBarItem>
      <StyledNavBarItem as="a" href="/">
        About
      </StyledNavBarItem>
    </StyledNavBar>
  )
}

export default NavBar
