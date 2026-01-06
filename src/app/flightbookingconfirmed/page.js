import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightbookingconfirmed.css';
import FlightBookingFDetail from '@/component/flightbookingfdetail/FlightBookingfdetail';
import FlightBookingPassDetail from '@/component/flightbookingpassdetail/FlightBookingPassDetail';



 
const FlightBookingConfirmed = () => {
    return (
        <section className='flightbooking-confirmed'>
            <div className='container flightbookingpage-container start fd-col common-gap'>
                <div className='row flightbookingpage-btyperow flight-booking-commonrow w-100'>
                    <div className='col-12 flightbookingpage-btypecol cent fd-col flightbooking-confirmed-col'>
                        <Image
                            src='/images/final-flight-booking/confirm.webp'
                            className='img-fluid'
                            width={276}
                            height={276}
                            alt='flight booking' />
                        <h3>Booking Confirmed</h3>
                        <p>Your flight has been successfully booked</p>
                        <div className='flightbookingpage-btypecol-box cent fd-row'>
                            <div className='flightbookingpage-btypecol-subbox'>
                                <p>Booking Reference: <strong>#216186</strong></p>
                            </div>
                            <div className='flightbookingpage-btypecol-subbox'>
                                <p>PNR: <strong>AA4032DEL</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <FlightBookingFDetail />
                <FlightBookingPassDetail />
                <div className='row flight-booking-paysummary start w-100 flight-booking-commonrow'>
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
                                 <tr className='flight-booking-paysummary-colone-tabletr no-border w-100 btwn fd-row'>
                                    <td><strong>Total Paid</strong></td>
                                    <td><span>AED 463.77</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-3 flight-booking-paysummary-coltwo cent'>
                        <Image
                            src='/images/final-flight-booking/paid.webp'
                            className='img-fluid'
                            width={360}
                            height={280}
                            alt='flight booking' />
                    </div>
                </div>
                <div className='row flightbooking-confirmed-button-rows start common-gap w-100'>
                    <div className='col-6 flightbooking-confirmed-button-colone'>
                        <button className='btn flightbooking-confirmed-button-colone-box cent w-100'>
                        Download E-Ticket
                        </button>
                    </div>
                    <div className='col-6 flightbooking-confirmed-button-coltwo'>
                        <button className='btn flightbooking-confirmed-button-coltwo-box cent w-100'>
                            View Booking Details
                        </button>
                    </div>
                    <div className='col-12 flightbooking-confirmed-button-colthree'>
                        <div className='flightbooking-confirmed-button-colthree-box cent fd-col'>
                            <p><strong>Confirmation email has been sent to your registerd email address</strong></p>
                            <p>Thank you for booking with us!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlightBookingConfirmed 