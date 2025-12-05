import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './SearchEngine.css';

const SearchEngineFlight = () => {
    return (
        <div className='search-engine-flightcontainer w-100 start fd-col flights'>
            <nav className='search-engine-flightcontainer-nav start fd-row w-100'>
                <div class="nav nav-tabs search-engine-flightcontainer-nav-tab w-100" id="nav-tab" role="tablist">
                    <button class="nav-link active search-engine-flightcontainer-nav-btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">One Way</button>
                    <button class="nav-link search-engine-flightcontainer-nav-btn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Round Trip</button>
                    <button class="nav-link search-engine-flightcontainer-nav-btn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Multi-City</button>
                </div>
            </nav>
            <div class="tab-content search-engine-flightcontainer-nav-tc w-100" id="nav-tabContent">
                <div class="tab-pane fade show active search-engine-flightcontainer-nav-tp w-100" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div className='search-engine-box btwn fd-row w-100 oneway-searchbox'>
                        <div className='se-box start fd-col no-left-border mw-full'>
                            <label>To</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/takeoff.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col mw-full'>
                            <label>From</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col mw-half'>
                            <label>Departure Date</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col disabledbox mw-half'>
                            <label>Return Date</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender-g.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col traveller-box mw-full'>
                            <label>Traveller & Class</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/guest.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='1,Economy' />
                            </div>
                            <div className='traveller-box-subbox start fd-col'>
                                <h5><strong>Select Travellers</strong></h5>
                                <div className='traveller-category btwn fd-row'>
                                    <div className='traveller-category-name start fd-col'>
                                        <p><strong>Adult</strong></p>
                                        <p>on the day of travel</p>
                                    </div>
                                    <div className='traveller-category-add cent fd-row'>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>-</p>
                                        </div>
                                        <p><span>1</span></p>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='traveller-category btwn fd-row'>
                                    <div className='traveller-category-name start fd-col'>
                                        <p><strong>Child</strong></p>
                                        <p>(2-12 years)</p>
                                    </div>
                                    <div className='traveller-category-add cent fd-row'>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>-</p>
                                        </div>
                                        <p><span>1</span></p>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='traveller-category btwn fd-row'>
                                    <div className='traveller-category-name start fd-col'>
                                        <p><strong>Infant</strong></p>
                                        <p>(Below 2 years)</p>
                                    </div>
                                    <div className='traveller-category-add cent fd-row'>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>-</p>
                                        </div>
                                        <p><span>1</span></p>
                                        <div className='trav-cat-add-sub cent'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='travller-disclaimer'>Plan a group booking if you are more than 9 passengers.</p>
                                <h5><strong>Choose Travel Class</strong></h5>
                                <select class="form-select w-100" aria-label="Default select example">
                                    <option selected>Cabin Class</option>
                                    <option value="1">Economy</option>
                                    <option value="2">Business Class</option>
                                    <option value="3">First Class</option>
                                </select>
                                <button className='btn trav-class-done-btn cent'>Done</button>
                            </div>
                        </div>
                        <button className='btn se-btn cent'>Search</button>
                    </div>
                </div>
                <div class="tab-pane fade search-engine-flightcontainer-nav-tp w-100" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className='search-engine-box btwn fd-row w-100 roundtrip-searchbox'>
                        <div className='se-box start fd-col no-left-border mw-full'>
                            <label>From</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/takeoff.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col mw-full'>
                            <label>To</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col mw-half'>
                            <label>Departure Date</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col mw-half'>
                            <label>Return Date</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col traveller-box mw-full'>
                            <label>Traveler & Class</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/guest.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='1, Economy' />
                            </div>
                        </div>
                        <button className='btn se-btn cent'>Search</button>
                    </div>
                </div>
                <div class="tab-pane fade search-engine-flightcontainer-nav-tp w-100" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className='search-engine-box btwn fd-row w-100 multicity-searchbox'>
                        <div className='se-box start fd-col no-left-border mw-full'>
                            <label>From</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>To</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>Departure</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>Passengers</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/guest.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='2 person' />
                            </div>
                        </div>
                        <button className='btn mob-multicity-btn cent'>+ Add Another City</button>
                        <div className='se-box start fd-col no-left-border mw-full'>
                            <label>From</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>To</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/landing.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='Enter Destination' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>Departure</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/calender.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='MM/DD/YYYY' />
                            </div>
                        </div>
                        <div className='se-box start fd-col multicity-add mw-full'>
                            <label>Passengers</label>
                            <div className='se-input-box start fd-row'>
                                <Image
                                    src="/images/search-engine/guest.webp"
                                    className='img-fluid se-box-icon'
                                    width={24}
                                    height={24}
                                    alt="Search Engine Icons" />
                                <input type='text' placeholder='2 person' />
                            </div>
                        </div>
                        <button className='btn se-btn cent'>Search</button>
                        <button className='btn se-btn-multicity cent'>+Add Another City</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchEngineFlight
