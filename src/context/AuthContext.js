import { useState, createContext, useContext } from "react"

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)
    
    const value = {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn
    }    
  
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
  )
}

export function useAuthContext() {
    return useContext(AuthContext)
}
