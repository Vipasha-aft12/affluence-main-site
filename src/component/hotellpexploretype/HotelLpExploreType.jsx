"use client";
import React from "react";
import Image from "next/image";
import "./HotelLpExploreType.css";

export default function HotelLpExploreType() {
  const hotelCategories = [
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/luxury-hotel.webp",
      title: "Luxury Hotels",
      features: [
        "5-Star Service",
        "Premium Amenities",
        "Fine Dining",
        "Spa & Wellness",
      ],
      button: "Explore Luxury Hotels",
      link: "#",
    },
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/boutique-hotel.webp",
      title: "Boutique Hotels",
      features: [
        "Unique Design",
        "Personalized Service",
        "Local Character",
        "Intimate Setting",
      ],
      button: "Explore Boutique Hotels",
      link: "#",
    },
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/resort-hotel.webp",
      title: "Resort Hotels",
      features: [
        "Multiple Pools",
        "Beach Access",
        "Activities",
        "All-Inclusive Options",
      ],
      button: "Explore Resort Hotels",
      link: "#",
    },
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/business-hotel.webp",
      title: "Business Hotels",
      features: [
        "Business Center",
        "Meeting Rooms",
        "Fast WiFi",
        "Airport Shuttle",
      ],
      button: "Explore Business Hotels",
      link: "#",
    },
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/historic-hotel.webp",
      title: "Historic Hotels",
      features: [
        "Historical Architecture",
        "Cultural Experience",
        "Unique Charm",
        "Heritage Sites",
      ],
      button: "Explore Historic Hotels",
      link: "#",
    },
    {
      image: "/images/hotel/hotellp/explore-hotel.jpeg",
      icon: "/images/hotel/hotellp/budget-hotel.webp",
      title: "Budget Hotels",
      features: [
        "Best Value",
        "Clean Rooms",
        "Essential Amenities",
        "Great Locations",
      ],
      button: "Explore Budget Hotels",
      link: "#",
    },
  ];

  return (

    <div className="row hotellp_explore-hotel-main-row start common-gap">
      {hotelCategories.map((item, index) => (
        <div key={index} className="col-lg-4 col-sm-6 hotellp-explore_hotel_type-col">
          <div className="hotel-card hotellp-explore_hotel_type-box start fd-col w-100">
            <div className="hotel-card hotellp-explore_hotel_type-box-image">
              <Image
                src={item.image}
                className="img-fluid explore-hotel-img"
                width={800}
                height={533}
                alt={item.title} />
              <div className="hotel-card hotellp-explore_hotel_type-box-image-icon start fd-row">
                <Image
                  src={item.icon}
                  className="img-fluid explore-hotel-icon"
                  width={60}
                  height={60}
                  alt="icon" />
                <p>{item.title}</p>
              </div>
            </div>
            <div className="hotel-card hotellp-explore_hotel_type-box-content start fd-col w-100">
              <p>Experience world-class service and premium amenities</p>
              <ul className="hotel-card hotellp-explore_hotel_type-box-content-ul start fd-col">
                {item.features.map((feat, i) => (
                  <li key={i}>
                    <i className="bi bi-check2"></i> {feat}
                  </li>
                ))}
              </ul>
              <div className="hotel-card hotellp-explore_hotel_type-box-content-button w-100">
                <a href={item.link} className="btn hotel-card hotellp-explore_hotel_type-box-content-btn cent w-100">
                  {item.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );



}