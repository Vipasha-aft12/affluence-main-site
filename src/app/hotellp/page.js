import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './hotellp.css';
import WhyBookHotel from '@/component/whybookhotel/WhyBookHotel';
import HotelLpTopHotel from '@/component/hotellptophotel/HotelLpTopHotel';
import HotelLpExploreType from '@/component/hotellpexploretype/HotelLpExploreType';
import SearchEngine from '@/component/searchengine/SearchEngine';




const HotelLandingPage = () => {
    return (
        <section className='hotel_landingpage'>
            <section className='hotel-lp-banner'>
                <div className='container hotel-lp-banner-container'>
                    <div className='row hotel-lp-banner-row'>
                        <div className='col-12 hotel-lp-banner-col'>
                            <h1>Your Journey, Your Reward</h1>
                            <p>Find the best deals on flights, hotels and more</p>
                        </div>
                       <div className='col-12 hotel-lp-banner-searchcol'>
                            <SearchEngine /> 
                        </div> 
                    </div>
                </div>
            </section>

            <section className='why-book-hotel'>
                <div className='container why-book-hotel-container start fd-col common-gap'>
                    <div className='row why-book-hotel-row'>
                        <div className='col-12 why-book-hotel-heading'>
                            <h2>Why Book Hotels with A Travel?</h2>
                            <p>We're committed to providing you with the best hotel booking experience. Our platform offers unbeatable prices, verified reviews, and a seamless booking process that puts you in control.</p>
                        </div>
                    </div>
                    <WhyBookHotel />
                </div>
            </section>

            <section className='hotellp-top-hotels hlp-domestic-hotels c_mar-top'>
                <div className='container hotellp-top-hotels-container start fd-col common-gap'>
                    <div className='row hotellp-top-hotels-row w-100'>
                        <div className='col-12 hotellp-top-hotels-heading'>
                            <h2>Top Domestic Hotel Deals</h2>
                            <p>Explore incredible savings on hotels across the United States</p>
                        </div>
                    </div>
                    <HotelLpTopHotel />
                </div>
            </section>

            <section className='hotellp-top-hotels hlp-international-hotels c_mar-top'>
                <div className='container hotellp-top-hotels-container start fd-col common-gap'>
                    <div className='row hotellp-top-hotels-row w-100'>
                        <div className='col-12 hotellp-top-hotels-heading'>
                            <h2>International Hotel Deals</h2>
                            <p>Discover luxury accommodations and exclusive offers around the world</p>
                        </div>
                    </div>
                    <HotelLpTopHotel />
                </div>
            </section>

            <section className='hotellp-explore_hotel_type c_mar-top'>
                <div className='container hotellp-explore_hotel_type-container start fd-col common-gap'>
                    <div className='row hotellp-explore_hotel_type-row'>
                        <div className='col-12 hotellp-explore_hotel_type-heading'>
                            <h2>Explore Hotels by Type</h2>
                            <p>Whether you're looking for luxury, value, or a unique experience, we have the perfect accommodation type for every traveler</p>
                        </div>
                    </div>
                    <HotelLpExploreType />
                </div>
            </section>

            <section className='hotellp-booking-guide c_mar-top'>
                <div className='container hotellp-booking-guide-container'>
                    <div className='row hotellp-booking-guide-row start common-gap'>
                        <div className='col-lg-6 hotellp-booking-guide-colone start fd-col'>
                            <h2>Your Complete Hotel Booking Guide</h2>
                            <h3>Finding the Perfect Hotel</h3>
                            <p>Choosing the right hotel can make or break your trip. At A Travel, we understand that every traveler has unique needs and preferences. Our extensive collection of hotels ranges from budget-friendly options to ultra-luxury resorts, ensuring there's something perfect for everyone.</p>
                            <p>Use our advanced search filters to narrow down options by price range, star rating, amenities, and guest reviews. Our verified reviews from real travelers help you make informed decisions about where to stay.</p>
                            <h4> Understanding Hotel Amenities</h4>
                            <p>Modern hotels offer a wide range of amenities to enhance your stay. Common features include complimentary WiFi, fitness centers, swimming pools, and on-site restaurants. Business travelers often prioritize meeting rooms and business centers, while families look for kid-friendly facilities and spacious rooms.</p>
                            <p> Luxury hotels may offer additional perks such as spa services, concierge assistance, airport transfers, and exclusive lounge access. Always check what's included in your room rate versus what requires an additional fee.</p>
                            <h4> Booking Tips for Best Prices</h4>
                            <p>Timing is everything when it comes to hotel bookings. Generally, booking 2-3 weeks in advance offers the best balance between availability and pricing. However, last-minute deals can sometimes offer exceptional value for flexible travelers.</p>
                            <p>Our Best Price Guarantee ensures you're getting the most competitive rate. If you find a lower price elsewhere within 24 hours of booking, we'll match it and provide an additional discount.</p>
                        </div>
                        <div className='col-lg-6 hotellp-booking-guide-coltwo start fd-col'>
                            <h4>Popular Amenities & Services</h4>
                            <div className='hotellp-booking-guide-coltwo-box btwn fd-row w-100'>
                               
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/wifi.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Free WiFi</strong></p>
                                        <p>Stay connected with high-speed internet access throughout the property</p>
                                    </div>
                                </div>
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/restaurent.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Restaurant & Bar</strong></p>
                                        <p>On-site dining options with breakfast, lunch, and dinner service</p>
                                    </div>
                                </div>
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/fitness.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Fitness Center</strong></p>
                                        <p>Modern gym equipment available 24/7 for your workout needs</p>
                                    </div>
                                </div>
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/parking.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Parking</strong></p>
                                        <p>Secure parking facilities with valet service options</p>
                                    </div>
                                </div>
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/air-condtioning.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Air Conditioning</strong></p>
                                        <p>Climate-controlled rooms for your comfort year-round</p>
                                    </div>
                                </div>
                                <div className='hotellp-booking-guide-coltwo-subbox btwn fd-row'>
                                    <div className='hotellp-booking-guide-coltwo-subbox-image'>
                                        <Image
                                            src="/images/hotel/hotellp/breakfast.webp"
                                            className='img-fluid hotellp-booking-icon'
                                            width={70}
                                            height={70}
                                            alt="hotel booking" />
                                    </div>
                                    <div className='hotellp-booking-guide-coltwo-subbox-content'>
                                        <p><strong>Breakfast</strong></p>
                                        <p>Complimentary or buffet breakfast to start your day right</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hotellp-booking-guide-coltwo-box start fd-col w-100'>
                                <h4>Flexible Cancellation Policies</h4>
                                <p>We understand that plans can change. That's why most of our hotel partners offer flexible cancellation policies. Look for the "Free Cancellation" badge when browsing hotels to find properties that allow you to cancel or modify your booking without penalties.</p>
                                <ul>
                                    <li>Cancel up to 24-48 hours before check-in for free</li>
                                    <li>Modify your dates without additional charges</li>
                                    <li>Full refund processed within 5-7 business days</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hotellp-expert_tips c_mar-top'>
                <div className='container hotellp-expert_tips-container'>
                    <div className='row hotellp-expert_tips-row start common-gap'>
                        <div className='col-md-4 hotellp-expert_tips-col'>
                            <div className='hotellp-expert_tips-box start fd-col w-100'>
                                <p><strong>Check-in & Check-out</strong></p>
                                <p>Standard check-in time is typically 3:00 PM and check-out is 11:00 AM. If you need to arrive early or depart late, contact the hotel in advance to request early check-in or late check-out.Many hotels offer luggage storage if you arrive before check-in time, allowing you to explore the area without your bags.</p>
                            </div>
                        </div>
                        <div className='col-md-4 hotellp-expert_tips-col'>
                            <div className='hotellp-expert_tips-box start fd-col w-100'>
                                <p><strong>Loyalty Programs</strong></p>
                                <p>Join hotel loyalty programs to earn points for free nights, room upgrades, and exclusive perks. Most programs are free to join and can provide significant value for frequent travelers.Elite status members often receive benefits like complimentary breakfast, late checkout, and guaranteed room availability.</p>
                            </div>
                        </div>
                        <div className='col-md-4 hotellp-expert_tips-col'>
                            <div className='hotellp-expert_tips-box start fd-col w-100'>
                                <p><strong>Direct Communication</strong></p>
                                <p>After booking, don't hesitate to contact the hotel directly with special requests such as a quiet room, high floor, or specific bedding preferences.Hotels appreciate advance notice and will do their best to accommodate your preferences, ensuring a more personalized stay experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hotellp-mid c_mar-top'>
                <div className='container hotellp-mid-container'>
                    <div className='row hotellp-mid-row'>
                        <div className='col-12 hotellp-mid-col cent fd-col'>
                            <p>Ready to Book Your Perfect Hotel?</p>
                            <p><strong>Join millions of travelers who trust A Travel for their accommodation needs. Start exploring today and unlock exclusive deals on hotels worldwide.</strong></p>
                            <button className='btn hotellp-mid-btn cent'>Search Hotels Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hotellp-faq c_mar-top'>
                <div className='container hotellp-faq-container'>
                    <div className='row hotellp-faq-row start'>
                        <div className='col-12 hotellp-faq-heading'>
                            <h2>Frequently Asked Questions</h2>
                            <p>Find answers to common questions about booking hotels with A Travel</p>
                        </div>
                        <div className='col-12 hotellp-faq-col'>
                            {/* add faq section here */}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HotelLandingPage 