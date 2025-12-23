import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingsuccessful.css';
import HotelBookingCancellationPolicy from '@/component/hotelbookingcancellationpolicy/HotelBookingCancellationPolicy';




const HotelBookingSuccessful = () => {
    return (
        <section className='hotel-booking-successful-page'>
            <section className='hotel-booking-successful-breadcrumb'>
                <div className='container hotel-booking-successful-breadcrumb-container'>
                    <div className='row hotel-booking-successful-breadcrumb-row'>
                        <div className='col-12 hotel-booking-successful-breadcrumb-col'>
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

            <section className='hotel-booking-successful'>
                <div className='container hotel-booking-successful-container'>
                    <div className='row hotel-booking-successful-confirmed w-100'>
                        <div className='col-12 hotel-booking-successful-confirmed-col cent fd-col'>
                            <Image
                                src="/images/hotel/hotelb/green-booking-sucessful.webp"
                                className='img-fluid'
                                width={276}
                                height={276}
                                alt="hotel booking status" />
                            <p><strong>Booking Confirmed!</strong></p>
                            <p>Congratulations! Your booking has been successfully confirmed.</p>
                            <p><span>A confirmation email has been sent to your registered email address with all the details.</span></p>
                            <div className='hotel-booking-successful-confirmed-box w-100 btwn fd-row'>
                                <div className='hotel-booking-successful-confirmed-subbox start fd-col'>
                                    <p>Booking Reference</p>
                                    <p><span>ATR-2024-VQHTDFI4X</span></p>
                                </div>
                                <div className='hotel-booking-successful-confirmed-subbox start fd-col'>
                                    <p>Booking Date</p>
                                    <p><span>December 18, 2025 at 05:03 PM</span></p>
                                </div>
                            </div>
                            <div className='hotel-booking-successful-confirmed-buttons cent fd-row w-100'>
                                <button className='btn hotel-booking-successful-download-btn cent fd-row'>
                                    <Image
                                        src="/images/hotel/hotelb/download.webp"
                                        className='img-fluid'
                                        width={64}
                                        height={64}
                                        alt="hotel booking status" />
                                    <p>Download Confirmation</p>
                                </button>
                                <button className='btn hotel-booking-successful-backhome-btn cent fd-row'>
                                    <Image
                                        src="/images/hotel/hotelb/home.webp"
                                        className='img-fluid'
                                        width={64}
                                        height={64}
                                        alt="hotel booking status" />
                                    <p>Back to Home</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row hotel-booking-successful-summary w-100'>
                        <div className='col-12 hotel-booking-successful-summary-col start fd-col'>
                            <h4>Booking Summary</h4>
                            <div className='hotel-booking-successful-summary-pkg-info start fd-col'>
                                <p><strong>Package Information</strong></p>
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
                                        src="/images/hotel/hoteld/takeoff.webp"
                                        className='img-fluid'
                                        width={24}
                                        height={24}
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
                                <th><td><strong>Payment Details</strong></td></th>
                                <tr>
                                    <td>Package Price</td>
                                    <td>$1,299</td>
                                </tr>
                                <tr>
                                    <td>Taxes & Fees</td>
                                    <td>$150</td>
                                </tr>
                                <tr>
                                    <td>Service Charge</td>
                                    <td>$50</td>
                                </tr>
                                <tr className='hotel-booking-successful-summary-table-btmrow'>
                                    <td>Total Paid</td>
                                    <td><span>$1499</span></td>
                                </tr>
                            </table>
                            <div className='hotel-booking-successful-summary-next start fd-col'>
                                <h5>What's Next?</h5>
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
                    <div className='row hotel-booking-successful-confirmed-help w-100'>
                        <div className='col-12 hotel-booking-successful-confirmed-help-col start fd-col'>
                            <h5>Need Help?</h5>
                            <p>Our customer support team is available 24/7 to assist you with any questions.</p>
                            <div className='hotel-booking-successful-confirmed-help-box btwn fd-row w-100'>
                                <div className='hotel-booking-successful-confirmed-help-subbox start fd-row'>
                                    <Image
                                        src="/images/hotel/hoteld/call.webp"
                                        className='img-fluid'
                                        width={52}
                                        height={52}
                                        alt="hotel booking status" />
                                    <a href='tel:+1-000-000-0000'>+1-000-000-0000</a>
                                </div>
                                <div className='hotel-booking-successful-confirmed-help-subbox start fd-row'>
                                    <Image
                                        src="/images/hotel/hoteld/email.webp"
                                        className='img-fluid'
                                        width={52}
                                        height={52}
                                        alt="hotel booking status" />
                                    <a href='mailto:support@atravels.com'>support@atravels.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HotelBookingCancellationPolicy />
                </div>
            </section>

        </section>
    )
}

export default HotelBookingSuccessful 