import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import roomData from '../data'

function RoomDetails() {
const params = useParams()
const [roomDetails, setRoomDetails] = useState({})
const [loading, setLoading] = useState(true)

const getData = async () => {
  try {
    setTimeout(() => {
        const data = roomData?.filter((room) => room?.name === params.name)[0]
        setRoomDetails(data)
        setLoading(false)
    }, 1500)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

useEffect(() => {
 getData()
}, [])

if(loading) {
    return <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "0", zIndex: 100000}}>
        <h3>Loading data...</h3>
    </div>
}

  return (
    
      <div className='detail-0ne-intro'>
        <div className='details-intro' style={{backgroundImage: `url(${roomDetails?.img})`}}>
            <div className='details-intro-div'>
                <h1>{roomDetails?.name}</h1>
                <div></div>
                <Link to="/rooms"><button>BACK TO ROOMS</button></Link>
            </div>
        </div>

        <div className='details'>
            <div className='details-div'>
                <div>
                    <img src="../images/details-1.jpeg" alt="" />
                </div>

                <div>
                    <img src="../images/details-2.jpeg" alt="" />
                </div>

                <div>
                    <img src="../images/details-3.jpeg" alt="" />
                </div>
            </div>
        </div>

        <div className='infomation'>
            <div>
                <h2>Details:</h2>
                <p>{roomDetails?.details}</p>
            </div>

            <div>
                <h2>Information:</h2>
                <p>Price : {roomDetails?.information?.price}</p>
                <p>Size : {roomDetails?.information?.size}</p>
                <p>Max Capacity : {roomDetails?.information?.maxCap}</p>
                <p>Pets Allowed</p>
                <p>Free Breakfast Included</p>
            </div>
        </div>

        <div className='extras'>
            <h1>Extras:</h1>
            <div className='list'>
                <div>
                  {roomDetails?.extras?.map((extra, i) => <p key={i}>- {extra}</p>)}
                   
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default RoomDetails