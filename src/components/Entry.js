import React from 'react'
import styled, { css } from 'styled-components'
import Markdown from 'react-markdown'

const StyledEntryRow = styled.div`
  display: flex;
  border-bottom: solid;
  border-color: #c9c9c9;
  margin: 5px;
  &:hover {
    background: #c9c9c9;
  }
`
const StyledEntryCell = styled.div`
  font-size: 1.2em;
  font-family: monospace;
  margin: 15px auto 10px auto;
  flex-basis: 0;
  flex-grow: 1;
  padding: 0 5px 0 5px;

  ${(props) =>
    props.markdown &&
    css`
      margin: 0px auto;
      padding: 0;
    `}
`

const Entry = ({ entry }) => {
  const date = new Date(entry.date)
  return (
    <StyledEntryRow>
      <StyledEntryCell>{date.toLocaleDateString()}</StyledEntryCell>
      <StyledEntryCell>{entry.duration}</StyledEntryCell>
      <StyledEntryCell markdown>
        {' '}
        <Markdown source={entry.activity} />
      </StyledEntryCell>
      <StyledEntryCell markdown>
        {' '}
        <Markdown source={entry.focus} />
      </StyledEntryCell>
      <StyledEntryCell markdown>
        <Markdown source={entry.reflection} />
      </StyledEntryCell>
    </StyledEntryRow>
  )
}

export default Entry
