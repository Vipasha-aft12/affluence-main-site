import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './errorpage.css';





const ErrorPage = () => {
    return (
        <section className='error-page'>
            <div className='container error-page-container'>
                <div className='row error-page-row cent'>
                    <div className='col-md-6 error-page-colone cent'>
                        <Image
                            src='/images/pnotfound/404.webp'
                            className='img-fluid'
                            width={609}
                            height={359}
                            alt='loading image' />
                    </div>
                    <div className='col-md-6 error-page-coltwo start fd-col'>
                        <h4>So Sorry!</h4>
                        <p><strong>The page you requested doesn’t seem to exist.</strong></p>
                        <p>Oops! You must have chosen the wrong path, as we can’t seem to find the page you’re looking for.</p>
                        <button className='btn error-page-btn'>Back To Home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage 