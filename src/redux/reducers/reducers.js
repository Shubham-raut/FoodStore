import { CLICKED_RES_FAILURE, CLICKED_RES_REQUEST, CLICKED_RES_SUCCESS, RES_FAILURE, RES_MENU_FAILURE, RES_MENU_REQUEST, RES_MENU_SUCCESS, RES_REQUEST, RES_SUCCESS, SET_CITY, SET_CITY_ID, SET_CITY_POSITION, SET_DISH, SET_FILTER, SET_LOC_FILTER } from "../CONSTANTS"

const initialState = {
    city: "",
    cityId: "",
    latitude: "",
    longitude: "",
    locFilt: [],
    loading: false,
    error: "",
    resData: null,
    dish: "",
    clickedRes: null,
    resMenu: [],
};

const reducers = (state = { ...initialState }, action) => {
    switch (action.type) {

        case SET_CITY: return {
            ...state,
            city: action.payload
        }

        case SET_CITY_ID: return {
            ...state,
            cityId: action.payload
        }

        case SET_DISH: return {
            ...state,
            dish: action.payload
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

        case SET_FILTER: return {
            ...state,
            dish: action.payload
        }

        case SET_CITY_POSITION: return {
            ...state,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude
        }

        case SET_LOC_FILTER: return {
            ...state,
            locFilt: action.payload
        }



        case CLICKED_RES_REQUEST: return {
            ...state,
            loading: true
        }

        case CLICKED_RES_SUCCESS: return {
            ...state,
            loading: false,
            clickedRes: action.payload,
            error: "",
        }

        case CLICKED_RES_FAILURE: return {
            ...state,
            loading: false,
            clickedRes: null,
            error: action.payload,
        }



        case RES_MENU_REQUEST: return {
            ...state,
            loading: true
        }

        case RES_MENU_SUCCESS: return {
            ...state,
            loading: false,
            resMenu: action.payload,
            error: "",
        }

        case RES_MENU_FAILURE: return {
            ...state,
            loading: false,
            resMenu: null,
            error: action.payload,
        }


        default: return state
    }
}

export default reducers;