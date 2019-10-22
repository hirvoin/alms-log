import React, { useContext } from 'react'
import EntryList from './EntryList'
import NewEntryForm from './NewEntryForm'
import LoginForm from './LoginForm'
import { UserContext } from '../Store'

const EntriesPage = ({ entries }) => {
  const [user] = useContext(UserContext)
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>ALMS-log</h1>
      </div>
      <EntryList entries={entries} />
      {!user ? <LoginForm /> : <NewEntryForm />}
    </>
  )
}

export default EntriesPage
