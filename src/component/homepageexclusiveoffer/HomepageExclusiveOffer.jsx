import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './HomepageExclusiveOffer.css';
import HomepageExclusiveOfferBox from './HomepageExclusiveOfferBox';

const HomepageExclusiveOffer = () => {
    return (
        <div className='col-12 homepage-exclusive-offer-col start fd-col'>
            <nav className='w-100'>
                <div class="nav nav-tabs w-100" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-oholiday-tab" data-bs-toggle="tab" data-bs-target="#nav-oholiday" type="button" role="tab" aria-controls="nav-oholiday" aria-selected="true">Holiday</button>
                    <button class="nav-link" id="nav-oflight-tab" data-bs-toggle="tab" data-bs-target="#nav-oflight" type="button" role="tab" aria-controls="nav-oflight" aria-selected="false">Flights</button>
                    <button class="nav-link" id="nav-ohotel-tab" data-bs-toggle="tab" data-bs-target="#nav-ohotel" type="button" role="tab" aria-controls="nav-ohotel" aria-selected="false">Hotels</button>
                    <button class="nav-link" id="nav-ocar-tab" data-bs-toggle="tab" data-bs-target="#nav-ocar" type="button" role="tab" aria-controls="nav-ocar" aria-selected="false">Car Rentals</button>
                    <button class="nav-link" id="nav-pkg-tab" data-bs-toggle="tab" data-bs-target="#nav-pkg" type="button" role="tab" aria-controls="nav-pkg" aria-selected="false">Packages</button>
                    <button class="nav-link" id="nav-destination-tab" data-bs-toggle="tab" data-bs-target="#nav-destination" type="button" role="tab" aria-controls="nav-destination" aria-selected="false">Destinations</button>
                </div>
            </nav>
            <div class="tab-content w-100" id="nav-tabContent">
                <div class="tab-pane fade show active w-100" id="nav-oholiday" role="tabpanel" aria-labelledby="nav-oholiday-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
                <div class="tab-pane fade w-100" id="nav-oflight" role="tabpanel" aria-labelledby="nav-oflight-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
                <div class="tab-pane fade w-100" id="nav-ohotel" role="tabpanel" aria-labelledby="nav-ohotel-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
                <div class="tab-pane fade w-100" id="nav-ocar" role="tabpanel" aria-labelledby="nav-ocar-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
                <div class="tab-pane fade w-100" id="nav-pkg" role="tabpanel" aria-labelledby="nav-pkg-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
                <div class="tab-pane fade w-100" id="nav-destination" role="tabpanel" aria-labelledby="nav-destination-tab" tabindex="0">
                    <div className='row hp_exclusive-offer-row common-gap'>
                        <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    <HomepageExclusiveOfferBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageExclusiveOffer
