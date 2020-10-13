import React from 'react';
import "./RestCard.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCurrentRes, getResMenu } from '../../redux';

const RestCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const resClicked = (resName, resId) => {
        console.log("restaurent cllicked");
        dispatch(getCurrentRes(resId));
        dispatch(getResMenu());
        history.push(`/Restaurants${resName}`);
    }

    return (
        <div className="mainPage_restaurent_inner_container"
            key={props.items.restaurant.R.res_id}
            onClick={() => resClicked(props.items.restaurant.name, props.items.restaurant.R.res_id)}>
            <div className="mainPage_restaurent_card_container">
                <div className="res_img_area">
                    <img src={props.items.restaurant.thumb} alt="Restaurant Img" />
                </div>
                <div className="res_title">{props.items.restaurant.name}</div>
                <div className='res_cuisines'>{props.items.restaurant.cuisines}</div>
                <div className='marginBot'></div>
                <div className="rate-cost">
                    {
                        props.items.restaurant.user_rating.aggregate_rating > 4 ?
                            <div className='res_rating_green'>{props.items.restaurant.user_rating.aggregate_rating}</div> :
                            <div className='res_rating_red'>{props.items.restaurant.user_rating.aggregate_rating}</div>
                    }
                    <div className="res_cost">{props.items.restaurant.average_cost_for_two}{props.items.restaurant.currency} For Two</div>
                </div>
                <div className="res_timing">{props.items.restaurant.timings}</div>
                <div className='marginBot'></div>
                <div className='res_loc'>{props.items.restaurant.location.address}</div>
            </div>
        </div>

    );
}

export default RestCard;


export const RestCardLoad = () => {
    let load = [];
    for (let i = 0; i < 6; i++) {
        load.push(
            <div key={i} className="mainPage_restaurent_inner_container">
                <div className="mainPage_restaurent_card_container">
                    <div className="resimgarea_load "></div>
                    <div className="restitle_load"></div>
                    <div className='restop_load '></div>
                    <div className='resmid_load '></div>
                    <div className="resBot_load">  </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { load}
        </>
    )
}