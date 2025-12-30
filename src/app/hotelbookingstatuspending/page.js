import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingpending.css';
import HotelBookingCancellationPolicy from '@/component/hotelbookingcancellationpolicy/HotelBookingCancellationPolicy';
import HotelBookingStatusBDetail from '@/component/hotelbookingstatusbdetail/HotelBookingStatusBDetail';




const HotelBookingPending = () => {
    return (
        <section className='hotel-booking-pending-page'>
            <section className='hotel-booking-pending-breadcrumb hotel-booking-successful-breadcrumb'>
                <div className='container hotel-booking-pending-breadcrumb-container'>
                    <div className='row hotel-booking-pending-breadcrumb-row'>
                        <div className='col-12 hotel-booking-pending-breadcrumb-col'>
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

            <section className='hotel-booking-pending hotel-booking-successful'>
                <div className='container hotel-booking-pending-container start fd-col common-gap'>
                    <div className='row hotel-booking-pending w-100 hotel-booking-successful-confirmed'>
                        <div className='col-12 hotel-booking-pending-col cent fd-col hotel-booking-successful-confirmed-col'>
                            <Image
                                src="/images/hotel/hotelb/yellow-booking-pending.webp"
                                className='img-fluid booking-successful-img'
                                width={276}
                                height={276}
                                alt="hotel booking status" />
                            <p><strong>Booking Pending</strong></p>
                            <p>Your payment is being processed. This may take a few moments. Please do not refresh the page.</p>
                            
                            <div className='hotel-booking-pending-box w-100 btwn fd-col'>
                                <p><strong>Processing Payment</strong></p>
                                <p>We're verifying your payment with the bank. You'll receive a confirmation email once the booking is confirmed.</p>
                            </div>
                            <div className='hotel-booking-pending-box-rn w-100 cent fd-col'>
                                <p>Booking Reference</p>
                                    <p><span>ATR-2024-VQHTDFI4X</span></p>
                            </div>
                            <div className='hotel-booking-successful-pending-buttons cent fd-row w-100'>
                                <button className='btn hotel-booking-failed-download-btn cent hotel-booking-successful-download-btn fd-row'>
                                    <p>Check Status</p>
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

export default HotelBookingPending 