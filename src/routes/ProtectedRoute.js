import React from 'react'
import { Home } from '../pages'
import { useAuthContext } from '../context/AuthContext'

export default function ProtectedRoute({children}) {
    const { isLoggedIn } = useAuthContext()

    return (
    <>
        {isLoggedIn ? children : <Home />}
    </>
  )
}
