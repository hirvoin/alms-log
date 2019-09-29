import React from 'react'
import styled from 'styled-components'

const StyledEntryRow = styled.div`
  display: flex;
  border-bottom: solid;
  border-color: #c9c9c9;
  margin: 5px;
`
const StyledEntryCell = styled.div`
  font-size: 1.2em;
  font-family: monospace;
  margin: 10px auto 10px auto;
  /* border: 1px solid #000; */
  flex-basis: 0;
  flex-grow: 1;
  padding: 0 5px 0 5px;
`

const Entry = ({ entry }) => {
  console.log(entry)
  const date = new Date(entry.date)
  return (
    <StyledEntryRow>
      <StyledEntryCell>{date.toLocaleDateString()}</StyledEntryCell>
      <StyledEntryCell>{entry.duration}</StyledEntryCell>
      <StyledEntryCell>{entry.activity}</StyledEntryCell>
      <StyledEntryCell>{entry.focus}</StyledEntryCell>
      <StyledEntryCell>{entry.reflection}</StyledEntryCell>
    </StyledEntryRow>
  )
}

export default Entry
