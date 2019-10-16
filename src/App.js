import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import entryService from './services/entries'
import NavBar from './components/NavBar'
import EntryPage from './components/EntryPage'
import AboutPage from './components/AboutPage'

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
    <Router>
      <NavBar />
      <Route
        exact
        path="/"
        render={(props) => <EntryPage {...props} entries={entries} />}
      />
      <Route path="/about" exact component={AboutPage} />
    </Router>
  )
}

export default App
