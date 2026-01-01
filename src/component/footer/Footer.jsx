"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import './Footer.css';

const Footer = () => {

    const [showCookie, setShowCookie] = useState(true);

    return (
        <footer className="footer">
            <section className="footer-top">
                <div className="container footer-top-container">
                    <div className="row footer-top-row start common-gap">
                        <div className="col-lg-3 footer-top-col footer-top-col-about">
                            <Image
                                src='/images/header/affluence-logo.png'
                                className='img-fluid header-logo'
                                width={408}
                                height={138}
                                alt='header logo' />
                            <p>Affluence Travel is your ultimate travel companion, offering seamless solutions for flights, hotels, and vacation packages. With 24/7 support and unbeatable deals, we make travel stress-free and affordable. Discover the world your way with Affluence Travel!</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 footer-top-col footer-top-col-links start fd-col">
                            <p><strong>Quick Links</strong></p>
                            <Link href="/">Home</Link>
                            <Link href="/">Blogs</Link>
                            <Link href="/">About Us</Link>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">Customer Support</Link>

                        </div>
                        <div className="col-lg-2 col-md-3 col-4 footer-top-col footer-top-col-links start fd-col">
                            <p><strong>Policies</strong></p>
                            <Link href="/">Cookies Policy</Link>
                            <Link href="/">Cancellation Policy</Link>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Refund Policy</Link>
                            <Link href="/">Terms &amp; Conditions</Link>
                        </div>
                        <div className="col-md-2 col-4 footer-top-col footer-top-col-links start fd-col">
                            <p><strong>Our Links</strong></p>
                            <Link href="/">Cruise</Link>
                            <Link href="/">Destinations</Link>
                            <Link href="/">Flights</Link>
                            <Link href="/">Hotel</Link>
                            <Link href="/">Packages</Link>

                        </div>
                        <div className="col-lg-3 col-md-4 footer-top-col footer-top-col-contact start fd-col">
                            <div className="footer-top-col-contact-box start fd-row">
                                <Image
                                src='/images/footer/address.png'
                                className='img-fluid footer-contact'
                                width={120}
                                height={120}
                                alt='footer contact' />
                                <p>Address: USA: 156 Willoughby Ave, Brooklyn, NY 11205, USA</p>
                            </div>
                            <div className="footer-top-col-contact-box start fd-row">
                                <Image
                                src='/images/footer/call.png'
                                className='img-fluid footer-contact'
                                width={120}
                                height={120}
                                alt='footer contact' />
                                <a href="tel:+1-888-829-1141">+1-888-829-1141</a>
                            </div>
                            <div className="footer-top-col-contact-box start fd-row">
                                <Image
                                src='/images/footer/email.png'
                                className='img-fluid footer-contact'
                                width={120}
                                height={120}
                                alt='footer contact' />
                                <a href="mailto:support@affluencetravels.com">support@affluencetravels.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-mid">
                <div className="container footer-mid-container">
                    <div className="row footer-mid-row">
                        <div className="col-12 footer-mid-col">
                            <p><strong>Disclaimer:</strong> The information provided on our platform is for general informational purposes. We make every effort to ensure that the details on our website are accurate and up-to-date; however, all travel information, including prices and availability, is subject to change without notice. Our website may feature links to third-party websites for your convenience, but we do not control or endorse these sites and are not responsible for their content or services.
                                Travel carries inherent risks. By using our services, you accept responsibility for your own safety and agree to comply with all applicable travel regulations. We recommend securing travel insurance to protect against unforeseen events. Fareoworld is not responsible for any damages, inaccuracies, delays, or disruptions caused by third-party service providers.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container footer-bottom-container">
                    <div className="row footer-bottom-row">
                        <div className="col-12 footer-bottom-col btwn fd-row">
                            <p>&copy; 2024 AffluenceTravels All Rights Reserved.</p>
                            <div className="footer-social_media cent fd-row">
                            <Link href="/">
                                <Image
                                    src='/images/footer/facebook.png'
                                    className='img-fluid footer-social'
                                    width={69}
                                    height={69}
                                    alt='footer-social' />
                            </Link>
                            <Link href="/">
                                <Image
                                    src='/images/footer/instagram.png'
                                    className='img-fluid footer-social'
                                    width={69}
                                    height={69}
                                    alt='footer-social' />
                            </Link>
                            <Link href="/">
                                <Image
                                    src='/images/footer/linkedin.png'
                                    className='img-fluid footer-social'
                                    width={69}
                                    height={69}
                                    alt='footer-social' />
                            </Link>
                            <Link href="/">
                                <Image
                                    src='/images/footer/twitter.png'
                                    className='img-fluid footer-social'
                                    width={69}
                                    height={69}
                                    alt='footer-social' />
                            </Link>

                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-cookie">
                <div className="container footer-cookie-container">
                    <div className="row footer-cookie-row">

                        {showCookie && (
                            <div className="col-12 footer-cookie-col start fd-row">

                                <Image
                                    src='/images/cookie-consent/cookie-image.webp'
                                    className='img-fluid cookie-big'
                                    width={110}
                                    height={140}
                                    alt='cookie image'
                                />

                                <div className="footer-cookie-col-content start fd-col">
                                    <p><strong>We value your privacy and ensure it's safeguarded at every step.</strong></p>

                                    <p>
                                        We use essential cookies to enrich your London travel experience,
                                        helping us understand how you explore our guide, plan your itinerary,
                                        and engage with our travel content.
                                    </p>

                                    <div className="footer-cookie-col-content-button start fd-row">

                                        <button className="btn footer-cookie-col-content-btn cent fd-row">
                                            <Image
                                                src='/images/cookie-consent/cookies.webp'
                                                className='img-fluid cookie-small'
                                                width={24}
                                                height={24}
                                                alt='cookie image'
                                            />
                                            <p>Accept & Continue</p>
                                        </button>

                                        {/* DECLINE BUTTON */}
                                        <button
                                            type="button"
                                            className="footer-cookie-col-content-btn footer-cookies cent"
                                            onClick={() => setShowCookie(false)}
                                        >
                                            Decline
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;


{/*import Image from "next/image";
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
                                <button type="button" className="footer-cookie-col-content-btn footer-cookies cent btn-close"
                                 data-bs-dismiss="modal">
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

export default Footer */}