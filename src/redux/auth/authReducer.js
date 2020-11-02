import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
} from "./authConstants";

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isSigningUp: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    signupError: false,
    isAuthenticated: false,
    user: {},
    displayName: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
                displayName: action.user.displayName
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: action.error
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {},
                displayName: ''
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: action.error
            };
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSigningUp: true,
                signupError: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                isAuthenticated: true,
                user: action.user,
                displayName: action.user.displayName
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                signupError: action.error,
                isAuthenticated: false,
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        default:
            return state;
    }
};

export default authReducer;