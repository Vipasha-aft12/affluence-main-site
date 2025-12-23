import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDLocationNearby.css";


const HotelDLocationNearby = () => {
    return (
        <div className='hotel-d_locataion start w-100 fd-col'>
            <div className='hotel-d_locataion-icon w-100 cent'>
                <Image
                    src='/images/hotel/hoteld/location-blue.webp'
                    className='img-fluid'
                    width={52}
                    height={52}
                    alt='hotel detail location' />
            </div>
            <div className='hotel-d_locataion-content w-100 start fd-col'>
                <h5>Location & Nearby</h5>
                <div className='hotel-d_locataion-content-ln-box w-100 start fd-row'>
                    <div className='hotel-d_locataion-content-ln-image cent'>
                        <Image
                            src='/images/hotel/hoteld/location-blue.webp'
                            className='img-fluid'
                            width={52}
                            height={52} 
                            alt='hotel detail location' />
                    </div>
                    <div className='hotel-d_locataion-content-ln-content start fd-col'>
                        <p><strong>Downtown Dubai</strong></p>
                        <p>Prime location in city center</p>
                    </div>
                </div>
                <div className='hotel-d_locataion-content-ln-box w-100 start fd-row'>
                    <div className='hotel-d_locataion-content-ln-image cent'>
                        <Image
                            src='/images/hotel/hoteld/flight.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='hotel detail location' />
                    </div>
                    <div className='hotel-d_locataion-content-ln-content start fd-col'>
                        <p><strong>Dubai International Airport</strong></p>
                        <p className='w-100 btwn fd-row'><span>DXB,15-20 min by car</span> <span className='hoteld-t-b'>8.5 km</span></p>
                    </div>
                </div>
                <h6>Top Attraction</h6>
                    <ul className='hoteld-ln-ul start w-100 fd-col mb-0 ps-0'>
                        <li className='hoteld-ln-li btwn w-100 fd-row'>
                            <p className='hoteld-topattr-name'>Burj Khalifa</p>
                            <p className='hoteld-topattr-distance'>2.3 km</p>
                        </li>
                        <li className='hoteld-ln-li btwn w-100 fd-row'>
                            <p className='hoteld-topattr-name'>Dubai Mall</p>
                            <p className='hoteld-topattr-distance'>2.5 km</p>
                        </li>
                        <li className='hoteld-ln-li btwn w-100 fd-row'>
                            <p className='hoteld-topattr-name'>Dubai Fountain</p>
                            <p className='hoteld-topattr-distance'>2.7 km</p>
                        </li>
                        <li className='hoteld-ln-li btwn w-100 fd-row hoteld-ln-li-noborder'>
                            <p className='hoteld-topattr-name'>Museum of the Future</p>
                            <p className='hoteld-topattr-distance'>3.2 km</p>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default HotelDLocationNearby
