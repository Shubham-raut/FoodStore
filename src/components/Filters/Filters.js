import React from 'react';
import "./Filters.css";
import { useSelector, useDispatch } from 'react-redux';
import { setCuisine, setQVal, setSort, sortFilter } from '../../redux';

const Filters = () => {
    const cityId = useSelector(state => state.cityState.cityId);
    const sort = useSelector(state => state.cityState.sort);
    const order = useSelector(state => state.cityState.order);
    const cuisineId = useSelector(state => state.cityState.cuisineId);
    const QVal = useSelector(state => state.cityState.QVal);
    const dispatch = useDispatch();

    const applySortFilter = (e, s, o) => {
        dispatch(setSort({ 'sort': s, 'order': o }));
        activateClick(e, "sortFilterList");
        dispatch(sortFilter(s, o, cuisineId, cityId, QVal));
    }

    const applyCuisineFilter = (e) => {
        dispatch(setQVal(''));
        if (!e.target.className.split(" ").includes('active')) {
            dispatch(setCuisine(e.target.value));
            activateClick(e, "cuisineFilterList");
            dispatch(sortFilter(sort, order, e.target.value, cityId));
        }
        else {
            dispatch(setCuisine(''));
            activateClick(e, "cuisineFilterList", false);
            dispatch(sortFilter(sort, order, '', cityId));
        }
    }

    const activateClick = (event, out, remove = true) => {
        let current = document.querySelectorAll(`.${out} option.active`);
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        remove && (event.target.className += " active");
    }

    return (
        <div id="filters">
            <div className="sortFilter">
                <div className="sortFilterTitle">Sort by</div>
                <div className="sortFilterList">
                    <option className="filterItem active" onClick={(e) => applySortFilter(e, '', '')} >Top Picks</option>
                    <option className="filterItem" onClick={(e) => applySortFilter(e, 'rating', 'desc')}  >Best Rating</option >
                    <option className="filterItem" onClick={(e) => applySortFilter(e, 'cost', 'asc')} >Cost-Low to High</option >
                    <option className="filterItem" onClick={(e) => applySortFilter(e, 'cost', 'desc')} >Cost-High to Low</option >
                </div>
            </div>

            <div className="cuisineFilter">
                <div className="cuisineFilterTitle">Cuisines</div>
                <div className="cuisineFilterList">
                    <option className="filterItem" value={148} onClick={applyCuisineFilter}>Indian</option >
                    <option className="filterItem" value={50} onClick={applyCuisineFilter}>North Indian</option >
                    <option className="filterItem" value={85} onClick={applyCuisineFilter}>South Indian</option >
                    <option className="filterItem" value={35} onClick={applyCuisineFilter}>Continental</option >
                    <option className="filterItem" value={83} onClick={applyCuisineFilter}>Seafood</option >
                    <option className="filterItem" value={40} onClick={applyCuisineFilter}>Fastfood</option >
                    <option className="filterItem" value={90} onClick={applyCuisineFilter}>Street Food</option >
                    <option className="filterItem" value={25} onClick={applyCuisineFilter}>Chinese</option >
                    <option className="filterItem" value={73} onClick={applyCuisineFilter}>Mexican</option >
                    <option className="filterItem" value={195} onClick={applyCuisineFilter}>Thai</option >
                    <option className="filterItem" value={55} onClick={applyCuisineFilter}>Italian</option >
                    <option className="filterItem" value={4} onClick={applyCuisineFilter}>Arabian</option >
                    <option className="filterItem" value={38} onClick={applyCuisineFilter}>European</option >
                    <option className="filterItem" value={177} onClick={applyCuisineFilter}>Sushi</option >
                </div>
            </div>
        </div>
    );
}

export default Filters;