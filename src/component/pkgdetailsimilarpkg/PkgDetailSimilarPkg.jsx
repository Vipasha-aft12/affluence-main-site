import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgDetailSimilarPkg = () => {
    return (

        <div className="col-xl-4 col-sm-6 pkg-dp-similar-pkg-col">
            <div className="pkg-dp-similar-pkg-box start fd-col">
                <Image src="/images/pkg-detail-page/images-packages/bali.webp"
                    className="img-fluid smililar-pkg-img"
                    width={601}
                    height={601}
                    alt="similar package" />
                <h5>Bali Luxury Retreat</h5>
                <p className="hotel_listing_box-content-para start fd-row">
                    <Image
                        src="/images/pkg-detail-page/icons-package/location.webp"
                        className="img-fluid similar-pkg-icon"
                        width={33}
                        height={33}
                        alt="similar package" />
                    Ubud, Bali
                </p>
                <p className="hotel_listing_box-content-para start fd-row">
                    <Image
                        src="/images/pkg-detail-page/icons-package/calender.webp"
                        className="img-fluid similar-pkg-icon"
                        width={33}
                        height={33}
                        alt="similar package" />
                    7 Days, 6 Nights
                </p>
                <p className="hotel_listing_box-content-para start fd-row">
                    <Image
                        src="/images/pkg-detail-page/icons-package/yellow-star.webp"
                        className="img-fluid yellow-star similar-pkg-icon"
                        width={40}
                        height={38}
                        alt="similar package" />
                    4.8 Star
                </p>
                <div className="pkg-dp-similar-pkg-box-price start fd-col w-100">
                    <p>From</p>
                    <p><span>$1,299/person</span></p>
                </div>
                <button className="btn pkg-dp-similar-pkg-box-btn cent w-100">View Detail</button>
            </div>
        </div>

    )
}

export default PkgDetailSimilarPkg


