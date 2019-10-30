import React from 'react'
import styled from 'styled-components'

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
const StyledText = styled.p`
  font-weight: normal;
  color: #1f1f1f;
  font-size: 1.3em;
  font-family: monospace;
  margin: 20px auto 10px;
  flex-basis: 0;
  flex-grow: 1;
  padding: 0 30px;
`

const AboutPage = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>ALMS-log</h1>
      </div>
      <StyledContainer>
        <StyledTitleRow>
          <h3>About</h3>
        </StyledTitleRow>
        <StyledText>
          This page works as a log during Autumn 2019 ALMS English course.
          Source code can be found from{' '}
          <a href="https://github.com/hirvoin/alms-log">github</a>.
        </StyledText>
      </StyledContainer>
    </>
  )
}

export default AboutPage
