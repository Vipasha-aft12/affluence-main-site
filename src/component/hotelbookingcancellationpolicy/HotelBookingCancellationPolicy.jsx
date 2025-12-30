import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelBookingCancellationPolicy.css";


const HotelBookingCancellationPolicy = () => {
    return (
        <div className='row hotel-booking-cancellation w-100'>
            <div className='col-12 hotel-booking-cancellation-col start fd-col'>
                <div className='hotel-booking-cancellation-heading start fd-row'>
                    <Image
                        src="/images/hotel/hoteld/important.webp"
                        className='img-fluid'
                        width={52} 
                        height={52}
                        alt="hotel booking status" />
                    <h4><strong>Cancellation Policy</strong></h4>
                </div>
                <p>Your booking is protected under our flexible cancellation policy:</p>
                <ul className='hotel-booking-cancellation-col-ul start fd-col'>
                    <li><strong>Free Cancellation:</strong> Cancel up to 30 days before departure for a full refund</li>
                    <li><strong>15-29 Days Before:</strong> 50% refund of total booking amount</li>
                    <li><strong>7-14 Days Before:</strong> 25% refund of total booking amount</li>
                    <li><strong>Less than 7 Days:</strong> No refund available</li>
                    <li><strong>Processing Fee:</strong> A $50 administrative fee applies to all cancellations</li>
                </ul>
                <p className='hotel-booking-cancellation-dis w-100'>Note: Refunds will be processed within 7-10 business days to the original payment method. Some airlines and hotels may have different cancellation policies.</p>
            </div>
        </div>
    )
}

export default HotelBookingCancellationPolicy
