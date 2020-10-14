import {
    CURRENT_RES_REQUEST,
    CURRENT_RES_SUCCESS,
    CURRENT_RES_FAILURE,
    RES_MENU_REQUEST,
    RES_MENU_SUCCESS,
    RES_MENU_FAILURE,
} from './restaurentConstants';

const initialState = {
    resHeadLoading: false,
    resMenuLoading: false,
    resHeadError: false,
    resMenuError: false,
    currentRes: null,
    resMenu: [],
};

const reducers = (state = { ...initialState }, action) => {
    switch (action.type) {

        case CURRENT_RES_REQUEST: return {
            ...state,
            resHeadLoading: true,
            currentRes: null,
            resHeadError: false,
        }

        case CURRENT_RES_SUCCESS: return {
            ...state,
            resHeadLoading: false,
            currentRes: action.payload,
            resHeadError: false,
        }

        case CURRENT_RES_FAILURE: return {
            ...state,
            resHeadLoading: false,
            currentRes: null,
            resHeadError: action.payload,
        }

        case RES_MENU_REQUEST: return {
            ...state,
            resMenuLoading: true,
            resMenu: [],
            resMenuError: false
        }

        case RES_MENU_SUCCESS: return {
            ...state,
            resMenuLoading: false,
            resMenu: action.payload,
            resMenuError: false,
        }

        case RES_MENU_FAILURE: return {
            ...state,
            resMenuLoading: false,
            resMenu: [],
            resMenuError: action.payload,
        }

        default: return state;
    }
}

export default reducers;