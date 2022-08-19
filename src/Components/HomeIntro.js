import React from 'react'
import { Link } from 'react-router-dom'

function HomeIntro() {
  return (
    <div className="home-intro-main">
      <div className='home-intro'>
          <div className='home-intro-div'>
              <h1>Luxurious Rooms</h1>
              <div></div>
              <p>Deluxe Rooms Starting At $299</p>
              <Link to="/rooms"><button>OUR ROOMS</button></Link>
          </div>
      </div>
    </div>
  )
}

export default HomeIntro