import {
    RES_REQUEST,
    RES_SUCCESS,
    RES_FAILURE,
    SET_CITY,
    SET_CITY_ID,
    SET_CUISINE,
    SET_QVAL,
    SET_SORT,
} from "./cityConstants";

const initialState = {
    city: "",
    cityId: "",
    loading: false,
    error: "",
    resData: null,
    sort: '',
    order: '',
    cuisineId: '',
    QVal: '',
};

const cityReducer = (state = { ...initialState }, action) => {
    switch (action.type) {

        case SET_CITY: return {
            ...state,
            city: action.payload
        }

        case SET_CITY_ID: return {
            ...state,
            cityId: action.payload
        }

        case RES_REQUEST: return {
            ...state,
            loading: true
        }

        case RES_SUCCESS: return {
            ...state,
            loading: false,
            resData: action.payload,
            error: "",
        }

        case RES_FAILURE: return {
            ...state,
            loading: false,
            resData: null,
            error: action.payload,
        }

        case SET_SORT: return {
            ...state,
            sort: action.payload.sort,
            order: action.payload.order
        }

        case SET_CUISINE: return {
            ...state,
            cuisineId: action.payload,
        }

        case SET_QVAL: return {
            ...state,
            QVal: action.payload,
        }

        default: return state;
    }
}

export default cityReducer;