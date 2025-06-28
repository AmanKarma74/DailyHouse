import React, {useState} from 'react'
import '../styles/filterSearch.scss'

import ProptypeDrop from './ProptypeDrop';
import PostedbyDrop from './/PostedbyDrop';

//icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function FilterSearch() {

    const [prop_type, setProp_type] = useState('Buy'); //default value will be fetched from the home page when a user search somthing
        const [showPropType, setShowPropType] = useState(false);
        const handlePropType = (value) => {
            setProp_type(value)
        };
    
        const [showLocation, setShowLocation] = useState(false);
        const [locations, setLocations] = useState([]);
        const [location, setLocation] = useState("");
    
        const firstLocation = locations[0];
        const shortenedLocationName = firstLocation?
              firstLocation.length >10 ?
              firstLocation.substring(0,6) + ".." :
              firstLocation : "";
        
        const handleAddlocation = (newString) => {
            // newString.length > 0?
            // setLocations([...locations, newString]) :
            // Error('Please enter something')
            setLocations([...locations, newString]);
        };
        
        const handleRemovelocation = (index) => {
            setLocations(locations.filter((_, i) => i !== index)); 
        };
        
    
    
        const [budget, setBudget] = useState('')
        const [showBudget, setShowBudget] = useState(false)
    
        const handleBudget = (value) => {
            setBudget(value)
        };
    
    
    
    
        const [propDesc, setPropDesc] = useState([])
        const [showPropDesc, setShowPropDesc] = useState(false)
    
        const firstPropertyDesc = propDesc[0];
    
        const shortenedPropertyDescName = 
            firstPropertyDesc && propDesc.length > 1 
            ? firstPropertyDesc.substring(0,9) + ".."
            : firstPropertyDesc && firstPropertyDesc.substring(0,10) + ".." ;
    
        const handleAddPropDesc = (newString) => {
            setPropDesc([...propDesc, newString]); 
        };
        
        const handleRemovePropDesc = (item) => {
        //   setPropDesc(propDesc.filter((_, i) => i !== index)); 
        setPropDesc(propDesc.filter((selectedItem) => selectedItem !== item))
        };
    
    
    
    
    
        const [postedby, setPostedby] = useState([])
        const [showPostedby, setShowPostedby] = useState(false)
    
        const firstPostedby = postedby[0];
    
        const shortenedPostedbyName = 
            firstPropertyDesc && postedby.length > 1 
            ? firstPropertyDesc.substring(0,8) + "..."
            : firstPropertyDesc && firstPropertyDesc.substring(0,11) + "..." ;
    
        const handleAddPostedby = (newString) => {
            setPostedby([...postedby, newString]); 
        };
        
        const handleRemovePostedby = (item) => {
        //   setPostedby(postedby.filter((_, i) => i !== index)); 
        setPostedby(postedby.filter((selectedItem) => selectedItem !== item))
        };
    
    
    
    
        
    
    
    
    
        const handleDropdownClick = (dropdownName) => {
            setShowPropType(false);
            setShowLocation(false);
            setShowBudget(false);
            setShowPropDesc(false);
            setShowPostedby(false);
    
        
            if (dropdownName === 'budget') {
                setShowBudget(!showBudget);
            } else if (dropdownName === 'proptype') {
                setShowPropType(!showPropType);
            } else if (dropdownName === 'location') {
                setShowLocation(!showLocation);
            } else if (dropdownName === 'propdesc') {
                setShowPropDesc(!showPropDesc);
            } else if (dropdownName === 'postedby') {
                setShowPostedby(!showPostedby);
            }
            };

        const closeAllDropdown = () => {
            setShowPropType(false);
            setShowLocation(false);
            setShowBudget(false);
            setShowPropDesc(false);
            setShowPostedby(false);
            };
    
        const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        };
    
      const handleProptype = (value) => {
        setProp_type(value);
        setShowDropdown(!showDropdown);
        };
    
      const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle search logic here 
        console.log('Searching for:', searchTerm); 
        };
    
      const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
         };


  return (

    <section className="search_filter_section">
        <div className="search_filter_container">

            <div className="filter_searchbar_container">
            
                <div className="filter_search_div_container">
                <div className="filter-search-div">
                        
                        <button className='prop_button' onClick={() => handleDropdownClick('proptype')} > {prop_type} <span > {showPropType? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span> </button>
                

                        <div className="filter_location_div">
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
                            if (e.key === 'Enter' && e.target.value.length>0) {
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
                            if (e.key === 'Enter' && e.target.value.length>0) {
                                handleAddlocation(e.target.value);
                                e.target.value = ''; 
                                setLocation('');
                            }
                            }}/>
                            )
                        }
                        </div>
                
                </div>
                </div>
            </div>
            
            {budget? (<div className='filter_budget filter_item' onClick={() => handleDropdownClick('budget')}> {budget} <span>{showBudget? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>  </div>) : 
            (<div className='filter_budget filter_item' onClick={() => handleDropdownClick('budget')}> Budget <span>{showBudget? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span> </div>)}

            
            <div className='filter_prop_type filter_item' onClick={() => handleDropdownClick('propdesc')}>
                {propDesc.length>0?
                (<> <div className='wrapper'>
                <div className="prop_desc_show">{firstPropertyDesc && firstPropertyDesc.length > 11 ? shortenedPropertyDescName : firstPropertyDesc}</div>
                <div className={propDesc.length -1 > 0? 'count open_flex': 'count'}>+{propDesc.length - 1}</div>
                </div>
                <span> {showPropDesc? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                </>) :
                (<>Property Type <span>{showPropDesc? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span></>) 
                }
            </div>

            <div className='filter_postedby filter_item' onClick={() => handleDropdownClick('postedby')}>
                {postedby.length>0?
                (<> <div className='wrapper'>
                <div className="prop_desc_show">{firstPostedby && firstPostedby.length > 11 ? shortenedPostedbyName : firstPostedby}</div>
                <div className={postedby.length -1 > 0? 'count open_flex': 'count'}>+{postedby.length - 1}</div>
                </div>
                <span> {showPostedby? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                </>) :
                (<>Posted By <span>{showPostedby? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span></>) 
                }
            </div>
            

            <div className='morefilter filter_item'> <p className='filtercount'>5</p> More Filters <span><MdKeyboardArrowDown/></span></div>
        </div>


        <section className="filter_search_dropdown_section">
            <div className={`bg_blur ${showPropType || showLocation || showBudget || showPropDesc || showPostedby? 'open_block' : ''}`} onClick={closeAllDropdown}></div>
            <div className={`filter_prop_dropdown ${showPropType? 'open_flex' : ''}`}>
                <div className="drop_heading">Residential</div>
                <ul onClick={() => handleDropdownClick()}>
                <li onClick={() => {handleProptype('Buy')}}>Buy</li>
                <li onClick={() => {handleProptype('Rent')}}>Rent</li>
                <li onClick={() => {handleProptype('PG')}}>PG</li>
                <li onClick={() => {handleProptype('Projects')}}>Projects</li>
                </ul>
                
                <div className="drop_heading">Commercial</div>
                <ul onClick={() => handleDropdownClick()}>
                <li onClick={() => {handleProptype('Buy')}}>Buy</li>
                <li onClick={() => {handleProptype('Lease')}}>Lease</li>
                <li onClick={() => {handleProptype('Project')}}>Projects</li>
                </ul>
            </div>



            <div className={`filter_location_keyword_container ${showLocation? 'open_flex' : ''}`}>

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

                <div className={`filter_suggestions_container ${showLocation? 'open_flex' : ''}`}>

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


            <div className={`filter_budget_dropdown ${showBudget ? 'open_flex' : ''}`}>
                <p>Choose Maximum</p>
                
                {prop_type == 'Rent' || prop_type == 'Commercial' ? (
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

             <div className={`filter_prop_type_keyword_dropdown_container ${showPropDesc ? 'open_block' : ''}`}>
            <ProptypeDrop isPropOpen={showPropDesc} addPropDesc = {handleAddPropDesc} removePropDesc = {handleRemovePropDesc} />
            </div>

             <div className={`filter_postedby_keyword_dropdown_container ${showPostedby ? 'open_flex' : ''}`}>
            <PostedbyDrop isPostOpen={showPostedby} addPostedby = {handleAddPostedby} removePostedby = {handleRemovePostedby} handleDropdownClick = {handleDropdownClick} />
            </div>
        </section>

    </section> 

  )
}

export default FilterSearch