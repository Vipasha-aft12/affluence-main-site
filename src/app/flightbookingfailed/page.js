import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightbookingfailed.css';
import FlightBookingFDetail from '@/component/flightbookingfdetail/FlightBookingfdetail';
import FlightBookingPassDetail from '@/component/flightbookingpassdetail/FlightBookingPassDetail';


const FlightBookingFailed = () => {
    return (
        <section className='flightbooking-failed'>
            <div className='container flightbookingpage-container start fd-col common-gap'>
                <div className='row flightbookingpage-btyperow flight-booking-commonrow flight-booking-commonrow w-100'>
                    <div className='col-12 flightbookingpage-btypecol cent fd-col flightbooking-confirmed-col'>
                        <Image
                            src='/images/final-flight-booking/booking-failed.webp'
                            className='img-fluid'
                            width={276}
                            height={276}
                            alt='flight booking' />
                        <h3>Booking Failed</h3>
                        <p>We are processing your booking</p>
                        <div className='flightbookingpage-btypecol-box cent fd-row'>
                            <div className='flightbookingpage-btypecol-subbox'>
                                <p>Booking Reference: <strong>#216186</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <FlightBookingFDetail />
                <FlightBookingPassDetail />
                <div className='row flight-booking-paysummary cent w-100 flight-booking-commonrow'>
                    <div className='col-12 flight-booking-paysummary-heading'>
                        <h3>Payment Summary</h3>
                    </div>
                    <div className='col-9 flight-booking-paysummary-colone'>
                        <table className='flight-booking-paysummary-colone-table w-100'>
                            <tbody className='flight-booking-paysummary-colone-tablebody w-100 start fd-col'>
                                <tr className='flight-booking-paysummary-colone-tabletr w-100 btwn fd-row'>
                                    <td>Base Fare</td>
                                    <td><strong>AED 38000</strong></td>
                                </tr>
                                <tr className='flight-booking-paysummary-colone-tabletr w-100 btwn fd-row'>
                                    <td>Taxes & Fees</td>
                                    <td><strong>AED 83.77</strong></td>
                                </tr>
                                <tr className='flight-booking-paysummary-colone-tabletr w-100 btwn fd-row  no-border'>
                                    <td><strong>Total Paid</strong></td>
                                    <td><span>AED 463.77</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-3 flight-booking-paysummary-coltwo cent'>
                        <Image
                            src='/images/final-flight-booking/unpaid.webp'
                            className='img-fluid'
                            width={360}
                            height={280}
                            alt='flight booking' />
                    </div>
                    <div className='col-sm-6 flight-booking-paysummary-colthree'>
                        <button className='btn flight-failed-booking-btn-one w-100'>Mark as Pending</button>
                    </div>
                    <div className='col-sm-6 flight-booking-paysummary-colthree'>
                        <button className='btn flight-failed-booking-btn-two w-100'>Retry Payment</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlightBookingFailed  