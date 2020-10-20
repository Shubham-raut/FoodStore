import { SET_HEIGHT, SET_WIDTH } from "./commonConstants";

const initialState = {
    width: 0,
    height: 0,
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WIDTH:
            return {
                ...state,
                width: action.width
            };

        case SET_HEIGHT:
            return {
                ...state,
                width: action.height
            };

        default:
            return state;
    }
};

export default commonReducer;