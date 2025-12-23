import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelBookingSummary.css";


const HotelBookingSummary = () => {
    return (
        <div className='hbooking_summary w-100 start fd-col'>
            <h4>Booking Summary</h4>
            <div className='HotelBookingSummary-hotel start fd-col w-100'>
                <Image
                    src='/images/hotel/hoteld/hotel-1.webp'
                    className='img-fluid hbshotel-name'
                    width={1638}
                    height={900}
                    alt='hotel booking status' />
                <p><strong>Burj Khalifa View Hotel</strong></p>
                <div className='HotelBookingSummary-hotel-rating start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/star.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <Image
                        src='/images/hotel/hoteld/star.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <Image
                        src='/images/hotel/hoteld/star.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <Image
                        src='/images/hotel/hoteld/star.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>4.9</p>
                </div>
                <div className='HotelBookingSummary-hotel-city start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/location.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>Downtown Dubai</p>
                </div>
            </div>
            <div className='HotelBookingSummary-hotel-about start fd-col'>
                <div className='HotelBookingSummary-hotel-abtbox start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/Calender.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>Check-in:</p>
                    <br />
                    <p>Check-out:</p>
                </div>
                <div className='HotelBookingSummary-hotel-abtbox start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/time.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>1 night</p>
                </div>
                <div className='HotelBookingSummary-hotel-abtbox start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/profile.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>2 guest</p>
                </div>
                <div className='HotelBookingSummary-hotel-abtbox start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/bed.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel booking status' />
                    <p>Standard Room</p>
                </div>
            </div>
            <table className='HotelBookingSummary-hotel-tableone start fd-col w-100'>
                <tr>
                    <td>Room (1 night)</td>
                    <td><strong>$350.00</strong></td>
                </tr>
                <tr>
                    <td>Taxes & Fees</td>
                    <td>$52.50</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><span>$350.00</span></td>
                </tr>
            </table>
            <div className='HotelBookingSummary-notice start fd-row'>
                <Image
                    src='/images/hotel/hoteld/important.webp'
                    className='img-fluid'
                    width={52}
                    height={52}
                    alt='hotel booking status' />
                <p>Free cancellation up to 48 hours before check-in</p>
            </div>
            <table className='HotelBookingSummary-hotel-tabletwo start fd-col w-100'>
                <th>
                    <td>Hotel Policy</td>
                </th>
                <tr>
                    <td><span>Check-in	</span></td>
                    <td>3:00 PM - 11:00 PM</td>
                </tr>
                <tr>
                    <td><span>Check-out	</span></td>
                    <td>Before 12:00 PM</td>
                </tr>
                <tr>
                    <td><span>Cancellation	</span></td>
                    <td>Free until 48h</td>
                </tr>
                <tr>
                    <td><span>Age Requirement</span></td>
                    <td>21+ years old</td>
                </tr>
                <tr>
                    <td><span>Pets</span></td>
                    <td>Allowed (+$50/night)</td>
                </tr>
                <tr>
                    <td><span>Smoking	</span></td>
                    <td>Non-smoking rooms</td>
                </tr>
                <tr>
                    <td><span>Payment	</span></td>
                    <td>Credit/Debit card</td>
                </tr>
                <tr>
                    <td><span>Deposit</span></td>
                    <td>$100 refundable</td>
                </tr>
                <tr>
                    <td><span>ID Required	</span></td>
                    <td>Government-issued</td>
                </tr>
                <tr>
                    <td><span>Children	</span></td>
                    <td>Welcome (0-12 free)</td>
                </tr>
            </table>
        </div>
    )
}

export default HotelBookingSummary
