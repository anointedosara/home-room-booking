import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SearchedRoom(props) {
  const [displayedData, setDisplayedData] = useState([]);
  const featuredData = [
    {
      price: 100,
      id: "1",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-1.05b90599.jpeg",
      name: "Single Economy",
      guests: 1,
      width: 200,
      height: 200,
      pets: false,
      breakfast: false
    },
    {
      price: 150,
      id: "2",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-2.48c60181.jpeg",
      name: "Single Basic",
      guests: 1,
      width: 250,
      height: 250,
      pets: false,
      breakfast: false
    },
    {
      price: 250,
      id: "3",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-3.92fc5b83.jpeg",
      name: "Single Standard",
      guests: 1,
      width: 300,
      height: 300,
      pets: true,
      breakfast: false
    },
    {
      price: 300,
      id: "4",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-4.10d2e64a.jpeg",
      name: "Single Deluxe",
      guests: 1,
      width: 250,
      height: 250,
      pets: true,
      breakfast: true
    },
    {
      price: 200,
      id: "5",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-5.a7c5e078.jpeg",
      name: "Double Economy",
      guests: 2,
      width: 400,
      height: 400,
      pets: false,
      breakfast: false
    },
    {
      price: 250,
      id: "6",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-6.3697aea3.jpeg",
      name: "Double Basic",
      guests: 2,
      width: 450,
      height: 450,
      pets: false,
      breakfast: false
    },
    {
      price: 300,
      id: "7",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-7.d2c011f0.jpeg",
      name: "Double Standard",
      guests: 2,
      width: 500,
      height: 500,
      pets: true,
      breakfast: false
    },
    {
      price: 400,
      id: "8",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-8.5b658df9.jpeg",
      name: "Double Deluxe",
      guests: 2,
      width: 600,
      height: 600,
      pets: true,
      breakfast: true
    },
    {
      price: 300,
      id: "9",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-9.18aabe9f.jpeg",
      name: "Family Economy",
      guests: 3,
      width: 700,
      height: 700,
      pets: false,
      breakfast: false
    },
    {
      price: 350,
      id: "10",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-10.681615dc.jpeg",
      name: "Family Basic",
      guests: 4,
      width: 800,
      height: 800,
      pets: false,
      breakfast: false
    },
    {
      price: 400,
      id: "11",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-11.1605f19e.jpeg",
      name: "Family Standard",
      guests: 5,
      width: 850,
      height: 850,
      pets: true,
      breakfast: false
    },
    {
      price: 500,
      id: "12",
      img: "https://mukul-breach-resort-project.netlify.app/static/media/room-12.7dee4920.jpeg",
      name: "Family Deluxe",
      guests: 6,
      width: 900,
      height: 900,
      pets: true,
      breakfast: true
    },
    {
      price: 600,
      id: "13",
      img: "../images/home-third-room-img.jpeg",
      name: "Presidential",
      guests: 10,
      width: 1000,
      height: 1000,
      pets: true,
      breakfast: true
    },
  ];

  const getData = () => {
    let filterData = [];

    if (props?.type === "all") {
      filterData = featuredData;
    } else {
      filterData = featuredData?.filter(room =>
        room.name.toLowerCase().includes(props.type),
      );
    }

    const fieldFilter = filterData.filter(
      room =>
        room?.price <= props.price &&
        props?.guests <= room?.guests &&
        room?.width >= props?.width &&
        room?.height <= props?.height,
    );

    const filteredData = props?.pets
      ? fieldFilter.filter(room => room?.pets)
      : props?.breakfast
      ? fieldFilter?.filter(room => room?.breakfast)
      : fieldFilter;
    setDisplayedData(filteredData);
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <div>
      {
         displayedData.length ? 
         <div className="searched-rooms">
          {
            displayedData?.map?.(room => (
              <div className="features-div">
                <div className="price">
                  <p>${room?.price}</p>
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
              </div>
            ))
          }
         </div> : <h2 style={{fontSize: '24px', margin: '100px 0 24px 0'}}>Unfortunately No Rooms Matched Your Search Parameters</h2>
    }
    </div>
  );
}

export default SearchedRoom;
