import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";
import HotelDOverview from './HotelDOverview';
import HotelDHighlight from './HotelDHighlights';
import HotelDRooms from './HotelDRooms';
import HotelDAmenities from './HotelDAmenities';
import HotelDPolicies from './HotelDPolicies';



 

const HotelDTabs = () => {
    return (
        <div className='hoteld-tab start fd-col w-100'>
            <nav className='hoteld-tab-nav w-100'>
                <div className="nav nav-tabs hoteld-tab-nt start fd-row w-100 mb-3 py-2" id="nav-tab" role="tablist">
                    <button className="nav-link active hoteld-tab-btn" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">Overview</button>
                    <button className="nav-link hoteld-tab-btn" id="nav-highlight-tab" data-bs-toggle="tab" data-bs-target="#nav-highlight" type="button" role="tab" aria-controls="nav-highlight" aria-selected="false">Highlight</button>
                    <button className="nav-link hoteld-tab-btn" id="nav-rooms-tab" data-bs-toggle="tab" data-bs-target="#nav-rooms" type="button" role="tab" aria-controls="nav-rooms" aria-selected="false">Rooms</button>
                    <button className="nav-link hoteld-tab-btn" id="nav-amenities-tab" data-bs-toggle="tab" data-bs-target="#nav-amenities" type="button" role="tab" aria-controls="nav-amenities" aria-selected="false">Amenities</button>
                    <button className="nav-link hoteld-tab-btn" id="nav-policy-tab" data-bs-toggle="tab" data-bs-target="#nav-policy" type="button" role="tab" aria-controls="nav-policy" aria-selected="false">Policies</button>
                </div>
            </nav>
            <div className="tab-content hoteld-tab-tc w-100" id="nav-tabContent">
                <div className="tab-pane fade show active hoteld-tab-tp hoteld-tab-tp-over_view w-100" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab" tabindex="0">
                    <HotelDOverview />
                    <HotelDHighlight />
                    <HotelDRooms />
                    <HotelDAmenities />
                    <HotelDPolicies />
                </div>
                <div className="tab-pane fade hoteld-tab-tp w-100" id="nav-highlight" role="tabpanel" aria-labelledby="nav-highlight-tab" tabindex="0">
                    <HotelDHighlight />
                </div>
                <div className="tab-pane fade hoteld-tab-tp w-100" id="nav-rooms" role="tabpanel" aria-labelledby="nav-rooms-tab" tabindex="0">
                    <HotelDRooms />
                </div>
                <div className="tab-pane fade hoteld-tab-tp w-100" id="nav-amenities" role="tabpanel" aria-labelledby="nav-amenities-tab" tabindex="0">
                    <HotelDAmenities />
                </div>
                <div className="tab-pane fade hoteld-tab-tp w-100" id="nav-policy" role="tabpanel" aria-labelledby="nav-policy-tab" tabindex="0">
                    <HotelDPolicies />
                </div>
            </div>
        </div>
    )
}

export default HotelDTabs
