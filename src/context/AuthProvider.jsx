// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage } from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//         const { employees, admin } = getLocalStorage()
//         setUserData({ employees, admin })
//     }, [])

//     return (
//         <AuthContext.Provider value={userData}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // Initialize state once from localStorage (fallback to empty)
  const [userData, setUserData] = useState(() => {
    const { employees = [], admin = null } = getLocalStorage() || {}
    return { employees, admin }
  })

  // Whenever userData changes, save it back to localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem('employees', JSON.stringify(userData.employees))
      localStorage.setItem('admin', JSON.stringify(userData.admin))
    }
  }, [userData])
  console.log(userData.employees)
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider