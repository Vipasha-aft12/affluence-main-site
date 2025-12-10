import Image from "next/image";
import React from 'react'
import './FlightBookingTravelerForm.css'

const FlightBookingTravelerForm = () => {

    return (
        <div className="row flight-booking-contact-detail-row start w-100 fbcommon-row-padding">
            <div className="col-sm-4 flight-booking-contact-detail-col start fd-col">
                <label>Contact Name</label>
                <input className="form-control" placeholder="First Name" />
            </div>
            <div className="col-sm-4 flight-booking-contact-detail-col start fd-col">
                <label>Middle Name</label>
                <input className="form-control" placeholder="Middle Name" />
            </div>
            <div className="col-sm-4 flight-booking-contact-detail-col start fd-col">
                <label>Last Name</label>
                <input className="form-control" placeholder="Last Name" />
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Date of Birth</label>
                <input className="form-control" placeholder="Date of Birth" />
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Gender</label>
                <select className="form-select">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Document Type</label>
                <select className="form-select">
                    <option>Document Type</option>
                </select>
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Passport Number</label>
                <input className="form-control" placeholder="Passport Number" />
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Date of Expiry</label>
                <input className="form-control" placeholder="Date of Expiry" />
            </div>

            <div className="col-sm-6 flight-booking-contact-detail-col start fd-col">
                <label>Nationality</label>
                <select className="form-select">
                    <option>Nationality</option>
                </select>
            </div>
        </div>
    )
}

export default FlightBookingTravelerForm