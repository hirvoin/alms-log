import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import entryService from './services/entries'
import NavBar from './components/NavBar'
import EntriesPage from './components/EntriesPage'
import AboutPage from './components/AboutPage'
import Entry from './components/Entry'
import { UserContext } from './Store'

const App = () => {
  const [entries, setEntries] = useState([])
  const [user, setUser] = useContext(UserContext)

  const getEntries = async () => {
    const fetchedEntries = await entryService.getAll()
    setEntries(fetchedEntries)
  }

  useEffect(() => {
    getEntries()
  }, [])

  const entryById = (id) => entries.find((entry) => entry._id === id)

  console.log(user)

  return (
    <Router>
      <NavBar />
      <Route
        exact
        path="/"
        render={(props) => <EntriesPage {...props} entries={entries} />}
      />
      <Route path="/about" exact component={AboutPage} />
      <Route
        exact
        path="/:id"
        render={({ match }) => <Entry entry={entryById(match.params.id)} />}
      />
    </Router>
  )
}

export default App
