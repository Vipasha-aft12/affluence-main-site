import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDBookStay.css";


const HotelDBookStay = () => {
    return (
        <div className='hoteld-bookstay w-100 start fd-col'>
            <h5 className='hoteld-bookstay-border-bottom'>Book Your Stay</h5>
            <div className='hoteld-bookstay-top w-100 btwn fd-row hoteld-bookstay-border-bottom'>
                <div className='hoteld-bookstay-topleft-mainbox start fd-col'>
                    <p><strong>Standard Room</strong></p>
                    <div className='hoteld-bookstay-topleft start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/bed.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='book stay images' />
                        <p>Queen Bed</p>
                    </div>
                    <div className='hoteld-bookstay-topleft start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/profile.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='book stay images' />
                        <p>2 Guests</p>
                    </div>
                    <div className='hoteld-bookstay-topleft start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/building.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='book stay images' />
                        <p>350 sq ft</p>
                    </div>
                </div>
                <div className='hoteld-bookstay-topright start fd-col'>
                    <s>$435</s>
                    <p><span>$350</span></p>
                    <p>per night</p>
                    <p className='hoteld-bookstay-discount'>
                        Save 26%
                    </p>
                </div>
            </div>

            <table className='hoteld-bookstay-table w-100 start fd-col'>
                <th>
                    <td>Price Details</td>
                </th>
                <tr className='hoteld-bookstay-table-tr w-100 btwn'>
                    <td>$350 x 1 night</td>
                    <td>$350</td>
                </tr>
                <tr className='hoteld-bookstay-table-tr w-100 btwn'>
                    <td><span>Discount (26% off)</span></td>
                    <td><span>-$125</span></td>
                </tr>
                <tr className='hoteld-bookstay-table-tr w-100 btwn'>
                    <td>Cleaning fee</td>
                    <td>$25</td>
                </tr>
                <tr className='hoteld-bookstay-table-tr w-100 btwn'>
                    <td>Service fee</td>
                    <td>$15</td>
                </tr>
                <tr className='hoteld-bookstay-border-bottom hoteld-bookstay-table-tr w-100 btwn pb-2'>
                    <td>Taxes & Fees</td>
                    <td>Included</td>
                </tr>
                <tr className='hoteld-bookstay-border-bottom hoteld-bookstay-table-tr w-100 btwn pb-2'>
                    <td><strong>Total Price</strong></td>
                    <td><strong>$390</strong></td>
                </tr>
            </table> 

            <div className='hotel-booking-stay-button w-100 cent'>
                <Link className='cent w-100 hotel-booking-stay-btn' href='/hotelboookingcontactinformation'>Book Now</Link>
            </div>


            <div className='hoteld-bookstay-perks start fd-col w-100 hoteld-bookstay-border-bottom'>
                <div className='hoteld-bookstay-perk-box start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='book stay images' />
                    <p>Free Cancellation</p>
                </div>
                <div className='hoteld-bookstay-perk-box start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='book stay images' />
                    <p>No Booking Fees</p>
                </div>
                <div className='hoteld-bookstay-perk-box start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='book stay images' />
                    <p>Instant Confirmation</p>
                </div>
            </div>

            <div className='hoteld-bookstay-contact start fd-col w-100'>
                <h6>Questions?</h6>
                <div className='hoteld-bookstay-contact-box start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/call.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='book stay images' />
                    <a href="tel:+1-000-000-0000">+1-000-000-0000</a>
                </div>
                <div className='hoteld-bookstay-contact-box start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/email.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='book stay images' />
                    <a href="mailto:support@atravels.com">support@atravels.com</a>
                </div>
            </div>
        </div>
    )
}

export default HotelDBookStay
