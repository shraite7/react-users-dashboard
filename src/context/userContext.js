import React, { createContext, useCallback, useEffect, useState } from 'react'

// Services
import { getCurrentUserData } from '../services/userService'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const getUserData = useCallback(async () => {
    const user = await getCurrentUserData()
    setUserData(user)
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  const context = {
    userData,
    rowsPerPage,
    setRowsPerPage,
  }
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
