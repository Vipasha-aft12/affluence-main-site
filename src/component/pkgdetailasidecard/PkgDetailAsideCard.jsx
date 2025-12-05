import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgDetailAsideCard = () => {
    return (
        <div className="pkg_dp_aside-card cent fd-col">
            <Image
             src="/images/pkg-detail-page/images-packages/hotel-1.webp"
             className="img-fluid pkg-detail-hotel-img"
             width={601}
             height={700}
             alt="pkg detail aside card" />
            <div className="pkg_dp_aside-card-heading btwn fd-row">
              <h6>Ocean Paradise Resort</h6>
              <p>5 Star</p>
            </div>
            <Image 
              src="/images/pkg-detail-page/icons-package/stars.webp"
              className="img-fluid pkg-detail-star-img"
              width={246}
              height={53}
              alt="pkg detail aside card" />
            <p className="pkg-dp-hotel-location start fd-row">
              <Image 
              src="/images/pkg-detail-page/icons-package/location.webp"
               className="img-fluid pkg-detail-hotel-locatn-img"
               width={33}
               height={33}
                alt="pkg detail aside card" />
              North Male Atoll, Maldives
            </p>
          </div>
         

    )
}

export default PkgDetailAsideCard
