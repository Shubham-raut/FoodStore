import React from 'react';
import { useSelector } from 'react-redux';
import "./ResHead.css";

const Reshead = () => {
    const currentRes = useSelector(state => state.restaurentState.currentRes);

    let imageUrl = "https://b.zmtcdn.com/data/res_imagery/307113_RESTAURANT_e2f599e624e5e8c01404af7608728671.jpg?output-format=webp";


    let imgUrl = currentRes ?
        currentRes.featured_image ?
            currentRes.featured_image :
            imageUrl :
        imageUrl;

    return (
        <div className="resDetails_container">
            <div className="resDetails_inner_container">
                <div className="dish_img_area">
                    <img src={imgUrl} alt="Restraurent Img" />
                </div>
                <div className="resDetails_right_container">
                    <div className="res_titleX">{currentRes.name}</div>
                    <div className='res_cuisinesX'>{currentRes.cuisines}</div>
                    <div className='res_locationX'>{currentRes.location.locality}</div>
                    <div className='res_timingX'>{currentRes.timings}</div>

                    <div className="cost_rateX">
                        <div className='res_ratingX'><i className="fa fa-star" aria-hidden="true"></i> {currentRes.user_rating.aggregate_rating}<span className="res_ratingX_sub">{currentRes.user_rating.votes}+ Ratings</span></div>
                        <div className='res_costX'><i className="fa fa-inr" aria-hidden="true"></i> {currentRes.average_cost_for_two}<span className="res_costX_sub">Cost for Two</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reshead;


export const ResheadLoad = () => {

    let load = [];
    load.push(
        <div className="resDetails_container">
            <div className="resDetails_inner_container">
                <div className="resimgarea_load width"></div>
                <div className="resDetails_right_container_load">
                    <div className="restitle_load margin"></div>
                    <div className="restop_load"></div>
                    <div className='resmid_load'></div>
                    <div className='resBot_load'></div>
                </div>
            </div>
        </div>
    );
    return (
        <> { load} </>
    );

}