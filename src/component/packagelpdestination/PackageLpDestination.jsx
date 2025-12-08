import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './PackageLpDestination.css';


const PackageLpDestination = () => {
  return (
    
      <div className="pkg-lp-desti-box cent fd-col">
            <Image
              src="/images/package-page/package-images/visa-free-2.webp"
              className="img-fluid pkg-lp-desti-box-img"
              width={601}
              height={521}
              alt="bali" />
            <p className='pkg-lp-desti-box-price w-100'>Start From $499</p>
            <div className='pkg-lp-desti-box-content cent w-100 fd-col'>
              <p><strong>Bali</strong></p>
              <p>12 Packages available</p>
            </div>
      </div>
     
  )
}

export default PackageLpDestination
