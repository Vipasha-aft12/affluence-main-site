"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './hotellisting.css';
import SearchEngineHotel from "@/component/searchengine/SearchEngineHotel";

export default function Page() {
  //filter
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState("any");
  const [amenities, setAmenities] = useState([]);


  // hotel data

  const hotels = [
    {
      id: 1,
      name: "Downtown Dubai",
      location: "Dubai, UAE",
      rating: 4.7,
      oldPrice: 475,
      newPrice: 350,
      reviews: 3456,
      amenities: ["Spa", "Fine Dining", "Infinity Pool"],
      tags: ["Burj Khalifa View", "Luxury Hotel"],
      image: "/images/hotel/hotellisting/hotel-image-1.webp",
      description: "Iconic resort on Palm Jumeirah with world-class amenities and Arabian Gulf views.",
    },
    {
      id: 2,
      name: "Palm Jumeirah Resort",
      location: "Palm Jumeirah, Dubai",
      rating: 4.8,
      oldPrice: 550,
      newPrice: 420,
      reviews: 2890,
      amenities: ["Multiple Pools", "Spa", "Private Beach"],
      tags: ["Beach Villa", "Resort"],
      image: "/images/hotel/hotellisting/hotel-image-2.webp",
      offer: "24% OFF",
      description: "Iconic resort on Palm Jumeirah with world-class amenities and Arabian Gulf views."
    },
  ];


  // amenities

  const toggleAmenity = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };


  // filter resetting

  const resetFilters = () => {
    setSortBy("recommended");
    setPriceRange([0, 1000]);
    setMinRating("any");
    setAmenities([]);
  };

  return (
    <section className="hotel-listing-page">

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

      <section className="hotel-listing-main">
        <div className="container">
          <div className="row common-gap">

            {/* ------------------ FILTER SIDEBAR ------------------ */}
            <div className="col-lg-3 col-md-4 hotel-listing-filter start fd-col">

              <h5 className="hotel-listing-filter-heading">Filter</h5>
              <div className="bdr-btm w-100 pb-4">
                <select className="form-select hotel-listing-filter-sortby"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="rating">Highest Rating</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                </select>
              </div>




              {/* PRICE RANGE */}
              <h5 className="hotel-listing-filter-heading">Price Range</h5>
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, e.target.value])}
              />
              <div className="hotel-listing-filter-range w-100 btwn fd-row bdr-btm pb-4">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>


              {/* RATING FILTER */}
              <h5 className="hotel-listing-filter-heading">Minimum Rating</h5>
              {["4.5", "4", "3.5", "3"].map((rate) => (
                <div key={rate} className="form-check hotel-listing-filter-rate">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating"
                    value={rate}
                    checked={minRating === rate}
                    onChange={() => setMinRating(rate)}
                  />
                  <label className="form-check-label">⭐ {rate}+</label>
                </div>
              ))}
              <div className="form-check hotel-listing-filter-radio bdr-btm w-100 pb-4">
                <input
                  type="radio"
                  className="form-check-input"
                  name="rating"
                  value="any"
                  checked={minRating === "any"}
                  onChange={() => setMinRating("any")}
                />
                <label className="form-check-label hotel-listing-filter-radio-label">Any Rating</label>
              </div>

              {/* AMENITIES */}
              <h5 className="hotel-listing-filter-heading">Amenities</h5>
              {["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking", "Breakfast"].map((item) => (
                <div key={item} className="form-check hotel-listing-filter-anenities">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={amenities.includes(item)}
                    onChange={() => toggleAmenity(item)}
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              ))}

              {/* RESET BUTTON */}
              <div className="hotel-listing-filter-reset w-100">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* ------------------ HOTEL LIST SECTION ------------------ */}
            <div className="col-lg-9 col-md-8 hotel-listing-col start fd-col common-gap">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="hotel-listing-col-card w-100">

                  <div className="row hotel-listing-box start fd-row">
                    <div className="col-lg-4 hotel-listing-box-image ps-0">
                      {hotel.offer && (
                        <span className="hotel-listing-box-discount">
                          {hotel.offer}
                        </span>
                      )}
                      <Image
                        src={hotel.image}
                        width={300}
                        height={200}
                        className="img-fluid hotel-listing-box-image"
                        alt={hotel.name}
                      />
                    </div>

                    <div className="col-lg-8 hotel-listing-box-content start fd-col">

                      <div className="hotel-listing-box-hotelname start fd-col bdr-btm w-100">
                        <div className="w-100 btwn fd-row">
                          <h4 className="hotel-listing-box-hotelname-heading">{hotel.name}</h4>
                          <div className="hotel-listing-rating-star cent fd-row">
                            <Image
                              src="/images/hotel/hotellisting/star.webp"
                              className="img-fluid"
                              width={24}
                              height={24}
                              alt="hotel listing star" />
                            <p>{hotel.rating}</p>
                          </div>
                        </div>
                        <div className="hotel-listing-location start fd-row">
                          <Image
                            src="/images/hotel/hotellisting/location.webp"
                            className="img-fluid"
                            width={24}
                            height={24}
                            alt="hotel listing location" />
                          <p className="hotel-listing-box-hotelname-city">{hotel.location}</p>
                        </div>

                        <p className="hotel-listing-box-hotelname-tag">{hotel.tags.join(" • ")}</p>
                        <p>{hotel.description}</p>
                        <div className="hotel-listing-box-amenities w-100 start fd-row">
                          {hotel.amenities.map((a, index) => (
                            <span key={index} className="bg-light hotel-listing-box-amenities-span">
                              {a}
                            </span>
                          ))}
                        </div>

                        <p className="hotel-listing-box-hotelname-review">{hotel.reviews} reviews</p>
                      </div>

                      <div className="hotel-listing-box-bottom w-100 btwn fd-row">
                        <div className="hotel-listing-box-prices start fd-col">
                          <s className="text-decoration-line-through text-muted">
                            ${hotel.oldPrice}
                          </s>
                          <h5 className="text-success">${hotel.newPrice}<span>/night</span></h5>
                          <p className="text-success small">✓ Free cancellation</p>
                        </div>

                        <Link href='/hoteldetail'>View Details</Link>
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}
