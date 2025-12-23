import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";





const HotelDHighlight = () => {
    return (
        <div className='hoteld-highlights-box w-100 start fd-col mt-3'>
            <h4>Hotel Highlights</h4>
            <div className='hoteld-highlights-subbox btwn w-100 fd-row'>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/location-blue.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>Prime Location</strong></p>
                        <p>Downtown Dubai - Perfect central location</p>
                    </div>
                </div>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/star-blue.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>4.9 Star Property</strong></p>
                        <p>Highly rated by 3,456 verified guests</p>
                    </div>
                </div>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-b.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>Swimming Pool</strong></p>
                        <p>Relax in our refreshing pool area</p>
                    </div>
                </div>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/dining.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>On-Site Dining</strong></p>
                        <p>Restaurant & bar with diverse menu options</p>
                    </div>
                </div>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tea.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>Spa & Wellness</strong></p>
                        <p>Rejuvenate with our spa services</p>
                    </div>
                </div>
                <div className='hoteld-highlights-subbox-img-content start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-b.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-subbox_content start fd-col'>
                        <p><strong>Flexible Booking</strong></p>
                        <p>Free cancellation up to 72 hours before check-in</p>
                    </div>
                </div>
            </div>
            <div className='hoteld-highlights-favbox start fd-col w-100'>
                <div className='hoteld-highlights-favbox-heading start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/white-star.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <div className='hoteld-highlights-favbox-heading-content start fd-col'>
                        <h5><strong>Guest Favorite</strong></h5>
                        <p>This property is loved by guests for its excellent service, prime location, and outstanding amenities. Book with confidence!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDHighlight
