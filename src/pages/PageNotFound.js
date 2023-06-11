import React from 'react'
import { Link } from 'react-router-dom'
import { useDocTitle } from '../hooks/useDocTitle'
import './PageNotFound.css'
import PageNotFoundImg from '../assets/images/page-not-found.jpg'

export function PageNotFound() {
  
  useDocTitle("Page Not Found")
  
  return (
    <main className="container notfound">
      <h2>Sorry, page not found</h2>
      <img className="notfound-img" src={PageNotFoundImg} alt="page not found" />
      <Link to="/" className="btn-primary">Back to Home</Link>
    </main>
  )
}
