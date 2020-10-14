import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logoutUser } from '../../redux';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import './Header.css';

const Header = (props) => {
    const [loginPopup, setLogInPopUp] = useState(false);
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const displayName = useSelector(state => state.authState.displayName);
    const dispatch = useDispatch();

    const [myAccount, setMyAccount] = useState(false);


    useEffect(() => {
        if (isAuthenticated && loginPopup) {
            setLogInPopUp(false);
        }
    }, [isAuthenticated, loginPopup]);

    return (
        <header className={'header' + (props.location.pathname === '/' ? ' home' : '')}>
            <NavLink exact to="/" className='title' ><img src="../../assets/imgs/Logo.png" alt="FoodStore" /></NavLink>
            <div className={'headerMid' + (props.location.pathname === '/' ? ' hidden' : '')}>
                <HeaderSearch />
            </div>

            <div className='headerBtns'>
                <NavLink to="/about" className='headerLink'>About</NavLink>
                <NavLink to="/help" className='headerLink'>Need Help</NavLink>

                {isAuthenticated ?
                    <>
                        <button onClick={() => setMyAccount(!myAccount)} className="user">{displayName ? displayName[0] : ''}</button>
                        {
                            myAccount ? <div className='myAccount'>
                                <div className='userName'>{displayName}</div>
                                <NavLink to="/MyAccount" className='myAccountBtn'>My Account</NavLink>
                                <div onClick={() => {
                                    dispatch(logoutUser());
                                    setMyAccount(!myAccount);
                                }} className="signoutbtn">Signout</div>
                            </div> : null
                        }
                    </>
                    :
                    <NavLink to="/login" className='signin'>SignIn</NavLink>
                }
            </div>
        </header>
    );
}


export default withRouter(Header);