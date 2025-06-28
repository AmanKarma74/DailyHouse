import React, { useEffect, useState } from 'react'
import '../styles/mainnavbar.scss'

import Sidebar from './Sidebar';
import DropdownCard from './Dropdown';

//Images
import Billu from "../assets/Billu.jpg"
import Elon from "../assets/Elon.png"
import Broker from "../assets/Broker.png"
import Dealer from "../assets/men_img.jpg"

//Icons
import { BiSupport } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

function Mainnavbar({featureColor, postBgColor}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const openDropdown = (dataName, data) => {
      setCurrentFocus(dataName);
        setDataName(data);
        setShowDropdown(true);

    };
    const closeDropdown = () => {
        setCurrentFocus('');
        setShowDropdown(false);
    };

    const buyerCardData = [
        {
          headings: ["BUY A HOME","Land/Plot", "COMMERCIAL", "POPULAR AREAS", "INSIGHTS", "ARTICLES & NEWS"],
          content: [
            {
              title: "Properties in Indore",
              links: [
                "Flats",
                "Builder Floors",
                "Independent House",
                "Plots in Indore",
                "Studio Apartments/1 RK Flats",
                "Farm Houses"
              ]
            },
            {
              title: "Popular Searches",
              links: [
                "Property in Indore",
                "Verified Property in Indore",
                "New Projects in Indore"
              ]
            },
          ],
          img: Billu,
        }
      ];
    const tenantCardData = [
        {
          headings: ["RENT A HOME","PG/CO-LIVING", "COMMERCIAL", "POPULAR AREAS", "INSIGHTS", "ARTICLES & NEWS"],
          content: [
            {
              title: "Properties in Indore",
              links: [
                "Flats",
                "Builder Floors",
                "Independent House",
                "Plots in Indore",
                "Studio Apartments/1 RK Flats",
                "Farm Houses"
              ]
            },
            {
              title: "Popular Searches",
              links: [
                "Property for rent in Indore",
                "Verified Property in Indore"
              ]
            },
          ],
          img: Elon,
        }
      ];
    const ownerCardData = [
        {
          headings: ["OWNER OFFERINGS", "INSIGHTS", "ARTICLES & NEWS"],
          content: [
            {
              title: "OWNER OFFERINGS",
              links: [
                "Post Property for Free",
                "Owner Services",
                "Profile",
                "View Responses"
              ]
            },
          ],
          img: Broker,
        }
      ];
    const builderCardData = [
        {
          headings: ["DEALER OFFERINGS", "RESEARCH AND ADVICE"],
          content: [
            {
              title: "PROPERTY SERVICES",
              links: [
                "Post Property for Free",
                "Dealer Services",
                "Profile",
                "View Responses"
              ]
            },
          ],
          img: Dealer,
        }
      ];
    const insightCardData = [
        {
          headings: ["LOCALITY INSIGHTS", "PRICE TRENDS", "TRANSACTION PRICES", "REVIEWS"],
          content: [
            {
              title: "Most Popular Localities",
              links: [
                "Silicon City Overview",
                "Vijay Nagar Overview",
                "Super Corridor Overview",
                "AB Bypass Road Overview",
                "Lig Overview",
                "Ujjain Road Overview"
              ]
            },
          ],
          img: Dealer,
        }
      ];
    const [dataName, setDataName] = useState(buyerCardData);  
    const [currentFocus, setCurrentFocus] = useState('');

  return (

    <>
    <div className={showDropdown || showSidebar ? 'background_blur show_blur' : 'background_blur'}></div>
    <Sidebar isOpen={showSidebar} onClose={toggleSidebar} />
   
    <section className='navbar_container'>

    <nav className='navbar'>
        <div className='navleft'>Logo</div>

        <div className='navright'>

            <div className="navfeatures" style={{color: featureColor}}>
            <a onMouseEnter={() => openDropdown('buyerCardData',buyerCardData)} style={currentFocus == 'buyerCardData' ? { zIndex: 1500, color: 'white' } : {}}>For Buyers</a>
            <a onMouseEnter={() => openDropdown('tenantCardData',tenantCardData)} style={currentFocus == 'tenantCardData' ? { zIndex: 1500, color: 'white' } : {}}>For Tenants</a>
            <a onMouseEnter={() => openDropdown('ownerCardData',ownerCardData)} style={currentFocus == 'ownerCardData' ? { zIndex: 1500, color: 'white' } : {}}>For Owners</a>
            <a onMouseEnter={() => openDropdown('builderCardData',builderCardData)} style={currentFocus == 'builderCardData' ? { zIndex: 1500, color: 'white' } : {}}>For Dealers / Builders</a>
            <a onMouseEnter={() => openDropdown('insightCardData',insightCardData)} style={currentFocus == 'insightCardData' ? { zIndex: 1500, color: 'white' } : {}}>Insights</a>
            </div>

            <div onMouseEnter={closeDropdown} className='navbar_post' style={{backgroundColor: postBgColor}}>Post property <span>FREE</span> </div>

            <div className='icon' style={{color: featureColor}}><span><BiSupport/></span></div>
            <div className='icon' style={{color: featureColor}}><span><FaUserCircle/></span></div>
            <div className='icon2' style={{color: featureColor}}><span><HiOutlineBars3CenterLeft onClick={toggleSidebar}/></span></div>
        </div>
    </nav>

    <div className="navdropdown" >
    <DropdownCard Data={dataName} isOpen={showDropdown} onClose={closeDropdown} />
    </div>

    </section>
    </>

  )
}

export default Mainnavbar