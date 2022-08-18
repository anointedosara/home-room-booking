import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <nav className="nav-bar">
        <Link to='/'><img src="./images/Home-Logo.svg" alt="" /></Link>
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>
        </nav>
    </div>
  )
}

export default Navbar
