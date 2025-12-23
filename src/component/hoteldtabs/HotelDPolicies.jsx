import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";





const HotelDPolicies = () => {
    return (
        <div className='hoteld-policies-box w-100 start fd-col mt-3'>
           
                <h4 className='mb-3'>Policies</h4>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Check-in &amp; Check-out</h5>
                    <p><span>Check-in:</span> 3:00 PM</p>
                    <p><span>Check-out:</span> 12:00 PM</p>
                    <p><span>Minimum Age: </span>21 years</p>
                </div>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Cancellation</h5>
                    <p><span>Free Cancellation:</span> Up to 72 hours before check-in</p>
                    <p><span>Late Cancellation:</span> One-night charge applies</p>
                </div>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Payment</h5>
                    <p><span>Security Deposit:</span> $200</p>
                    <p><span>Payment Methods:</span> Visa, Mastercard, Amex, Discover, Digital Wallets</p>

                </div>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Property Rules</h5>
                    <p><span>Smoking: </span>Non-smoking property</p>
                    <p><span>Pets:</span> Not allowed (service animals welcome)</p>
                    <p><span>Quiet Hours:</span> 10:00 PM - 7:00 AM</p>
                    <p><span>Parties:</span> Not permitted</p>

                </div>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Amenities</h5>
                    <p><span>Pool:</span> 6:00 AM - 10:00 PM</p>
                    <p><span>Housekeeping:</span> Daily service</p>

                </div>
                <div className='hoteld-policies-subbox start fd-col'>
                    <h5>Additional Information</h5>
                    <p><span>Children:</span> Under 12 stay free</p>
                    <p><span>Extra Bed:</span> $40/night</p>
                    <p><span>Max Occupancy:</span> 4 guests</p>
                    <p><span>Accessibility:</span> Wheelchair accessible rooms available</p>
                </div>
        </div>
    )
}

export default HotelDPolicies
