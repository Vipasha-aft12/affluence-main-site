import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelBookingStatusBDetail.css";


const HotelBookingStatusBDetail = () => {
    return (
         <div className='row hotel-booking-successful-summary w-100'>
                                <div className='col-12 hotel-booking-successful-summary-col start fd-col'>
                                    <h4>Booking Summary</h4>
                                    <div className='w-100 bs-hotel-image'>
                                        <Image
                                            src='/images/hotel/hoteld/hotel-1.webp'
                                            className='img-fluid hbshotel-name'
                                            width={1638}
                                            height={900}
                                            alt='hotel booking status' />
                                    </div>
                                    <div className='hotel-booking-successful-summary-pkg-info start fd-col'>
                                        <h5><strong>Package Information</strong></h5>
                                        <div className='hotel-booking-successful-summary-pkg-info-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hoteld/location.webp"
                                                className='img-fluid'
                                                width={52}
                                                height={52}
                                                alt="hotel booking status" />
                                            <p>Romantic Maldives Escape - Maldives</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-pkg-info-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hoteld/Calender.webp"
                                                className='img-fluid'
                                                width={52}
                                                height={52}
                                                alt="hotel booking status" />
                                            <p>5 Days, 4 Nights</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-pkg-info-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hoteld/Calender.webp"
                                                className='img-fluid'
                                                width={52}
                                                height={52}
                                                alt="hotel booking status" />
                                            <p>Departure: June 15, 2024</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-pkg-info-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hoteld/profile.webp"
                                                className='img-fluid'
                                                width={52}
                                                height={52}
                                                alt="hotel booking status" />
                                            <p>2 Adults</p>
                                        </div>
                                    </div>
                                    <table className='hotel-booking-successful-summary-table start fd-col w-100'>
                                        <th><h5><strong>Payment Detail</strong></h5></th>
                                        <tbody className='hotel-booking-successful-summary-tablebody start fd-col w-100'>
                                            <tr className='btwn fd-row'>
                                                <td>Hotel Accommodation (4 Nights)</td>
                                                <td>$699</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Round-trip Flights</td>
                                                <td>$150</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Airport Transfers</td>
                                                <td>$50</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Daily Breakfast</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Spa & Wellness Package</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Taxes & Fees</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr  className='btwn fd-row'>
                                                <td>Service Charge</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr className='hotel-booking-successful-summary-table-btmrow btwn fd-row'>
                                                <td><strong>Total Paid</strong></td>
                                                <td><span>$1499</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='hotel-booking-successful-summary-next start fd-col'>
                                        <h5><strong>What's Next?</strong></h5>
                                        <div className='hotel-booking-successful-summary-next-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hotelb/booking-sucessful.webp"
                                                className='img-fluid'
                                                width={156}
                                                height={156}
                                                alt="hotel booking status" />
                                            <p>Check your email for detailed booking confirmation and itinerary</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-next-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hotelb/booking-sucessful.webp"
                                                className='img-fluid'
                                                width={156}
                                                height={156}
                                                alt="hotel booking status" />
                                            <p>Ensure your passport is valid for at least 6 months from travel date</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-next-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hotelb/booking-sucessful.webp"
                                                className='img-fluid'
                                                width={156}
                                                height={156}
                                                alt="hotel booking status" />
                                            <p>Check visa requirements for your destination</p>
                                        </div>
                                        <div className='hotel-booking-successful-summary-next-box start fd-row'>
                                            <Image
                                                src="/images/hotel/hotelb/booking-sucessful.webp"
                                                className='img-fluid'
                                                width={156}
                                                height={156}
                                                alt="hotel booking status" />
                                            <p>Our travel team will contact you 7 days before departure</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default HotelBookingStatusBDetail
