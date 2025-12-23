import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";





const HotelDOverview = () => {
    return (
        <div className='hoteld-overview-box w-100 start fd-col'>
            <h3>About This Property</h3>
            <div className='hoteld-overview-box-content w-100 start fd-col'> 
                <p>Ultra-luxury hotel with spectacular views of Burj Khalifa and Dubai Fountain.</p>
                <p>Located in the heart of Downtown Dubai, Burj Khalifa View Hotel stands as a premier luxury hoteloffering an exceptional blend of comfort, style, and convenience. This distinguished property sets the standard for upscale hospitality, featuring world-class amenities and impeccable service that caters to the most discerning travelers.</p>
                <p><strong>Accommodations &amp; Amenities:</strong> The property features panoramic suite accommodations that are thoughtfully designed with guest comfort in mind. while the sparkling pool provides a refreshing escape. The on-site dining venues serve delicious cuisine, offering everything from casual bites to fine dining experiences. The luxurious spa provides a tranquil sanctuary for relaxation and rejuvenation. Every detail has been carefully considered to enhance your experience and create a welcoming atmosphere.</p>
                <p><strong>Location &amp; Accessibility:</strong> Situated at Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, this property enjoys a prime location that puts you at the center of everything Dubai has to offer. The downtown location provides easy access to major attractions, dining, shopping, and entertainment venues, all within walking distance or a short drive away. The friendly staff is always ready to provide directions and recommendations for local dining and attractions.</p>
                <p><strong>Guest Experience:</strong> At Burj Khalifa View Hotel, we pride ourselves on delivering exceptional service that exceeds expectations. Our consistently high guest ratings reflect our commitment to excellence and attention to detail. From the moment you arrive, our dedicated team works tirelessly to anticipate your needs and provide personalized service. Our 24-hour concierge service can assist with restaurant reservations, transportation arrangements, and local recommendations. We understand that every traveler is unique, and we strive to create an experience that feels tailored just for you.</p>
                <p>Whether you're visiting for business or pleasure, planning a romantic getaway or a family vacation,Burj Khalifa View Hotel offers the perfect home base for your Dubai adventure. We look forward to welcoming you and making your stay truly exceptional.</p>
            </div>

            <div className='hoteld-overview-service w-100 btwn fd-row'>
                <div className='hoteld-overview-service-box start fd-col'>
                    <Image
                        src='/images/hotel/hoteld/hotel.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p>Room Type</p>
                    <p><strong>Panoramic Suite</strong></p>
                </div>
                <div className='hoteld-overview-service-box start fd-col'>
                    <Image
                        src='/images/hotel/hoteld/time.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p>Check-in</p>
                    <p><strong>3:00 PM</strong></p>
                </div>
                <div className='hoteld-overview-service-box start fd-col'>
                    <Image
                        src='/images/hotel/hoteld/time.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p>Check-out</p>
                    <p><strong>12:00 PM</strong></p>
                </div>
                <div className='hoteld-overview-service-box start fd-col'>
                    <Image
                        src='/images/hotel/hoteld/location-blue.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p>Property Type</p>
                    <p><strong>Luxury Hotel</strong></p>
                </div>
            </div>

            <div className='hoteld-overview-important w-100 start fd-col'>
                <div className='hoteld-overview-important-heading start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/important.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <h4>Important Notes</h4>
                </div>

                <div className='hoteld-overview-important-box w-100 start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/important.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p><strong>Check-in Policy:</strong>  Check-in time is 3:00 PM. Early check-in is subject to availability and may incur additional charges.</p>
                </div>
                <div className='hoteld-overview-important-box w-100 start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/important.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p><strong>Free Cancellation:</strong>  Cancel up to 48 hours before check-in for a full refund. Cancellations within 48 hours are subject to a one-night charge.</p>
                </div>
                <div className='hoteld-overview-important-box w-100 start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/important.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p><strong>Payment:</strong>  A valid credit card is required at check-in for incidentals. A security deposit may be held during your stay.</p>
                </div>
                <div className='hoteld-overview-important-box w-100 start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/shield.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p><strong>Valid ID Required:</strong> Government-issued photo identification and a credit card are required at check-in for all guests.</p>
                </div>
                <div className='hoteld-overview-important-box w-100 start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/important.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail image' />
                    <p><strong>Additional Policies:</strong> Smoking is not permitted. Pets may be allowed with advance notice (fees apply). Minimum age to check-in is 21.</p>
                </div>
            </div>

        </div>
    )
}

export default HotelDOverview
