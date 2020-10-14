import React from 'react';
import { useSelector } from 'react-redux';
import "./RestaurentDetails.css";
import Reshead, { ResheadLoad } from '../../components/ResHead/ResHead';
import ResMenu, { ResMenuLoad } from '../../components/ResMenu/ResMenu';
import Cart from '../../components/Cart/Cart';

const RestaurentDetails = () => {
    const currentRes = useSelector(state => state.restaurentState.currentRes);
    const resMenu = useSelector(state => state.restaurentState.resMenu);
    const resHeadLoading = useSelector(state => state.restaurentState.resHeadLoading);
    const resMenuLoading = useSelector(state => state.restaurentState.resMenuLoading);
    const resHeadError = useSelector(state => state.restaurentState.resHeadError);
    const resMenuError = useSelector(state => state.restaurentState.resMenuError);

    return (
        <div id="currentRestaurent">
            {resHeadLoading ?
                <ResheadLoad /> :
                (!resHeadError) ?
                    currentRes ?
                        <Reshead /> :
                        <div className='notFound'>
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <span>No results found</span>
                        </div> :
                    <div className="error">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        <span>{resHeadError}</span>
                    </div>

            }
            <div className='resElements'>
                <div className='dishContainer'>
                    {resMenuLoading ?
                        <ResMenuLoad /> :
                        (!resMenuError) ?

                            resMenu.length ?
                                resMenu.map((item, index) =>
                                    <ResMenu item={item} index={index} />
                                ) :
                                <div className='notFound'>
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                    <span>No results found</span>
                                </div> :
                            <div className="error">
                                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <span>{resMenuError}</span>
                            </div>
                    }
                </div>
                <Cart />
            </div>

        </div>
    );

}

export default RestaurentDetails;