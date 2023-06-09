import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CreatePost, Home, PageNotFound } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}
