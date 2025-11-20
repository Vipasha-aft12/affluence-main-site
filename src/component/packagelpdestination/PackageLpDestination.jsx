import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PackageLpDestination = () => {
  return (
    
      <div className="pkg_landingp_destination-box cent">
        <Link href="/">
            <Image
              src="/images/package-page/package-images/bali.webp"
              className="img-fluid"
              width={401}
              height={542}
              alt="bali" />
        </Link>
      </div>
     
  )
}

export default PackageLpDestination
