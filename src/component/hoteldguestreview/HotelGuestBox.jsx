import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDGuestReview.css";


const HotelDGuestBox = () => {
  return (
    <div className='hoteld-review-guestbox start fd-col w-100'>
      <div className='hoteld-review-guestbox-top btwn fd-row w-100'>
        <div className='hoteld-review-guestbox-top-profile start fd-row'>
          <div className='r-guestbox_name-initial cent'>
            <p>S</p>
          </div>
          <div className='r-guestbox_name start fd-col'>
            <p>Sarah Johnson</p>
            <p><span>2 weeks ago</span></p>
          </div>
        </div>
        <div className='hoteld-review-star cent fd-row'>
          <Image
            src='/images/hotel/hoteld/star.webp'
            className='img-fluid'
            width={52}
            height={52}
            alt='hotel detail image' />
          <Image
            src='/images/hotel/hoteld/star.webp'
            className='img-fluid'
            width={52}
            height={52}
            alt='hotel detail image' />
          <Image
            src='/images/hotel/hoteld/star.webp'
            className='img-fluid'
            width={52}
            height={52}
            alt='hotel detail image' />
          <Image
            src='/images/hotel/hoteld/star.webp'
            className='img-fluid'
            width={52}
            height={52}
            alt='hotel detail image' />
          <Image
            src='/images/hotel/hoteld/star.webp'
            className='img-fluid'
            width={52}
            height={52}
            alt='hotel detail image' />
        </div>
      </div>
      <p>Absolutely wonderful stay! The staff was incredibly helpful and the room was immaculate. The location couldn't be better - walking distance to everything.</p>
    </div>
  )
}

export default HotelDGuestBox
