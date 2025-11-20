import React from 'react'
import Link from "next/link";
import Image from "next/image";
import PackageListingFilter from '@/component/packagelistingfilter/PackageListingFilter';
import PackageHotel from '@/component/packagehotel/PackageHotel';
import PackageLpDestination from '@/component/packagelpdestination/PackageLpDestination';




const PackageListing = () => {
    return (
        <section className='package-listing'>
            <section className="package-banner hotel-listing-banner">
                <div className="container package-banner-container">
                    <div className="row package-banner-row cent">
                        <div className="col-12 package-banner-col_heading cent fd-col">
                            <h1>Your Dream Vacations Starts Here</h1>
                            <p>Hotels, Flights and Car Rentals - All in One Package</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner-bottom">
                <div className="container banner-bottom-container">
                    <div className="row banner-bottom-row">
                        <div className="col-12 banner-bottom-col btwn fd-row">
                            <p>ASTA Protected</p>
                            <p>4.8/5 Rating</p>
                            <p>50K+ Travelers</p>
                            <p>24/7 US Support</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pkg_landingp-top_content c_mar-top">
                <div className="container pkg_landingp-top_content-container">
                    <div className="row pkg_landingp-top_content-row">
                        <div className="col-12 pkg_landingp-top_content-col">
                            <h2>Adventure Awaits - Book Your Travel Package in Minutes</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident similique repellat omnis harum, eius ut rerum. Autem, nulla eaque ipsum reprehenderit optio, sint earum corrupti nesciunt, tempora impedit alias saepe. Ea ipsa ut corrupti cumque corporis! Eveniet voluptates officia neque quam nemo. Id ducimus asperiores consequatur reprehenderit officiis, quod maiores tenetur eveniet sint dicta. Doloribus in a atque quae illo! Nemo, totam explicabo architecto iste a vero aut modi harum assumenda quidem, blanditiis dignissimos impedit doloribus possimus? Veritatis temporibus suscipit molestias, quisquam minima quam aspernatur doloremque laudantium in totam quis. Quasi officia, nostrum dolor minima consequatur dicta odit labore modi!</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*---package landing page destination*/}
            <section className="pkg_landingp_destination c_mar-top">
                <div className="container pkg_landingp_destination-container start fd-col">
                    <div className="row pkg_landingp_destination-row cent">
                        <div className="col-12 pkg_landingp_destination-col-heading p-0">
                            <h3>Hottest Destinations This Season</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt laborum aperiam quia impedit aliquid cumque adipisci mollitia in dolorum. Eaque quod consectetur expedita magni reprehenderit, iste incidunt, alias nostrum cupiditate perferendis velit, voluptate nemo sunt quas illo praesentium dolores ipsam vel dicta non necessitatibus adipisci officiis. At, quidem dolor.</p>
                        </div>
                    </div>
                    <div className="row pkg_landingp_destination-row cent pkg_landingp_destination-row-carousel w-100">
                        <div className='col-12 pkg_landingp_destination-col btwn fd-row'>
                        <PackageLpDestination />
                        <PackageLpDestination />
                        <PackageLpDestination />
                        <PackageLpDestination />
                        <PackageLpDestination />
                        </div>
                    </div>
                </div>
            </section>
            {/*----hotel listing*/}
            <section className="hotel-listing c_mar-top">
                <div className="container hotel-listing-container">
                    <div className="row hotel-listing-row start">
                        <div className="col-12 hotel-listing-row-heading start fd-col">
                            <h2>Handpicked Holiday Packages Just For You</h2>
                            <p>Over 10,000 happy travelers have choosen us. Find your perfect escape from our curated collection of premium packages.</p>
                            <div className="hotel-listing-updating-filter-recommend btwn fd-row w-100 mt-3">
                                <div className="hotel-listing-updating start fd-row">
                                    <p>Showing 16 amazing packages </p>
                                    <p>2 hours ago</p>
                                </div>
                                <div className="hotel-listing-filter-recommend cent fd-row">
                                    <div className='cent fd-row'>
                                        <Image
                                            src='/images/hotel-listing-image/smart-filter.webp'
                                            className='img-fluid'
                                            width={17}
                                            height={16}
                                            alt='package listing' />
                                        <p className="cent fd-row"> Smart Filter</p>
                                    </div>
                                    <div className='cent fd-row'>
                                        <Image
                                            src='/images/hotel-listing-image/recommend.webp'
                                            className='img-fluid'
                                            width={33}
                                            height={33}
                                            alt='package listing' />

                                        <p className="cent fd-row">Recommended</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 hotel-listing-col-filter">
                            <PackageListingFilter />
                        </div>
                        <div className="col-lg-9 hotel-listing-col">
                            <div className="row hotel_listing_row start w-100">
                                <PackageHotel />
                                <PackageHotel />
                                <PackageHotel />
                                <PackageHotel />
                                <PackageHotel />
                                <PackageHotel />
                                <div className="col-12 hotel_listing_col-information">
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum nulla, ducimus culpa provident possimus expedita voluptatibus veritatis consequatur officia magni neque assumenda ullam voluptatum suscipit, accusamus maiores perspiciatis est fuga animi! Deserunt nesciunt officiis vitae sequi hic fuga vero modi consequatur odit odio. Suscipit assumenda dignissimos nam illum minus tenetur ipsum quo iste possimus, quis, esse, nobis culpa dolorem dicta fugiat labore libero consequatur numquam. Distinctio praesentium voluptatem illo, dolores ipsum asperiores minima accusantium commodi quas eligendi modi error repellendus aut cupiditate, magni doloribus necessitatibus reprehenderit pariatur earum perspiciatis vero quia. Placeat velit ullam maiores vel aliquid quod ex.</p>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum nulla, ducimus culpa provident possimus expedita voluptatibus veritatis consequatur officia magni neque assumenda ullam voluptatum suscipit, accusamus maiores perspiciatis est fuga animi! Deserunt nesciunt officiis vitae sequi hic fuga vero modi consequatur odit odio. Suscipit assumenda dignissimos nam illum minus tenetur ipsum quo iste possimus, quis, esse, nobis culpa dolorem dicta fugiat labore libero consequatur numquam. Distinctio praesentium voluptatem illo, dolores ipsum asperiores minima accusantium commodi quas eligendi modi error repellendus aut cupiditate, magni doloribus necessitatibus reprehenderit pariatur earum perspiciatis vero quia. Placeat velit ullam maiores vel aliquid quod ex.</p>
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum nulla, ducimus culpa provident possimus expedita voluptatibus veritatis consequatur officia magni neque assumenda ullam voluptatum suscipit, accusamus maiores perspiciatis est fuga animi! Deserunt nesciunt officiis vitae sequi hic fuga vero modi consequatur odit odio. Suscipit assumenda dignissimos nam illum minus tenetur ipsum quo iste possimus, quis, esse, nobis culpa dolorem dicta fugiat labore libero consequatur numquam. Distinctio praesentium voluptatem illo, dolores ipsum asperiores minima accusantium commodi quas eligendi modi error repellendus aut cupiditate, magni doloribus necessitatibus reprehenderit pariatur earum perspiciatis vero quia. Placeat velit ullam maiores vel aliquid quod ex.</p>
                                    <h5>Lorem ipsum dolor sit amet</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum nulla, ducimus culpa provident possimus expedita voluptatibus veritatis consequatur officia magni neque assumenda ullam voluptatum suscipit, accusamus maiores perspiciatis est fuga animi! Deserunt nesciunt officiis vitae sequi hic fuga vero modi consequatur odit odio. Suscipit assumenda dignissimos nam illum minus tenetur ipsum quo iste possimus, quis, esse, nobis culpa dolorem dicta fugiat labore libero consequatur numquam. Distinctio praesentium voluptatem illo, dolores ipsum asperiores minima accusantium commodi quas eligendi modi error repellendus aut cupiditate, magni doloribus necessitatibus reprehenderit pariatur earum perspiciatis vero quia. Placeat velit ullam maiores vel aliquid quod ex.</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam ratione, est facere rem in quae cumque repudiandae amet eius!</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum consequuntur nisi numquam, assumenda nulla consequatur ab ullam repudiandae quidem consectetur voluptates, accusamus obcaecati, libero quis laboriosam? Maxime voluptatibus alias reprehenderit molestiae perferendis eligendi accusantium nemo, mollitia obcaecati recusandae laudantium vero iusto quos ex quidem dolores aliquam? Placeat, fugit ea!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* please add faq section */}

            {/*------mobile hotel listing filter-----*/}
            <section className="hotel_listing-mb-filter c_mar-top">
                <div className="container hotel_listing-mb-filter-container">
                    <div className="row hotel_listing-mb-filter-row">
                        <div className="col-12 hotel_listing-mb-filter-col cent">
                            <nav className="navbar">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#"> Filter</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                        <Image
                                            src='/images/hotel-listing-image/filter-icon.webp'
                                            className='img-fluid'
                                            width={61}
                                            height={61}
                                            alt='package listing' />
                                    </button>
                                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Filter</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                        </div>
                                        <div className="offcanvas-body">
                                            <PackageListingFilter />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PackageListing