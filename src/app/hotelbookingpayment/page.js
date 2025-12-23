import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingpayment.css';
import HotelBookingSummary from '@/component/hotelbookingsummary/HotelBookingSummary';





const HotelBookingPayment = () => {
    return (
        <section className='hbooking-contact-info-page'>
            <section className="hotel-listing-breadcrumb bdr-top">
                <div className="container hotel-listing-breadcrumb-container">
                    <div className="row hotel-listing-breadcrumb-row">
                        <div className="col-12 hotel-listing-breadcrumb-col">
                            <nav
                                style={{ "--bs-breadcrumb-divider": "'>'" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb p-0 mb-0 start fd-row">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Hotels</a></li>
                                    <li className="breadcrumb-item"><a href="#">Dubai Search Results</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Booking</li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

            <section className='hotelb-status'>
                <div className='container hotelb-status-container'>
                    <div className='row hotelb-status-row'>
                        <div className='col-12 hotelb-status-col cent'>
                            <div className='hotelb-status-col-box cent fd-row'>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>1</p>
                                    </div>
                                    <p>Contact Information</p>
                                </div>
                                <div className='hotelb-status-col-div'></div>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>2</p>
                                    </div>
                                    <p>Guest Details</p>
                                </div>
                                <div className='hotelb-status-col-div'></div>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>3</p>
                                    </div>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hbooking-guest-info'>
                <div className='container hbooking-guest-info-container'>
                    <div className='row hbooking-guest-info-row start'>
                        <div className='col-9 hbooking-guest-info-colone start fd-col'>
                            <div className='row hbooking-guest-info-colone-top w-100 start'>
                                <div className='col-12 hbooking-ginfo-col-heading btwn fd-row'>
                                    <h4>Contact Information</h4>
                                    <Link href='/hotelboookingcontactinformation'>Edit</Link>
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
                            <div className='row hbooking-guest-info-colone-top w-100 start'>
                                <div className='col-12 hbooking-ginfo-col-heading btwn fd-row'>
                                    <h4>Guest 1 Information</h4>
                                    <Link href='/hotelbookingguestdetail'>Edit</Link>
                                </div>
                                <div className='col-4 hbooking-ginfo-col start fd-col'>
                                    <p><span>Name</span></p>
                                    <p>a a</p>
                                </div>
                                <div className='col-4 hbooking-ginfo-col start fd-col'>
                                    <p><span>Date of Birth</span></p>
                                    <p>28-12-2025</p>
                                </div>
                                <div className='col-4 hbooking-ginfo-col start fd-col'>
                                    <p><span>Gender</span></p>
                                    <p>Male</p>
                                </div>
                            </div>
                            <div className='bpayment-box start fd-col w-100'>
                                <h5>Confirm Your Booking</h5>
                                <div className='bpayment-subbox w-100 start fd-col'>
                                    <div className='bpayment-subbox-heading start fd-row'>
                                        <Image
                                            src='/images/hotel/hoteld/important.webp'
                                            className='img-fluid'
                                            width={52}
                                            height={52}
                                            alt='hotel booking status' />
                                        <p><strong>Important Booking Information</strong></p>
                                    </div>
                                    <p>By confirming this booking, you acknowledge and agree to the following:</p>
                                    <ul className='start fd-col'>
                                        <li>All guest names provided are accurate and match government-issued identification documents</li>
                                        <li>Check-in and check-out dates have been verified and are correct</li>
                                        <li>You have reviewed and accept the hotel's cancellation policy</li>
                                        <li>Service fees are non-refundable under all circumstances</li>
                                        <li>All applicable taxes and fees are included in the total amount</li>
                                        <li>Payment will be processed securely through our payment gateway</li>
                                    </ul>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        I agree to the Terms and Conditions and Privacy Policy. I understand that my booking is subject to the hotel's cancellation policy.
                                    </label>
                                </div>
                                <div className='hpayment-disclaimer start fd-row'>
                                    <Image
                                        src='/images/hotel/hoteld/shield.webp'
                                        className='img-fluid'
                                        width={52}
                                        height={52}
                                        alt='hotel booking status' />
                                    <p>Your payment information is encrypted and secure. We never store your complete card details.</p>
                                </div>
                            </div>
                            <div className='hbooking-guest-info-colone-bottom btwn w-100'>
                                <Link href='/hotelbookingguestdetail'>Previous</Link>
                                <Link href='/hotelbookingstatussuccessful'>Pay Now</Link>
                            </div>
                            <Link href='/hotelbookingstatusfailed'>Pay Now (pending)</Link>
                            <Link href='/hotelbookingstatuspending'>Pay Now (failed)</Link>
                        </div>
                        <div className='col-3 hbooking-guest-info-coltwo'>
                            <HotelBookingSummary />
                        </div>
                    </div>

                </div>
            </section>

        </section>
    )
}

export default HotelBookingPayment 