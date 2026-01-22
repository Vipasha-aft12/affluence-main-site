import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './errorpagehotel.css';





const ErrorPageHotel = () => {
    return (
        <section className='error-page'>
            <div className='container error-page-container'>
                <div className='row error-page-row cent'>
                    <div className='col-md-6 error-page-colone cent'>
                        <Image
                            src='/images/pnotfound/hotel-not-found.webp'
                            className='img-fluid'
                            width={539}
                            height={497}
                            alt='loading image' />
                    </div>
                    <div className='col-md-6 error-page-coltwo start fd-col'>
                        <h4>So Sorry!</h4>
                        <p><strong>Hotel Not Found.</strong></p>
                        <p>Looks like thie a room is fully booked... for good.
                            Please check your reservation or search again.</p>
                        <button className='btn error-page-btn'>Back To Home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPageHotel 