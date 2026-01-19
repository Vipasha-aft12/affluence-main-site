import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightbookingloading.css';





const FlightBookingLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/floadingp/loading-icon-1.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Preparing Your Booking</strong></p>
                        <p>Setting up a secure payment experience for you!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlightBookingLoading 