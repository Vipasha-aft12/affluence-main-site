import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightpaymentloading.css';





const FlightPaymentLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/floadingp/loading-icon-3.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Processing Your Payment</strong></p>
                        <p>Confirming your flight booking...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlightPaymentLoading 