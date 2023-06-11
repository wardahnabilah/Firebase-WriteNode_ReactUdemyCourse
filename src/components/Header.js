import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../firebase/config'
import { useAuthContext } from '../context/AuthContext'
import "./Header.css"

export function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext()
  
  function handleLogin() {
    signInWithPopup(auth, provider)
    .then(() => {
      localStorage.setItem("isLoggedIn", true)
      setIsLoggedIn(true)
    })
  }

  function handleLogout() {
    signOut(auth)
    localStorage.setItem("isLoggedIn", false)
    setIsLoggedIn(false)
  }
  
  return (
    <header className="navbar">
        <Link to="/" className="logo">
            <img src={Logo} className="logo-image" alt="write node logo" />
            <span className="logo-text">WriteNode</span>
        </Link>
        <nav className="nav">
            <NavLink to="/" className="nav-item" end>Home</NavLink>
            { isLoggedIn ? (<>
                              <NavLink to="/create" className="nav-item">Create Post</NavLink>
                              <button onClick={handleLogout} className="nav-item btn">Logout</button>
                            </>) :
                            <button onClick={handleLogin} className="nav-item btn"><i className="bi bi-google"></i>Login</button>
            }
        </nav>
    </header>
  )
}
