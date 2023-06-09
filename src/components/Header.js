import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import "./Header.css"

export function Header() {
  return (
    <header className="navbar">
        <Link to="/" className="logo">
            <img src={Logo} className="logo-image" alt="write node logo" />
            <span className="logo-text">WriteNode</span>
        </Link>
        <nav className="nav">
            <NavLink to="/" className="nav-item active" end>Home</NavLink>
            {/* <NavLink to="/create" className="nav-item">Create Post</NavLink> */}
            <button className="nav-item btn"><i className="bi bi-google"></i>Login</button>
            {/* <button className="nav-item btn">Logout</button> */}
        </nav>
    </header>
  )
}
