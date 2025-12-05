import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './SearchEngine.css';

const SearchEngineHotel = () => {
    return (
        <div className='search-engine-box btwn fd-row w-100 hotel-searchbox'>
            <div className='se-box start fd-col mob-desti-hotel no-left-border mw-full'>
                <label>Destination</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/search.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Destination' />
                </div>
            </div>
            <div className='se-box start fd-col mw-half'>
                <label>Check-In</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/calender.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='MM/DD/YYYY' />
                </div>
            </div>
            <div className='se-box start fd-col mw-half'>
                <label>Check-Out</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/calender.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='MM/DD/YYYY' />
                </div>
            </div>
            <div className='se-box start fd-col mw-full'>
                <label>Guest & Rooms</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/guest.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='2 Person' />
                </div>
            </div>
            <button className='btn se-btn cent'>Search</button>
        </div>
    )
}

export default SearchEngineHotel
