import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedRooms() {
  return (
    <div className='featured-rooms'>
        <h2>Featured Rooms</h2>
        <div className='line'></div>
        <div className='features'>
            <div className='features-div'>
                <div className='price'>
                    <p><span>$</span>400</p>
                    <p>per night</p>
                </div>
                <Link to='/feature1'><button className='feature'>FEATURE</button></Link>
                <div className='img-wrapper'>
                  <div className="black"></div>
                  <img src="./images/home-first-room-img.jpeg" alt="" />
                </div>
                <div>Double Deluxe</div>
            </div>
            <div className='features-div'>
                <div className='price'>
                    <p><span>$</span>500</p>
                    <p>per night</p>
                </div>
                <Link to='/feature2'><button className='feature'>FEATURE</button></Link>
                <div className='img-wrapper'>
                  <div className="black"></div>
                  <img src="./images/home-second-room-img.jpeg" alt="" />
                </div>
                <div>Family Deluxe</div>
            </div>
            <div className='features-div'>
                <div className='price'>
                    <p><span>$</span>600</p>
                    <p>per night</p>
                </div>
                <Link to='/feature3'><button className='feature'>FEATURE</button></Link>
                  <div className='img-wrapper'>
                    <div className="black"></div>
                    <img src="./images/home-third-room-img.jpeg" alt="" />
                   </div>
                <div>Presidential</div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedRooms