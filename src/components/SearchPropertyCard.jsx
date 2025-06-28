import React, {useState} from 'react'
import '../styles/searchPropertyCard.scss'
import house1 from '../assets/properties/luxury_house.jpg'

//icons
import { FaCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";

function SearchPropertyCard({PropertyData}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

  return (<>


    <div className="search_prop_card_main_container">

        <div className='image_container'>
        <img src={PropertyData.img[0]} alt="image" />
        </div>

        <div className='property_info_container'>

            <div className='tag_and_support'>
                <div className='zero_brokrage_tag'><FaCheck className='tag_icon' />ZERO BROKERAGE</div>
                <div className='support_icons'> <CiHeart/> <PiShareFatLight/> <HiOutlineDotsVertical/></div>
            </div>

            <div className='prop_heading'>
                <h2>{PropertyData.prop_type} for Sale in Silicon City, Indore</h2>
                <h5>{PropertyData.building_name}</h5>
            </div>

            <div className='prop_details'>
                <div className="prop_details_item "> <p>SUPER AREA</p> <h6>{PropertyData.size}</h6></div>
                <div className="prop_details_item leftborder"> <p>{PropertyData.status == 'Ready to Move'? 'STATUS' : PropertyData.status}</p> <h6>{PropertyData.status == 'Ready to Move'? PropertyData.status : PropertyData.completion_time}</h6></div>
                <div className="prop_details_item leftborder"> <p>TRANSACTION</p> <h6>{PropertyData.transaction_type}</h6></div>
                <div className="prop_details_item"> <p>FURNISHING</p> <h6>{PropertyData.furnished}</h6></div>
                <div className="prop_details_item leftborder"> <p>CAR PARKING</p> <h6>{PropertyData.carparking}</h6></div>
                <div className="prop_details_item leftborder"> <p>BATHROOM</p> <h6>{PropertyData.bathroom}</h6></div>
            </div>

            <div className='prop_description'>
                {isExpanded? PropertyData.description : PropertyData.description.slice(0,170) + '...'}
                <button onClick={toggleExpand}>{isExpanded? 'Read less' : <FaAngleDown />}</button>
            </div>
        
        </div>


        <div className='action_buttons_container'>
            <div className='prop_price'> <h3>{PropertyData.price}</h3> <p>{PropertyData.price_per_sqft} per sqft</p></div>

            <div className='action_buttons'>
                <div className="callback_button">Request Callback</div>
                <div className="getinfo_button">Get Info</div>
                <p>Get Home Loan</p>
            </div>
            <div className='prop_builder'>
                <h6>Builder: {PropertyData.developer}</h6>
                <p>Operating Since: 2013</p>
            </div>
        </div>
    </div>
    


    </>
  )
}

export default SearchPropertyCard