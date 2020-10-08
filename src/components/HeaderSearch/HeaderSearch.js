import React from 'react';
import { useHistory } from "react-router-dom";
import './HeaderSearch.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCity, setDish, getRes } from '../../redux/actions/actions';

const HeaderSearch = () => {
    const dish = useSelector(state => state.dish);
    const city = useSelector(state => state.city);
    const history = useHistory();
    const dispatch = useDispatch();

    const citySearch = (event) => {
        dispatch(setCity(event.target.value));
    }

    const dishSearch = (event) => {
        dispatch(setDish(event.target.value))
    }

    const cityEnter = (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            dispatch(getRes(city));
            history.push(`/Restaurants?city=${city}`);
        }
    }

    const dishEnter = (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            console.log('dish enter');
            // dispatch(getRes(city));
            // history.push(`/Restaurants?city=${city}`);
        }
    }

    return (

        <div id="headSearch">
            <div id="headCitySearch">
                <i className="fa fa-map-marker"></i>
                <input className="headCityInput" type="text" placeholder="Search your city"
                    value={city}
                    onChange={(e) => citySearch(e)}
                    onKeyPress={cityEnter}
                />
            </div>
            <span>|</span>
            <div id="headDishSearch">
                <input className="headDishInput" type="text" placeholder="Search for dish"
                    value={dish}
                    onChange={dishSearch}
                    onKeyPress={dishEnter}
                />
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>

        </div>
    );
}

export default HeaderSearch;