import Image from "next/image";
import React from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <section className="footer">
        <section className="footer-cookie">
            <div className="container footer-cookie-container">
                <div className="row footer-cookie-row">
                    <div className="col-12 footer-cookie-col start fd-row">
                        <Image
                            src='/images/cookie-consent/cookie-image.webp' 
                            className='img-fluid cookie-big'
                            width={110}     
                            height={140}
                            alt='cookie image' />
                        <div className="footer-cookie-col-content start fd-col">
                            <p><strong>We value your privacy and ensure it's safeguarded at every step.</strong></p>
                            <p>We use essential cookies to enrich your London travel experience, helping us understand how you explore our guide, plan your itinerary, and engage with our travel content. By analysing these interactions, we can enhence our services personalize recommendations and ensure every detail of your journey feels seamless and tailored to you. Rest assured, your privacy and personal information remain our top priority - we use these cookies responsibly to provide you with a secure, smooth, and truly personalized experience from start to finish.</p>
                            <div className="footer-cookie-col-content-button start fd-row">
                                <button className="btn footer-cookie-col-content-btn cent fd-row">
                                    <Image
                                        src='/images/cookie-consent/cookies.webp' 
                                        className='img-fluid cookie-small'
                                        width={24}     
                                        height={24}
                                        alt='cookie image' />
                                    <p>Accept & Continue</p>
                                </button>
                                <button className="btn footer-cookie-col-content-btn footer-cookies cent">
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Footer