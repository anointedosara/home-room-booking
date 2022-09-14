import React, { useState } from 'react'
import SearchedRoom from './SearchedRoom';

function SearchComponent() {
    const [searchData, setSearchData] = useState({
        roomType: "all",
        guests: 1,
        priceRange: 600,
        minSize: 0,
        maxSize: 1000,
        breakfast: false,
        pet: false
    })
 
     
  return (
    <div className='search'>
        <div>
            <h2>Search Rooms</h2>
            <div className='line'></div>

            <div className='searcher'>
                <div className='block'>
                    Rooms Type
                    <select value={searchData?.roomType} onChange={(e) => setSearchData({
                        ...searchData,
                        roomType: e.target.value
                    })}>
                        <option value="all">all</option>
                        <option value="single">single</option>
                        <option value="double">double</option>
                        <option value="family">family</option>
                        <option value="presidential">presidential</option>
                    </select>
                </div>
                
                <div className='block'>
                    Guests
                    <select value={searchData?.guests} onChange={(e) => setSearchData({
                        ...searchData,
                        guests: e.target.value
                    })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className='block'>
                    Room Price ${searchData?.priceRange}
                    <input type="range" min='0' max='600' value={searchData?.priceRange} onChange={(e) => {
                        setSearchData({
                            ...searchData,
                            priceRange: e.target.value
                        })
                    }} />
                </div>

                <div className='size'>
                    Room Size
                    <div>
                        <input type="number" min='0' value={searchData?.minSize} onChange={(e) => setSearchData({
                            ...searchData,
                            minSize: e.target.value
                        })}  />
                        <input type="number" value={searchData?.maxSize} onChange={(e) => setSearchData({
                            ...searchData,
                            maxSize: e.target.value
                        })}  />
                    </div>
                </div>

                <div className='check'>
                    <label For="breakfast">
                    <input id='breakfast' type="checkbox" checked={searchData?.breakfast} onChange={() => {
                        setSearchData({
                            ...searchData,
                            breakfast: !searchData?.breakfast
                        })
                    }} /><p>Breakfast</p>
                    </label><br />
                    <label For="pets">
                    <input id='pets' type="checkbox" checked={searchData?.pet} onChange={() => {
                        setSearchData({
                            ...searchData,
                            pet: !searchData?.pet
                        })
                    }} /><p>Pets</p>
                    </label>
                </div>
            </div>
        </div>

        <SearchedRoom />
    </div>
  )
}

export default SearchComponent