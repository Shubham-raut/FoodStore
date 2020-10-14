import React from 'react';
import CitySearch from '../../components/CitySearch/CitySearch';
// import DishSearch from '../../components/DishSearch/DishSearch';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';
// import Header from '../../components/Header/Header';

const LandingPage = () => {

    // useEffect(() => {
    //     const headerMid = document.getElementsByClassName("headerMid");
    //     if (headerMid.length) {
    //         headerMid[0].style.display = 'none';
    //         console.log(true);
    //     }
    // }, [])

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

            {/* <section id="mid">
                Mid Section
            </section>

            <Footer /> */}
        </div>
    );
}



export default LandingPage;