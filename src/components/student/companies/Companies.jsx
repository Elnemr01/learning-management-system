import React from 'react'
import './companies.css'
import { assets } from '../../../assets/assets'

const Companies = () => {
    let companiesArr=[
        assets.microsoft_logo,
        assets.paypal_logo,
        assets.adobe_logo,
        assets.accenture_logo,
        assets.walmart_logo
    ]
    return (
        <div className="companies">
            <div className="container">
                <p>Trusted by learners from</p>
                <ul className="comps">
                    {
                        companiesArr.map((e,i)=> <li key={i}><img src={e} alt="check connection" loading='lazy'/></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Companies
