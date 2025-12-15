import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageExclusiveOffer.css';

const HomepageExclusiveOfferBox = () => {
    return (
        <div className='col-4 homepage_exclusive-offer_box cent fd-col'>
            <Image
                src='/images/homepage/deal-1.webp'
                className='img-fluid exclusive-offer'
                width={398}
                height={187}
                alt='exclusive offer' />
                <p>Travel smarter with limited-time discounts.</p>
                <p><span>Valid till 31 Aug, 2025</span></p>
        </div>
    )
}

export default HomepageExclusiveOfferBox
