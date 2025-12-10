import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightbooking.css';
import FlightBookingPriceDetail from '@/component/flightbookingpricedetail/FlightBookingPriceDetail';
import FlightBookingBaggage from '@/component/flightbookingbaggage/FlightBookingBaggage';
import FlightBookingCancel from '@/component/flightbookingcancel/FlightBookingCancel';
import FlightBookingPolicy from '@/component/flightbookingpolicy/FlightBookingPolicy';
import FlightBookingPayment from '@/component/flightbookingpayment/FlightBookingPayment';
import FlightBookingFlightDetail from '@/component/flightbookingflightdetail/FlightBookingFlightDetail';
import FlightBookingTravelProtection from '@/component/flightbookingtravelprotection/FlightBookingTravelProtection';
import FlightBookingContactDetail from '@/component/flightbookingcontactdetail/FlightBookingContactDetail';
import FlightBookingTravelerForm from '@/component/flightbookingtravelerform/FlightBookingTravelerForm';



const FlightBooking = () => {
    return (
        <section className='flight-booking'>
            <div className='container flight-booking-container'>
                <div className='row flight-booking-row start common-gap'>
                    <div className='col-lg-8 flight-booking-colone start fd-col common-gap'>
                        <FlightBookingFlightDetail />
                        <FlightBookingFlightDetail />
                        <FlightBookingBaggage />
                        <FlightBookingTravelProtection />
                        <FlightBookingContactDetail />
                        <div className="flight-booking-traveler-detail w-100 start fd-col flight-booking-commonbox">
                            <p className="flight-booking-commonbox-heading w-100"><span>Traveler Detail</span></p>
                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                <Image
                                    src="/images/flight-booking/adult.webp"
                                    className="img-fluid"
                                    width={20}
                                    height={20}
                                    alt="flight booking airline" />
                                <p>Adult (18+)</p>
                            </div>
                            <FlightBookingTravelerForm />
                        </div>
                        <div className="flight-booking-traveler-detail w-100 start fd-col flight-booking-commonbox">
                            <p className="flight-booking-commonbox-heading w-100"><span>Traveler Detail</span></p>
                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                <Image
                                    src="/images/flight-booking/child.webp"
                                    className="img-fluid"
                                    width={20}
                                    height={20}
                                    alt="flight booking airline" />
                                <p>Child (2 years - 18 years)</p>
                            </div>
                            <FlightBookingTravelerForm />
                        </div>
                        <div className="flight-booking-traveler-detail w-100 start fd-col flight-booking-commonbox">
                            <p className="flight-booking-commonbox-heading w-100"><span>Traveler Detail</span></p>
                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                <Image
                                    src="/images/flight-booking/infant.webp"
                                    className="img-fluid"
                                    width={20}
                                    height={20}
                                    alt="flight booking airline" />
                                <p>Infant (Below- 2 Years)</p>
                            </div>
                            <FlightBookingTravelerForm />
                        </div>
                        <FlightBookingCancel />
                        <FlightBookingPolicy />
                        <FlightBookingPayment />
                    </div>
                    <div className='col-lg-4 flight-booking-coltwo'>
                        <FlightBookingPriceDetail />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlightBooking 