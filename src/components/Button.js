import styled from 'styled-components'
import React from 'react'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Button = () => {
  return <StyledButton>Styled</StyledButton>
}

export default Button
