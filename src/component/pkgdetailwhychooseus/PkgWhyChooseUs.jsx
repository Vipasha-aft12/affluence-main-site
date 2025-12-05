import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgWhyChooseUs = () => {
    return (

         <div className="pkg_dp_aside-wcu cent fd-col w-100">
            <h5>Why Choose Us?</h5>
            <p>50,000+ Happy Travelers</p>
            <div className="pkg_dp_aside-wcu-box cent fd-row w-100 pkg_pink">
              <Image
                src="/images/pkg-detail-page/icons-package/secure.webp"
                className="img-fluid" 
                width={52}
                height={52}
                alt="Pkg why choose us" />
              <div className="pkg_dp_aside-wcu-box-content start fd-col">
                <h6>Secure Booking</h6>
                <p>SSL protection</p>
              </div>
            </div>
            <div className="pkg_dp_aside-wcu-box cent fd-row w-100 pkg_blue">
              <Image
               src="/images/pkg-detail-page/icons-package/best-price.webp"
               className="img-fluid" 
               width={51}
               height={51}
               alt="Pkg why choose us" />
              <div className="pkg_dp_aside-wcu-box-content start fd-col">
                <h6>Best Price</h6>
                <p>Price match 20% off</p>
              </div>
            </div>
            <div className="pkg_dp_aside-wcu-box cent fd-row w-100 pkg_pink">
              <Image 
                src="/images/pkg-detail-page/icons-package/ratingg.webp" 
                className="img-fluid" 
                width={55}
                height={55}
                alt="Pkg why choose us" />
              <div className="pkg_dp_aside-wcu-box-content start fd-col">
                <h6>4.8 Rating</h6>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>

    )
}

export default PkgWhyChooseUs
