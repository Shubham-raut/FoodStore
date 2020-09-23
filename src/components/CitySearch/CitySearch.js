import React from 'react';
import { useState } from 'react';
import './CitySearch.css';

const CitySearch = () => {
    const [cityDropDown, setCityDropDown] = useState(false);

    const citySelectDropDown = () => {
        console.log('city selected');
    }

    const cityChange = () => {
        console.log('city change');
    }

    const cityClick = () => {
        console.log('city click');
    }

    return (
        <div id="citySearch">

            <div className="nearMeArea">
                <button className="nearMe" onClick={() => setCityDropDown(!cityDropDown)}><i className="fa fa-map-marker"></i><span>Top Cities</span></button>
                {
                    cityDropDown ?
                        (<div className="cityDropdown">
                            <option className='cityDropdownItem' value='mumbai' onClick={citySelectDropDown}>Mumbai</option>
                            <option className='cityDropdownItem' value='Delhi' onClick={citySelectDropDown}>Delhi</option>
                            <option className='cityDropdownItem' value='kolkata' onClick={citySelectDropDown}>Kolkata</option>
                            <option className='cityDropdownItem' value='chennai' onClick={citySelectDropDown}>Chennai</option>
                            <option className='cityDropdownItem' value='chandigarh' onClick={citySelectDropDown}>Chandigarh</option>
                            <option className='cityDropdownItem' value='pune' onClick={citySelectDropDown}>Pune</option>
                            <option className='cityDropdownItem' value='ahmedabad' onClick={citySelectDropDown}>Ahmedabad</option>
                        </div>) :
                        null
                }
            </div>

            <input className="citySearch Input" type="text" placeholder="Search your city" onChange={cityChange} />

            <button id="citySearchbtn" onClick={cityClick}>
                <i className="fa fa-search"></i> Search
            </button>
        </div>
    );
}

export default CitySearch;