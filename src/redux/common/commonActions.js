import { SET_HEIGHT, SET_WIDTH } from './commonConstants';

export const setHeight = height => {
    return {
        type: SET_HEIGHT,
        height
    };
};

export const setWidth = width => {
    return {
        type: SET_WIDTH,
        width
    };
};