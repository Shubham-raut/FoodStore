import {
    ADDCART_FAILURE,
    ADDCART_REQUEST,
    ADDCART_SUCCESS,
    INCREMENTCART_FAILURE,
    INCREMENTCART_REQUEST,
    INCREMENTCART_SUCCESS,
    DECREMENT_FAILURE,
    DECREMENT_REQUEST,
    DECREMENT_SUCCESS,
    GETCART_FAILURE,
    GETCART_REQUEST,
    GETCART_SUCCESS, CLEAR_CART, CHECKING_CART, NOT_CHECKING_CART
} from "./cartConstants";


const initialState = {
    isAdding: false,
    isIncrementing: false,
    isDecrementing: false,
    isGettingCart: false,
    additionError: false,
    incrementError: false,
    decrementError: false,
    cartError: false,
    cart: [],
    isChecking: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCART_REQUEST:
            return {
                ...state,
                isAdding: true,
                additionError: false
            };
        case
            ADDCART_SUCCESS:
            return {
                ...state,
                isAdding: false,
                additionError: false
            };
        case ADDCART_FAILURE:
            return {
                ...state,
                isAdding: true,
                additionError: action.error
            };

        case INCREMENTCART_REQUEST:
            return {
                ...state,
                isIncrementing: true,
                incrementError: false
            };
        case
            INCREMENTCART_SUCCESS:
            return {
                ...state,
                isIncrementing: false,
                incrementError: false
            };
        case INCREMENTCART_FAILURE:
            return {
                ...state,
                isIncrementing: true,
                incrementError: action.error
            };


        case DECREMENT_REQUEST:
            return {
                ...state,
                isDecrementing: true,
                decrementError: false
            };
        case
            DECREMENT_SUCCESS:
            return {
                ...state,
                isDecrementing: false,
                decrementError: false
            };
        case DECREMENT_FAILURE:
            return {
                ...state,
                isDecrementing: false,
                decrementError: action.error
            };

        case GETCART_REQUEST:
            return {
                ...state,
                isGettingCart: true,
                cartError: false,
            };
        case
            GETCART_SUCCESS:
            return {
                ...state,
                isGettingCart: false,
                cartError: false,
                cart: action.cart
            };
        case GETCART_FAILURE:
            return {
                ...state,
                isGettingCart: false,
                cartError: action.error
            };

        case CLEAR_CART:
            return {
                ...state,
                isAdding: false,
                isIncrementing: false,
                isDecrementing: false,
                isGettingCart: false,
                additionError: false,
                incrementError: false,
                decrementError: false,
                cartError: false,
                cart: []
            };

        case CHECKING_CART:
            return {
                ...state,
                isChecking: true
            };

        case NOT_CHECKING_CART:
            return {
                ...state,
                isChecking: false
            };


        default:
            return state;
    }
};

export default cartReducer;