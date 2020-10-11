import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux';
import "./ResMenu.css";

const ResMenu = (props) => {
    const dispatch = useDispatch();

    const addToCartHandlar = (item) => {
        dispatch(addToCart(item));
    }

    return (

        <div key={props.index} className="dish_box">
            <div className="dish_img_areaX">
                <img src={props.item.img} alt="Dish img" />
            </div>
            <div className="dish_data">
                <div className="dish_nameX">{props.item.name}</div>
                <div className="dish_priceX">Price: {props.item.price}</div>
                <button
                    className="dish_addToCartX"
                    onClick={() => addToCartHandlar(props.item)}
                >
                    {" "}
                      Add to Cart
                    </button>
            </div>
        </div>

    );
}

export default ResMenu;

export const ResMenuLoad = () => {


    let load = [];

    for (let i = 0; i < 3; i++) {
        load.push(
            <div key={i} className="dish_box">
                <div className="dish_img_areaX"></div>
                <div className="dish_data">
                    <div className="dishtop_load"></div>
                    <div className='dishBot_load'></div>
                </div>
            </div>
        )
    };
    return (
        <> { load} </>
    );
}