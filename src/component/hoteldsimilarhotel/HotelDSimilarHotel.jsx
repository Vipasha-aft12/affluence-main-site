import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDSimilarHotel.css";





const HotelDSimilarHotel = () => {
    return (
        <div className='row hoteld-similar-hotel start w-100 common-gap'>
            <div className='col-12 hoteld-shotel-heading'>
                <h4>Similar Hotels in Dubai</h4>
            </div>
            <div className="col-4 hoteld-shotel">
                <div className='hoteld-shotel-box cent fd-col w-100'>
                    <div className='hoteld-shotel-box-image w-100'>
                        <Image
                            src='/images/hotel/hoteld/hotel-3.webp'
                            className='img-fluid'
                            width={688}
                            height={440}
                            alt='hotel detail similar hotel' />
                        <p className='hoteld-shotel-box-discount'>24% OFF</p>
                    </div>
                    <div className='hoteld-shotel-box-content start fd-col w-100'> 
                        <p><strong>Palm Jumerirah Resort</strong></p>
                        <div className='hoteld-shotel-box-content-rating start fd-row'>
                            <Image
                            src='/images/hotel/hoteld/star.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='hotel detail similar hotel' />
                            <p>4.4 (2890)</p>
                        </div>
                        <p><s>$550 </s> <span>$420</span> /night</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDSimilarHotel
