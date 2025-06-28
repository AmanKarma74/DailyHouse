import React, { useState } from 'react'
import '../styles/pageSearch.scss'
import ProptypeDrop from './ProptypeDrop';

//Icons----------------------------->
import { IoLocationSharp, IoChevronDownOutline, IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaHouse } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

function PageSearch() {
    const [propType, setPropType] = useState('Buy')

    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState("")
    const [showLocation, setShowLocation] = useState(false)

    const firstLocation = locations[0];
    const shortenedLocationName = firstLocation?
          firstLocation.length >10 ?
          firstLocation.substring(0,6) + ".." :
          firstLocation : "";

    const handleAddlocation = (newString) => {
        setLocations([...locations, newString]); 
      };
    
      const handleRemovelocation = (index) => {
        setLocations(locations.filter((_, i) => i !== index)); 
      };

      
      const [propDesc, setPropDesc] = useState([])
      const [showPropDesc, setShowPropDesc] = useState(false)

      const firstPropertyDesc = propDesc[0];

      const shortenedPropertyDescName = 
            firstPropertyDesc && propDesc.length > 1 
            ? firstPropertyDesc.substring(0,8) + "..."
            : firstPropertyDesc && firstPropertyDesc.substring(0,11) + "..." ;

      const handleAddPropDesc = (newString) => {
          setPropDesc([...propDesc, newString]); 
        };
      
        const handleRemovePropDesc = (item) => {
        //   setPropDesc(propDesc.filter((_, i) => i !== index)); 
        setPropDesc(propDesc.filter((selectedItem) => selectedItem !== item))
        };

        

        


    const [budget, setBudget] = useState('')
    const [showBudget, setShowBudget] = useState(false)


    const handlePropType = (value) => {
        setPropType(value)
    };

    const handleBudget = (value) => {
        setBudget(value)
    };

    const handleDropdownClick = (dropdownName) => {
        setShowLocation(false);
        setShowPropDesc(false);
        setShowBudget(false);
    
        if (dropdownName === 'location') {
          setShowLocation(!showLocation);
        } else if (dropdownName === 'propertyDesc') {
          setShowPropDesc(!showPropDesc);
        } else if (dropdownName === 'budget') {
          setShowBudget(!showBudget);
        }
      };

  return (
    <div className='main'>

        <div className="main_upper">
            <div className='prop_type_container'>
                <div className={`prop_type ${propType == 'Buy'? 'focus' : ''}`} onClick={() => handlePropType("Buy")}>Buy</div>
                <div className={`prop_type ${propType == 'Rent'? 'focus' : ''}`} onClick={() => handlePropType("Rent")}>Rent</div>
                <div className={`prop_type ${propType == 'New Projects'? 'focus' : ''}`} onClick={() => handlePropType("New Projects")}>New Projects</div>
                <div className={`prop_type ${propType == 'Plot'? 'focus' : ''}`} onClick={() => handlePropType("Plot")}>Plot</div>
                <div className={`prop_type ${propType == 'Commercial'? 'focus' : ''}`} onClick={() => handlePropType("Commercial")}>Commercial</div>
                <div className={`prop_type ${propType == 'Land'? 'focus' : ''}`} onClick={() => handlePropType("Land")}>Land</div>
                <a href="#" className= "prop_type" >Post Free Property Ad</a>
            </div>
            <span className='underline'></span>
        </div>

        <div className='main_lower'>
            <div className="searchbar">

                <div className='location_div_container'>

                    <IoLocationSharp className='icon' />

                    <div className="location_div">
                        {locations.length>0? 
                            (<>
                            <div className="location">{shortenedLocationName} <RxCross2 className='cross_icon' onClick={() => handleRemovelocation(0)}/></div>
                            <div className={locations.length -1 > 0? 'count open_flex': 'count'}>+{locations.length - 1}</div>
                            <input type="text" placeholder='Add more...' 
                            value={location} 
                            onChange={(e)=>{
                            setLocation(e.target.value);
                            setShowLocation(true);
                        }}
                            className='input2'
                            onClick={() => handleDropdownClick('location')}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddlocation(e.target.value);
                                e.target.value = '';
                                setLocation(''); 
                            }
                            }} />
                            </>)
                            : 
                            (
                            <input type="text" placeholder='Enter City, Locality, Project' 
                            value={location} 
                            onChange={(e)=>{
                            setLocation(e.target.value);
                            setShowLocation(true);
                        }}
                            className='input1'
                            onClick={() => handleDropdownClick('location')}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddlocation(e.target.value);
                                e.target.value = ''; 
                                setLocation('');
                            }
                            }}/>
                            )
                        }

                    </div>

                </div>


                <div className='prop_desc' onClick={()=>handleDropdownClick('propertyDesc')}>
                    <FaHouse className='icon'/>

                    <div className='prop_desc_div'>
                        

                        {propDesc.length>0? 
                            (<>
                            <div className="prop_desc_show">{firstPropertyDesc && firstPropertyDesc.length > 11 ? shortenedPropertyDescName : firstPropertyDesc}</div>
                            <div className={propDesc.length -1 > 0? 'count open_flex': 'count'}>+{propDesc.length - 1}</div>
                            <span> <IoChevronDownOutline /></span>
                            </>)
                            : 
                            (<>
                                <p>Property Type</p> 
                                <span> <IoChevronDownOutline /></span>
                            </>)
                        }

                    </div>
                </div>

                <div className='budget_div' onClick={()=>handleDropdownClick('budget')}>
                    <RiMoneyRupeeCircleFill className='icon'/>
                    <p className='budgetinput'>{budget? `${budget}` : 'Mx. Budget'} </p>
                </div>

                <div className='search_button'>
                    <IoSearch className='searchicon' />
                    Search
                </div>
            </div>
        </div>

        <div className="dropdown">

            <div className={`location_keyword_container ${showLocation? 'open_flex' : ''}`}>

                {locations.length > 1? (
                    <div className="locations_div">
                    {locations.map((item, index) => (
                    <div key={index} className="location">
                        {item.length > 8 ? item.substring(0,6) + ".." : item} 
                        <RxCross2 className='cross_icon' onClick={() => handleRemovelocation(index)} />
                    </div>
                    ))}
                </div>
                ) : (<></>)}

                <div className="suggestions_container">

                    <div className="topsearch_div">
                        <p>Top Searches</p>

                        <div className='card_container'>
                            <div className="topsearch">
                                <p>1BHK/2BHK Flate</p>
                                <span>20-30lac</span>
                            </div>
                            <div className="topsearch">
                                <p>1BHK/2BHK Flate</p>
                                <span>20-30lac</span>
                            </div>
                            <div className="topsearch">
                                <p>1BHK/2BHK Flate</p>
                                <span>20-30lac</span>
                            </div>
                            <div className="topsearch">
                                <p>1BHK/2BHK Flate</p>
                                <span>20-30lac</span>
                            </div>
                        </div>

                    </div>

                    <div className="keywords_div">
                        <p>Locations</p>
                        <ul>
                            <li>Silicon City, Indore</li>
                            <li>LIG Colony, Indore</li>
                            <li>Rajendra Nagar, Indore</li>
                            <li>Vijay Nagar, Indore</li>
                        </ul>

                        <p>Projects</p>
                        <ul>
                            <li>SRR Avenue, Silicon City, Indore</li>
                            <li>LIG Colony, Indore</li>
                            <li>Rajendra Nagar, Indore</li>
                            <li>Vijay Nagar, Indore</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`prop_type_keyword_dropdown_container ${showPropDesc ? 'open_block' : ''}`}>
            <ProptypeDrop isPropOpen={showPropDesc} addPropDesc = {handleAddPropDesc} removePropDesc = {handleRemovePropDesc} />
            </div>

            <div className={`budget_dropdown_container ${showBudget ? 'open_block' : ''}`}>
                <div className="budget_dropdown">
                    <p>Choose Maximum</p>
                    
                    {propType == 'Rent' || propType == 'Commercial' ? (
                        <ul onClick={() => handleDropdownClick()}>
                        <li onClick={()=> handleBudget('₹5000')}> ₹5000</li>
                        <li onClick={()=> handleBudget('₹10000')}> ₹10000</li>
                        <li onClick={()=> handleBudget('₹15000')}> ₹15000</li>
                        <li onClick={()=> handleBudget('₹20000')}> ₹20000</li>
                        <li onClick={()=> handleBudget('₹25000')}> ₹25000</li>
                        <li onClick={()=> handleBudget('₹30000')}> ₹30000</li>
                        <li onClick={()=> handleBudget('₹35000')}> ₹35000</li>
                        <li onClick={()=> handleBudget('₹40000')}> ₹40000</li>
                        <li onClick={()=> handleBudget('₹50000')}> ₹50000</li>
                        <li onClick={()=> handleBudget('₹70000')}> ₹70000</li>
                        <li onClick={()=> handleBudget('₹85000')}> ₹85000</li>
                        <li onClick={()=> handleBudget('₹1 lakh')}> ₹1 lakh</li>
                        <li onClick={()=> handleBudget('₹1.5 lakh')}> ₹1.5 lakh</li>
                        <li onClick={()=> handleBudget('₹2 lakh')}> ₹2 lakh</li>
                        <li onClick={()=> handleBudget('₹2.5 lakh')}> ₹2.5 lakh</li>
                        <li onClick={()=> handleBudget('₹3 lakh')}> ₹3 lakh</li>
                        <li onClick={()=> handleBudget('₹5 lakh<')}> ₹5 lakh</li>
                        <li onClick={()=> handleBudget('₹10 lakh')}> ₹10 lakh</li>
                        <li onClick={()=> handleBudget('₹20 lakh')}> ₹20 lakh</li>
                    </ul>
                    ) : (
                        <ul onClick={() => handleDropdownClick()}>
                        <li onClick={()=> handleBudget('₹10 lakh')}> ₹10 lakh</li>
                        <li onClick={()=> handleBudget('₹20 lakh')}> ₹20 lakh</li>
                        <li onClick={()=> handleBudget('₹30 lakh')}> ₹30 lakh</li>
                        <li onClick={()=> handleBudget('₹40 lakh')}> ₹40 lakh</li>
                        <li onClick={()=> handleBudget('₹50 lakh')}> ₹50 lakh</li>
                        <li onClick={()=> handleBudget('₹60 lakh')}> ₹60 lakh</li>
                        <li onClick={()=> handleBudget('₹70 lakh')}> ₹70 lakh</li>
                        <li onClick={()=> handleBudget('₹80 lakh')}> ₹80 lakh</li>
                        <li onClick={()=> handleBudget('₹90 lakh')}> ₹90 lakh</li>
                        <li onClick={()=> handleBudget('₹1 Cr')}> ₹1 Cr</li>
                        <li onClick={()=> handleBudget('₹1.5 Cr')}> ₹1.5 Cr</li>
                        <li onClick={()=> handleBudget('₹2 Cr')}> ₹2 Cr</li>
                        <li onClick={()=> handleBudget('₹2.5 Cr')}> ₹2.5 Cr</li>
                        <li onClick={()=> handleBudget('₹3 Cr')}> ₹3 Cr</li>
                        <li onClick={()=> handleBudget('₹5 Cr')}> ₹5 Cr</li>
                        <li onClick={()=> handleBudget('₹10 Cr')}> ₹10 Cr</li>
                        <li onClick={()=> handleBudget('₹20 Cr')}> ₹20 Cr</li>
                    </ul>
                    )}

                </div>
            </div>

        </div>

    </div>
  )
}

export default PageSearch