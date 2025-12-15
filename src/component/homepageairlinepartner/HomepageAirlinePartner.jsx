import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageAirlinePartner.css';
const airlineData = [
    {
        img: "/images/homepage/flight-1.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-2.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-3.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-4.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-5.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-6.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-7.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-8.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
    {
        img: "/images/homepage/flight-9.webp",
        title: "Chennai Flights",
        desc: "Via- Delhi, Mumbai, Coimbatore, Madurai",
    },
];

const HomepageAirlinePartner = () => {
    return (
        <div className="row homepage_airlinep-row start">
            {airlineData.map((item, index) => (
                <div className="col-4 homepage_airlinep-col start fd-row" key={index}>
                    <Image
                        src={item.img}
                        width={86}
                        height={84}
                        alt={item.title}
                        className="hp-airlinepartners-img" />

                    <div className="homepage_airlinep-info start fd-col">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomepageAirlinePartner;


