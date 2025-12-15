import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageHotel.css';


const HomepageHotel = () => {
    return (
        <div className='col-3 homepage-hotel-col'>
            <div className='homepage-hotel-box w-100 cent fd-col'>
                <div className='homepage-hotel-box w-100 start fd-col'>
                    <Image
                        src='/images/homepage/hp-hotel.webp'
                        className='img-fluid homepage-hotel'
                        width={626}
                        height={542}
                        alt='Homepage hotel' />
                    <p>Up to 20% off</p>
                </div>
                <div className='homepage-hotel-box-content w-100 start fd-col'>
                    <p><strong>The Crown Plaza</strong></p>
                    <p>United Kingdom, London</p>
                    <div className='homepage-hotel-box-rating start fd-row'>
                        <Image
                            src='/images/homepage/star-y.webp'
                            className='img-fluid homepage-hotel-star'
                            width={29}
                            height={24}
                            alt='Homepage hotel star' />
                        <p>4.8 Star</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageHotel
