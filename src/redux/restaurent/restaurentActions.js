import axios from 'axios';

import {
    CURRENT_RES_REQUEST,
    CURRENT_RES_SUCCESS,
    CURRENT_RES_FAILURE,
    RES_MENU_REQUEST,
    RES_MENU_SUCCESS,
    RES_MENU_FAILURE,
} from './restaurentConstants';


export const axiosCall = (url) => {
    return axios.get(url, {
        headers: {
            "user-key": "7a77149c434216ebc2ae733a22ab3839",
        },
    })
}

export const currentResRequest = () => {
    return {
        type: CURRENT_RES_REQUEST
    }
}

export const currentResSuccess = (data) => {
    return {
        type: CURRENT_RES_SUCCESS,
        payload: data
    }
}

export const currentResFailure = (error) => {
    return {
        type: CURRENT_RES_FAILURE,
        payload: error
    }
}


export const resMenuRequest = () => {
    return {
        type: RES_MENU_REQUEST
    }
}

export const resMenuSuccess = (data) => {
    return {
        type: RES_MENU_SUCCESS,
        payload: data
    }
}

export const resMenuFailure = (error) => {
    return {
        type: RES_MENU_FAILURE,
        payload: error
    }
}


export const getCurrentRes = (resId) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`;

        dispatch(currentResRequest())
        axiosCall(url)
            .then((response) => {
                dispatch(currentResSuccess(response.data))
            })
            .catch(error => {
                dispatch(currentResFailure(error.message))
            });
    }
}

export const getResMenu = () => {
    return (dispatch) => {
        let url = 'https://cors-anywhere.herokuapp.com/https://aamirmenusapi.herokuapp.com/menuitems';

        dispatch(resMenuRequest())
        axiosCall(url)
            .then((response) => {
                dispatch(resMenuSuccess(response.data))
            })
            .catch(error => {
                dispatch(resMenuFailure(error.message))
            });
    }
}
