import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './packagedetail.css';
import PkgWhyChooseUs from '@/component/pkgdetailwhychooseus/PkgWhyChooseUs';
import PkgDetailAsideCard from '@/component/pkgdetailasidecard/PkgDetailAsideCard';
import PkgDetailAsideForm from '@/component/pkgdetailasideform/PkgDetailAsideForm';
import PkgDetailSimilarPkg from '@/component/pkgdetailsimilarpkg/PkgDetailSimilarPkg';
import PkgDetailOverview from '@/component/pkgdetailoverview/PkgDetailOverview';
import PkgDetailHighlight from '@/component/pkgdetailhighlight/PkgDetailHighlight';
import PkgDetailInclusionExclusion from '@/component/pkgdetailinclusionexclusion/PkgDetailInclusionExclusion';
import PkgDetailItinary from '@/component/pkgdetailitinary/PkgDetailItinary';




const PackageDetail = () => {
  return (
    <section className='package-detail-page'>
      <section className="banner">
        <section className="package-banner hotel-listing-banner">
          <div className="container package-banner-container">
            <div className="row package-banner-row cent">
              <div className="col-12 package-banner-col_heading cent fd-col">
                <h1>Your Dream Vacations Starts Here</h1>
                <p>Hotels, Flights and Car Rentals - All in One Package</p>
              </div>
              <div className="col-12 pkg-holidaylisting-col cent">
                <div className="row pkg-holidaylisting-col-box btwn fd-row w-100">
                  <div className="col-lg-3 col-md-4 pkg-holidaylisting-col-box-input-col start fd-col">
                    <label>Destination</label>
                    <div className='pkg-holidaylisting-col-box-input start fd-row'>
                      <Image
                        src='/images/search-engine/search.webp'
                        className='img-fluid'
                        width={24}
                        height={24}
                        alt='package search engine' />
                      <input type="text" placeholder="Enter Destinations" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 pkg-holidaylisting-col-box-input-col start fd-col">
                    <label>Package Type</label>
                    <div className='pkg-holidaylisting-col-box-input start fd-row'>
                      <Image
                        src='/images/search-engine/time.webp'
                        className='img-fluid'
                        width={40}
                        height={40}
                        alt='package search engine' />
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Package Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                   <div className="col-lg-3 col-md-4 pkg-holidaylisting-col-box-input-col start fd-col">
                    <label>Package Duration</label>
                    <div className='pkg-holidaylisting-col-box-input start fd-row'>
                      <Image
                        src='/images/search-engine/calender.webp'
                        className='img-fluid'
                        width={24}
                        height={24}
                        alt='package search engine' />
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Package Duration</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-lg-3 pkg-holidaylisting-col-button cent'>
                    <button className="btn pkg-holidaylisting-col-btn w-100 cent">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-bottom">
          <div className="container banner-bottom-container">
            <div className="row banner-bottom-row">
              <div className="col-12 banner-bottom-col btwn fd-row">
                <p>ASTA Protected</p>
                <p>4.8/5 Rating</p>
                <p>50K+ Travelers</p>
                <p>24/7 US Support</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="pkg_detail-page c_mar-top">
        <div className="container pkg_detail-page-container">
          <div className="row pkg_detail-page-row start">
            <div className="col-xl-9 col-md-8 pkg_detail-page-colone start fd-col common-gap p-0">
              <PkgDetailOverview />
              <PkgDetailHighlight />

              <PkgDetailItinary />
              <PkgDetailInclusionExclusion />
              <div className="row pkg-dp-similar-pkg start common-gap">
                <div className="col-12 pkg-dp-similar-pkg-heading-col">
                  <h4>Similar Package</h4>
                </div>
                <PkgDetailSimilarPkg />
                <PkgDetailSimilarPkg />
                <PkgDetailSimilarPkg />
              </div>
            </div>
            <div className="col-xl-3 col-md-4 pkg_detail-page-coltwo cent fd-col p-0">
              <PkgWhyChooseUs />
              <PkgDetailAsideCard />
              <PkgDetailAsideCard />
              <PkgDetailAsideForm />
            </div>
          </div>
        </div>
      </section>
      {/*----Add faq section here---*/}

    </section>
  )
}

export default PackageDetail 