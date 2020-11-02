import React from 'react';
import { useHistory } from "react-router-dom";
import './HeaderSearch.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCity, getRes, setQVal, sortFilter, setCuisine } from '../../redux';

const HeaderSearch = () => {
    const city = useSelector(state => state.cityState.city);
    const QVal = useSelector(state => state.cityState.QVal);

    const cityId = useSelector(state => state.cityState.cityId);
    const sort = useSelector(state => state.cityState.sort);
    const order = useSelector(state => state.cityState.order);
    const cuisineId = useSelector(state => state.cityState.cuisineId);
    const history = useHistory();
    const dispatch = useDispatch();

    const citySearch = (event) => {
        dispatch(setCity(event.target.value));
    }

    const dishSearch = (event) => {
        dispatch(setQVal(event.target.value))
    }

    const cityEnter = (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            dispatch(setQVal(''));
            if (city) {
                dispatch(getRes(city));
                history.push("/Restaurants");
            }
        }
    }

    const dishEnter = (event) => {
        if ((event.which === 13 || event.keyCode === 13 || event.key === "Enter") && QVal) {
            dispatch(setCuisine(''));
            dispatch(sortFilter(sort, order, cuisineId, cityId, QVal));
            let current = document.querySelectorAll(`.cuisineFilterList option.active`);
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            history.push("/Restaurants");
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
                    value={QVal}
                    onChange={(e) => dishSearch(e)}
                    onKeyPress={dishEnter}
                />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>

        </div>
    );
}

export default HeaderSearch;