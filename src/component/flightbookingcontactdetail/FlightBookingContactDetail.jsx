import Image from "next/image";
import React from 'react'
import './FlightBookingContactDetail.css'

const FlightBookingContactDetail = () => {

    return (
        <div className="flight-booking-contact-detail w-100 start fd-col flight-booking-commonbox">
            <p className="flight-booking-commonbox-heading w-100"><span>Contact Detail</span></p>
            <div className="row flight-booking-contact-detail-row start w-100 fbcommon-row-padding">
                <div className="col-sm-4 flight-booking-contact-detail-col start fd-col">
                    <label>Contact Name</label>
                    <input className="form-control" placeholder="First Name" />
                </div>
                <div className="col-sm-4 flight-booking-contact-detail-col start fd-col">
                    <label>Middle Name</label>
                    <input className="form-control" placeholder="Middle Name" />
                </div>
                <div className="col-sm-4  flight-booking-contact-detail-col start fd-col">
                    <label>Last Name</label>
                    <input className="form-control" placeholder="Last Name" />
                </div>

                <div className="col-12 flight-booking-contact-detail-col start fd-col">
                    <label>Address</label>
                    <input className="form-control" placeholder="Address" />
                </div>

                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>City</label>
                    <input className="form-control" placeholder="City" />
                </div>
                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>Zip Code</label>
                    <input className="form-control" placeholder="Zip Code" />
                </div>
                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>State</label>
                    <select className="form-select">
                        <option>Select State</option>
                    </select>
                </div>

                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>Country Code</label>
                    <select className="form-select">
                        <option>Country Code</option>
                    </select>
                </div>
                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>Phone Number</label>
                    <input className="form-control" placeholder="Phone Number" />
                </div>
                <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                    <label>Email ID</label>
                    <input className="form-control" placeholder="Email ID" />
                </div>
            </div>
        </div>
    )
}

export default FlightBookingContactDetail