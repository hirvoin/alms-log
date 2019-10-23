import React, { useState, useEffect } from 'react'
import entryService from './services/entries'

const initialUser = JSON.parse(window.localStorage.getItem('loggedUser'))

if (initialUser) {
  entryService.setToken(initialUser.token)
}

export const UserContext = React.createContext(initialUser)
export const EntryContext = React.createContext([])

const Store = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    const fetchedEntries = await entryService.getAll()
    fetchedEntries.sort((a, b) => new Date(a.date) - new Date(b.date))
    setEntries(fetchedEntries)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <EntryContext.Provider value={[entries, setEntries]}>
        {children}
      </EntryContext.Provider>
    </UserContext.Provider>
  )
}

export default Store
