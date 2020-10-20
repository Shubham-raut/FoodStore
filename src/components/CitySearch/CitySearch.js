import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, withRouter } from "react-router-dom";
import { getRes, setCity } from '../../redux';
import { useClickOutside } from '../../utils/func';
import './CitySearch.css';


const CitySearch = (props) => {
    const history = useHistory();
    const city = useSelector(state => state.cityState.city);
    const dispatch = useDispatch();

    const [cityDropDown, setCityDropDown] = useState(false);

    const citySelectDropDown = (e) => {
        console.log('city selected');
        dispatch(setCity(e.target.value));
        dispatch(getRes(e.target.value));
        history.push(`/Restaurants?city=${e.target.value}`);
    }

    const cityClick = (e) => {
        e.preventDefault();
        dispatch(getRes(city));
        history.push(`/Restaurants?city=${city}`);
    }

    const cityEnter = (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            dispatch(getRes(city));
            history.push(`/Restaurants?city=${city}`);
        }
    }

    const nearMe = useClickOutside(() => {
        setCityDropDown(false);
    })

    return (
        <form id="citySearch" onSubmit={cityClick}>

            <div ref={nearMe} className="nearMeArea">
                <div className="nearMe" onClick={() => setCityDropDown(!cityDropDown)}><i className="fa fa-map-marker"></i><span>Top Cities</span></div>
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

            <input className="cityInput" type="text" placeholder="Search your city"
                value={city}
                onChange={(e) => dispatch(setCity(e.target.value))}
                onKeyPress={cityEnter}
            />


            <button type="submit" id="citySearchbtn">
                <i className="fa fa-search"></i><span>Search</span>
            </button>
        </form>
    );
}

export default withRouter(CitySearch);