import React from 'react'
import './Footer.css'

export function Footer() {
    const today = new Date()
    const year = today.getFullYear()
  
    return (
    <footer className="footer">
        <p>Copyright {year} WriteNode. All rights reserved. </p>
    </footer>
  )
}
