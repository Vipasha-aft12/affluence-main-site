import React from 'react'
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

const PkgDetailAsideForm = () => {
    return (
        <div className='sticky-top'>
          <div className="pkg_dp_aside-form start fd-col ">
            <h5>Book This Package</h5>
            <form>
              <div className="row pkg_dp_aside-form-row start">
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>First Name</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Last Name</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Email Address</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <Image
                     src="/images/pkg-detail-page/icons-package/email.webp"
                      className="img-fluid"
                      width={32}
                      height={32}
                      alt="pkg detail form" />
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Phone Number</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <Image
                     src="/images/pkg-detail-page/icons-package/phone.webp"
                      className="img-fluid"
                      width={32}
                      height={33}
                      alt="pkg detail form" />
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Departure City</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <Image
                     src="/images/pkg-detail-page/icons-package/calender.webp"
                      className="img-fluid pkg-det-form-cal"
                      width={33}
                      height={33}
                      alt="pkg detail form" />
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Number of Travelers</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <Image
                     src="/images/pkg-detail-page/icons-package/traveler.webp"
                      className="img-fluid"
                      width={32}
                      height={32}
                      alt="pkg detail form" />
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>No. of Days</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>No. of Nights</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <input type="text" placeholder="Enter" />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <label>Special Requests (Optional)</label>
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <textarea type="text" placeholder="Any special requirments, dietry, restrictions, celebrations, etc." />
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <button className="btn pkg_dp-aside-form-btn cent w-100">Request Booking</button>
                </div>
                <div className="col-12 pkg_dp_aside-form-col start fd-col">
                  <div className="pkg_dp_aside-form-in_box start fd-row">
                    <Image
                     src="/images/pkg-detail-page/icons-package/lock.webp"
                      className="img-fluid"
                      width={32}
                      height={32}
                      alt="pkg detail form" />
                    <p>Secure booking process. No payment required at this stage.</p>
                  </div>
                </div>
                <div className="col-12 pkg_dp_aside-form-col-button cent fd-col mt-3">
                  <p><strong>Prefer to speak with someone?</strong></p>
                  <button className="btn pkg_dp-aside-form-cta-btn cent fd-row w-100">
                    <Image
                     src="/images/pkg-detail-page/icons-package/call-icon.webp"
                      className="img-fluid"
                      width={48}
                      height={48}
                      alt="pkg detail form" />
                    Call at : +1-000-000-0000
                  </button>
                  <a href="#">Chat with our Travel experts</a>
                </div>
              </div>
            </form>
          </div>
        </div>
         

    )
}

export default PkgDetailAsideForm
