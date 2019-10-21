import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import EntryListItem from './EntryListItem'

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;
  padding: 30px;
  background: #f0f0f0;
  border: solid;
  border-color: #f0f0f0;
  border-radius: 6px;
  box-shadow: 5px 5px 2px slategray;
`
const StyledTitleRow = styled.div`
  display: flex;
  border-bottom: solid;
  border-color: slategray;
  margin: 5px 5px 10px 5px;
`

const StyledTotalsRow = styled.div`
  display: flex;
  margin: 50px 5px 5px 5px;
`

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

const EntryList = ({ entries }) => {
  const [selectedButton, setSelectedButton] = useState('all')
  const [filteredEntries, setFilteredEntries] = useState([])

  useEffect(() => {
    setFilteredEntries(entries)
  }, [entries])

  const calculateTotalDuration = (entryArray) =>
    entryArray.reduce((prev, curr) => prev + curr.duration, 0)

  const handleFilter = (tag) => {
    setSelectedButton(tag)
    tag === 'all'
      ? setFilteredEntries(entries)
      : setFilteredEntries(entries.filter((entry) => entry.tag === tag))
  }

  console.log(filteredEntries)

  return (
    <>
      <StyledButtonRow>
        <StyledButton onClick={() => handleFilter('all')}>all</StyledButton>
        <StyledButton onClick={() => handleFilter('reading')} blue>
          reading
        </StyledButton>
        <StyledButton onClick={() => handleFilter('listening')} pink>
          listening
        </StyledButton>
        <StyledButton onClick={() => handleFilter('writing')} red>
          writing
        </StyledButton>
        <StyledButton onClick={() => handleFilter('group')} yellow>
          group
        </StyledButton>
      </StyledButtonRow>
      <StyledContainer>
        <StyledTitleRow>
          <h3>Date (mm/dd/yyy)</h3>
          <h3>Duration (h)</h3>
          <h3>Activity</h3>
          <h3>Focus</h3>
          <h3>Reflection</h3>
        </StyledTitleRow>
        {filteredEntries.map((entry) => (
          <EntryListItem key={entry._id} entry={entry} />
        ))}
        <StyledTotalsRow>
          <h2>Total: {calculateTotalDuration(filteredEntries)} hours</h2>
        </StyledTotalsRow>
      </StyledContainer>
    </>
  )
}

export default EntryList
