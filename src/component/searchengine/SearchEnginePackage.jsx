import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './SearchEngine.css';

const SearchEnginePackage = () => {
    return (
        <div className='search-engine-box btwn fd-row w-100 package-searchbox'>
            <div className='se-box start fd-col no-left-border mw-full'>
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
                <label>Departure Date</label>
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
                <label>Duration(nights)</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/time.webp"
                        className='img-fluid se-box-icon'
                        width={40}
                        height={40}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='3' />
                </div>
            </div>
            <div className='se-box start fd-col mw-full'>
                <label>Traveller</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/profile.webp"
                        className='img-fluid se-box-icon'
                        width={20 }
                        height={20}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='2 person' />
                </div>
            </div>
            <div className='se-box start fd-col no-left-border mw-full'>
                <label>Name of Passenger</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/profile.webp"
                        className='img-fluid se-box-icon'
                        width={20}
                        height={20}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Name' />
                </div>
            </div>
            <div className='se-box start fd-col mw-full'>
                <label>Email Address</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/email.webp"
                        className='img-fluid se-box-icon'
                        width={20}
                        height={20}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Email' />
                </div>
            </div>
            <div className='se-box start fd-col mw-full'>
                <label>Phone Number</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/call.webp"
                        className='img-fluid se-box-icon'
                        width={20}
                        height={20}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Number' />
                </div>
            </div>
            <button className='btn se-btn cent'>Search</button>
        </div>
    )
}

export default SearchEnginePackage
