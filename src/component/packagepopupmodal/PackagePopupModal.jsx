import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './PackagePopupModal.css';


const PackagePopupModal = () => {
    return (
        <div className='pkg-popup-modal'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalone">
                Launch Popup Modal
            </button>
            <div className="modal fade" id="exampleModalone" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
                        </div>
                        <div className="modal-body pkg-popup-modalbody cent fd-col">
                            <div className='pkg-popup-image'>
                                <Image
                                    src='/images/package-page/package-icon/call-icon-two.webp'
                                    className='img-fluid'
                                    width={32}
                                    height={32}
                                    alt='package popup image' />
                            </div>
                            <p><strong>Thank you</strong></p>
                            <p>Thank you for your query. Our travel consultant will contact you shortly. You may also call us for immediate assistance. </p>
                            <a href="tel:+1-000-000-0000">Call +1-000-000-0000</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PackagePopupModal
