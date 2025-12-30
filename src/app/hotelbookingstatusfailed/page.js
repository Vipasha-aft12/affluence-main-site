import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingfailed.css';
import HotelBookingCancellationPolicy from '@/component/hotelbookingcancellationpolicy/HotelBookingCancellationPolicy';
import HotelBookingStatusBDetail from '@/component/hotelbookingstatusbdetail/HotelBookingStatusBDetail';




const HotelBookingFailed = () => {
    return (
        <section className='hotel-booking-failed-page'>
            <section className='hotel-booking-failed-breadcrumb hotel-booking-successful-breadcrumb'>
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

            <section className='hotel-booking-failed hotel-booking-successful'>
                <div className='container hotel-booking-failed-container start fd-col common-gap'>
                    <div className='row hotel-booking-failed-confirmed w-100 hotel-booking-successful-confirmed'>
                        <div className='col-12 hotel-booking-failed-confirmed-col cent fd-col hotel-booking-successful-confirmed-col'>
                            <Image
                                src="/images/hotel/hotelb/red-booking-failed.webp"
                                className='img-fluid booking-successful-img'
                                width={276}
                                height={276}
                                alt="hotel booking status" />
                            <p><strong>Payment Failed</strong></p>
                            <p>Unfortunately, we couldn't process your payment. Please try again or use a different payment method.</p>
                            
                            <div className='hotel-booking-failed-confirmed-box w-100 btwn fd-col'>
                                <p><strong>Error Detail</strong></p>
                                <p>Payment Declined by your bank. Please check your card details or try a different payment method.</p>
                            </div>
                            <div className='hotel-booking-successful-failed-buttons mt-2 hotel-booking-successful-confirmed-buttons cent fd-row w-100'>
                                <button className='btn hotel-booking-failed-download-btn hotel-booking-successful-download-btn cent fd-row'>
                                    <p>Retry Payment</p>
                                </button>
                                <button className='btn hotel-booking-failed-backhome-btn hotel-booking-successful-download-btn cent fd-row'>
                                    <p>Back to Home</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row hbooking-guest-info-colone-top w-100 start'>
                                <div className='col-12 hbooking-ginfo-col-heading btwn fd-row'>
                                    <h4>Contact Information</h4>
                                   
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Name</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Email</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Phone</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Country</span></p>
                                    <p>United States</p>
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