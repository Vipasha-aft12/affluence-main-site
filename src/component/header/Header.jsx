import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header-container'>
        <div className='row header-row'>
          <div className='col-12 header-col btwn fd-row'>
            <Image
              src='/images/header/affluence-header-logo.webp'
              className='img-fluid a-header-logo'
              width={420}
              height={140}
              alt="header image" />
            <a href="tel:+1-000-000-0000">
              <div className='header-call cent fd-row'>
              <div className='header-call-image'>
                <Image
                src='/images/header/cust-care.webp'
                className='img-fluid a-header-cc'
                width={2293}
                height={2297}
                alt="header image" />
               
                <Image
                src='/images/header/call-one.png'
                className='img-fluid a-header-cc-one'
                width={128}
                height={128}
                alt="header image" />
              </div>
              <p><strong>Boook Now</strong></p>
              <p>-</p>
              <Image
                src='/images/header/head-phone.webp'
                className='img-fluid a-header-hp'
                width={32}
                height={32}
                alt="header image" />
              <a href="tel:+1-000-000-0000"><strong>+1-000-000-0000</strong></a>
            </div>
            </a>
            <div className='header-col-nav cent fd-row'>
              <Link href="/">Deals</Link>
              <Link href="/">Group Booking</Link>
              <Link href="/">Customer Support</Link>
            </div>


            <button type="button" className="btn header-modal-btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              USD | EN
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Select Language and Country</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
                  </div>
                  <div className="modal-body header-modal-body start fd-col">
                    <div className="header-lang-select start fd-col w-100">
                      <label>Country</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>United States</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="header-lang-select start fd-col w-100">
                      <label>Currency</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>USD - US Dollar </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="header-lang-select start fd-col w-100">
                      <label>Language</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>EN - English</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary header-modal-box">Apply</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
 

export default Header
