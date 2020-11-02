import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/imgs/not found.jpeg';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className='notFound'>
            <img src={PageNotFound} alt='Page Not Found' />

            <Link to="/">Go to Home </Link>

        </div>
    );
}

export default NotFoundPage;