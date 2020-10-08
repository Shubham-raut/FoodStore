import axios from 'axios';
import {
    RES_FAILURE, RES_REQUEST, RES_SUCCESS, SET_CITY, SET_DISH,
    SET_CITY_ID, SET_CITY_POSITION, SET_LOC_FILTER,
    CLICKED_RES_FAILURE, CLICKED_RES_REQUEST, CLICKED_RES_SUCCESS, RES_MENU_REQUEST, RES_MENU_SUCCESS, RES_MENU_FAILURE
} from "../CONSTANTS";



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

export const setDish = (dish) => {
    return {
        type: SET_DISH,
        payload: dish
    }
}

export const axiosCall = (url) => {
    return axios.get(url, {
        headers: {
            "user-key": "7a77149c434216ebc2ae733a22ab3839",
        },
    })
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

export const setCityPosition = (pos) => {
    return {
        type: SET_CITY_POSITION,
        payload: pos
    }
}

export const locality = (dataStore) => {

    // let dataStore = [];

    // const localitySetObj = (key, value) => {
    //     if (!(key in dataStore)) {
    //         dataStore[key] = [value];
    //     }
    //     else {
    //         dataStore[key] = [...dataStore[key], value];
    //     }
    // }

    // data.forEach(a => {
    //     let loc = (a.restaurant.location.locality).split(', ');
    //     let resID = a.restaurant.R.res_id;
    //     for (let i of loc) {
    //         localitySetObj(i, resID);
    //     }
    // });

    return {
        type: SET_LOC_FILTER,
        payload: dataStore
    }
}




export const clickedResRequest = () => {
    return {
        type: CLICKED_RES_REQUEST
    }
}

export const clickedResSuccess = (data) => {
    return {
        type: CLICKED_RES_SUCCESS,
        payload: data
    }
}

export const clickedResFailure = (error) => {
    return {
        type: CLICKED_RES_FAILURE,
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





// export const getRes = (cityName) => {
//     return (dispatch) => {
//         dispatch(resRequest)
//         axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${cityName}`, {
//             headers: {
//                 "user-key": "7a77149c434216ebc2ae733a22ab3839",
//             },
//         })
//             .then((response) => {
//                 dispatch(resSuccess(response.data.location_suggestions[0].id))
//             })
//             .catch(error => {
//                 dispatch(resFailure(error.message))
//             });
//     }
// }

export const getRes = (cityName) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`;
        dispatch(resRequest)
        axiosCall(url)
            .then((response) => {
                let id = response.data.location_suggestions[0].id;
                dispatch(setCityId(id));
                url = `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`;

                axiosCall(url)
                    .then((response) => {
                        dispatch(resSuccess(response.data.restaurants));

                        axiosCall(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=city`)
                            .then((response) => {
                                dispatch(setCityPosition({ "latitude": response.data.location.latitude, "longitude": response.data.location.longitude }));
                            })
                            .catch(error => {
                                // dispatch(alert(error.message));
                            });


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


export const getCityPosition = (cityId) => {
    return (dispatch) => {

        axiosCall(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${cityId}&entity_type=city`)
            .then((response) => {
                dispatch(setCityPosition({ "latitude": response.data.location.latitude, "longitude": response.data.location.longitude }));
                // dispatch(console.log("in getcityposition"));
            })
            .catch(error => {
                // dispatch(alert(error.message));
            });

    }
}



export const cuisineFilter = (cuisinId, cityId) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisinId}`;

        dispatch(resRequest)
        axiosCall(url)
            .then((response) => {
                dispatch(resSuccess(response.data.restaurants))
            })
            .catch(error => {
                dispatch(resFailure(error.message))
            });
    }
}


export const sortFilter = (sort, order, cityId) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&sort=${sort}&order=${order}`;

        dispatch(resRequest)
        axiosCall(url)
            .then((response) => {
                dispatch(resSuccess(response.data.restaurants))
            })
            .catch(error => {
                dispatch(resFailure(error.message))
            });
    }
}


export const getClickedRes = (resId) => {
    return (dispatch) => {
        let url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resId}`;

        dispatch(clickedResRequest)
        axiosCall(url)
            .then((response) => {
                dispatch(clickedResSuccess(response.data))
            })
            .catch(error => {
                dispatch(clickedResFailure(error.message))
            });
    }
}


export const getResMenu = () => {
    return (dispatch) => {
        let url = 'https://cors-anywhere.herokuapp.com/https://aamirmenusapi.herokuapp.com/menuitems';

        dispatch(resMenuRequest)
        axiosCall(url)
            .then((response) => {
                dispatch(resMenuSuccess(response.data))
            })
            .catch(error => {
                dispatch(resMenuFailure(error.message))
            });
    }
}


// export const setSubLoc = (cuisinId, cityId) => {
//     return (dispatch) => {
//         let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisinId}`;

//         dispatch(resRequest)
//         axiosCall(url)
//             .then((response) => {
//                 dispatch(resSuccess(response.data.restaurants))
//             })
//             .catch(error => {
//                 dispatch(resFailure(error.message))
//             });
//     }
// }

