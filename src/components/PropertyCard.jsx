import React, { useState } from 'react'
import '../styles/PropertyCard.scss'



//Icons
import { RiImageLine } from "react-icons/ri";

function PropertyCard({data}) {
    
  return (
    <div className='main_container' >
        <div className='upperdiv'>
            <img src={data.img} alt="preview" />
            <span> <RiImageLine className='pic_icon'/> 3</span>
        </div>

        <div className='lowerdiv'>
            <h5>{data.size}</h5>

            <div className='price'>
                <span className='price_span'>{data.price}</span>
                <span>{data.area}</span>
            </div>

            <p className='card_prop_location'>{data.location}</p>
            <p className='card_prop_stage'>{data.stage}</p>

            <button className="button">View Details</button>
        </div>
    </div>
  )
}

export default PropertyCard