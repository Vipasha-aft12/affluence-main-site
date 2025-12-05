import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgDetailOverview = () => {
    return (
        <div className='pkg_detail_overview_outerbox'>
            <div className="row pkg-dp-pkg-overview start w-100">
                <div className="col-12 pkg-dp-pkg-overview-heading start fd-col">
                    <div className="pkg-dp-pkg-overview-hone start fd-row">
                        <p>Best Sellers</p>
                        <p>5 Days</p>
                    </div>
                    <h3>Magical Maldives Paradise Package</h3>
                    <div className="pkg-dp-pkg-overview-htwo start fd-row">
                        <p className="cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/location.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="Pkg detail overview" />
                            Maldives
                        </p>
                        <p className="cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/calender.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="Pkg detail overview" />
                            5 Days/4 Nights
                        </p>
                        <p className="cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/luxury-star.webp"
                                className="img-fluid"
                                width={49}
                                height={49}
                                alt="Pkg detail overview" />
                            4.8 Star
                        </p>
                    </div>
                </div>
                <div className="col-12 pkg-dp-pkg-overview-image">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image
                                    src="/images/pkg-detail-page/images-packages/maldives.webp" className="img-fluid d-block w-100"
                                    width={1200}
                                    height={438}
                                    alt="maldives" />
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src="/images/pkg-detail-page/images-packages/maldives.webp" className="img-fluid d-block w-100"
                                    width={1200}
                                    height={438}
                                    alt="maldives" />
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src="/images/pkg-detail-page/images-packages/maldives.webp" className="img-fluid d-block w-100"
                                    width={1200}
                                    height={438}
                                    alt="maldives" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 pkg-dp-pkg-overview-subheading-price btwn fd-row">
                    <h4>Package Overview</h4>
                    <div className="pkg-dp-pkg-overview-price w-100 cent fd-col">
                        <p className='pkg-dp-pkg-overview-day-price mb-2'>5 Nights <s>$3,499</s></p>
                        <p><span>$2,499/person</span></p>
                    </div>
                </div>
                <div className="col-12 pkg-dp-pkg-overview-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse non ullam neque sit iure deleniti. Autem qui necessitatibus praesentium, voluptatem ad perspiciatis, in quisquam quasi sunt mollitia adipisci fugiat vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint eaque, excepturi beatae illum eius facilis necessitatibus quas unde delectus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reiciendis incidunt alias aspernatur? Harum deleniti reiciendis saepe. Corrupti, officiis porro.</p>
                </div>
                <div className="col-12 pkg-dp-pkg-overview-content-extra btwn fd-row">
                    <div className="pkg-dp-pkg-overview-content-extra-box bg-bl cent fd-col">
                        <p><strong>Hotel Pickup</strong></p>
                        <p>Complimentary</p>
                    </div>
                    <div className="pkg-dp-pkg-overview-content-extra-box cent fd-col">
                        <p><strong>Sightseeing</strong></p>
                        <p>Guided Tours</p>
                    </div>
                    <div className="pkg-dp-pkg-overview-content-extra-box cent bg-bl fd-col">
                        <p><strong>Room Service</strong></p>
                        <p>24/7 Available</p>
                    </div>
                    <div className="pkg-dp-pkg-overview-content-extra-box cent fd-col">
                        <p><strong>Amenities</strong></p>
                        <p>Premium</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PkgDetailOverview


