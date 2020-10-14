import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { firebaseApp as app } from '../../config/Firebase/config';


const Authentication = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        app.auth().onAuthStateChanged(newUser => {
            // dispatch(setUser(newUser));
            console.log('user: ' + newUser);
        })
    }, []);

    return (
        <></>
    )
}

export default Authentication
