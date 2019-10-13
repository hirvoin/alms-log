import React, { useState, useEffect } from 'react'
import entryService from './services/entries'
import NavBar from './components/NavBar'
import EntryList from './components/EntryList'
import NewEntryForm from './components/NewEntryForm'

const App = () => {
  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    const fetchedEntries = await entryService.getAll()
    setEntries(fetchedEntries)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <>
      <NavBar />
      <h1>ALMS-log</h1>
      <EntryList entries={entries} />
      <NewEntryForm />
    </>
  )
}

export default App
