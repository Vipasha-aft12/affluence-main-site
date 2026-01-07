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
import FlightBookingMultipleFlightDetail from '@/component/flightbookingmultipleflightdetail/FlightBookingMultipleFlightDetail';



const FlightBooking = () => {
    return (
        <section className='flight-booking'>
            <div className='container flight-booking-container'>
                <div className='row flight-booking-row start common-gap'>
                    <div className='col-lg-8 flight-booking-colone start fd-col common-gap'>
                        <FlightBookingFlightDetail />
                        <FlightBookingMultipleFlightDetail />
                        <FlightBookingBaggage />
                        <FlightBookingTravelProtection />
                        <FlightBookingContactDetail />
                        <div className="flight-booking-traveler-detail w-100 start fd-col flight-booking-commonbox">
                            <div className="accordion accordion-flush w-100" id="accordionFlushExample">
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                                <Image
                                                    src="/images/flight-booking/adult.webp"
                                                    className="img-fluid"
                                                    width={20}
                                                    height={20}
                                                    alt="flight booking airline" />
                                                <p>Adult (18+)</p>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">

                                            <FlightBookingTravelerForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                                <Image
                                                    src="/images/flight-booking/child.webp"
                                                    className="img-fluid"
                                                    width={20}
                                                    height={20}
                                                    alt="flight booking airline" />
                                                <p>Child (2 years - 18 years)</p>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">


                                            <FlightBookingTravelerForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='flight-booking-traveler-detail-type start fd-row'>
                                                <Image
                                                    src="/images/flight-booking/infant.webp"
                                                    className="img-fluid"
                                                    width={20}
                                                    height={20}
                                                    alt="flight booking airline" />
                                                <p>Infant (Below- 2 Years)</p>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">

                                            <FlightBookingTravelerForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FlightBookingCancel />
                        <FlightBookingPolicy />
                        <FlightBookingPayment />
                    </div>
                    <div className='col-lg-4 flight-booking-coltwo sticky-top'>
                        <FlightBookingPriceDetail />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FlightBooking 