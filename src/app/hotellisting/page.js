"use client";
import { useState } from "react";
import Image from "next/image";
import './hotellisting.css';

export default function Page() {
  // -----------------------------
  // FILTER STATES
  // -----------------------------
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState("any");
  const [amenities, setAmenities] = useState([]);
  
  // -----------------------------
  // HOTEL DATA (DYNAMIC)
  // -----------------------------
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
      image: "/hotel1.jpg", 
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
      image: "/hotel2.jpg",
      offer: "24% OFF"
    },
  ];

  // -----------------------------
  // HANDLE AMENITIES
  // -----------------------------
  const toggleAmenity = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  // -----------------------------
  // RESET ALL FILTERS
  // -----------------------------
  const resetFilters = () => {
    setSortBy("recommended");
    setPriceRange([0, 1000]);
    setMinRating("any");
    setAmenities([]);
  };

  return (
    <div className="container py-4">
      <div className="row">
        
        {/* ------------------ FILTER SIDEBAR ------------------ */}
        <div className="col-lg-3 col-md-4 mb-4 border rounded p-3">

          <h5 className="mb-3">Sort By</h5>
          <select className="form-select mb-3" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest Rating</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>

          <hr />

          {/* PRICE RANGE */}
          <h5 className="mb-3">Price Range</h5>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, e.target.value])}
          />
          <div className="d-flex justify-content-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>

          <hr />

          {/* RATING FILTER */}
          <h5 className="mb-3">Minimum Rating</h5>
          {["4.5", "4", "3.5", "3"].map((rate) => (
            <div key={rate} className="form-check mb-1">
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
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="rating"
              value="any"
              checked={minRating === "any"}
              onChange={() => setMinRating("any")}
            />
            <label className="form-check-label">Any Rating</label>
          </div>

          <hr />

          {/* AMENITIES */}
          <h5 className="mb-2">Amenities</h5>
          {["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking", "Breakfast"].map((item) => (
            <div key={item} className="form-check mb-1">
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
          <div className="mt-4">
            <button 
              className="btn btn-outline-danger w-100"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* ------------------ HOTEL LIST SECTION ------------------ */}
        <div className="col-lg-9 col-md-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="card mb-4 shadow-sm p-3">

              <div className="row g-0">
                <div className="col-md-4 position-relative">
                  {hotel.offer && (
                    <span className="badge bg-danger position-absolute m-2">
                      {hotel.offer}
                    </span>
                  )}
                  <Image
                    src={hotel.image}
                    width={400}
                    height={260}
                    className="rounded img-fluid"
                    alt={hotel.name}
                  />
                </div>

                <div className="col-md-8 ps-3 d-flex flex-column justify-content-between">
                  
                  <div>
                    <h4 className="mb-1">{hotel.name}</h4>
                    <p className="text-muted mb-1">{hotel.location}</p>

                    <p className="mb-2">{hotel.tags.join(" • ")}</p>

                    <div className="mb-2">
                      {hotel.amenities.map((a, index) => (
                        <span key={index} className="badge bg-light text-dark me-1">
                          {a}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted">{hotel.reviews} reviews</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-decoration-line-through text-muted">
                        ${hotel.oldPrice}
                      </span>
                      <h4 className="text-success">${hotel.newPrice}/night</h4>
                      <p className="text-success small">✓ Free cancellation</p>
                    </div>

                    <button className="btn btn-primary">View Details</button>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
