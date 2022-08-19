import React from 'react'
import { Link } from 'react-router-dom'

function DetailTwoIntro() {
  return (
        <div className='detail-0ne-intro'>
        <div className='details-intro2'>
            <div className='details-intro-div'>
                <h1>Family Deluxe Room</h1>
                <div></div>
                <Link to="/rooms"><button>BACK TO ROOMS</button></Link>
            </div>
        </div>

        <div className='details'>
            <div className='details-div'>
                <div>
                    <img src="./images/details-1.jpeg" alt="" />
                </div>

                <div>
                    <img src="./images/details-2.jpeg" alt="" />
                </div>

                <div>
                    <img src="./images/details-3.jpeg" alt="" />
                </div>
            </div>
        </div>

        <div className='infomation'>
            <div>
                <h2>Details:</h2>
                <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p>
            </div>

            <div>
                <h2>Information:</h2>
                <p>Price : $500</p>
                <p>Size : 700 SQFT</p>
                <p>Max Capacity : 6 People</p>
                <p>Pets Allowed</p>
                <p>Free Breakfast Included</p>
            </div>
        </div>

        <div className='extras'>
            <h1>Extras:</h1>
            <div className='list'>
                <div>
                    <p>- Plush pillows and breathable bed linens</p>
                    <p>- Soft, oversized bath towels</p>
                    <p>- Full-sized, pH-balanced toiletries</p>
                    <p>- Complimentary refreshments</p>
                    <p>- Adequate safety/security</p>
                    <p>- Internet</p>
                    <p>- Comfortable beds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailTwoIntro