import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageListingFilter = () => {
  return (
    <div className="hotel-filter-box start fd-col w-100">
            <div className="h_filter-box-heading">
              <h5 className="w-100 cent fd-row h_filter-box-heading-h5">
                <img src="images/hotel-listing-image/filter-icon.webp" className="img-fluid" alt />
                Filter Your Result
              </h5>
              <p>Customize your search to quickly find filter-specific answers.</p>
            </div>
            <div className="h_filter-box-range start fd-col w-100">
              <h5>Price Range</h5>
              <input type="range" min={1} max={100} defaultValue={50} className="w-100" />
              <div className="h_filter-prange-box btwn fd-row w-100">
                <p>Between</p>
                <div className="h_filter-price-amt cent fd-row">
                  <p className="hotel-filter-start-amount hotel-filter-amt cent">$320</p>
                  <p>-</p>
                  <p className="hotel-filter-end-amount hotel-filter-amt cent">$1175</p>
                </div>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Package Type</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Honeymoon
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Family
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Adventure
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Luxury
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Budget
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Group Tours
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Solo Travel
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Destinations</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Asia
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Europe
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  America
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Africa
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Oceania
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Middle East
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Flight Class</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Economy
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Premium Economy
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Business
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  First Class
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Meal Plans</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  All Inclusive
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Full Board
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Half Board
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Braekfast Only
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Room Only
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Duration</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  1-3 Days
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  4-6 Days
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  7-9 Days
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  10-14 Days
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  15+ Days
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Themes &amp; Activities</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Beach &amp; Sun
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Culture &amp; History
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Wildlife &amp; Nature
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  City Breaks
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Wellness &amp; Spa
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Food &amp; Drink
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Shopping
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Nightlife
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Hotel Rating</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  5 Star
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  4 Star &amp; above 
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  3 Star &amp; above 
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  2 Star &amp; above 
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Special Offers</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Early Bird Discount
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Last Minute Deals
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Free Room Upgrade
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Free Airport Transfer
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Free Wifi
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Kids Stay Safe
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Departure Airports</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  New York (NYC)
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Los Angles (LAX)
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Miami (MIA)
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Chicago (ORD)
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  San Francisco (SFO)
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Boston (BOS)
                </label>
              </div>
            </div>
            <div className="hotel-filter filter-label w-100">
              <h5 className="ff-subheading">Hotel Amenities</h5>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Free Wifi 
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Swimming Pool
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Spa &amp; Wellness
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Free Breakfast 
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Aiport Transfer
                </label>
              </div>
              <div className="form-check hotel_filter_options">
                <input className="form-check-input" type="checkbox" defaultValue id="airline_one" />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Fitness Center
                </label>
              </div>
            </div>
          </div>
  )
}

export default PackageListingFilter
