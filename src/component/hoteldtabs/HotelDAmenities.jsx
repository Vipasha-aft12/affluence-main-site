import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelDTabs.css";





const HotelDAmenities = () => {
    return (
        <div className='hoteld-amenities-box w-100 start fd-col mt-3'>
            <h4 className='mb-3'>Property Amenities</h4>
            <ul className='hoteld-amenities-box-ul btwn fd-row w-100 ps-0 mb-0'>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Burj Khalifa View</p>
                </li>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Infinity Pool</p>
                </li>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Spa</p>
                </li>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Fine Dining</p>
                </li>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Butler Service</p>
                </li>
                <li className='hoteld-amenities-li start fd-row'>
                    <Image
                        src='/images/hotel/hoteld/tick-g.webp'
                        className='img-fluid'
                        width={52}
                        height={52}
                        alt='hotel detail' />
                    <p>Helicopter Tours</p>
                </li>
            </ul>
            <div className='hoteld-amenities-subboxes btwn fd-row w-100'>
                <div className='hoteld-amenities-subboxes-one start fd-col'>
                    <h5>Room Features</h5>
                    <ul className='hoteld-amenities-subboxes-ul start fd-col mb-0 ps-0'>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Air Conditioning</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Flat-screen TV</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Private Bathroom</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Coffee/Tea Maker</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Mini Bar</p>
                        </li>
                    </ul>
                </div>
                <div className='hoteld-amenities-subboxes-one start fd-col'>
                    <h5>Services</h5>
                    <ul className='hoteld-amenities-subboxes-ul start fd-col mb-0 ps-0'>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>24-hour Front Desk</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Concierge Service</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Room Service</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Laundry Service</p>
                        </li>
                        <li className='hoteld-amenities-subboxes-li start fd-row'>
                            <Image
                                src='/images/hotel/hoteld/tick-g.webp'
                                className='img-fluid'
                                width={52}
                                height={52}
                                alt='hotel detail' />
                            <p>Luggage Storage</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HotelDAmenities
