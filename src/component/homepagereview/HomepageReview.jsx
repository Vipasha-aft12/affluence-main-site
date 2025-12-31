import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageReview.css';


const HomepageReview = () => {
    return (
        <div className='col-lg-3 col-sm-6 homepage-review-col'>
            <div className='homepage-review-box w-100 start fd-col'>
                <div className='homepage-review-box-top btwn w-100 fd-row'>
                    <div className='homepage-review-box-topone start fd-col'>
                        <p><strong>Jhon</strong></p>
                        <p>United Kingdom</p>
                    </div>
                    <p><span>4 days ago</span></p>
                </div>
                <div className='homepage-review-box-toptwo start fd-row w-100'>
                    <Image
                        src="/images/homepage/star.webp"
                        className='img-fluid'
                        width={47}
                        height={49}
                        alt="homepage blog" />
                    <Image
                        src="/images/homepage/star.webp"
                        className='img-fluid'
                        width={47}
                        height={49}
                        alt="homepage blog" />
                    <Image
                        src="/images/homepage/star.webp"
                        className='img-fluid'
                        width={47}
                        height={49}
                        alt="homepage blog" />
                    <Image
                        src="/images/homepage/star.webp"
                        className='img-fluid'
                        width={47}
                        height={49}
                        alt="homepage blog" />
                    <Image
                        src="/images/homepage/star.webp"
                        className='img-fluid'
                        width={47}
                        height={49}
                        alt="homepage blog" />
                    
                </div>
                <div className='homepage-review-box-topbottom start fd-col w-100'>
                    <p><strong>Your Guide to Memorable Getways</strong></p>
                    <p>Discover handpicked destinations, travel tips, experiences designed to make every...</p>
                </div>
            </div>
        </div>
    )
}

export default HomepageReview
