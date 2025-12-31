import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageTblog.css';


const HomepageTblog = () => {
    return (
        <div className='col-lg-3 col-6 homepage-tblog-col'>
            <div className='homepage-tblog-box w-100 start fd-col'>
                <Image
                    src="/images/homepage/blog-1.webp"
                    className='img-fluid'
                    width={620}
                    height={400}
                    alt="homepage blog" />
                <div className='homepage-tblog-box-top start fd-row'>
                    <p>Jet Airways</p>
                    <p>Aug 19,2025</p>
                </div>
                <p><strong>Your Guide to Memorable Getways</strong></p>
                <p>Discover handpicked destinations, travel tips, experiences designed to make every...</p>
                <Link href='/'>Continue reading....</Link>
            </div>
        </div>
    )
}

export default HomepageTblog
