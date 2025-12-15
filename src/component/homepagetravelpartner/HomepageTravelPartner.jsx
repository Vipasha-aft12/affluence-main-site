import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageTravelPartner.css';


const HomepageTravelPartner = () => {
    return (
        <div className='col-12 homepagetravel-partner-col btwn fd-row'>
            <div className='homepagetravel-partner-box cent fd-col'>
                <p><strong>Easy Booking</strong></p>
                <Image
                    src='/images/homepage/easy-booking.webp'
                    className='img-fluid homepage-travelpartner'
                    width={80}
                    height={80}
                    alt='Homepage travel partner' />
                <p>We offer easy and convenient flight bookings with attractive offers.</p>
            </div>
            <div className='homepagetravel-partner-box cent fd-col'>
                <p><strong>Lowest Price</strong></p>
                <Image
                    src='/images/homepage/lowest-price.webp'
                    className='img-fluid homepage-travelpartner'
                    width={80}
                    height={80}
                    alt='Homepage travel partner' />
                <p>We offer easy and convenient flight bookings with attractive offers.</p>
            </div>
            <div className='homepagetravel-partner-box cent fd-col'>
                <p><strong>Best Deals</strong></p>
                <Image
                    src='/images/homepage/best-deal.webp'
                    className='img-fluid homepage-travelpartner'
                    width={80}
                    height={80}
                    alt='Homepage travel partner' />
                <p>We offer easy and convenient flight bookings with attractive offers.</p>
            </div>
            <div className='homepagetravel-partner-box cent fd-col'>
                <p><strong>24/7 Support</strong></p>
                <Image
                    src='/images/homepage/24_7.webp'
                    className='img-fluid homepage-travelpartner'
                    width={80}
                    height={80}
                    alt='Homepage travel partner' />
                <p>We offer easy and convenient flight bookings with attractive offers.</p>
            </div>
            <div className='homepagetravel-partner-box cent fd-col tp-no-border'>
                <p><strong>Easy Refund</strong></p>
                <Image
                    src='/images/homepage/easy-refund.webp'
                    className='img-fluid homepage-travelpartner'
                    width={80}
                    height={80}
                    alt='Homepage travel partner' />
                <p>We offer easy and convenient flight bookings with attractive offers.</p>
            </div>
        </div>
    )
}

export default HomepageTravelPartner
