import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import entryService from '../services/entries'
import Entry from './Entry'

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

const StyledEntryTitle = styled.p`
  color: rgba(71, 12, 69, 1);
  text-shadow: 2px 2px 1px #c9c9c9;
  font-size: 1.5em;
  font-family: monospace;
  font-style: italic;
  margin: 0px auto 10px auto;
  flex-basis: 0;
  flex-grow: 1;
  padding: 0 5px 0 5px;
`
const StyledTotalsRow = styled.div`
  display: flex;
  margin: 50px 5px 5px 5px;
`
const StyledTotalTitle = styled.p`
  color: rgba(71, 12, 69, 1);
  text-shadow: 2px 2px 1px #c9c9c9;
  font-size: 2em;
  font-family: monospace;
  font-style: italic;
  margin: 0px 20px;
  padding: 0 5px 0 5px;
`

const EntryList = () => {
  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    const fetchedEntries = await entryService.getAll()
    setEntries(fetchedEntries)
  }

  useEffect(() => {
    getEntries()
  }, [])

  const calculateTotalDuration = entryArray =>
    entryArray.reduce((prev, curr) => prev + curr.duration, 0)

  console.log(entries)

  return (
    <StyledContainer>
      <StyledTitleRow>
        <StyledEntryTitle>Date (mm/dd/yyy)</StyledEntryTitle>
        <StyledEntryTitle>Duration (h)</StyledEntryTitle>
        <StyledEntryTitle>Activity</StyledEntryTitle>
        <StyledEntryTitle>Focus</StyledEntryTitle>
        <StyledEntryTitle>Reflection</StyledEntryTitle>
      </StyledTitleRow>
      {entries.map(entry => (
        <Entry key={entry._id} entry={entry} />
      ))}
      <StyledTotalsRow>
        <StyledTotalTitle>
          Total: {calculateTotalDuration(entries)} hours
        </StyledTotalTitle>
      </StyledTotalsRow>
    </StyledContainer>
  )
}

export default EntryList
