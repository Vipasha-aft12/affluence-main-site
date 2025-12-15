import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <section className='header-top'>
        <div className='container header-top-container'>
          <div className='row header-top-row'>
            <div className='col-12 header-top-col btwn'>
              <Image
                src='/images/header/affluence-logo.png'
                className='img-fluid header-logo'
                width={408}
                height={138}
                alt='header logo' />

              <div className='header-top-menu cent fd-row'>
                <Link href="/">Customer Support</Link>
                <Link href="/">Destination</Link>
                <a href='tel: +1-888-829-1141'>
                  <Image
                    src='/images/header/header-call.png'
                    className='img-fluid header-call'
                    width={246}
                    height={89}
                    alt='header call' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='header-bottom'>
        <div className='container header-bottom-container'>
          <div className='row header-bottom-row'>
            <div className='col-12 header-bottom-col cent'>
              <Link href="/">Flights</Link>
              <Link href="/">Packages</Link>
              <Link href="/">Hotels</Link>
              <Link href="/">Car Rental</Link>
              <Link href="/">Deals</Link>
              <Link href="/">Destination</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
