import Image from "next/image";
import React from 'react'
import './AirlineList.css'

const AirlineList = () => {

  return (
    <div className="airline-list-box start fd-col">
        <Image
            src='/images/airlinelp/imageone.webp' 
            className='img-fluid airline-listing-image'
            width={320}     
            height={250}
            alt='airline listing image' />
        <p><strong>Your Journey Elevated with JetBlue Airways</strong></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio commodi libero quaerat Qui debitis iure totam unde voluptas expedita.</p>
    </div>
  )
}

export default AirlineList