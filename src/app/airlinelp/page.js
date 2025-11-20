import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './airlinelp.css';
import AirlineList from '@/component/airlinelist/AirlineList';


const AirlineListing = () => {
  return (
    <section className='airline-listing-page'>
        <section className='airline-listing-banner cent'>
            <div className='container airline-listing-banner-container'>
                 <div className='row airline-listing-banner-row'>
                    <div className='col-12 airline-listing-banner-col cent'>
                        <h1>Airline Banner</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className='airline-listing'>
            <div className='container airline-listing-container'>
                <div className='row airline-listing-row start common-gap'>
                    <div className='col-12 airline-listing-heading cent fd-col'>
                        <h2>Affordable Fares, Unforgettable Journeys</h2>
                        <p>Browse articles covering travel tips, avaiation updates, and destination inspiration.</p>
                    </div>
                    <div className='col-lg-3 col-6 airline-listing-col'>
                        <Link href="/" className='w-100'>
                            <AirlineList />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-6 airline-listing-col'>
                        <Link href="/" className='w-100'>
                            <AirlineList />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-6 airline-listing-col'>
                        <Link href="/" className='w-100'>
                            <AirlineList />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-6 airline-listing-col'>
                        <Link href="/" className='w-100'>
                            <AirlineList />
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    </section>
  )
}

export default AirlineListing