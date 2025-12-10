import Image from "next/image";
import React from 'react'
import './FlightBookingPayment.css'

const FlightBookingPayment = () => {

    return (
        <div className="flight-booking-payment w-100 start fd-col flight-booking-commonbox">
            <p className="flight-booking-commonbox-heading w-100"><span>Payment Details</span></p>
            <div className="row flight-booking-payment-row w-100 fbcommon-row-padding">
                <div className="col-12 flight-booking-payment-colone">
                    <p>By confirming this booking, you acknowledge that guest names are accurate per government ID, check-in and check-out dates are correct, and you have reviewed the hotel's cancellation policy. Service fees are non-refundable, and all taxes and fees are included.</p>
                </div>
                <div className="col-12 flight-booking-payment-coltwo">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            I have read and agree to the Terms and Conditions and Privacy Policy. I understand that my personal information will be processed in accordance with the Privacy Policy and that I can withdraw my consent at any time.
                        </label>
                    </div>

                </div>
                <div className="col-12 flight-booking-payment-colthree btwn fd-row">
                    <button className="btn flight-booking-payment-back-btn">Back</button>
                    <div className="flight-booking-payment-amt-btn cent fd-row">
                        <p>$400.00</p>
                        <button className="btn flight-booking-payment-paynow-btn">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightBookingPayment