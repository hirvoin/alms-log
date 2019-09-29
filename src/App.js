import React from 'react'
import MainContainer from './styles/MainContainer'
import Header from './styles/Header'
import NavBar from './components/NavBar'
import EntryList from './components/EntryList'

const App = () => {
  return (
    <>
      <NavBar />
      <Header>ALMS-log</Header>
      <EntryList />
    </>
  )
}

export default App
