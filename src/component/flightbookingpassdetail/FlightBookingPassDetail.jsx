import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './FlightBookingPassDetail.css';

const FlightBookingPassDetail = () => {
    return (
        <div className='row fbooking-pdetail start w-100 common-gap flight-booking-commonrow pb-3'>
            <div className='col-12 fbooking-pdetail-colone start fd-row'>
                <Image
                    src='/images/final-flight-booking/profile-one.webp'
                    className='img-fluid'
                    width={40}
                    height={40}
                    alt='flight booking' />
                <h4><strong>Passenger Detail (3 Passenger)</strong></h4>
            </div>
            <div className='col-12 fbookingpdetail btwn fd-row'>
                <p className='flightbokingpdetail-pare'>Adult</p>
                <div className='row fbookingpdetail-subrow w-100'>
                    <div className='col-md-4 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Name</p>
                            <p><strong>Mr. Vijay Sharma</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/calender.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>DOB</p>
                            <p><strong>Mar 15th 1998</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile-two.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Gender</p>
                            <p><strong>Male</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 fbookingpdetail btwn fd-row'>
                <p className='flightbokingpdetail-pare'>Child</p>
                <div className='row fbookingpdetail-subrow w-100'>
                    <div className='col-md-4 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Name</p>
                            <p><strong>Mr. Vijay Sharma</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/calender.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>DOB</p>
                            <p><strong>Mar 15th 1998</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile-two.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Gender</p>
                            <p><strong>Male</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 fbookingpdetail btwn fd-row'>
                <p className='flightbokingpdetail-pare'>Infant</p>
                <div className='row fbookingpdetail-subrow w-100'>
                    <div className='col-md-4 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Name</p>
                            <p><strong>Mr. Vijay Sharma</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/calender.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>DOB</p>
                            <p><strong>Mar 15th 1998</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 col-6 fbookingpdetail-subrow-col start fd-row'>
                        <Image
                            src='/images/final-flight-booking/profile-two.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <div className='fbookingpdetail-subrow-col-content start fd-col'>
                            <p>Gender</p>
                            <p><strong>Male</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FlightBookingPassDetail
