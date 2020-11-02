import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Checkout.css';
import Address from '../../components/CheckoutElements/Address';
import PayCard from '../../components/CheckoutElements/PayCard';
import Summary from '../../components/CheckoutElements/Summary';
import { useDispatch, useSelector } from 'react-redux';
import { notChecking } from '../../redux';

const Checkout = () => {
    const isChecking = useSelector(state => state.cartState.isChecking);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const history = useHistory();

    const changeStep = (step) => {
        setStep(step);
    }

    const returnToHome = () => {
        dispatch(notChecking());
        history.push('./');
    }

    return (
        (!isChecking) ?
            <Redirect exact to="/" /> :
            (
                <div className='checkout'>
                    <h1>Checkout</h1>

                    {step === 1 ?
                        <Address step={step} changeStep={changeStep} /> :
                        step === 2 ?
                            < PayCard step={step} changeStep={changeStep} /> :
                            step === 3 ?
                                <Summary step={step} changeStep={changeStep} /> :
                                <>
                                    <h3 className="shippong">Thank you for your order.</h3>
                                    <p>Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.</p>
                                    <button className='next' onClick={returnToHome}>Return</button>
                                </>
                    }
                </div>
            )
    );
}

export default Checkout;