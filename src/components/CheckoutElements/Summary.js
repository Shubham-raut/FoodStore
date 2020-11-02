import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartData, notChecking } from '../../redux';
import Cart from '../Cart/Cart';

const Summary = (props) => {
    const displayName = useSelector(state => state.authState.displayName);
    const dispatch = useDispatch();

    const backHandlor = () => {
        props.changeStep(props.step - 1);
    }

    const cancelOrder = () => {
        dispatch(notChecking());
    }

    const placeOrder = () => {
        dispatch(clearCartData());
        props.changeStep(props.step + 1);
    }

    return (
        <>
            <h2>Order summary</h2>
            <Cart payment={true} />

            <div className='addCombot'>
                <p className="shippong">Shipping :- </p>
                <p>{displayName}</p>
            </div>

            <div className='addCombot btns'>
                <button className='back' onClick={backHandlor}>Back</button>
                <button className='cancel' onClick={cancelOrder}>Cancel</button>
                <button className='next' onClick={placeOrder}>Place Order</button>
            </div>
        </>
    );
}

export default Summary;