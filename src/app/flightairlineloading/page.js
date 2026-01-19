import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './flightairlineloading.css';





const FlightAirlineLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/floadingp/loading-icon-4.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Delhi to Dubai</strong></p>
                        <p>Searching for flights from 400+ airlines...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlightAirlineLoading 