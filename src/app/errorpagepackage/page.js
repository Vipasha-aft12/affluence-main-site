import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './errorpagepackage.css';



const ErrorPagePackage = () => {
    return (
        <section className='error-page'>
            <div className='container error-page-container'>
                <div className='row error-page-row cent'>
                    <div className='col-md-6 error-page-colone cent'>
                        <Image
                            src='/images/pnotfound/package-not-found.png'
                            className='img-fluid'
                            width={581}
                            height={468}
                            alt='loading image' />
                    </div>
                    <div className='col-md-6 error-page-coltwo start fd-col'>
                        <h4>So Sorry!</h4>
                        <p><strong>Package Not Found.</strong></p>
                        <p>We’re sorry, but the itinerary you requested is no longer available or the link has expired.</p>
                        <button className='btn error-page-btn'>Back To Home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPagePackage 