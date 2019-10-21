import React from 'react'
import EntryList from './EntryList'
import NewEntryForm from './NewEntryForm'

const EntriesPage = ({ entries }) => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>ALMS-log</h1>
      </div>
      <EntryList entries={entries} />
      <NewEntryForm />
    </>
  )
}

export default EntriesPage