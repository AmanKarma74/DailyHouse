import React, { useState } from 'react'
import '../styles/proptypeDrop.scss'

function ProptypeDrop({isPropOpen, addPropDesc, removePropDesc}) {

    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item) => {
        if(selectedItems.includes(item)){
            removePropDesc(item);
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        } else{
            setSelectedItems([...selectedItems, item]);
            addPropDesc(item);
        }
    }

    const [selectedBhk, setSelectedBhk] = useState([]);

    const handleBhkClick = (item) => {
        if(selectedBhk.includes(item)){
            removePropDesc(item);
            setSelectedBhk(selectedBhk.filter((selectedItem) => selectedItem !== item));
        } else{
            setSelectedBhk([...selectedBhk, item]);
            addPropDesc(item);
        }
    }
  return (

    <div className={`prop_desc_dropdown ${isPropOpen ? 'open_flex' : ''}`}>

        <div className="information_div">

            <p>Residential</p>
            <div className="types_div">
                <ul>
                    <li className={selectedItems.includes('Flat')? 'select' : ''} onClick={()=>handleItemClick('Flat')}>Flat</li>
                    <li className={selectedItems.includes('House/Villa')? 'select' : ''} onClick={()=>handleItemClick('House/Villa')}>House/Villa</li>
                    <li className={selectedItems.includes('Plot')? 'select' : ''} onClick={()=>handleItemClick('Plot')}>Plot</li>
                </ul>
                <ul>
                    <li className={selectedBhk.includes('1 Bhk')? 'select' : ''} onClick={()=>handleBhkClick('1 Bhk')}>1 Bhk</li>
                    <li className={selectedBhk.includes('2 Bhk')? 'select' : ''} onClick={()=>handleBhkClick('2 Bhk')}>2 Bhk</li>
                    <li className={selectedBhk.includes('3 Bhk')? 'select' : ''} onClick={()=>handleBhkClick('3 Bhk')}>3 Bhk</li>
                    <li className={selectedBhk.includes('4 Bhk')? 'select' : ''} onClick={()=>handleBhkClick('4 Bhk')}>4 Bhk</li>
                    <li className={selectedBhk.includes('5 Bhk')? 'select' : ''} onClick={()=>handleBhkClick('5 Bhk')}>5 Bhk</li>
                    <li className={selectedBhk.includes('5+ Bhk')? 'select' : ''} onClick={()=>handleBhkClick('5+ Bhk')}>5+ Bhk</li>
                </ul>
            </div>
            
        </div>

        <div className="information_div">

            <p>Commercial</p>
            <div className="types_div">
                <ul>
                    <li className={selectedItems.includes('Office Space')? 'select' : ''} onClick={()=>handleItemClick('Office Space')}>Office Space</li>
                    <li className={selectedItems.includes('Shop/Showroom')? 'select' : ''} onClick={()=>handleItemClick('Shop/Showroom')}>Shop/Showroom</li>
                    <li className={selectedItems.includes('Commercial Land')? 'select' : ''} onClick={()=>handleItemClick('Commercial Land')}>Commercial Land</li>
                    <li className={selectedItems.includes('Warehouse/Godown')? 'select' : ''} onClick={()=>handleItemClick('Warehouse/Godown')}>Warehouse/Godown</li>
                    <li className={selectedItems.includes('Industrial Building')? 'select' : ''} onClick={()=>handleItemClick('Industrial Building')}>Industrial Building</li>
                    <li className={selectedItems.includes('Industrial Shed')? 'select' : ''} onClick={()=>handleItemClick('Industrial Shed')}>Industrial Shed</li>
                </ul>
            </div>

        </div>

        <div className="information_div">

            <p>Other Property Types</p>
            <div className="types_div">
                <ul>
                    <li className={selectedItems.includes('Farm House')? 'select' : ''} onClick={()=>handleItemClick('Farm House')}>Farm House</li>
                    <li className={selectedItems.includes('Agricultural Land')? 'select' : ''} onClick={()=>handleItemClick('Agricultural Land')}>Agricultural Land</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default ProptypeDrop;