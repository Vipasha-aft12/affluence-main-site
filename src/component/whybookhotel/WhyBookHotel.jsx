"use client";
import React from "react";
import Image from "next/image";
import "./WhyBookHotel.css";

export default function WhyBookHotel() {
  const whyBookData = [
    {
      icon: "/images/hotel/hotellp/best-price.webp",
      title: "Best Price Guarantee",
      description:
        "Find a lower price? We'll match it and give you an additional discount",
    },
    {
      icon: "/images/hotel/hotellp/secure-booking.webp",
      title: "Secure Booking",
      description:
        "Your personal and payment information is protected with advanced encryption",
    },
    {
      icon: "/images/hotel/hotellp/verified-review.webp",
      title: "Verified Reviews",
      description:
        "Read authentic reviews from real guests to make informed decisions",
    },
    {
      icon: "/images/hotel/hotellp/free-cancellation.webp",
      title: "Free Cancellation",
      description:
        "Most hotels offer free cancellation. Plans change? No problem!",
    },
  ];

  return (
    <div className="row why-book-hotel-main-row common-gap">
      {whyBookData.map((item, index) => (
        <div key={index} className="col-md-3 col-6 why-book-hotel-col">
          <div className="why-book-hotel-box cent fd-col">
            <div className="why-book-hotel-image cent">
              <Image 
              src={item.icon}
              width={80}
              height={80} 
              alt={item.title} />
            </div>

            <div className="why-book-hotel-content cent fd-col">
              <p><strong>{item.title}</strong></p>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
