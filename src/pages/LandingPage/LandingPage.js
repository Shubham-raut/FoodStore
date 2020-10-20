import React from 'react';
import CitySearch from '../../components/CitySearch/CitySearch';
import './LandingPage.css';

const LandingPage = () => {

    return (
        <div id="landing">
            <div id="landingCover">
                <div className="coverImg"></div>
                <div className="coverContent">
                    <h1 className="coverTitle">You order we deliver</h1>
                    <p className="coverDesc">Order food from favourite restaurants near you</p>
                    <CitySearch />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
