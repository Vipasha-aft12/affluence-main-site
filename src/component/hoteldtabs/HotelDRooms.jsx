import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";
import HotelDRoomDetail from './HotelDRoomDetail';





const HotelDRooms = () => {
    return (
        <div className='hoteld-room-box start fd-col w-100 mt-3'>
            <h4>Available Rooms</h4>
            <h5>Standard Rooms</h5>
            <HotelDRoomDetail />
            <h5>Deluxe Rooms</h5>
            <HotelDRoomDetail />
            <h5>Suite Rooms</h5>
            <HotelDRoomDetail />
            <h4>Additional Services</h4>
            <div className='hoteld-room-box-services btwn fd-row w-100'>
                <div class="form-check cent fd-row">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            <strong>Breakfast Included</strong><br />
                            Daily breakfast buffet for all guests
                        </label>
                </div>
                <p><span>+25/person/night</span></p>
            </div>
            <div className='hoteld-room-box-services btwn fd-row w-100'>
                <div class="form-check cent fd-row">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            <strong>Parking</strong> <br />
                            Secure on-site parking
                        </label>
                </div>
                <p><span>+25/night</span></p>
            </div>
        </div>
    )
}

export default HotelDRooms
