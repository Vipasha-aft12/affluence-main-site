import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";





const HotelDRoomDetail = () => {
    return (
        <div className='row hoteldroom-detail-row cent w-100'>
            <div className='col-3 hoteldroom-detail-colone ps-0'>
                <Image
                    src='/images/hotel/hoteld/hotel-2.webp'
                    className='img-fluid'
                    width={688}
                    height={440}
                    alt='hotel detail' />
            </div>
            <div className='col-7 hoteldroom-detail-coltwo start fd-col'>
                <p><strong>Standard Room - Premium</strong></p>
                <p>Enhanced standard room with upgraded amenities and better views</p>
                <div className='hoteldroom-detail-coltwo-subbox start fd-row'>
                    <div className='hoteldroom-detail-coltwo-box start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/bed.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='hotel detail' />
                            <p>Queen Bed</p>
                    </div>
                    <div className='hoteldroom-detail-coltwo-box start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/profile.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='hotel detail' />
                            <p>2 Guests</p>
                    </div>
                    <div className='hoteldroom-detail-coltwo-box start fd-row'>
                        <Image
                            src='/images/hotel/hoteld/building.webp'
                            className='img-fluid'
                            width={52}
                            height={52}
                            alt='hotel detail' />
                            <p>380 sq ft</p>
                    </div>
                </div>
                <p className='hoteldroom-detail-coltwo-para start fd-row'>
                    <span>Premium View</span>
                    <span>Coffee Maker</span>
                    <span>Balcony</span>
                    <span>Upgraded Bathroom</span>
                </p>
            </div>
            <div className='col-2 hoteldroom-detail-colthree start fd-col'>
                <p>$390/night</p>
                <p><span>+$40 vs Standard</span></p>
                <button className='btn hoteldroom-detail-colthree-btn-one mt-2'>Select</button>
                <button className='btn hoteldroom-detail-colthree-btn-two mt-2'>Selected</button>
            </div>
        </div>
    )
}

export default HotelDRoomDetail
