import Image from "next/image";
import React from 'react'
import './FlightBookingPolicy.css'

const FlightBookingPolicy = () => {

    return (
        <div className="flight-booking-policy w-100 start fd-col flight-booking-commonbox">
            <p className="flight-booking-commonbox-heading w-100"><span>Policies & Reviews</span></p>
            <div className="row flight-booking-policy-row start w-100 fbcommon-row-padding">
                <div className="col-12 flight-booking-policy-colone start">
                    <p><strong>Traveler 1: Ajay Verma   |  Male  |   16 , Nov,  1980 |   Edit Changes</strong></p>
                </div>
                <div className="col-sm-6 flight-booking-policy-coltwo start fd-row">
                    <Image
                        src="/images/flight-booking/flight.webp"
                        className="img-fluid"
                        width={72}
                        height={70}
                        alt="flight booking airline" />
                    <div className="flight-booking-airline">
                        <p><strong>American Airlines</strong></p>
                        <p>AA-4032</p>
                    </div>
                </div>
                <div className="col-sm-6 flight-booking-policy-colthree start fd-col">
                    <p><strong>Cabin</strong></p>
                    <p>Economy</p>
                    <p>Flight Duration: 16h 55m, Non-Stop</p>
                </div>
                <div className="col-12 flight-booking-policy-colfour start fd-col">
                    <p><strong>New Delhi IGI to New York JKF</strong>  - Thu, Dec 27</p>
                    <p><strong>11:55pm</strong><span></span> <strong>6:20am</strong> - Fri, Dec 28</p>
                </div>
                <div className="col-12 flight-booking-policy-colfive start fd-col">
                    <p><strong>Operated by American Airlines</strong></p>
                    <p>Tickets are non-transferable, and name changes are not allowed. The total price displayed includes all applicable taxes, fees, and service charges. Additional baggage or other fees may apply, as determined by the airline. Fares are not guaranteed until ticketed. Tickets and service fees are non-refundable (see Fare Rules), and some taxes or government fees may also be non-refundable. Cancellations within 24 hours of purchase may be allowed for a fee. Date and route changes are subject to airline policies and applicable service fees.</p>
                </div>
            </div>
        </div>
    )
}

export default FlightBookingPolicy