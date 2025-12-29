import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingguestdetail.css';
import HotelBookingSummary from '@/component/hotelbookingsummary/HotelBookingSummary';




 
const HotelBookingGuestDetail = () => {
    return (
        <section className='hbooking-contact-info-page'>
            <section className="hotel-listing-breadcrumb">
                <div className="container hotel-listing-breadcrumb-container">
                    <div className="row hotel-listing-breadcrumb-row">
                        <div className="col-12 hotel-listing-breadcrumb-col">
                            <nav
                                style={{ "--bs-breadcrumb-divider": "'>'" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb p-0 mb-0 start fd-row">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Hotels</a></li>
                                    <li className="breadcrumb-item"><a href="#">Dubai Search Results</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Booking</li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

            <section className='hotelb-status'>
                <div className='container hotelb-status-container'>
                    <div className='row hotelb-status-row'>
                        <div className='col-12 hotelb-status-col cent'>
                            <div className='hotelb-status-col-box cent fd-row'>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>1</p>
                                    </div>
                                    <p>Contact Information</p>
                                </div>
                                <div className='hotelb-status-col-div'></div>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>2</p>
                                    </div>
                                    <p>Guest Details</p>
                                </div>
                                <div className='hotelb-status-col-div'></div>
                                <div className='hotelb-status-subbox cent fd-col'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>3</p>
                                    </div>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hbooking-guest-info'>
                <div className='container hbooking-guest-info-container'>
                    <div className='row hbooking-guest-info-row start common-gap'>
                        <div className='col-md-8 hbooking-guest-info-colone start fd-col common-gap'>
                            <div className='row hbooking-guest-info-colone-top w-100 start'>
                                <div className='col-12 hbooking-ginfo-col-heading btwn fd-row'>
                                    <h4>Contact Information</h4>
                                    <Link href='/hotelboookingcontactinformation'>Edit</Link>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Name</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Email</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Phone</span></p>
                                    <p>a</p>
                                </div>
                                <div className='col-6 hbooking-ginfo-col start fd-col'>
                                    <p><span>Country</span></p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className='row hbooking-guest-info-colone-mid start w-100'>
                                <div className='col-12 hbooking-guest-info-colone-mid-col btwn fd-row'>
                                    <h4>Guest Details</h4>
                                    <button className='btn hbooking-add-guest-btn'>+ Add Guest</button>
                                </div>
                                <div className='col-12 hbooking-add-guest-maincol'>
                                    <div className='row hbooking-add-guest w-100 start'>
                                        <div className='col-12 hbooking-add-guest-col'>
                                            <h5>Guest 1</h5>
                                        </div>
                                        <div className='col-sm-6 hbooking-add-guest-col start fd-col'>
                                            <label>First Name*</label>
                                            <input type='text' placeholder='First Name' />
                                        </div>
                                        <div className='col-sm-6 hbooking-add-guest-col start fd-col'>
                                            <label>Last Name*</label>
                                            <input type='text' placeholder='Last Name' />
                                        </div>
                                        <div className='col-sm-6 hbooking-add-guest-col start fd-col'>
                                            <label>Date Of Birth*</label>
                                            <input type='date' placeholder='DD-MM-YYYY' />
                                        </div>
                                        <div className='col-sm-6 hbooking-add-guest-col start fd-col'>
                                            <label>Gender*</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Male</option>
                                                <option value="1">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 hbooking-guest-info-col'>
                                    <div className='hbooking-guest-info-col-disclaimer start fd-row'>
                                        <Image
                                            src='/images/hotel/hoteld/important.webp'
                                            className='img-fluid'
                                            width={52}
                                            height={52}
                                            alt='hotel booking status' />
                                        <p>Please provide accurate information for all guests. This information will be used for check-in and identification purposes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hbooking-guest-info-colone-bottom btwn w-100'>
                                <div className='hbooking-guest-info-colone-bottom-btn'>
                                     <Link href='/hotelboookingcontactinformation'>Previous</Link>
                                </div>
                                 <div className='hbooking-guest-info-colone-bottom-btn'>
                                    <Link href='/hotelbookingpayment'>Next Step</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 hbooking-guest-info-coltwo'>
                            <HotelBookingSummary />
                        </div>
                    </div>

                </div>
            </section>

        </section>
    )
}

export default HotelBookingGuestDetail 