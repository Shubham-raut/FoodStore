import { myFirebase } from "../../config/firebase/firebase";
import {
    ADDCART_FAILURE, ADDCART_REQUEST, ADDCART_SUCCESS,
    INCREMENTCART_FAILURE, INCREMENTCART_REQUEST, INCREMENTCART_SUCCESS,
    DECREMENT_FAILURE, DECREMENT_REQUEST, DECREMENT_SUCCESS,
    GETCART_FAILURE, GETCART_REQUEST, GETCART_SUCCESS,
    CLEAR_CART, CHECKING_CART, NOT_CHECKING_CART
} from "./cartConstants";
import store from '../store';

const requestAddCart = () => {
    return {
        type: ADDCART_REQUEST
    };
};

const addCartSuccess = () => {
    return {
        type: ADDCART_SUCCESS,
    };
};

const addCartError = error => {
    return {
        type: ADDCART_FAILURE,
        error
    };
};

const requestIncrementCart = () => {
    return {
        type: INCREMENTCART_REQUEST
    };
};

const incrementCartSuccess = () => {
    return {
        type: INCREMENTCART_SUCCESS,
    };
};

const incrementCartError = error => {
    return {
        type: INCREMENTCART_FAILURE,
        error
    };
};

const requestDecrementCart = () => {
    return {
        type: DECREMENT_REQUEST
    };
};

const decrementCartSuccess = () => {
    return {
        type: DECREMENT_SUCCESS,
    };
};

const decrementCartError = error => {
    return {
        type: DECREMENT_FAILURE,
        error
    };
};


const requestCart = () => {
    return {
        type: GETCART_REQUEST
    };
};

const cartSuccess = cart => {
    return {
        type: GETCART_SUCCESS,
        cart
    };
};

const cartError = error => {
    return {
        type: GETCART_FAILURE,
        error
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const checking = () => {
    return {
        type: CHECKING_CART
    }
}

export const notChecking = () => {
    return {
        type: NOT_CHECKING_CART
    }
}


export const addToCart = (item) => dispatch => {
    dispatch(requestAddCart());
    try {
        myFirebase
            .database()
            .ref(store.getState().authState.user.uid)
            .child(item.dish_id)
            .set({ ...item, quantity: 1 })
            .then(() => dispatch(addCartSuccess()))
    }
    catch (error) {
        dispatch(addCartError())
    }
}


export const increamentHandler = (value) => dispatch => {
    dispatch(requestIncrementCart());
    try {
        myFirebase
            .database()
            .ref(store.getState().authState.user.uid)
            .child(value.dish_id)
            .update({
                quantity: value.quantity + 1,
            })
            .then(() => dispatch(incrementCartSuccess()))
    }

    catch (error) {
        dispatch(incrementCartError())
    }
};


export const decreamentHandler = (value) => dispatch => {
    dispatch(requestDecrementCart());
    try {
        if (value.quantity > 1) {
            myFirebase
                .database()
                .ref(store.getState().authState.user.uid)
                .child(value.dish_id)
                .update({
                    quantity: value.quantity - 1,
                })
                .then(() => dispatch(decrementCartSuccess()))
        }
        else {
            myFirebase
                .database()
                .ref(store.getState().authState.user.uid)
                .child(value.dish_id)
                .remove()
                .then(() => dispatch(decrementCartSuccess()))
        }
    }
    catch (error) {
        dispatch(decrementCartError(error))
    }
};


export const getCartData = () => dispatch => {
    dispatch(requestCart());
    try {
        myFirebase
            .database()
            .ref(store.getState().authState.user.uid)
            .on("value", (snapshot) => {
                if (snapshot.val()) {
                    dispatch(cartSuccess(Object.values(snapshot.val())))
                }
                else {
                    dispatch(cartSuccess([]))
                }
            })
    }
    catch (error) {
        dispatch(cartError(error))
    }

};

export const clearCartData = () => dispatch => {

    myFirebase
        .database()
        .ref(store.getState().authState.user.uid)
        .remove()
        .then(() => dispatch(clearCart()));

} 
