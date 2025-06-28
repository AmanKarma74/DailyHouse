import React, { useEffect, useRef, useState } from 'react'
import '../pageStyle/home.scss'

//Components------------------->
import Mainnavbar from '../components/Mainnavbar'
import PageSearch from '../components/PageSearch'
import PropertyCard from '../components/PropertyCard'
import LocalityCard from '../components/LocalityCard'
import AgentCard from '../components/AgentCard'

//Utils------------------------->
import topBanner from '../assets/top_banner.jpg'
import postPropertyBg from '../assets/post_property_bg.png'
import postPropertyBg2 from '../assets/sell_property_background.svg'
import propertyGuideBanner from '../assets/Property_Guide_Banner.png'

import house1 from '../assets/properties/Indian_house.jpg'
import house2 from '../assets/properties/house.jpg'
import house3 from '../assets/properties/apartment.jpg'
import house4 from '../assets/properties/luxury_house.jpg'
import house5 from '../assets/properties/luxury_flat.jpg'
import house6 from '../assets/properties/luxury_house2.jpg'
import house7 from '../assets/properties/luxury_villa.jpg'
import house8 from '../assets/properties/luxury_villa.jpg'
import house9 from '../assets/properties/luxury_villa.jpg'

import { BsArrowRight, BsArrowRightShort, BsArrowLeft } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import AdCard from '../components/adCard'
import CategoryCard from '../components/categoryCard'



function Home() {
  
  const cardData = [
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
    setActiveCardIndex((prevIndex) => Math.min(prevIndex +1, cardData.length - 4))
  }
  const handlePreviousCard = () => {
    setActiveCardIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    cardContainer.style.transform = `translateX(-${activeCardIndex * 312}px)`
  },[activeCardIndex])

    
       
  return (
    <>
    <Mainnavbar featureColor="#A5ADB2" postBgColor="white" />

    <div className="topBanner">
      <a href="" className="banner_link_wrapper">
      <img src={topBanner} alt="" />
      </a>
    </div>

    <section className='home_mid_content'>
    <PageSearch />
    <AdCard />
    </section>

    <section className='recommend_property_container'>
      
      <div className="recommend_heading_div">
        <div className="left_heading">
        <h2>Handpicked Properties</h2>
        <span className='underline'></span>
        </div>
        <div className='right_heading'>See all Properties <IoIosArrowRoundForward className='short_icon' /></div>
      </div>

        <span className={activeCardIndex > 0? 'arrow_span arrow_left show_arrow' : 'arrow_span arrow_left'} onClick={handlePreviousCard}><BsArrowLeft /></span>
      <div className="recommend_property_cards_div" >

      <div className="recommend_property_cards_div_slider" ref={cardContainerRef}>
      {cardData.map((cardData, index) => (
        <div key={index} className="card_holder_div"><PropertyCard data={cardData} /></div>
      ))}
      </div>

      </div>
       <span className={activeCardIndex < cardData.length - 4 ? 'arrow_span arrow_right show_arrow' : 'arrow_span arrow_right'} onClick={handleNextCard}><BsArrowRight /></span>

    </section>

    <section className="appoint_advisor_section">
      <div className="advisor_div">
        <img src={propertyGuideBanner} alt="Get Your Guide Now" />
      </div>
    </section>

    <section className="">
    
    <LocalityCard /> 
    <AgentCard /> 
    </section>

    <section className="categories">
      <CategoryCard />
    </section>

      <section className="sell_property_section">
        <div className="sell_image_container">
          <img src={postPropertyBg2} alt="" />
        </div>

        <div className="sell_action_div">
          <h4>List your property and connect with clients faster!</h4>
          <button>Sell your property</button>
        </div>
      </section>



    </>
  )
}




export default Home