import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}
