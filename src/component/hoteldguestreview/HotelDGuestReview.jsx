import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDGuestReview.css";
import HotelDGuestBox from './HotelGuestBox';


const HotelDGuestReview = () => {
  return (
    <div className='hotel-d-guest start fd-col w-100'>
        <h5><strong>Guest Reviews</strong></h5>
        <div className='hoteld-review-category btwn fd-row w-100'>
          <div className='hoteld-review cent fd-col'>
            <p><span>4.9</span></p>
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
            <p>3456 reviews</p>
          </div>
          <div className='hoteld-review-category-box start fd-col'>
            <div className='hoteld-review-category-subbox btwn fd-row'>
              <p>Cleanliness</p>
              <div className='hoteld-review-category-box-rating-outer'>
                <div className='hoteld-review-category-box-rating-inner hd-rcbri-one'></div>
              </div>
              <p>4.9</p>
            </div>
            <div className='hoteld-review-category-subbox btwn fd-row'>
              <p>Service</p>
              <div className='hoteld-review-category-box-rating-outer'>
                <div className='hoteld-review-category-box-rating-inner hd-rcbri-one'></div>
              </div>
              <p>4.7</p>
            </div>
            <div className='hoteld-review-category-subbox btwn fd-row'>
              <p>Location</p>
              <div className='hoteld-review-category-box-rating-outer'>
                <div className='hoteld-review-category-box-rating-inner hd-rcbri-one'></div>
              </div>
              <p>4.7</p>
            </div>
            <div className='hoteld-review-category-subbox btwn fd-row'>
              <p>Value</p>
              <div className='hoteld-review-category-box-rating-outer'>
                <div className='hoteld-review-category-box-rating-inner hd-rcbri-one'></div>
              </div>
              <p>4.6</p>
            </div>
          </div>
        </div>
        <HotelDGuestBox />
        <HotelDGuestBox />
        <HotelDGuestBox />
        <a href="">See More Review</a>
    </div>
  )
}

export default HotelDGuestReview
