import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './errorpageflight.css';





const ErrorPageFlight = () => {
    return (
        <section className='error-page'>
            <div className='container error-page-container'>
                <div className='row error-page-row cent'>
                    <div className='col-md-6 error-page-colone cent'>
                        <Image
                            src='/images/pnotfound/flight-not-found.webp'
                            className='img-fluid'
                            width={485}
                            height={494}
                            alt='loading image' />
                    </div>
                    <div className='col-md-6 error-page-coltwo start fd-col'>
                        <h4>So Sorry!</h4>
                        <p><strong>Flight Not Found.</strong></p>
                        <p>Looks like this flight has gone a bit off course...
                            We couldnt find your itientary. Lets try again from the top.</p>
                        <button className='btn error-page-btn'>Back To Home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPageFlight 