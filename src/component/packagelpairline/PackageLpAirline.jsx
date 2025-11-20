import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageLpAirline = () => {
    return (
        <div className="col-md-4 pkg_landingp-partner-airline-col cent">
              <div className="pkg_landingp-partner-airline-box start fd-col">
                <div className="pkg_landingp-partner-airline-image">
                  <Image
                   src="/images/package-page/package-images/flight.webp" 
                   className="img-fluid p_flight-image"
                   width={801}
                   height={501}
                   alt="package airline" />
                  <div className="pkg_landingp-partner-airline-discount cent fd-row">
                    <Image
                     src="/images/package-page/package-icon/tag-icon.webp"
                      className="img-fluid pkg-airline-icon"
                      width={49}
                      height={49}
                      alt="package airline" />
                    Up to 20% off
                  </div>
                </div>
                <div className="pkg_landingp-partner-airline-content start fd-col">
                  <p><strong>JetBlue Airways</strong></p>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
                  <div className="pkg_landingp-partner-airline-sub-box start fd-col">
                    <p className="pkg-choice-para start fd-row">
                      <Image
                       src="/images/package-page/package-icon/sparkle-star.webp"
                        className="img-fluid pkg-airline-icon"
                        width={39}
                        height={39}
                        alt="package airline" />
                      World's Best Airline Experience
                    </p>
                    <p className="pkg-choice-para start fd-row">
                      <Image
                       src="/images/package-page/package-icon/time-icon.webp" 
                       className="img-fluid pkg-airline-icon" 
                       width={39}
                       height={39}
                       alt="package airline" />
                      Limited  Time: Premium Economy for Economy Price!
                    </p>
                  </div>
                  <p className="pkg-choice-para start fd-row">
                    <Image
                     src="/images/package-page/package-icon/star-icon.webp" 
                     className="img-fluid star-icon pkg-airline-icon"
                     width={31}
                     height={31}
                    alt="package airline" />
                    4.8 Star
                  </p>
                  <p className="pkg-choice-para start fd-row">
                    <Image
                     src="/images/package-page/package-icon/time-icon.webp"
                    className="img-fluid pkg-airline-icon"
                    width={39}
                    height={39}
                    alt="package airline" />
                    150+ Destinations
                  </p>
                  <button className="btn pkg-page-airline-partner-btn cent w-100">View Flights</button>
                </div>
              </div>
            </div>
    )
}

export default PackageLpAirline
