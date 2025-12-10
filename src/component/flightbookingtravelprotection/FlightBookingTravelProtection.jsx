import Image from "next/image";
import React from 'react'
import './FlightBookingTravelProtection.css'

const FlightBookingTravelProtection = () => {

    return (
        <div className="flight-booking-travel-protection w-100 start fd-col flight-booking-commonbox">
            <p className="flight-booking-commonbox-heading w-100"><span>Travel Protection</span></p>
            <div className="row flight-booking-travel-protection-row w-100 fbcommon-row-padding">
                <div className="col-md-8 flight-booking-travel-protection-colone">
                    <p><strong>Why Travel Protection is Essential</strong></p>
                    <p>Travel insurance offers protection against trip disruptions like cancellations, delays, and medical emergencies, ensuring peace of mind wherever you travel.</p>
                    <ol className="flight-booking-travel-protection-colone-ol btwn fd-row">
                        <li>Unexpected Trip Catncellation</li>
                        <li>Baggage Delays or Loss</li>
                        <li>Severe Weather Disruptions</li>
                        <li>Mechanical Failures</li>
                        <li>Travel Delays & Interruptions</li>
                        <li>Airline Bankruptcy & Closures</li>
                    </ol>
                </div>
                <div className="col-4 flight-booking-travel-protection-coltwo">
                    <Image
                        src="/images/flight-booking/insurance.webp"
                        className="img-fluid"
                        width={284}
                        height={207}
                        alt="flight booking airline" />
                    <div className="flight-booking-airline"></div>
                </div>
            </div>
            <p className="flight-booking-commonbox-heading-bottom w-100">Review Plan Details & Key Disclaimers (Total travel protection plan cost includes non-insurance services and assistance fees.) Terms and Conditions apply.</p>
        </div>
    )
}

export default FlightBookingTravelProtection