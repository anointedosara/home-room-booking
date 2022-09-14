import React from 'react'
import { Link } from 'react-router-dom'

function RoomComponentOne() {
  return (
    <div className='room-component-one'>
        <div className='home-intro-div'>
              <h1>Our Rooms</h1>
              <div></div>
              <Link to="/"><button>RETURN HOME</button></Link>
          </div>
    </div>
  )
}

export default RoomComponentOne