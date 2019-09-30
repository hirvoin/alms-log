import React from 'react'
import Header from './styles/Header'
import NavBar from './components/NavBar'
import EntryList from './components/EntryList'
import NewEntryForm from './components/NewEntryForm'

const App = () => {
  return (
    <>
      <NavBar />
      <Header>ALMS-log</Header>
      <EntryList />
      <NewEntryForm />
    </>
  )
}

export default App
