import Image from "next/image";
import React from 'react'
import './FlightBookingBaggage.css'

const FlightBookingBaggage = () => {

  return (
    <div className="flight-booking-baggage w-100 start fd-col flight-booking-commonbox">
        <p className="flight-booking-commonbox-heading w-100"><span>Additional Baggage Information</span></p>
        <h6 className="fbcommon-row-padding">Departing Flight</h6>
        <div className="row flight-booking-baggage-row cent w-100 fbcommon-row-padding">
            <div className="col-sm-4 col-6 flight-booking-baggage-col cent fd-col">
                <Image
                    src="/images/flight-booking/bag-1.webp"
                    className="img-fluid"
                    width={98}
                    height={66}
                    alt="flight booking baggage" />
                    <p><strong>Personal Item</strong></p>
                    <p>Purse,small bagpack. briefcase</p>
            </div>
            <div className="col-sm-4 col-6 flight-booking-baggage-col cent fd-col">
                <Image
                    src="/images/flight-booking/bag-2.webp"
                    className="img-fluid"
                    width={81}
                    height={86}
                    alt="flight booking baggage" />
                    <p><strong>Carry-On Bag</strong></p>
                    <p>Fits in overhead bin or under the seat</p>
            </div>
            <div className="col-sm-4 flight-booking-baggage-col cent fd-col">
                <Image
                    src="/images/flight-booking/bag-3.webp"
                    className="img-fluid"
                    width={55}
                    height={96}
                    alt="flight booking baggage" />
                    <p><strong>Checked Bag</strong></p>
                    <p>Allowance weight 30 KG</p>
            </div>
        </div>
        <p className="flight-booking-commonbox-heading-bottom w-100">Add baggage now and save!Bring everything you need.</p>
    </div>
  )
}

export default FlightBookingBaggage