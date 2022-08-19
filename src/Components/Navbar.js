import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [display, setDisplay] = useState(false)

const handleClick = () => {
  setDisplay(!display)
  }


  return (
    <div className='nav'>
        <nav className="nav-bar">
          <Link to='/'><img src="./images/Home-Logo.svg" alt="" /></Link>
          <div className={display ? 'show' : 'hide'}>
            <Link to='/'>Home</Link>
            <Link to='/rooms'>Rooms</Link>
          </div>
          <i className="fa-solid fa-align-right" onClick={handleClick}></i>
        </nav>
    </div>
  )
}

export default Navbar
