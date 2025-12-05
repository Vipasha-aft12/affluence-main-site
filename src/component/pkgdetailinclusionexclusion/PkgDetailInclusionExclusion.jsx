import React from 'react'
import Link from "next/link";
import Image from "next/image";


const PkgDetailInclusionExclusion = () => {
    return (
        <div className='row pkg-detail-inc-exc w-100 start fd-col common-gap'>
            <div className='col-12 pkg-detail-inc-exc-box-col'>
                <div className='pkg-detail-inc-exc-box-col-box start w-100 fd-col'>
                    <h4>Inclusions</h4>
                    <ul className="pkg_iti-tptwo-ul pkg_iti-tptwoinclusion-ul start fd-col">

                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoinclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/tick.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="inclusion" />
                            4 nights accommodation in overwater bungalow
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoinclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/tick.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="inclusion" />
                            Daily Breakfast and 2 dinners
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoinclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/tick.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="inclusion" />
                            Sunset dolphin cruise
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoinclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/tick.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="inclusion" />
                            One couples spa treatment
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoinclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/tick.webp"
                                className="img-fluid"
                                width={33}
                                height={33}
                                alt="inclusion" />
                            Complimentary water sports
                        </li>
                    </ul>
                </div>

            </div>
            <div className='col-12 pkg-detail-inc-exc-box'>
                <div className='pkg-detail-inc-exc-box-col-box start w-100 fd-col'>
                    <h4>Exclusions</h4>
                    <ul className="pkg_iti-tptwo-ul pkg_iti-tptwoexclusion-ul start fd-col">

                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            International Flights
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            Travel insurance
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            Personal expenses
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            Alcoholic beverages
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            Additional spa treatments
                        </li>
                        <li className="pkg_iti-tptwo-li pkg_iti-tptwoexclusion-li cent fd-row">
                            <Image
                                src="/images/pkg-detail-page/icons-package/wrong.webp"
                                className="img-fluid"
                                width={33}
                                height={32}
                                alt="exclusion" />
                            Tips and gratuities
                        </li>
                    </ul>
                </div>

            </div>
        </div>


    )
}

export default PkgDetailInclusionExclusion


