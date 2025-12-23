import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingcontactinformation.css';
import HotelBookingSummary from '@/component/hotelbookingsummary/HotelBookingSummary';





const HotelBookingContactInformation = () => {
    return (
        <section className='hbooking-contact-info-page'>
            <section className="hotel-listing-breadcrumb bdr-top">
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
                    <div className='row hotelb-status-row start'>
                        <div className='col-12 hotelb-status-col cent'>
                            <div className='hotelb-status-col-box cent fd-row'>
                                <div className='hotelb-status-subbox cent fd-col booking-step-done'>
                                    <div className='hotelb-status-subbox-circle cent'>
                                        <p>1</p>
                                    </div>
                                    <p>Contact Information</p>
                                </div>
                                <div className='hotelb-status-col-div'></div>
                                <div className='hotelb-status-subbox cent fd-col'>
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

            <section className='hbooking-contact-info'>
                <div className='container hbooking-contact-info-container'>
                    <div className='row hbooking-contact-info-row'>
                        <div className='col-9 hbooking-contact-info-colone'>
                            <div className='row hbooking-contact-info-row start w-100'>
                                <h4>Contact Information</h4>
                                <div className='col-6 hbooking-contact-info-col start fd-col'>
                                    <label>First Name</label>
                                    <input type='text' placeholder='First Name' />
                                </div>
                                <div className='col-6 hbooking-contact-info-col start fd-col'>
                                    <label>Last Name</label>
                                    <input type='text' placeholder='Last Name' />
                                </div>
                                <div className='col-12 hbooking-contact-info-col start fd-col'>
                                    <label>Email Address*</label>
                                    <input type='text' placeholder='abc@example.com' />
                                </div>
                                <div className='col-12 hbooking-contact-info-col start fd-col'>
                                    <label>Phone Number*</label>
                                    <input type='text' placeholder='+1-000-000-0000' />
                                </div>
                                <div className='col-12 hbooking-contact-info-col start fd-col'>
                                    <label>Country*</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>United States</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-12 hbooking-contact-info-col'>
                                    <div className='hbooking-contact-info-col-disclaimer start fd-row'>
                                        <Image
                                            src='/images/hotel/hoteld/important.webp'
                                            className='img-fluid'
                                            width={52}
                                            height={52}
                                            alt='hotel booking status' />
                                        <p>Booking confirmation and updates will be sent to this email and phone number.</p>
                                    </div>
                                </div>
                                 <Link href='/hotelbookingguestdetail'>Next Step</Link>
                            </div>
                        </div>
                        <div className='col-3 hbooking-contact-info-coltwo'>
                            <HotelBookingSummary />
                        </div>
                    </div>
                   
                </div>
            </section>

        </section>
    )
}

export default HotelBookingContactInformation 