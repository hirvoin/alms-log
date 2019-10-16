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

const AboutPage = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>About</h1>
      </div>
      <StyledContainer>Content here</StyledContainer>
    </>
  )
}

export default AboutPage
