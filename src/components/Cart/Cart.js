import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checking, decreamentHandler, getCartData, increamentHandler } from '../../redux';
import { useClickOutside } from '../../utils/func';
import './Cart.css';

const Cart = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const cart = useSelector(state => state.cartState.cart);

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
        if (isAuthenticated && cart.length) {
            dispatch(checking());
            history.push('/Checkout');
        }

    }

    const cartRef = useClickOutside(() => {
        props.abs && props.closeCart();
    })

    let cartItems = null;
    let totalItem = 0;
    let totalPrice = 0;
    if (isAuthenticated && cart.length) {
        cartItems = cart.map((value) => {
            return (
                <div key={value.dish_id} className="cart_item_card">
                    <div className={"cart_item_edit_btns" + (props.payment ? ' hide' : '')}>
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
                        {props.payment ?
                            <div>{value.quantity}</div> :
                            null
                        }
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
        <div ref={cartRef} className={"cartConatiner" + (props.abs ? ' abs' : '') + (props.payment ? ' payment' : '')}>
            {props.abs ? <button onClick={props.closeCart} className='closeCartBtn'>X</button> : null}

            <div className='cartHead'>
                <div className="cart_totalItem"><i style={{ marginRight: '12px' }} className="fa fa-shopping-cart" aria-hidden="true"></i>
                    {totalItem} Item</div>
            </div>

            <div className="cart_Items">{cartItems}</div>

            <div className="cartBottom">
                {!isAuthenticated ?
                    <p className={props.payment ? 'hide' : ''}>Sign in and use cart</p> :
                    (cartItems) ?
                        <p className={props.payment ? 'hide' : ''}>Let's grab the order</p> :
                        <p className={props.payment ? 'hide' : ''}>Your cart is currently empty</p>
                }

                {props.payment ?
                    <span className="total_price"><i style={{ marginRight: '5px' }} className="fa fa-inr" aria-hidden="true"></i>{totalPrice}</span> :
                    <button disabled={!isAuthenticated || !cartItems} onClick={checkOutHandler} className={"checkoutBtn" + (!isAuthenticated || !cartItems ? ' dissable' : '')}>
                        <span>Checkout</span >
                        <span className="total_price"><i style={{ marginRight: '5px' }} className="fa fa-inr" aria-hidden="true"></i>{totalPrice}</span>
                    </button>
                }

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