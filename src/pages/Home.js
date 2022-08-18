import React from 'react'
import FeaturedRooms from '../Components/FeaturedRooms'
import HomeIntro from '../Components/HomeIntro'
import Services from '../Components/Services'

function Home() {
  return (
    <div>
      <HomeIntro />
      <Services />
      <FeaturedRooms />
    </div>
  )
}

export default Home