"use client";
import React from "react";
import Image from "next/image";
import "./HotelLpTopHotel.css";


export default function HotelLpTopHotel() {

    const hotelDeals = [
        {
            image: "/images/hotel/hotellp/int-hotel.jpeg",
            discount: "24% OFF",
            rating: 4.8,
            reviews: 1245,
            title: "Grand Plaza Hotel",
            location: "New York, USA",
            amenities: ["Free WiFi", "Pool", "Spa"],
            oldPrice: 249,
            newPrice: 189,
        },
        {
            image: "/images/hotel/hotellp/domestic-hotel.jpeg",
            discount: "27% OFF",
            rating: 4.7,
            reviews: 892,
            title: "Sunset Beach Resort",
            location: "Miami, Florida",
            amenities: ["Beach Access", "Pool", " Breakfast"],
            oldPrice: 219,
            newPrice: 159,
        },
        {
            image: "/images/hotel/hotellp/int-hotel.jpeg",
            discount: "23% OFF",
            rating: 4.9,
            reviews: 567,
            title: "Mountain View Lodge",
            location: "Aspen, Colorado",
            amenities: ["Ski Access", "Fireplace", "Hot Tub"],
            oldPrice: 299,
            newPrice: 229,
        },
        {
            image: "/images/hotel/hotellp/domestic-hotel.jpeg",
            discount: "25% OFF",
            rating: 4.6,
            reviews: 1089,
            title: "Downtown Luxury Suites",
            location: "Chicago, Illinois",
            amenities: ["City View", "Free WiFi", "Fireplace"],
            oldPrice: 239,
            newPrice: 179,
        }
    ];
    return (
        <div className="row hotellp-tophotel-mainrow start common-gap">
            {hotelDeals.map((hotel, index) => (
                <div key={index} className="col-xl-3 col-sm-6 hotellp-tophotel-col">
                    <div className="hotellp-tophotel-box start fd-col w-100">
                        <div className="hotellp-tophotel-box-image w-100">
                            <Image
                                src={hotel.image}
                                width={800}
                                height={533}
                                className="img-fluid hotel-img"
                                alt={hotel.title}
                            />
                            <span className="hotellptophotel-discount-badge">{hotel.discount}</span>
                        </div>
                        <div className="hotellp-tophotel-box-content start fd-col w-100">
                            <div className="hotellp-tophotelrating start fd-row">
                                <Image
                                    src="/images/hotel/hotellp/star.webp"
                                    width={23}
                                    height={22}
                                    className="img-fluid"
                                    alt="" />
                                <p>4.8 ({hotel.reviews} reviews)</p>
                            </div>
                            <h5 className="hotellp-tophotelname">{hotel.title}</h5>
                            <div className="hotellp-tophotellocation start fd-row">
                                <Image
                                    src="/images/hotel/hotellp/location.webp"
                                    width={33}
                                    height={33}
                                    className="img-fluid"
                                    alt="" />
                                <p>{hotel.location}</p>
                            </div>
                            <div className="hotellp-tophotelamenities start fd-row">
                                {hotel.amenities.map((tag, i) => (
                                    <p key={i} className="hotellp-amenities">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            <div className="hotellp-tophotelprice start fd-row">
                                <s>
                                    ${hotel.oldPrice}
                                </s>
                                <p className="hotelprice">${hotel.newPrice}</p>
                                <p className="pernight"> /night</p>
                            </div>
                            <button className="btn hotellp-tophotel-btn cent  w-100">View Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}


