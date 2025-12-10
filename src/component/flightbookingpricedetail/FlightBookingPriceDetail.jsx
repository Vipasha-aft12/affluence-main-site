import Image from "next/image";
import React from 'react'
import './FlightBookingPriceDetail.css'

const FlightBookingPriceDetail = () => {

  return (
    <div className="flight-booking_price-detail_box start fd-col w-100">
        <h5>Price Detail</h5>
        <table className="flight-booking-traveler_price-table start fd-col w-100">
            <th className="w-100 btwn bdr-dashed-top">
                <td>Traveller</td>
                <td>Subtotal</td>
            </th>
            <tr className="w-100 btwn">
                <td>1*Adult</td>
                <td>USD 276.10*1</td>
            </tr>
            <tr className="w-100 btwn">
                <td>Fare</td>
                <td>USD 59.60*1</td>
            </tr>
            <tr className="w-100 btwn">
                <td>Taxes & Fees</td>
                <td>USD 216.50*1</td>
            </tr>
            <tr className="w-100 btwn bdr-dashed-top">
                <td><strong>Baggage</strong></td>
            </tr>
            <tr className="w-100 btwn">
                <td>Personal Item</td>
                <td>Free</td>
            </tr>
            <tr className="w-100 btwn">
                <td>Carry-on Baggage</td>
                <td>Free</td>
            </tr>
            <tr className="w-100 btwn">
                <td>Checked Baggage</td>
                <td>Not Included</td>
            </tr>
            <tr className="w-100 btwn bdr-dashed-top bdr-dashed-bottom">
                <td><strong>Total</strong></td>
                <td><strong>USD 276.10</strong></td>
            </tr>
        </table>
        <p className="flightbooking-prdt-disclaimer">All fares are quoted in United States Dollars. Please note that some airlines may charge additional baggage fees. Your credit/debit card may be billed in multiple transactions, adding up to the final total price. Promo codes apply only to service fees.</p>
    </div>
  )
}

export default FlightBookingPriceDetail