import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./HotelBookingStatusBDetail.css";


const HotelBookingStatusBDetail = () => {
    return (
        <div className='row hotel-bstatus-bdetail'>
            <div className='col-12 hotel-bstatus-bdetail'>
                <table className='hotel-bstatus-bdetail-table w-100 start fd-col'>
                    <tr>
                        <td>Booking Detail</td>
                    </tr>
                    <tr>
                        <td>Package</td>
                        <td>Romantic Maldives Escape</td>
                    </tr>
                    <tr>
                        <td>Destination</td>
                        <td>Maldives</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>5 Days, 4 Nights</td>
                    </tr>
                    <tr>
                        <td>Departure Date</td>
                        <td>June 15, 2026</td>
                    </tr>
                    <tr>
                        <td>Travelers</td>
                        <td>2 Adults</td>
                    </tr>
                    <tr className='hotel-bstatus-bdetail-table-btm_row'>
                        <td>Total Amount</td>
                        <td><span>$1499</span></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default HotelBookingStatusBDetail
