import Image from "next/image";
import React from 'react'
import './FlightBookingCancel.css'

const FlightBookingCancel = () => {

  return (
    <div className="flight-booking-cancel w-100 start fd-col flight-booking-commonbox">
        <p className="flight-booking-commonbox-heading w-100"><span>Cancel For Any Reason</span></p>
        <div className="row flight-booking-cancel-row w-100 fbcommon-row-padding">
            <div className="col-12 flight-booking-cancel-col start fd-col">
                <p>You may cancel your flight for any reason up to 24 hours before your first scheduled departure.</p>
                <p>Get an 80% refund ($1,184.79) on your flight fare ($1,480.99) with fast processing. <strong>USD 192</strong></p>
                <p>Get Instant Solution</p>
                <p><span>Seats, Baggage and other add-ons with the booking remain non-refundable.  Terms & Condition</span></p>
            </div>
        </div>
    </div>
  )
}

export default FlightBookingCancel