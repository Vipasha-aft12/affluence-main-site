import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDfaq.css";



const HotelDfaq = () => { 
    return (
        <div className='hoteld-faq w-100 start fd-col'>
            <h4>Got Questions? We've Got Answers</h4>
            <div className="accordion hoteld-faq-accordion w-100 start fd-col" id="accordionExample">
                <div className="accordion-item w-100">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is check-in and check-out time?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Check-in is from 3:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item w-100">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Is parking available at the hotel?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Yes, we offer both valet parking ($35/night) and self-parking ($25/night). Electric vehicle charging stations are also available.
                        </div>
                    </div>
                </div>
                <div className="accordion-item w-100">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Does the hotel offer airport shuttle service?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Yes, we provide complimentary airport shuttle service. The shuttle runs every 30 minutes from 6:00 AM to 11:00 PM. Please contact the concierge to arrange pickup. 
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn hotel-d-faq-btn w-100'>See More</button>
        </div>
    )
}

export default HotelDfaq
