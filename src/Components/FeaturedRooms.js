import React from "react";
import { Link } from "react-router-dom";

function FeaturedRooms() {
  const featuredData = [
    {
      price: "$400",
      id: "1",
      img: "./images/home-first-room-img.jpeg",
      name: "Double Deluxe",
    },
    {
      price: "$500",
      id: "2",
      img: "./images/home-second-room-img.jpeg",
      name: "Family Deluxe",
    },
    {
      price: "$600",
      id: "3",
      img: "./images/home-third-room-img.jpeg",
      name: "Presidential",
    },
  ];

  return (
    <div className="featured-rooms">
      <h2>Featured Rooms</h2>
      <div className="line"></div>
      <div className="features">
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
    </div>
  );
}

export default FeaturedRooms;
