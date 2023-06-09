import React from 'react'
import { Home } from '../pages'

export default function ProtectedRoute({children}) {
    const isLogin = true
    return (
    <>
        {isLogin ? children : <Home />}
    </>
  )
}
