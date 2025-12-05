import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgDetailHighlight = () => {
    return (
        <div className='pkg_highlight_outer-box w-100'>
            <div className="row pkg_dp-pkg-highlights start w-100">
                <div className="col-12 pkg_dp-pkg-highlights-heading">
                    <h4>Package Hightlights</h4>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/luxury-star.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Luxury Overwater Bunglow</strong></p>
                            <p>Private villa with ocean views and glass floor</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row pkg-det-blue w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/plane.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Seaplane Transfer</strong></p>
                            <p>Round-trip scenic flights included</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/water-activity.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Water Activities</strong></p>
                            <p>Snorkeling, kayaking &amp; dolphin cruise</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row pkg-det-blue w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/spa.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Couples Spa Treatment</strong></p>
                            <p>Snorkeling, kayaking &amp; dolphin cruise</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/dining.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Underwater Dining</strong></p>
                            <p>Unique resturant experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pkg_dp-pkg-highlights-activity-col">
                    <div className="pkg_dp-pkg-highlights-box start fd-row pkg-det-blue w-100">
                        <Image
                            src="/images/pkg-detail-page/icons-package/camera.webp"
                            className="img-fluid"
                            width={49}
                            height={49}
                            alt="pkg detail form" />
                        <div className="pkg_dp-pkg-highlights-box-content start fd-col">
                            <p><strong>Private Beach Access</strong></p>
                            <p>Exclusive scheduled beaches</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 pkg_dp-pkg-highlights-extra-col btwn fd-row">
                    <h6 className="w-100"> Also Include:</h6>
                    <p className="hotel_listing_box-content-para kg_dp-pkg-highlights-extra-col-para start fd-row">
                        <Image
                            src="/images/pkg-detail-page/icons-package/tick.webp"
                            className="img-fluid"
                            width={33}
                            height={33}
                            alt="pkg detail form" />
                        Free Wifi
                    </p>
                    <p className="hotel_listing_box-content-para kg_dp-pkg-highlights-extra-col-para start fd-row">
                        <Image
                            src="/images/pkg-detail-page/icons-package/tick.webp"
                            className="img-fluid"
                            width={33}
                            height={33}
                            alt="pkg detail form" />
                        Airport Transfer
                    </p>
                    <p className="hotel_listing_box-content-para kg_dp-pkg-highlights-extra-col-para start fd-row">
                        <Image
                            src="/images/pkg-detail-page/icons-package/tick.webp"
                            className="img-fluid"
                            width={33}
                            height={33}
                            alt="pkg detail form" />
                        Daily breakfast
                    </p>
                    <p className="hotel_listing_box-content-para kg_dp-pkg-highlights-extra-col-para start fd-row">
                        <Image
                            src="/images/pkg-detail-page/icons-package/tick.webp"
                            className="img-fluid"
                            width={33}
                            height={33}
                            alt="pkg detail form" />
                        24/7 Concierge
                    </p>
                </div>
            </div>
        </div>


    )
}

export default PkgDetailHighlight


