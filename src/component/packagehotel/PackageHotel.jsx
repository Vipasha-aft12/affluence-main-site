import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageHotel = () => {
    return (
        <div className="col-md-4 col-sm-6 hotel_listing_row-col">
            <div className="hotel_listing_box cent fd-col">
                <div className="hotel_listing_box-image">
                    <Image src="/images/hotel-listing-image/hotel-listing-image.webp"
                        className="img-fluid hotel-iamge"
                        width={577}
                        height={417}
                        alt="package hotel listing" />
                    <p className="hotel-listing-pkg-name">Honeymoon</p>
                    <p className="hotel-listing-pkg-name-price">Save $400</p>
                </div>
                <div className="hotel_listing_box-content start fd-col">
                    <p><strong>Romantic Maldives Honeymoon</strong></p>
                    <div className="hotel_listing_box-content-location-rating btwn fd-row">
                        <p className="hotel_listing_box-content-para start fd-row">
                            <Image
                                src="/images/hotel-listing-image/location-icon.webp"
                                className="img-fluid"
                                width={41}
                                height={41}
                                alt="package hotel listing" />
                            Maldives
                        </p>
                        <p className="hotel_listing_box-content-para start fd-row">
                            <Image
                                src="/images/hotel-listing-image/star-iconn.webp"
                                className="img-fluid"
                                width={41}
                                height={41}
                                alt="" />
                            4.8
                        </p>
                    </div>
                    <p className="hotel_listing_box-content-para start fd-row">
                        <Image
                            src="/images/hotel-listing-image/time-icon.webp"
                            className="img-fluid"
                            width={41}
                            height={41}
                            alt="" />
                        7 Days, 6 Nights
                    </p>
                    <p className="hotel_listing_box-content-para start fd-row">
                        <Image
                            src="/images/hotel-listing-image/hotel-icon.webp"
                            className="img-fluid"
                            width={41}
                            height={41}
                            alt="" />
                        5-Star Resort
                    </p>
                    <p className="hotel_listing_box-content-para start fd-row">
                        <Image
                            src="/images/hotel-listing-image/flight-icon.webp"
                            className="img-fluid"
                            width={41}
                            height={41}
                            alt="" />
                        Flight
                    </p>
                    <div className="hotel-facilities btwn fd-row f-wrap">
                        <p className="cent">Overwater Villa</p>
                        <p className="cent">Spa Treatment</p>
                        <p className="cent">Private Dining</p>
                        <p className="cent">+1 more</p>
                    </div>
                    <p className="holtel-listing_box-old-price">
                        <s>$2899</s>
                    </p>
                    <p className="holtel-listing_box-new-price"><span>$2499</span> per person</p>
                </div>
                <button className="btn hotel_listing_box-btn w-100 cent">Book Now</button>
            </div>
        </div>
    )
}

export default PackageHotel
