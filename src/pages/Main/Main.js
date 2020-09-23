import React, { useState } from 'react';
import CitySearch from '../../components/CitySearch/CitySearch';
import DishSearch from '../../components/DishSearch/DishSearch';
import Footer from '../../components/Footer/Footer';
import './Main.css';
// import Header from '../../components/Header/Header';

const Main = () => {

    return (
        <div id="main">

            <section id="mainCover">
                <div className="coverImg"></div>
                <div className="coverContent">
                    <h1 className="coverTitle">You order we deliver</h1>
                    <p className="coverDesc">Order food from favourite restaurants near you</p>
                    <CitySearch />
                </div>
            </section>

            <section id="mid">
                Mid Section
            </section>

            <Footer />
        </div>
    );
}

export default Main;