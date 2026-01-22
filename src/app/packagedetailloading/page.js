import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './packagedetailloading.css';





const PackageDetailLoading = () => {
  return (
    <section className='loading-area'>
        <div className='container loading-area-container w-100'>
            <div className='row loading-area-row w-100'>
                <div className='col-12 loading-area-col cent fd-col'>
                    <Image
                        src='/images/ploadingp/loading-package-icon-4.webp'
                        className='img-fluid floating-image' 
                        width={138}
                        height={138}
                        alt='loading image' />
                        <p><strong>Loading Package Details</strong></p>
                        <p>Preparing your vacation package information...</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PackageDetailLoading 