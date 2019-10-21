import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import entryService from '../services/entries'

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

const StyledFormRow = styled.div`
  margin-bottom: 10px;
`
const StyledLabel = styled.p`
  margin-right: 20px;
  color: rgba(71, 12, 69, 1);
  text-shadow: 2px 2px 1px #c9c9c9;
  font-size: 1.1em;
  font-family: monospace;
  font-style: italic;
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

  &:hover {
    color: #fff7a4;
  }

  ${(props) =>
    props.red &&
    css`
      background: #a84251;
      color: white;
    `}

  ${(props) =>
    props.blue &&
    css`
      background: #4288a8;
      color: white;
    `}
`

const StyledTitleRow = styled.div`
  display: flex;
  border-bottom: solid;
  border-color: slategray;
  margin: 5px 5px 10px 5px;
`

const NewEntryForm = () => {
  const [activity, setActivity] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState(0)
  const [tag, setTag] = useState('reading')
  const [focus, setFocus] = useState('')
  const [reflection, setReflection] = useState('')

  const handleSubmit = async () => {
    const entry = {
      activity,
      date,
      duration,
      tag,
      focus,
      reflection,
    }
    console.log(entry)
    await entryService.createEntry(entry)
  }

  const handleReset = () => {
    setActivity('')
    setDate('')
    setDuration(0)
    setTag('reading')
    setFocus('')
    setReflection('')
  }

  return (
    <StyledContainer>
      <StyledTitleRow>
        <h3>Add a new log entry</h3>
      </StyledTitleRow>
      <form>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 auto' }}>
            <StyledFormRow>
              <StyledLabel>Activity: </StyledLabel>
              <input
                onChange={(event) => setActivity(event.target.value)}
                type="text"
                id="activity"
              />
            </StyledFormRow>
            <StyledFormRow>
              <StyledLabel>Date: </StyledLabel>
              <input
                onChange={(event) => setDate(event.target.value)}
                type="date"
                id="date"
              />
            </StyledFormRow>
            <StyledFormRow>
              <StyledLabel>Duration: </StyledLabel>
              <input
                onChange={(event) => setDuration(event.target.value)}
                type="number"
                id="duration"
              />
            </StyledFormRow>
            <StyledFormRow>
              <StyledLabel>Tag: </StyledLabel>
              <select onChange={(event) => setTag(event.target.value)} id="tag">
                <option value="reading" defaultValueb>
                  reading
                </option>
                <option value="listening">listening</option>
                <option value="writing">writing</option>
                <option value="group">group</option>
              </select>
            </StyledFormRow>
          </div>
          <div style={{ margin: '0 auto' }}>
            <StyledFormRow>
              <StyledLabel>Focus: </StyledLabel>
              <textarea
                onChange={(event) => setFocus(event.target.value)}
                rows="3"
                cols="30"
                id="focus"
              />
            </StyledFormRow>
            <StyledFormRow>
              <StyledLabel>Reflection: </StyledLabel>
              <textarea
                onChange={(event) => setReflection(event.target.value)}
                rows="15"
                cols="60"
                id="reflection"
              />
            </StyledFormRow>
            <StyledButton type="button" onClick={() => handleReset()} red>
              Reset
            </StyledButton>
            <StyledButton type="button" onClick={() => handleSubmit()} blue>
              Submit entry
            </StyledButton>
          </div>
        </div>
      </form>
    </StyledContainer>
  )
}

export default NewEntryForm
