import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledButtonRow = styled.div`
  display: flex;
  max-width: 650px;
  color: red;
  margin: 0 auto 40px;
`

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px;
  text-align: center;
  color: #f1f1f1;
  font-size: 1.2em;
  font-family: monospace;
  font-style: italic;
  text-shadow: 1px 1px 1px #1f1f1f;
  border-radius: 3px;
  width: 200px;
  background: rgba(71, 12, 69, 0.8);
  border: 2px rgba(71, 12, 69, 0.8);
  box-shadow: 2px 3px 2px slategray;

  ${(props) =>
    props.red &&
    css`
      background: #a84251;
      color: white;
    `}
    ${(props) =>
      props.yellow &&
      css`
        background: #a89942;
        color: white;
      `}
    ${(props) =>
      props.blue &&
      css`
        background: #4288a8;
        color: white;
      `}

    ${(props) =>
      props.pink &&
      css`
        background: #a84278;
        color: white;
      `}


  &:hover {
    color: #fff7a4;
  }
`

const FilterButtonList = () => {
  const [selectedButton, setSelectedButton] = useState('all')
  console.log(selectedButton)
  return (
    <StyledButtonRow>
      <StyledButton onClick={() => setSelectedButton('all')}>all</StyledButton>
      <StyledButton onClick={() => setSelectedButton('reading')} blue>
        reading
      </StyledButton>
      <StyledButton onClick={() => setSelectedButton('listening')} pink>
        listening
      </StyledButton>
      <StyledButton onClick={() => setSelectedButton('writing')} red>
        writing
      </StyledButton>
      <StyledButton onClick={() => setSelectedButton('group')} yellow>
        group
      </StyledButton>
    </StyledButtonRow>
  )
}

export default FilterButtonList
