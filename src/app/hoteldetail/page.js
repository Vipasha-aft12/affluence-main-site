import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hoteldetail.css';
import SearchEngineHotel from "@/component/searchengine/SearchEngineHotel";
import HotelDGuestReview from '@/component/hoteldguestreview/HotelDGuestReview';
import HotelDfaq from '@/component/hoteldfaq/HotelDfaq';
import HotelDPackage from '@/component/hotaldpackage/HotelDPackage';
import HotelDSimilarHotel from '@/component/hoteldsimilarhotel/HotelDSimilarHotel';
import HotelDLocationNearby from '@/component/hoteldlocation/HotelDLocationNearby';
import HotelDBookStay from '@/component/hoteldbookstay/HotelDBookStay';
import HotelDTabs from '@/component/hoteldtabs/HotelDTab';





const HotelDetail = () => {
    return (
        <section className='hotel-detail-page'>
            <section className="hotel-listing-breadcrumb bdr-top">
                <div className="container hotel-listing-breadcrumb-container">
                    <div className="row hotel-listing-breadcrumb-row">
                        <div className="col-12 hotel-listing-breadcrumb-col">
                            <nav
                                style={{ "--bs-breadcrumb-divider": "'>'" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb p-0 mb-0 start fd-row">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Hotels</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Dubai Search Results</li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

            <section className="hotel-listing-properties bdr-top bdr-btm">
                <div className="container hotel-listing-properties-container">
                    <div className="row hotel-listing-properties-row">
                        <div className="col-12 hotel-listing-properties-col start fd-col">
                            <p><strong>Hotels in Dubai</strong></p>
                            <p><span>2 properties found</span> | <span>2 Guests</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hotellistng-search sticky-top">
                <div className="container hotellistng-search-container">
                    <div className="row hotellistng-search-row">
                        <div className="col-12 hotellistng-search-col">
                            <SearchEngineHotel />
                        </div>
                    </div>
                </div>
            </section>

            <section className='hotel-detail'>
                <div className='container hotel-detail-container start fd-col'>
                    <div className='row hotel-detail-top_overview_images-row'>
                        <div className='col-6 hotel-detail-top_overview_images-colone'>
                            <div className='hotel-detail-top_overview_images-colone-box w-100'>
                                <Image
                                    src="/images/hotel/hoteld/hotel-1.webp"
                                    className='img-fluid'
                                    width={1638}
                                    height={900}
                                    alt="hotel detail overview image" />
                                <p className='hotel-detail-overview-name'>Burj Khalifa View Hotel</p>
                                <div className='hotel-detail-overview-name-city cent fd-row'>
                                    <p>Downtown Dubai</p>
                                </div>
                                <div className='hotel-detail-overview-rating cent fd-row'>
                                    <p>4.9 <span>(3456 reviews)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 hotel-detail-top_overview_images-coltwo btwn fd-row'>
                            <div className='hotel-detail-top_overview-side_image'>
                                <Image
                                    src="/images/hotel/hoteld/hotel-2.webp"
                                    className='img-fluid'
                                    width={1638}
                                    height={900}
                                    alt="hotel detail overview image" />
                            </div>
                            <div className='hotel-detail-top_overview-side_image'>
                                <Image
                                    src="/images/hotel/hoteld/hotel-3.webp"
                                    className='img-fluid'
                                    width={1638}
                                    height={900}
                                    alt="hotel detail overview image" />
                            </div>
                            <div className='hotel-detail-top_overview-side_image'>
                                <Image
                                    src="/images/hotel/hoteld/hotel-4.webp"
                                    className='img-fluid'
                                    width={1638}
                                    height={900}
                                    alt="hotel detail overview image" />
                            </div>
                            <div className='hotel-detail-top_overview-side_image hotel-detail-top_overview-side_image-overlay'>
                                <Image
                                    src="/images/hotel/hoteld/hotel-5.webp"
                                    className='img-fluid'
                                    width={1638}
                                    height={900}
                                    alt="hotel detail overview image" />
                                <div className='hotel-detail-top_overview-side_image-viewall cent'>
                                    <p>View All Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row hotel-detail-main_row start common-gap w-100'>
                        <div className='col-8 hotel-detail-main_colone start fd-col common-gap'>
                             <HotelDTabs />
                            <HotelDSimilarHotel />
                            <HotelDPackage />
                            <HotelDfaq />
                            <HotelDGuestReview />
                        </div>
                        <div className='col-4 hotel-detail-main_coltwo start fd-col common-gap'>
                           
                            <HotelDLocationNearby />
                            <HotelDBookStay />
                        </div>
                    </div>

                </div>
            </section>

        </section>
    )
}

export default HotelDetail 