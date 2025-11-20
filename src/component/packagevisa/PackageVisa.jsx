import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageVisa = () => {
    return (

        <div className="col-lg-3 col-sm-6 pkd_landingp-visa-free-desti-col">
            <div className="pkd_landingp-visa-free-desti-box cent fd-col">
                <div className="pkd_landingp-visa-free-destiimage">
                    <Image
                     src="/images/package-page/package-images/visa-free-1.webp"
                      className="img-fluid"
                      width={601}
                      height={521}
                      alt="package visa" />
                    <p className="pkd_landingp-visa-free-desti-img-one">30 Days Visa-Free</p>
                    <p className="pkd_landingp-visa-free-desti-img-two">Popular</p>
                </div>
                <div className="pkd_landingp-visa-free-desti-box-content start fd-col">
                    <p><strong>Vietnam</strong></p>
                    <p className="pkg-choice-para start fd-row">
                        <Image
                         src="/images/package-page/package-icon/time-icon.webp" 
                         className="img-fluid pkg-visa-time-icon"
                         width={39}
                         height={39}
                         alt="package visa" />
                        5 Days
                    </p>
                    <div className="pkg_landingp-pkg-choice-box-sub-content start fd-row">
                        <a href>Hawaii</a>
                        <a href>Maldives</a>
                        <a href>Paris</a>
                        <a href>Bali</a>
                        <a href>Greece</a>
                    </div>
                    <p><strong>Starting From $899</strong></p>
                    <p>Per Person</p>
                    <button className="btn pkd_landingp-visa-free-desti-box-btn w-100 cent">View Packages</button>
                </div>
            </div>
        </div>

    )
}

export default PackageVisa
