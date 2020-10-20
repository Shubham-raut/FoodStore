import React, { useState } from 'react';
import "./Main.css";
import { useSelector, useDispatch } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import RestCard, { RestCardLoad } from '../../components/RestCard/RestCard';

const Main = () => {
    const [filterShow, setFilterShow] = useState(false);
    // const dispatch = useDispatch();
    const resData = useSelector(state => state.cityState.resData);
    const loading = useSelector(state => state.cityState.loading);
    const error = useSelector(state => state.cityState.error);

    return (
        <div id="main">
            <div className="filterCollapse"><button onClick={() => setFilterShow(!filterShow)} className="filterCollapseBtn">☰ Filters</button></div>

            <Filters class={filterShow ? ' ftr' : ''} />

            <div className="mainPage_card_container">
                {loading ?
                    < RestCardLoad /> :
                    (!error) ?
                        (resData != null && resData.length !== 0) ?
                            resData.map((items) =>
                                <RestCard items={items} key={items.restaurant.R.res_id} />
                            ) :
                            <div className='notFound'>
                                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <span>No results found</span>
                            </div> :
                        <div className="error">
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <span>{error}</span>
                        </div>
                }

            </div>

        </div>
    );
}

export default Main;