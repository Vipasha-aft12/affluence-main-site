import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingfailed.css';
import HotelBookingCancellationPolicy from '@/component/hotelbookingcancellationpolicy/HotelBookingCancellationPolicy';
import HotelBookingStatusBDetail from '@/component/hotelbookingstatusbdetail/HotelBookingStatusBDetail';




const HotelBookingFailed = () => {
    return (
        <section className='hotel-booking-failed-page'>
            <section className='hotel-booking-failed-breadcrumb'>
                <div className='container hotel-booking-failed-breadcrumb-container'>
                    <div className='row hotel-booking-failed-breadcrumb-row'>
                        <div className='col-12 hotel-booking-failed-breadcrumb-col'>
                            <nav
                                style={{ "--bs-breadcrumb-divider": "'>'" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb p-0 mb-0 start fd-row">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Hotels</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Booking Status</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hotel-booking-failed'>
                <div className='container hotel-booking-failed-container'>
                    <div className='row hotel-booking-failed-confirmed w-100'>
                        <div className='col-12 hotel-booking-failed-confirmed-col cent fd-col'>
                            <Image
                                src="/images/hotel/hotelb/red-booking-failed.webp"
                                className='img-fluid'
                                width={276}
                                height={276}
                                alt="hotel booking status" />
                            <p><strong>Payment Failed</strong></p>
                            <p>Unfortunately, we couldn't process your payment. Please try again or use a different payment method.</p>
                            
                            <div className='hotel-booking-failed-confirmed-box w-100 btwn fd-col'>
                                <p><strong>Error Detail</strong></p>
                                <p>Payment Declined by your bank. Please check your card details or try a different payment method.</p>
                            </div>
                            <div className='hotel-booking-successful-failed-buttons cent fd-row w-100'>
                                <button className='btn hotel-booking-failed-download-btn cent fd-row'>
                                    <p>Retry Payment</p>
                                </button>
                                <button className='btn hotel-booking-failed-backhome-btn cent fd-row'>
                                    <p>Back to Home</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <HotelBookingStatusBDetail />
                    <HotelBookingCancellationPolicy />
                </div>
            </section>

        </section>
    )
}

export default HotelBookingFailed 