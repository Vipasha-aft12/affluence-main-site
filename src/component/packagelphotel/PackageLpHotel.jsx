import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageLpHotel = () => {
    return (

        <div className="col-md-6 pkg_landingp-unbeatable-price-col">
              <div className="pkg_landingp-unbeatable-price-box start fd-row">
                <div className="pkg_landingp-unbeatable-price-box-image">
                  <Image
                   src="/images/package-page/package-images/hotel-1.webp"
                    className="img-fluid"
                    width={509}
                    height={341}
                    alt="package lp hotel" />
                </div>
                <div className="pkg_landingp-unbeatable-price-box-content cent fd-col">
                  <p><strong>Grab FLAT% Instant discount on international hotels</strong></p>
                  <p>Book a comfy stays with great savings.</p>
                  <button className="btn pkg_landingp-unbeatable-price-box-content-btn cent">Book Now</button>
                </div>
              </div>
            </div>

    )
}

export default PackageLpHotel
