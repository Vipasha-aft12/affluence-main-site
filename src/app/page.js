"use client"
import HomepageAirlinePartner from "@/component/homepageairlinepartner/HomepageAirlinePartner";
import HomepageExclusiveOffer from "@/component/homepageexclusiveoffer/HomepageExclusiveOffer";
import HomepageHotel from "@/component/homepagehotel/HomepageHotel";
import HomepageTravelPartner from "@/component/homepagetravelpartner/HomepageTravelPartner";
import PackageLpChoice from "@/component/packagelpchoice/PackageLpChoice";
import SearchEngine from "@/component/searchengine/SearchEngine";
import Image from "next/image";


export default function Home() {
  return (
    <section className="homepage">
      <div className="container homepage-container">

        <div className="row homepage-banner-row">
          <div className="col-12 homepage-banner-heading">
            <h1>Discover Your Next <br />
              <span>Luxury Adventure</span></h1>
          </div>
          <div className="col-12 homepage-banner-search-engine">
            <SearchEngine />
          </div>
        </div>

        <div className="row homepage-exclusive-offer start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-exclusive-offer-heading">
            <h2>Exclusive Offer</h2>
            <p>Discover limited-time deals to your dream destinations.</p>
          </div>
          <HomepageExclusiveOffer />
        </div>

        <div className="row homepage-airlinepartner start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-airlinepartner-heading">
            <h2>Experience Flying with our Airline Partners</h2>
          </div>
          <div className="col-12 homepage-airlinepartner-col">
            <HomepageAirlinePartner />
          </div>
        </div>

        <div className="row homepage-cruise start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-cruise-heading">
            <h2>Cruise</h2>
          </div>
          <div className="col-12 homepage-cruise-col">
            <Image
              src="/images/homepage/cruise.webp"
              width={2598}
              height={704}
              className="img-fluid hp_cruise-main-image"
              alt="cruise image" />
            <h2 className="homepage-cruise-col-heading">Seamless journeys, expertly guided <br />from start to finish</h2>
            <div className="hp-cruise-boxes start fd-col">
              <div className="hp-cruise-subboxes cent fd-row">
                <Image
                  src="/images/homepage/cruise-1.webp"
                  width={200}
                  height={191}
                  className="img-fluid hp_cruise-image"
                  alt="cruise image" />
                <p><strong>Amenities for a fun-filled experience</strong></p>
              </div>
              <div className="hp-cruise-subboxes cent fd-row">
                <Image
                  src="/images/homepage/cruise-2.webp"
                  width={200}
                  height={191}
                  className="img-fluid hp_cruise-image"
                  alt="cruise image" />
                <p><strong>World class performance</strong></p>
              </div>
              <div className="hp-cruise-subboxes cent fd-row">
                <Image
                  src="/images/homepage/cruise-3.webp"
                  width={200}
                  height={191}
                  className="img-fluid hp_cruise-image"
                  alt="cruise image" />
                <p><strong>Dining with stunning ocean views</strong></p>
              </div>
            </div>
          </div>

        </div>

        <div className="row homepage-hotel start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-hotel-heading">
            <h2>Handpicked Hotels Just For You</h2>
          </div>
          <HomepageHotel />
          <HomepageHotel />
          <HomepageHotel />
          <HomepageHotel />
        </div>

        <div className="row homepage-travel-partner start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-travel-partner-heading">
            <h2>Why We're Your Travel Partner?</h2>
          </div>
          <HomepageTravelPartner />
        </div>

        <div className="row homepage-mid-banner">
          <div className="col-3 homepage-midbanner-colone">
            <a href="tel:+1-888-829-1141">
              <Image
                src='/images/homepage/mid-banner-one.webp'
                className='img-fluid homepage-mid-bannerone'
                width={222}
                height={190}
                alt='Homepage mid banner' />
            </a>
          </div>
          <div className="col-6 homepage-midbanner-content start fd-col">
            <h3>From Flights to stays, we've got you covered. Book with ease and travel with confidence.</h3>
            <a href="tel:+1-888-829-1141">Call us at <span>+1-888-829-1141</span> -we're here to help.</a>
          </div>
          <div className="col-3 homepage-midbanner-colone">
            <a href="tel:+1-888-829-1141">
              <Image
                src='/images/homepage/mid-banner-two.webp'
                className='img-fluid homepage-mid-bannertwo'
                width={166}
                height={190}
                alt='Homepage mid banner' />
            </a>
          </div>
        </div>

        <div className="row homepage-car_rental start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-car_rental-heading">
            <h2>Car Rental</h2>
          </div>
          <div className="col-12 homepage-car_rental-col start fd-col">
            <Image
                src='/images/homepage/car-rental.webp'
                className='img-fluid homepage-car-rental'
                width={2598}
                height={700}
                alt='Homepage car rental' />
            <div className="homepage-car-rental-content start fd-col">
              <h3>Smooth rides, perfectly arranged from pickup to drop-off.</h3>
              <p>Amenities that make every mile more enjoyable</p>
              <p>World class perfomance</p>
              <p>Driving with unmatched comfort and style</p>
            </div>
          </div>
        </div>

        <div className="row homepage-package start common-gap w-100 homepage-common-row">
          <div className="col-12 homepage-package-heading">
            <h2>Choose Your Perfect Package</h2>
          </div>
          <PackageLpChoice />
          <PackageLpChoice />
          <PackageLpChoice />
        </div>

      </div>
    </section>
  );
}
