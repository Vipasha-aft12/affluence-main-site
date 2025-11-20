import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageLpChoice = () => {
  return (
    <div className="col-md-4 col-sm-6 pkg_landingp-pkg-choice-col">
              <div className="pkg_landingp-pkg-choice-box cent fd-col">
                <div className="pkg_landingp-pkg-choice-box-image">
                  <Image 
                  src="/images/package-page/package-images/domestic.webp"
                  className="img-fluid" 
                  width={701}
                  height={757}
                  alt="package choice" />
                </div>
                <div className="pkg_landingp-pkg-choice-box-content start fd-col">
                  <p><strong>Domestic Packages</strong></p>
                  <p>Lorem ipsum, dolor sit amet comnr Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <div className="pkg_landingp-pkg-choice-box-sub-content start fd-row">
                    <a href>Hawaii</a>
                    <a href>Maldives</a>
                    <a href>Paris</a>
                    <a href>Bali</a>
                    <a href>Greece</a>
                  </div>
                  <p className="pkg-choice-para start fd-row">
                    <Image 
                     src="/images/package-page/package-icon/destination-icon.webp"
                     className="img-fluid"
                     width={29}
                     height={29}
                     alt="package choice" />
                    50+ Destinations
                  </p>
                  <p><strong>Starting From $799</strong></p>
                </div>
                <div className="pkg_landingp-pkg-choice-explore cent">
                  <a href className="w-100">Explore Packages</a>
                </div>
              </div>
            </div>
  )
}

export default PackageLpChoice
