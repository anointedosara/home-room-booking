import React from 'react'
import { Link } from 'react-router-dom';

function SearchedRoom(props) {
    const featuredData = [
        {
          price: 100,
          id: "1",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-1.05b90599.jpeg",
          name: "Single Economy",
          guests: 1,
          width: 200,
          height: 200,
          pets: false
        },
        {
          price: 150,
          id: "2",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-2.48c60181.jpeg",
          name: "Single Basic",
          guests: 1,
          width: 250,
          height: 250,
          pets: false
        },
        {
          price: 250,
          id: "3",
          img: "https://mukul-breach-resort-project.netlify.app/static/media/room-3.92fc5b83.jpeg",
          name: "Single Standard",
          guests: 1,
          width: 300,
          height: 300,
          pets: true
        },
        {
            price: 300,
            id: "4",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-4.10d2e64a.jpeg",
            name: "Single Deluxe",
            guests: 1,
            width: 250,
            height: 250,
            pets: true
          },
          {
            price: 200,
            id: "5",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-5.a7c5e078.jpeg",
            name: "Double Economy",
            guests: 2,
            width: 400,
            height: 400,
            pets: false
          },
          {
            price: 250,
            id: "6",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-6.3697aea3.jpeg",
            name: "Double Basic",
            guests: 2,
            width: 450,
            height: 450,
            pets: false
          },
          {
            price: 300,
            id: "7",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-7.d2c011f0.jpeg",
            name: "Double Standard",
            guests: 2,
            width: 500,
            height: 500,
            pets: true
          },
          {
            price: 400,
            id: "8",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-8.5b658df9.jpeg",
            name: "Double Deluxe",
            guests: 2,
            width: 600,
            height: 600,
            pets: true
          },
          {
            price: 300,
            id: "9",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-9.18aabe9f.jpeg",
            name: "Family Economy",
            guests: 3,
            width: 700,
            height: 700,
            pets: false
          },
          {
            price: 350,
            id: "10",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-10.681615dc.jpeg",
            name: "Family Basic",
            guests: 4,
            width: 800,
            height: 800,
            pets: false
          },
          {
            price: 400,
            id: "11",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-11.1605f19e.jpeg",
            name: "Family Standard",
            guests: 5,
            width: 850,
            height: 850,
            pets: true
          },
          {
            price: 500,
            id: "12",
            img: "https://mukul-breach-resort-project.netlify.app/static/media/room-12.7dee4920.jpeg",
            name: "Family Deluxe",
            guests: 6,
            width: 900,
            height: 900,
            pets: true
          },
          {
            price: 600,
            id: "13",
            img: "../images/home-third-room-img.jpeg",
            name: "Presidential",
            guests: 10,
            width: 1000,
            height: 1000,
            pets: true
          }
      ];

      const filteredData = featuredData?.filter((item) => item?.name.toLowerCase().includes(props.type) && item.price <= props.price 
      && item.guests >= props.guests && item.width >= props.width && item.height <= props.height && item.pets === props.pets)
      
  return (
      <div className="searched-rooms">
        { props.type !== 'all' ?
          filteredData?.map?.((room) => <div className="features-div">
          <div className="price">
            <p>
              ${room?.price}
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
        </div>) : 
        featuredData.filter((item) => item.price <= props.price && item.guests >= props.guests
        && item.width >= props.width && item.height <= props.height && item.pets === props.pets)?.map?.((room) => <div className="features-div">
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
