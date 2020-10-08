import React from 'react';
import "./ResMenu.css";

const ResMenu = (props) => {
    return (

        <div className="dishContainer">
            <div key={props.index} className="dish_box">
                <div className="dish_img_areaX">
                    <img src={props.item.img} alt="Dish img" />
                </div>
                <div className="dish_data">
                    <div className="dish_nameX">{props.item.name}</div>
                    <div className="dish_priceX">Price: {props.item.price}</div>
                    <button
                        className="dish_addToCartX"
                        onClick={() => this.addToCartHandlar(props.item)}
                    >
                        {" "}
                      Add to Cart
                    </button>
                </div>
            </div>
        </div>


    );
}

export default ResMenu;