import React, { useState } from 'react';
import '../styles/dropdown.scss'

function DropdownCard({Data, isOpen, onClose}) {

  const cardData = Data[0];


  return ( 
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`} >
        <div onMouseEnter={onClose} className="justdiv"></div>
        {
        <div className="dropdown" onMouseLeave={onClose}>

            <div className='drop_left'>

                <div className='drop_left_headings'>
                    <ul>
                        {cardData.headings.map((heading, index) => {
                            return <li key={index}>{heading}</li>
                        }) }                        
                    </ul>
                </div>

                <div className='drop_left_footer'>
                    <p>contact us toll free on</p>
                    <pre>1800 41 99099 <span>(9AM-11PM IST)</span></pre>          
                </div>

            </div>

            <div className='drop_right'>

                <div className='drop_right_content'>

                    <div className='drop_right_content_links'>

                    {cardData.content.map((section, index) => (
                        <div key={index} className='drop_right_content_links_wrapper'>
                        <p>{section.title}</p>
                        <ul>
                            {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>{link}</li> 
                            ))}
                        </ul>
                        </div>
                        ))}

                    </div>

                    <div className='drop_right_content_visual'>
                        <img src={cardData.img} alt="" />
                    </div>
                </div>

                <div className='drop_right_footer'>Email us at <pre> services@amankarma.com.</pre> or call us at <pre> 1800 41 99099 </pre> (IND Toll-Free)</div>
            
            </div>

        </div>
        }
        <div onMouseEnter={onClose} className="justdiv2"></div>
    </div>
);

}

export default DropdownCard;