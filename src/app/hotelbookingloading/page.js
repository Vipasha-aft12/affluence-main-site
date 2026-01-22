import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotelbookingloading.css';





const HotelBookinglLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/hloadingp/loading-icon-1.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Processing Your Booking</strong></p>
                        <p>Please wait while we continue your transaction...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HotelBookinglLoading 