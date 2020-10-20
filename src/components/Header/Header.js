import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logoutUser, setHeight, setWidth } from '../../redux';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import logo from "../../assets/imgs/Logo.png";
import './Header.css';
import { useClickOutside } from '../../utils/func';
// import { Dropdown } from 'bootstrap';
// import { DropdownButton } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    const [loginPopup, setLogInPopUp] = useState(false);
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const displayName = useSelector(state => state.authState.displayName);
    const dispatch = useDispatch();
    const [myAccount, setMyAccount] = useState(false);
    const [headerdropdown, setHeaderDropdown] = useState(false);

    useEffect(() => {
        if (isAuthenticated && loginPopup) {
            setLogInPopUp(false);
        }
    }, [isAuthenticated, loginPopup]);

    let location = props.location.pathname;

    const headerBtns = useClickOutside(() => {
        setMyAccount(false);
    })

    return (
        <header className={'header' + (location === '/' ? ' home' : '')}>

            {location !== '/' ?
                <>
                    <button className='headerDropdownbtn' onClick={() => setHeaderDropdown(!headerdropdown)}>{'>'}</button>
                    {headerdropdown ?
                        <div className='headerDropdown'>
                            <div className='headerBtns column'>
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
                                <div className='margBpt'></div>
                                <NavLink to="/about" className='headerLink'>About</NavLink>
                                <NavLink to="/help" className='headerLink'>Need Help</NavLink>
                            </div>
                        </div>
                        : null
                    }
                </> : null
            }

            <NavLink exact to="/" className='title ' ><img src={logo} alt="FoodStore" /></NavLink>

            <div className={'headerMid' + (location === '/' ? ' hidden' : '')}>
                <HeaderSearch />
            </div>

            <div className={'headerBtns' + (location !== '/' ? ' lg' : '')}>
                <NavLink to="/about" className='headerLink'>About</NavLink>
                <NavLink to="/help" className='headerLink'>Need Help</NavLink>
                <div ref={headerBtns}>
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
                        </> :
                        <NavLink to="/login" className='signin'>SignIn</NavLink>
                    }
                </div>
            </div>
        </header>
    );
}


export default withRouter(Header);