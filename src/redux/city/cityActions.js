import axios from 'axios';
import {
    RES_REQUEST,
    RES_SUCCESS,
    RES_FAILURE,
    SET_CITY,
    SET_CITY_ID,
    SET_SORT,
    SET_CUISINE,
    SET_QVAL,
} from "./cityConstants";


export const axiosCall = (url) => {
    return axios.get(url, {
        headers: {
            "user-key": "7a77149c434216ebc2ae733a22ab3839",
        },
    })
}

export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city
    }
}

export const setCityId = (cityId) => {
    return {
        type: SET_CITY_ID,
        payload: cityId
    }
}


export const resRequest = () => {
    return {
        type: RES_REQUEST
    }
}

export const resSuccess = (data) => {
    return {
        type: RES_SUCCESS,
        payload: data
    }
}

export const resFailure = (error) => {
    return {
        type: RES_FAILURE,
        payload: error
    }
}

export const setSort = (sort) => {
    return {
        type: SET_SORT,
        payload: sort
    }
}

export const setCuisine = (cuisine) => {
    return {
        type: SET_CUISINE,
        payload: cuisine
    }
}

export const setQVal = (QVal) => {
    return {
        type: SET_QVAL,
        payload: QVal
    }
}


export const getRes = (cityName) => {
    return (dispatch) => {
        dispatch(resRequest());
        let url = `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`;
        axiosCall(url)
            .then((response) => {
                let id = response.data.location_suggestions[0].id;
                dispatch(setCityId(id));
                url = `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`;

                axiosCall(url)
                    .then((response) => {
                        dispatch(resSuccess(response.data.restaurants));
                    })
                    .catch(error => {
                        dispatch(resFailure(error.message))
                    });
            })
            .catch(error => {
                dispatch(resFailure(error.message))
            });
    }
}

export const sortFilter = (sort, order, cuisinId, cityId, QVal = '') => {
    return (dispatch) => {
        dispatch(resRequest());
        let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${QVal}&cuisines=${cuisinId}&sort=${sort}&order=${order}`;
        axiosCall(url)
            .then((response) => {
                dispatch(resSuccess(response.data.restaurants))
            })
            .catch(error => {
                dispatch(resFailure(error.message))
            });
    }
}
