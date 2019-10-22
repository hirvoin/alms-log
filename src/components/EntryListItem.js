import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
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
  color: #1f1f1f;

  ${(props) =>
    props.markdown &&
    css`
      margin: 0px auto;
      padding: 0;
    `}
`

const EntryListItem = ({ entry }) => {
  const shortenText = (text) => {
    if (text.length > 75) {
      const newText = text.slice(0, 75).concat('...')
      return newText
    }
    return text
  }

  const date = new Date(entry.date)
  return (
    <Link to={`/${entry._id}`} style={{ textDecoration: 'none' }}>
      <StyledEntryRow>
        <StyledEntryCell>{date.toLocaleDateString()}</StyledEntryCell>
        <StyledEntryCell>{entry.duration}</StyledEntryCell>
        <StyledEntryCell markdown>
          {' '}
          <Markdown source={entry.activity} />
        </StyledEntryCell>
        <StyledEntryCell markdown>
          {' '}
          <Markdown source={shortenText(entry.focus)} />
        </StyledEntryCell>
        <StyledEntryCell markdown>
          <Markdown source={shortenText(entry.reflection)} />
        </StyledEntryCell>
      </StyledEntryRow>
    </Link>
  )
}

export default EntryListItem
