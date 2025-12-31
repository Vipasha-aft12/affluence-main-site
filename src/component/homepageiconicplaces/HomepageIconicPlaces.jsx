import React from "react";
import Image from "next/image";
import "./HomepageIconicPlaces.css";

const placesData = [
    {
        img: "/images/homepage/dubai.webp",
        title: "Dubai",
    },
    {
        img: "/images/homepage/singapore.webp",
        title: "Singapore",
    },
    {
        img: "/images/homepage/hongkong.webp",
        title: "Hongkong",
    },
    {
        img: "/images/homepage/japan.webp",
        title: "Japan",
    },
    {
        img: "/images/homepage/india.webp",
        title: "India",
    },
    {
        img: "/images/homepage/london.webp",
        title: "London",
    },
    {
        img: "/images/homepage/italy.webp",
        title: "Italy",
    },
    {
        img: "/images/homepage/las-vegas.webp",
        title: "Las-Vegas",
    },
];

const HomepageIconicPlaces = () => {
    return (
        <div className="col-12 homepage-iconic-place-col btwn fd-row common-gap">
            {placesData.map((item, index) => (
                <div className="homepage-iconic-place-box" key={index}>
                    <div className="homepage-iconic-place-image">
                        <Image
                            src={item.img}
                            width={301}
                            height={353}
                            alt={item.title}
                            className="img-fluid homepage-iconic-place-img"
                        />
                        <div className="homepage-iconic-place-title">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomepageIconicPlaces;
