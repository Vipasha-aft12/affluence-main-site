import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hoteldetailloading.css';





const HotelDetailLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/hloadingp/loading-icon-4.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Loading Hotel Detail</strong></p>
                        <p>Preparing detailed information for you...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HotelDetailLoading 