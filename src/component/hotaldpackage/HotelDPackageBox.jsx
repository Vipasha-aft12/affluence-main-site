import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDPackage.css";



const HotelDPackageBox = () => { 
    return (
        <div className='hoteld-pkg-box btwn fd-row w-100'>
            <div className='hoteld-pkg-box-content start fd-col'>
                <p><strong>Romantic Getaway Package</strong></p>
                <p>Perfect for couples - includes champagne, roses, and spa access</p>
                <ul className="hoteld-pkg-box-content-ul start fd-col">
                    <li>Bottle of champagne on arrival</li>
                    <li>Rose petals and chocolates in room</li>
                    <li>Couples spa treatment (60 min)</li>
                    <li>Late checkout (2:00 PM)</li>
                </ul>
            </div>
            <h5>+$149</h5>
        </div>
    )
}

export default HotelDPackageBox
