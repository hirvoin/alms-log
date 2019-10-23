import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { UserContext } from '../Store'
import loginService from '../services/login'
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
  margin: 10px 5px;
  padding: 5px;
  text-align: center;
  color: #f1f1f1;
  font-size: 1.2em;
  font-family: monospace;
  font-style: italic;
  text-shadow: 1px 1px 1px #1f1f1f;
  border-radius: 3px;
  width: 150px;
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

const LoginForm = () => {
  const [user, setUser] = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const credentials = { username, password }
    const loggedUser = await loginService.login(credentials)
    setUser(loggedUser)
    window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
    entryService.setToken(loggedUser.token)
  }

  return (
    <StyledContainer>
      <StyledTitleRow>
        <h3>Log in</h3>
      </StyledTitleRow>
      <form style={{ margin: '20px' }}>
        <StyledFormRow>
          <StyledLabel>Username:</StyledLabel>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledLabel>Password:</StyledLabel>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </StyledFormRow>
        <StyledButton type="button" onClick={() => handleSubmit()} blue>
          Log in
        </StyledButton>
      </form>
    </StyledContainer>
  )
}

export default LoginForm
