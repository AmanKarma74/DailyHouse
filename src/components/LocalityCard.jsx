import React, { useEffect, useRef, useState } from 'react'
import '../styles/localityCard.scss'

//Icons
import { RiImageLine } from "react-icons/ri";
import { BsArrowRight, BsArrowRightShort, BsArrowLeft } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
//Images
import house1 from '../assets/properties/Indian_house.jpg'
import house2 from '../assets/properties/house.jpg'
import house3 from '../assets/properties/apartment.jpg'
import house4 from '../assets/properties/luxury_house.jpg'
import house5 from '../assets/properties/luxury_flat.jpg'
import house6 from '../assets/properties/luxury_house2.jpg'
import house7 from '../assets/properties/luxury_villa.jpg'
import house8 from '../assets/properties/luxury_villa.jpg'
import house9 from '../assets/properties/luxury_villa.jpg'

function LocalityCard() {

    const LocalityData = [
        {
          img: house1,
          size: '1 BHK Flat',
          price: '₹ 20 Lac',
          area: '1151 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house2,
          size: '2 BHK Flat',
          price: '₹ 30 Lac',
          area: '1551 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house3,
          size: '3 BHK Flat',
          price: '₹ 40 Lac',
          area: '2151 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house4,
          size: '4 BHK Flat',
          price: '₹ 55 Lac',
          area: '2551 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house5,
          size: '5 BHK Flat',
          price: '₹ 70 Lac',
          area: '3151 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house6,
          size: '6 BHK Flat',
          price: '₹ 90 Lac',
          area: '3551 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house7,
          size: '7 BHK Flat',
          price: '₹ 1 Crore',
          area: '4151 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
        {
          img: house8,
          size: '8 BHK Flat',
          price: '₹ 1.2 Cr',
          area: '5000 sqft',
          location: 'Bhawar Kuan Square, Indore',
          stage: 'Ready to Move'
        },
      ];

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const cardContainerRef = useRef(null);

    const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => Math.min(prevIndex +1, LocalityData.length - 4))
    }
    const handlePreviousCard = () => {
    setActiveCardIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }

    useEffect(() => {
    const cardContainer = cardContainerRef.current;
    cardContainer.style.transform = `translateX(-${activeCardIndex * 312}px)`
    },[activeCardIndex])

  return (
    
    <section className="locality_container">

      <div className="recommend_heading_div">
              <div className="left_heading">
              <h2>Top Localities</h2>
              <span className='underline'></span>
              </div>
              <div className='right_heading'>See all Localities <IoIosArrowRoundForward className='short_icon' /></div>
      </div>

       <span className={activeCardIndex > 0? 'arrow_span arrow_left show_arrow' : 'arrow_span arrow_left'} onClick={handlePreviousCard}><BsArrowLeft /></span>
      <div className="recommend_locality_cards_div" >

        <div className="locality_card_slider" ref={cardContainerRef}>
        {LocalityData.map((data, index) => (
            <div key={index} className="card_holder_div">

                <div className='main_container_locality' >
                    <div className='upperdiv'>
                        <img src={data.img} alt="preview" />
                        <div className="location_name_div">
                            <h6>Silicon City, Indore</h6>
                            <span className='rating'><IoMdStar className='star_icon' /> 4.6</span>
                        </div>
                    </div>
            
                    <div className='lowerdiv'>

                        <div className='lowerdiv_content'> 
                            <div>
                            <h6>400+ Properties for Sell</h6>
                            <p>in Silicon City, Indore</p>
                            </div>
                            <span><MdOutlineKeyboardArrowRight /></span>
                        </div>

                        <div className='lowerdiv_content border'> 
                            <div>
                            <h6>400+ Properties for Rent</h6>
                            <p>in Silicon City, Indore</p>
                            </div>
                            <span><MdOutlineKeyboardArrowRight /></span>
                        </div>

                        <div className='lowerdiv_content'> 
                            <div>
                                <h6>40+ Projects</h6>
                                <p>in Silicon City, Indore</p>
                            </div>
                            <span><MdOutlineKeyboardArrowRight /></span>
                        </div>

                    </div>
                </div>

            </div>
        ))}
        </div>

      </div>
       <span className={activeCardIndex < LocalityData.length - 4 ? 'arrow_span arrow_right show_arrow' : 'arrow_span arrow_right'} onClick={handleNextCard}><BsArrowRight /></span>

    </section>

    )
}

export default LocalityCard