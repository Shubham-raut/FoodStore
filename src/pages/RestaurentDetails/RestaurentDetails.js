import React from 'react';
import { useSelector } from 'react-redux';
import "./RestaurentDetails.css";
import Reshead from '../../components/ResHead/ResHead';
import ResMenu from '../../components/ResMenu/ResMenu';

const RestaurentDetails = () => {
    const clickedRes = useSelector(state => state.clickedRes);
    const resMenu = useSelector(state => state.resMenu);

    return (
        <div id="clickedRestaurent">
            {clickedRes ? (
                <Reshead />
            ) : (
                    <p>loading...</p>
                )}


            {resMenu.length ? (
                resMenu.map((item, index) =>
                    <ResMenu item={item} index={index} />
                )) : (
                    <p>loading...</p>
                )}

        </div>
    );

}

export default RestaurentDetails;