import React, { useState } from 'react'

const initialUser = JSON.parse(window.localStorage.getItem('loggedUser'))

export const UserContext = React.createContext(initialUser)

const Store = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default Store
