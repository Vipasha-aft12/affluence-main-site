import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './SearchEngine.css';
import DatePickerModal from '../datepickermodal/DatePickerModal';

const SearchEngineCar = () => {
    return (
        <div className='search-engine-box btwn fd-row w-100 car-searchbox'>
            <div className='se-box start fd-col no-left-border mw-full'>
                <label>Pick-up Location</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/search.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Location' />
                </div>
            </div>
            <div className='se-box start fd-col mw-full'>
                <label>Drop-off Location</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/search.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <input type='text' placeholder='Enter Location' />
                </div>
            </div>
            <div className='se-box start fd-col'>
                <label>Pick-up Date</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/calender.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <DatePickerModal /> 
                </div>
            </div>
            <div className='se-box start fd-col'>
                <label>Drop-off Date</label>
                <div className='se-input-box start fd-row'>
                    <Image
                        src="/images/search-engine/calender.webp"
                        className='img-fluid se-box-icon'
                        width={24}
                        height={24}
                        alt="Search Engine Icons" />
                    <DatePickerModal /> 
                </div>
            </div>
            <button className='btn se-btn cent'>Search</button>
        </div>
    )
}

export default SearchEngineCar
