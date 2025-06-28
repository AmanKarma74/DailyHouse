import React, {useState} from 'react'
import '../pageStyle/search.scss'

import Mainnavbar from '../components/Mainnavbar'
import FilterSearch from '../components/FilterSearch';
import SearchPropertyCard from '../components/SearchPropertyCard';
import AdOnSearchPage from '../components/AdOnSearchPage';
import BuilderCard from '../components/BuilderCard';

//icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

//images
import house1 from '../assets/properties/luxury_house.jpg'
import house2 from '../assets/properties/house.jpg'
import house3 from '../assets/properties/apartment.jpg'
import house4 from '../assets/properties/Indian_house.jpg'
import house5 from '../assets/properties/luxury_flat.jpg'
import Dealer from "../assets/men_img.jpg"
import logo from '../assets/indore_art.png'


function Search() {

    const searched_property_Data = [
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
    {
      img: [house1, house2, house3, house4, house5],
      prop_type: '2 BHK Flat',
      size: '400sqft',
      price: '₹ 40 Lac',
      price_per_sqft: '₹ 10,000',
      developer: 'Karma Construction',
      transaction_type: 'New Property',
      status: 'Ready to Move',
      completion_time: "Poss. by Dec'2",
      furnished: 'Unfurnished',
      Rera_id: 'xyz',
      building_name: 'SRR Avenue',
      location: 'Bhawar Kuan Square, Indore',
      water_avaiblity: '24hr',
      description: "Imagine waking up to the gentle rustling of leaves, the melodious songs of birds, and the fresh scent of the great outdoors. Living within nature isn't just a dream; it's a reality waiting for you to explore. Presenting Provident Botanico where the five elements of nature seamlessly merge within a single property. ",
      amenities: ['Lift', 'Pool', 'Gym'],
      bathroom: '2',
      carparking: '1 covered',
      Balcony: '2'
    },
  ];

  const builder_data = [
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
    {
        Name: 'Aman Karma',
        Profile_pic: Dealer,
        Contact_number: '9993800911',
        Area: 'Silicon City',
        Office_address: "Near CSB, Silicon City, Indore",
        Company_name: 'Dailyhouse Pvt. Ltd.',
        logo: logo,
        RERA_ID: '000947',
        Operating_since: '2019',
    },
];


    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    
    


  return (
    <>
    <div className="mainnavbar_container"><Mainnavbar featureColor="#303030" postBgColor="#FFC72C" /></div>

    <div className="filterSearch_component"><FilterSearch/></div>


    <div className="resultPageContainer">
        <div className='searchedProperties_container'>
            <h2 className='searchedProperties_container_heading'>200 Results | Flats for sell in Indore</h2>
            {searched_property_Data.map((data, index) => (
                <SearchPropertyCard PropertyData= {data} key={index} />
            ))}
        </div>
        <div className='sideSection_container'>
        <AdOnSearchPage />
        
        {builder_data.map((data, index) => (
            <BuilderCard data= {data} key={index}/>
        ))}
        </div>
    </div>
    </>
  )
}

export default Search