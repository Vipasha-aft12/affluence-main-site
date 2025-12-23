import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDPackage.css";
import HotelDPackageBox from './HotelDPackageBox';



const HotelDPackage = () => {
    return (
        <div className='hoteld-pkg start fd-col'>
            <h3>Special Package Deals</h3>
            <HotelDPackageBox />
            <HotelDPackageBox />
            <HotelDPackageBox />
        </div>
    )
}

export default HotelDPackage
