import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notChecking } from '../../redux';
import './Address.css';

const Address = (props) => {
    const [address, setAddress] = useState({
        name: "",
        mobNum: "",
        address: '',
        landmark: '',
        pincode: '',
        city: '',
        state: '',
    });
    const dispatch = useDispatch();

    const addressChangeHandlor = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const addressSaveHandlor = () => {
        props.changeStep(props.step + 1);
    }

    const cancelHandlor = () => {
        dispatch(notChecking());
    }

    return (
        <>
            <h2>Delivery Address</h2>
            <div className='address'>

                <input
                    type="text"
                    placeholder="Name*"
                    name='name'
                    value={address.name}
                    onChange={(e) => addressChangeHandlor(e)}
                />

                <input
                    type="tel"
                    placeholder="Mobile number*"
                    name='mobNum'
                    value={address.mobNum}
                    onChange={(e) => addressChangeHandlor(e)}
                />

                <input
                    type="text"
                    placeholder="Address*"
                    name='address'
                    value={address.address}
                    onChange={(e) => addressChangeHandlor(e)}
                />

                <div className='addComb'>
                    <input
                        type="text"
                        placeholder="Landmark (Optonal)"
                        name='landmark'
                        value={address.landmark}
                        onChange={(e) => addressChangeHandlor(e)}
                    />

                    <input
                        type="text"
                        placeholder="Pincode*"
                        name='pincode'
                        value={address.pincode}
                        onChange={(e) => addressChangeHandlor(e)}
                    />
                </div>

                <div className='addComb'>
                    <input
                        type="text"
                        placeholder="City*"
                        name='city'
                        value={address.city}
                        onChange={(e) => addressChangeHandlor(e)}
                    />

                    <input
                        type="text"
                        placeholder="State*"
                        name='state'
                        value={address.state}
                        onChange={(e) => addressChangeHandlor(e)}
                    />
                </div>

                <div className='addCombot gap'>
                    <input style={{ width: '16px' }} type='checkbox' />
                    <p className='note'>Use this address for payment details</p>
                </div>

                <div className='addCombot btns'>
                    <button className='cancel' onClick={cancelHandlor}>Cancel</button>
                    <button className='next' onClick={addressSaveHandlor}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Address;