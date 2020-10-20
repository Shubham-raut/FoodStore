import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreamentHandler, getCartData, increamentHandler } from '../../redux';
import './Cart.css';

const Cart = (props) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const cart = useSelector(state => state.cartState.cart);
    console.log(isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getCartData());
        }
    }, [isAuthenticated]);

    const cartIncreamentHandler = (value) => {
        dispatch(increamentHandler(value));
    }

    const cartDecreamentHandler = (value) => {
        dispatch(decreamentHandler(value));
    }

    const checkOutHandler = () => {
        if (cart.length) {
            alert('checkout');
        }
        else {
            alert("please add items to cart");
        }
    }

    let cartItems = null;
    let totalItem = 0;
    let totalPrice = 0;
    if (isAuthenticated && cart.length) {
        cartItems = cart.map((value) => {
            return (
                <div key={value.dish_id} className="cart_item_card">
                    <div className="cart_item_edit_btns">
                        <button
                            className="decBtn"
                            onClick={() => {
                                cartDecreamentHandler(value);
                            }}
                        >
                            -
                      </button>
                        <div>{value.quantity}</div>
                        <button
                            className="incBtn"
                            onClick={() => {
                                cartIncreamentHandler(value);
                            }}
                        >
                            +
                      </button>
                    </div>
                    <div className="cart_item_mid">
                        <div className="cart_item_name">{value.name}</div>
                        <div className="cart_item_price">{value.price}</div>
                    </div>
                    <div className="cart_item_card_right">
                        <div className="cart_item_card_right_bot">
                            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                            {parseInt(value.price) * parseInt(value.quantity)}
                        </div>
                    </div>
                </div>
            );
        })

        for (let i in cart) {
            totalPrice +=
                parseInt(cart[i].price) *
                parseInt(cart[i].quantity);
            totalItem += parseInt(cart[i].quantity);
        }
    }

    return (
        <div className={"cartConatiner" + (props.abs ? ' abs' : '')}>
            {props.abs ? <button onClick={props.closeCart} className='closeCartBtn'>X</button> : null}

            <div className='cartHead'>
                <div className="cart_totalItem"><i style={{ marginRight: '12px' }} className="fa fa-shopping-cart" aria-hidden="true"></i>
                    {totalItem} Item</div>
            </div>

            <div className="cart_Items">{cartItems}</div>

            <div className="cartBottom">
                {cartItems ?
                    <p>Let's grab the order</p> :
                    <p>Your Cart is Currently empty</p>
                }
                <button onClick={checkOutHandler} className="checkoutBtn">
                    <span>Checkout</span >
                    <span className="total_price"><i style={{ marginRight: '5px' }} className="fa fa-inr" aria-hidden="true"></i>{totalPrice}</span>
                </button>
            </div>

        </div>
    );
}

export const CartBtn = () => {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const cart = useSelector(state => state.cartState.cart);

    const [showCart, setShowCart] = useState(false);

    let totalItem = 0;
    let totalPrice = 0;

    if (isAuthenticated && cart.length) {
        for (let i in cart) {
            totalPrice += parseInt(cart[i].price) * parseInt(cart[i].quantity);
            totalItem += parseInt(cart[i].quantity);
        }
    }

    const closeCart = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            <div className='CartBtn' onClick={() => setShowCart(!showCart)}>
                <i style={{ marginRight: '7px' }} className="fa fa-shopping-cart" aria-hidden="true"></i>
                {totalItem}
                <span style={{ margin: '0 4px' }}> Item</span>
                <span className="total_price"><i style={{ marginRight: '2px' }} className="fa fa-inr" aria-hidden="true"></i>{totalPrice}</span>
            </div>

            {showCart ?
                <Cart abs={true} closeCart={closeCart} /> :
                null
            }

        </>
    )
}

export default Cart;