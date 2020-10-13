import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '../../redux/store';

const Authentication = () => {
    const user = useSelector(state => state.authState.user);
    useEffect(() => {
        configureStore();
    }, []);
    return (
        <>
        </>);
}

export default Authentication;