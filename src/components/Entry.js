import React from 'react'
import styled, { css } from 'styled-components'
import Markdown from 'react-markdown'

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

const StyledEntryCell = styled.div`
  font-size: 1.3em;
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
const StyledEntryRow = styled.div`
  display: flex;
  /* margin: 5px; */
`

const EntryDetails = ({ entry }) => {
  if (!entry) {
    return null
  }
  console.log(entry)
  const date = new Date(entry.date)

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>ALMS-log</h1>
      </div>
      <StyledContainer>
        <StyledTitleRow>
          <h3>Activity</h3>
          <h3>Date (mm/dd/yyy)</h3>
          <h3>Duration (h)</h3>
        </StyledTitleRow>
        <StyledEntryRow>
          <StyledEntryCell>{entry.activity}</StyledEntryCell>
          <StyledEntryCell>{date.toLocaleDateString()} </StyledEntryCell>
          <StyledEntryCell>{entry.duration}</StyledEntryCell>
        </StyledEntryRow>
      </StyledContainer>
      <StyledContainer>
        <StyledTitleRow>
          <h3>Focus</h3>
        </StyledTitleRow>
        <StyledEntryCell>
          <Markdown source={entry.focus} />
        </StyledEntryCell>
      </StyledContainer>
      <StyledContainer>
        <StyledTitleRow>
          <h3>Reflection</h3>
        </StyledTitleRow>
        <StyledEntryCell>
          <Markdown source={entry.reflection} />
        </StyledEntryCell>
      </StyledContainer>
    </>
  )
}

export default EntryDetails
