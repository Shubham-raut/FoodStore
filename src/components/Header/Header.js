import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logoutUser } from '../../redux';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import logo from "../../assets/imgs/Logo.png";
import './Header.css';
import { useClickOutside } from '../../utils/func';
import Cart from '../Cart/Cart';

const Header = (props) => {
    const [loginPopup, setLogInPopUp] = useState(false);
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const displayName = useSelector(state => state.authState.displayName);
    const dispatch = useDispatch();
    const [myAccount, setMyAccount] = useState(false);
    const [myAccountSm, setMyAccountSm] = useState(false);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        if (isAuthenticated && loginPopup) {
            setLogInPopUp(false);
        }
    }, [isAuthenticated, loginPopup]);

    let location = props.location.pathname;

    const headerBtns = useClickOutside(() => {
        setMyAccount(false);
    })

    const headerBtnsSm = useClickOutside(() => {
        setMyAccountSm(false);
    })

    const closeCart = () => {
        setShowCart(false);
    }


    return (
        <header className={'header' + (location === '/' ? ' home' : '')}>

            <div className='headTop' >
                <NavLink exact to="/" className='title ' ><img src={logo} alt="FoodStore" /></NavLink>

                <div className={'headerBtnsSm'}>

                    <button className='cart' onClick={() => setShowCart(!showCart)}>
                        <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                        <span className='cartInner' style={{ marginLeft: '5px' }}>Cart</span>
                    </button>

                    <div ref={headerBtnsSm}>
                        {isAuthenticated ?
                            <>
                                <button onClick={() => setMyAccountSm(!myAccountSm)} className="user">
                                    <i className="fa fa-user-circle" aria-hidden="true" ></i>
                                    <span className='userInner' style={{ marginLeft: '5px' }}>{displayName ? displayName : ''}</span>
                                </button>
                                {
                                    myAccountSm ? <div className='myAccount'>
                                        <div className='userName'>{displayName}</div>
                                        <div className='myAccountBtn'>My Account</div>
                                        <div onClick={() => {
                                            dispatch(logoutUser());
                                            setMyAccount(!myAccountSm);
                                        }} className="signoutbtn">Sign Out</div>
                                    </div> : null
                                }
                            </> :
                            <NavLink to="/login" className='signin'>Sign In</NavLink>
                        }
                    </div>
                </div>



            </div>
            <div className={'headerMid' + (location === '/' ? ' hidden' : '')}>
                <HeaderSearch />
            </div>

            <div className={'headerBtns'}>

                <button className='cart' onClick={() => setShowCart(!showCart)}>
                    <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                    <span className='cartInner' style={{ marginLeft: '5px' }}>Cart</span>
                </button>

                <div ref={headerBtns}>
                    {isAuthenticated ?
                        <>
                            <button onClick={() => setMyAccount(!myAccount)} className="user">
                                <i className="fa fa-user-circle" aria-hidden="true" ></i>
                                <span className='userInner' style={{ marginLeft: '5px' }}>{displayName ? displayName : ''}</span>
                            </button>
                            {
                                myAccount ? <div className='myAccount'>
                                    <div className='userName'>{displayName}</div>
                                    <div className='myAccountBtn'>My Account</div>
                                    <div onClick={() => {
                                        dispatch(logoutUser());
                                        setMyAccount(!myAccount);
                                    }} className="signoutbtn">Sign Out</div>
                                </div> : null
                            }
                        </> :
                        <NavLink to="/login" className='signin'>Sign In</NavLink>
                    }
                </div>
            </div>

            {showCart ?
                <Cart abs={true} closeCart={closeCart} /> :
                null
            }
        </header>
    );
}


export default withRouter(Header);