import React from 'react'
import Link from "next/link";
import Image from "next/image";
import PkgDetailItinaryChange from '../pkgdetailitinarychange/PkgDetailItinaryChange';



const PkgDetailItinary = () => {
    return (

        <div className="row pkg-dp-itinary w-100">
            <div className="col-12 pkg-dp-itinary-col">
                <div className='pkg-dp-itinary-col-box w-100'>
                    <ul className="nav nav-pills pkg_iti-ul start fd-row w-100" id="pills-tab" role="tablist">
                        <li className="nav-item pkg_iti-li cent" role="presentation">
                            <button className="nav-link active pkg_iti-li-btn cent w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Itinerary</button>
                        </li>

                        <li className="nav-item pkg_iti-li cent" role="presentation">
                            <button className="nav-link pkg_iti-li-btn cent w-100" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Change &amp; Cancellation Policy</button>
                        </li>
                    </ul>
                    <div className="tab-content pkg_iti-tc w-100" id="pills-tabContent">
                        <div className="tab-pane fade show active pkg_iti-tpone w-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                            <ul className="nav nav-tabs pkg_iti-detail-ul w-100 start fd-row" id="myTab" role="tablist">
                                <li><strong>Days</strong></li>
                                <li className="nav-item pkg_iti-detail-li cent" role="presentation">
                                    <button className="nav-link active pkg_iti-detail-li-btn" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">1</button>
                                </li>
                                <li className="nav-item pkg_iti-detail-li cent" role="presentation">
                                    <button className="nav-link pkg_iti-detail-li-btn" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">2</button>
                                </li>
                                <li className="nav-item pkg_iti-detail-li cent" role="presentation">
                                    <button className="nav-link pkg_iti-detail-li-btn" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">3</button>
                                </li>
                                <li className="nav-item pkg_iti-detail-li cent" role="presentation">
                                    <button className="nav-link pkg_iti-detail-li-btn" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">4</button>
                                </li>
                                <li className="nav-item pkg_iti-detail-li cent" role="presentation">
                                    <button className="nav-link pkg_iti-detail-li-btn cent" id="new-tab" data-bs-toggle="tab" data-bs-target="#new-tab-pane" type="button" role="tab" aria-controls="new-tab-pane" aria-selected="false">5</button>
                                </li>
                            </ul>
                            <div className="tab-content pkg_iti-detail-tc w-100" id="myTabContent">
                                <div className="tab-pane fade show active pkg_iti-detail-tp w-100" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                    <div className="row pkg_iti-detail-tpone start common-gap">
                                        <div className="col-sm-6 pkg_iti-detail-tpone-col start fd-row">
                                            <Image
                                                src="/images/pkg-detail-page/icons-package/hotell.webp"
                                                className="img-fluid"
                                                width={69}
                                                height={69}
                                                alt="pkg detail" />
                                            <div className="pkg_iti-detail-tpone-hotel-detail start fd-col">
                                                <p><strong>Hotel La Qunita/Sea View</strong></p>
                                                <p>Similar in Dubai</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pkg_iti-detail-tpone-col start fd-row">
                                            <Image
                                                src="/images/pkg-detail-page/icons-package/dinner.webp"
                                                className="img-fluid"
                                                width={68}
                                                height={68}
                                                alt="pkg detail" />
                                            <div className="pkg_iti-detail-tpone-hotel-detail start fd-col">
                                                <p><strong>Hotel La Qunita/Sea View</strong></p>
                                                <p>Similar in Dubai</p>
                                            </div>
                                        </div>
                                        <div className="col-12 pkg_iti-detail-tpone-col-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci nulla dolorum cupiditate error deserunt qui reiciendis iure tempora facilis.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae assumenda quo eaque ex magnam maiores nobis accusamus, suscipit nulla? Expedita itaque ipsam sed ea, nam nobis odit nemo labore.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade pkg_iti-detail-tp w-100" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>...</div>
                                <div className="tab-pane fade pkg_iti-detail-tp w-100" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>...</div>
                                <div className="tab-pane fade pkg_iti-detail-tp w-100" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>...</div>
                                <div className="tab-pane fade pkg_iti-detail-tp w-100" id="new-tab-pane" role="tabpanel" aria-labelledby="new-tab" tabIndex={0}>...</div>
                            </div>
                        </div>

                        <div className="tab-pane fade pkg_iti-tpthree start fd-col w-100" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                            <PkgDetailItinaryChange />
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default PkgDetailItinary


