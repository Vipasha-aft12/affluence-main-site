import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './SearchEngine.css';
import SearchEngineFlight from './SearchEngineFlight';
import SearchEngineHotel from './SearchEngineHotel';
import SearchEngineCar from './SearchEngineCar';
import SearchEngineCruise from './SearchEngineCruise';
import SearchEnginePackage from './SearchEnginePackage';
import SearchEngineActivity from './SearchEngineActivity';


const SearchEngine = () => {
    return (
        <div className='search-engine cent fd-col w-100'>
            <ul className="nav nav-pills mb-3 se-ul cent fd-row" id="pills-tab" role="tablist">
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link active se-li-btn cent fd-row w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <Image
                            src='/images/search-engine/flight.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/flight-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Flights</p></button>
                </li>
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link se-li-btn cent fd-row w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <Image
                            src='/images/search-engine/hotel.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/hotel-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Hotels</p>
                    </button>
                </li>
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link se-li-btn cent fd-row w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <Image
                            src='/images/search-engine/car.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/car-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Cars</p>
                    </button>
                </li>
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link se-li-btn cent fd-row w-100" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
                        <Image
                            src='/images/search-engine/cruise.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/cruise-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Cruise</p>
                    </button>
                </li>
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link se-li-btn cent fd-row w-100" id="pills-package-tab" data-bs-toggle="pill" data-bs-target="#pills-package" type="button" role="tab" aria-controls="pills-package" aria-selected="false">
                        <Image
                            src='/images/search-engine/pkg.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/pkg-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Package</p>
                    </button>
                </li>
                <li className="nav-item se-li" role="presentation">
                    <button className="nav-link se-li-btn cent fd-row w-100" id="pills-activity-tab" data-bs-toggle="pill" data-bs-target="#pills-activity" type="button" role="tab" aria-controls="pills-activity" aria-selected="false">
                        <Image
                            src='/images/search-engine/act.webp'
                            className='img-fluid se-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <Image
                            src='/images/search-engine/act-blue.webp'
                            className='img-fluid se-b-icons'
                            width={32}
                            height={32}
                            alt='Search icons' />
                        <p>Activities</p>
                    </button>
                </li>
            </ul>
            <div className="tab-content w-100" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <SearchEngineFlight />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <SearchEngineHotel />
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <SearchEngineCar />
                </div>
                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                    <SearchEngineCruise />
                </div>
                <div className="tab-pane fade" id="pills-package" role="tabpanel" aria-labelledby="pills-package-tab" tabindex="0">
                    <SearchEnginePackage />
                </div>
                <div className="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab" tabindex="0">
                    <SearchEngineActivity />
                </div>
            </div>
        </div>
    )
}

export default SearchEngine
