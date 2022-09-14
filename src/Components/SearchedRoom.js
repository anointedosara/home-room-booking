import React from 'react'
import { Link } from 'react-router-dom';

function SearchedRoom() {
    const featuredData = [
        {
          price: "$100",
          id: "1",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-1.05b90599.jpeg",
          name: "Single Economy",
        },
        {
          price: "$150",
          id: "2",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-2.48c60181.jpeg",
          name: "Single Basic",
        },
        {
          price: "$250",
          id: "3",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-3.92fc5b83.jpeg",
          name: "Single Standard",
        },
        {
            price: "$300",
            id: "4",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-4.10d2e64a.jpeg",
            name: "Single Deluxe",
          },
          {
            price: "$200",
            id: "5",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-5.a7c5e078.jpeg",
            name: "Double Economy",
          },
          {
            price: "$250",
            id: "6",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-6.3697aea3.jpeg",
            name: "Double Basic",
          },
          {
            price: "$300",
            id: "7",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-7.d2c011f0.jpeg",
            name: "Double Standard",
          },
          {
            price: "$400",
            id: "8",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-8.5b658df9.jpeg",
            name: "Double Deluxe",
          },
          {
            price: "$300",
            id: "9",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-9.18aabe9f.jpeg",
            name: "Family Economy",
          },
          {
            price: "$350",
            id: "10",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-10.681615dc.jpeg",
            name: "Family Basic",
          },
          {
            price: "$400",
            id: "11",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-11.1605f19e.jpeg",
            name: "Family Standard",
          },
          {
            price: "$500",
            id: "12",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-12.7dee4920.jpeg",
            name: "Family Deluxe",
          },
          {
            price: "$600",
            id: "13",
            img: "../images/home-third-room-img.jpeg",
            name: "Presidential",
          }
      ];
  return (
      <div className="searched-rooms">
        {
          featuredData?.map?.((room) => <div className="features-div">
          <div className="price">
            <p>
              {room?.price}
            </p>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${room?.name}`}>
            <button className="feature">FEATURE</button>
          </Link>
          <div className="img-wrapper">
            <div className="black"></div>
            <img src={room?.img} alt="" />
          </div>
          <div>{room?.name}</div>
        </div>)
        }
       
      </div>
  )
}

export default SearchedRoom
