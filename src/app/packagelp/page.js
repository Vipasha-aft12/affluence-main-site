import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './packgelp.css';
import PackageLpDestination from '@/component/packagelpdestination/PackageLpDestination';
import PackageLpChoice from '@/component/packagelpchoice/PackageLpChoice';
import PackageVisa from '@/component/packagevisa/PackageVisa';
import PackageLpHotel from '@/component/packagelphotel/PackageLpHotel';
import PackageLpAirline from '@/component/packagelpairline/PackageLpAirline';



const PackageLandingPage = () => {
  return (
    <section className="package-lp">
      <section className="package-banner">
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

      <section className="pkg_landingp_destination c_mar-top">
        <div className="container pkg_landingp_destination-container start fd-col">
          <div className="row pkg_landingp_destination-row cent">
            <div className="col-12 pkg_landingp_destination-col-heading">
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

       <section className="pkg_landingp-pkg-choice c_mar-top">
        <div className="container pkg_landingp-pkg-choice-container">
          <div className="row pkg_landingp-pkg-choice-row start">
            <div className="col-12 pkg_landingp-pkg-choice-col-heading">
              <h3>Choose Your Perfect Travel Experience</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit, quae aut dolorem ipsum ex quia enim facilis vel maxime suscipit laboriosam libero! Modi.</p>
            </div>
            
            <PackageLpChoice />
            <PackageLpChoice />
            <PackageLpChoice />
            <PackageLpChoice />
            <PackageLpChoice />
            <PackageLpChoice />
          </div>
        </div>
      </section>
      <section className="pkg_landingp_image-slider c_mar-top">
        <div className="container pkg_landingp_image-slider-container">
          <div className="row pkg_landingp_image-slider-row start">
            <div className="col-12 pkg_landingp_image-slider-col-heading">
              <h3>Journey to Untouched Treasures</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-12 pkg_landingp_image-slider-col">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
                  </div>
                  <div className="carousel-item">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
                  </div>
                  <div className="carousel-item">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
                  </div>
                  <div className="carousel-item active">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
                  </div>
                  <div className="carousel-item">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
                  </div>
                  <div className="carousel-item">
                    <Link href="/">
                      <Image 
                        src="/images/package-page/package-images/london-dream.webp"
                        className="d-block w-100 img-fluid"
                        width={1200}
                        height={370}
                        alt="..." />
                    </Link>
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
          </div>
        </div>
      </section>
      <section className="pkg_landingp-speak-to-expert c_mar-top">
        <div className="container pkg_landingp-speak-to-expert-container">
          <div className="row pkg_landingp-speak-to-expert-row">
            <div className="col-12 pkg_landingp-speak-to-expert-col cent fd-col">
              <Image
               src="/images/package-page/package-icon/chat.webp" 
               className="img-fluid chat-icon" 
               width={117}
               height={117}
               alt="package icon" />
              <h4>Speak to Our Travel Experts</h4>
              <p>Get personalized recommendations and exclusive deals from our certified travel consultants</p>
              <button className="btn pkg_landingp-speak-to-expert-btn cent fd-row">
                <Image
                 src="/images/package-page/package-icon/call-icon.webp"
                 className="img-fluid pkg-call-icon"
                 width={57}
                height={59}
                 alt="package icon" /> Call: +1-000-000-0000
              </button>
              <p>Here for You 24/7 | Expert Help at No Cost | Book with Confidence</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pkg_landingp-benefits">
        <div className="container pkg_landingp-benefits-container">
          <div className="row pkg_landingp-benefits-row start">
            <div className="col-12 pkg_landingp-benefits-col-heading">
              <h3>Benefits of Booking With Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur reiciendis tenetur ab impedit velit!</p>
            </div>
            <div className="col-lg-3 col-6 pkg_landingp-benefits-col">
              <div className="pkg_landingp-benefits-box cent fd-col">
                <Image
                 src="/images/package-page/package-icon/customer.webp"
                  className="img-fluid" 
                  width={109}
                  height={108}
                  alt="package image" />
                <p><strong>Customised Itineraries</strong></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam autem necessitatibus odit doloremque deleniti voluptate.</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 pkg_landingp-benefits-col">
              <div className="pkg_landingp-benefits-box cent fd-col">
                <Image
                 src="/images/package-page/package-icon/budget.webp"
                  className="img-fluid"
                  width={109}
                  height={108}
                  alt="package image" />
                <p><strong>Budget-Friendly Rates</strong></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam autem necessitatibus odit doloremque deleniti voluptate.</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 pkg_landingp-benefits-col">
              <div className="pkg_landingp-benefits-box cent fd-col">
                <Image
                 src="/images/package-page/package-icon/amazing-discount.webp" 
                 width={109}
                  height={108}
                 className="img-fluid"
                  alt="package image" />
                <p><strong>Amazing Discounts</strong></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam autem necessitatibus odit doloremque deleniti voluptate.</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 pkg_landingp-benefits-col">
              <div className="pkg_landingp-benefits-box cent fd-col">
                <Image
                 src="/images/package-page/package-icon/24_7-icon.webp"
                  className="img-fluid"
                  width={109}
                  height={108}
                  alt="package image" />
                <p><strong>24/7 Customer Assistance</strong></p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam autem necessitatibus odit doloremque deleniti voluptate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pkd_landingp-visa-free-desti c_mar-top">
        <div className="container pkd_landingp-visa-free-desti-container">
          <div className="row pkd_landingp-visa-free-desti-row start">
            <div className="col-12 pkd_landingp-visa-free-desti-col-heading">
              <h3>Visa-Free Destinations</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus doloribus reiciendis nostrum a distinctio .</p>
            </div>
            <PackageVisa />
             <PackageVisa />
              <PackageVisa />
               <PackageVisa />
          </div>
        </div>
      </section>
      <section className="pkg_landingp-unbeatable-price c_mar-top">
        <div className="container pkg_landingp-unbeatable-price-container">
          <div className="row pkg_landingp-unbeatable-price-row start">
            <div className="col-12 pkg_landingp-unbeatable-price-heading">
              <h3>Luxury Stays at Unbeatable Prices - Included in Your Travel Package!</h3>
            </div>
            <PackageLpHotel />
            <PackageLpHotel />
            <PackageLpHotel />
            <PackageLpHotel />
          </div>
        </div>
      </section>
      <section className="pkg_landingp-partner-airline c_mar-top">
        <div className="container pkg_landingp-partner-airline-container pkg_landingp-partner-airline-row start fd-col">
          <div className="row pkg_landingp-partner-airline-row start w-100">
            <div className="col-12 pkg_landingp-partner-airline-heading">
              <h3 className="w-100 btwn fd-row">Our Partner Airlines <a href>View More</a></h3>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <div className="row multiple-items w-100">
            <PackageLpAirline />
            <PackageLpAirline />
            <PackageLpAirline />
          </div>
        </div>
      </section>

       {/*----please add review section code here--------------------------*/}

    </section>
  )
}

export default PackageLandingPage 