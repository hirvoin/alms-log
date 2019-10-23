import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import EntriesPage from './components/EntriesPage'
import AboutPage from './components/AboutPage'
import Entry from './components/Entry'
import { EntryContext } from './Store'

const App = () => {
  const [entries] = useContext(EntryContext)

  const entryById = (id) => entries.find((entry) => entry._id === id)

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
