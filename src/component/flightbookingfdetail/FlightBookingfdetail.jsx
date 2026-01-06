import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './FlightBooking.css';

const FlightBookingFDetail = () => {
    return (
        <div className='row fbooking-fdetail start w-100 common-gap flight-booking-commonrow pb-3'>
            <div className='col-12 fbooking-fdetail-colone start fd-row'>
                <Image
                    src='/images/final-flight-booking/flight-iconone.webp'
                    className='img-fluid'
                    width={40}
                    height={40}
                    alt='flight booking' />
                <h4><strong>Flight Detail</strong></h4>
            </div>
            <div className='col-12 fbooking-fdetail-coltwo start fd-row'>
                <Image
                    src='/images/final-flight-booking/air-india-icon.png'
                    className='img-fluid'
                    width={80}
                    height={81}
                    alt='flight booking' />
                <div className='fbooking-fdetail-col-airline start fd-col'>
                    <p><strong>Emirates Airlines</strong></p>
                    <p>Economy | EK-512</p>
                </div>
            </div>
            <div className='col-12 fbooking-fdetail-colthree btwn fd-row'>
                <div className='fbooking-fdetail-colthree-box start fd-col'>
                    <p>Departure</p>
                    <p><strong>11:10</strong></p>
                    <p className='city-name-fbooking'>Dubai (DXB)</p>
                    <p><span>Jan 22, 2026</span></p>
                </div>
                <div className='fbooking-fdetail-colthree-midbox cent fd-col'>
                    <p>3h 35m</p>
                    <div className='fbooking-fdetail-colthree-midbox-image cent fd-row'>
                        <div className='fbooking-fdetail-colthree-midbox-image-line'></div>
                        <Image
                            src='/images/final-flight-booking/flight-icontwo.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt="final flight booking" />
                        <div className='fbooking-fdetail-colthree-midbox-image-line'></div>
                    </div>
                    <p>Nonstop</p>
                </div>
                <div className='fbooking-fdetail-colthree-box fbooking-fdetail-colthree-lastbox start fd-col'>
                    <p>Arrival</p>
                    <p><strong>11:10</strong></p>
                    <p className='city-name-fbooking'>New Delhi (DEL)</p>
                    <p><span>Jan 22, 2026</span></p>
                </div>
            </div>
            <div className='col-12 fbooking-fdetail-colfour'>
                <div className='fbooking-fdetail-subcolfour start fd-row w-100'>
                    <div className='fbooking-fdetail-colfourbox start fd-row'>
                        <Image
                            src='/images/final-flight-booking/cabin.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <p>Cabin : 7 KG</p>
                    </div>
                    <div className='fbooking-fdetail-colfourbox start fd-row'>
                        <Image
                            src='/images/final-flight-booking/check-in.webp'
                            className='img-fluid'
                            width={40}
                            height={40}
                            alt='flight booking' />
                        <p>Check-in : 30KG</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FlightBookingFDetail
