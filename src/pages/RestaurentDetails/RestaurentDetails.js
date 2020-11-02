import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./RestaurentDetails.css";
import Reshead, { ResheadLoad } from '../../components/ResHead/ResHead';
import ResMenu, { ResMenuLoad } from '../../components/ResMenu/ResMenu';
import Cart, { CartBtn } from '../../components/Cart/Cart';
import { getCurrentRes, getResMenu } from '../../redux';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const RestaurentDetails = (props) => {
    const currentRes = useSelector(state => state.restaurentState.currentRes);
    const resMenu = useSelector(state => state.restaurentState.resMenu);
    const resHeadLoading = useSelector(state => state.restaurentState.resHeadLoading);
    const resMenuLoading = useSelector(state => state.restaurentState.resMenuLoading);
    const resHeadError = useSelector(state => state.restaurentState.resHeadError);
    const resMenuError = useSelector(state => state.restaurentState.resMenuError);
    const city = useSelector(state => state.cityState.city);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!resHeadLoading && !resHeadError && !resMenu.length && !currentRes && props.match.params.resId) {
            dispatch(getCurrentRes(props.match.params.resId));
            dispatch(getResMenu());
        }
    }, []);

    if (!city && resHeadError === 'Request failed with status code 404') {
        return <NotFoundPage />
    }
    else {
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

                {!resHeadError ?
                    <div className='resElements'>
                        <div className='dishContainer'>
                            {resMenuLoading ?
                                <ResMenuLoad /> :
                                (!resMenuError) ?

                                    resMenu.length ?
                                        resMenu.map((item, index) =>
                                            <ResMenu item={item} key={index} />
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
                        <CartBtn />
                    </div> :
                    null
                }
            </div>
        );
    }
}

export default RestaurentDetails;