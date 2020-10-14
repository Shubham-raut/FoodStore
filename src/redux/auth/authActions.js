import { myFirebase } from "../../config/firebase/firebase";
import firebase from 'firebase';
// import store from '../store';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from "./authConstants";
import { clearCart } from "../";


const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = error => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = error => {
    return {
        type: LOGOUT_FAILURE,
        error
    };
};



const requestSignup = () => {
    return {
        type: SIGNUP_REQUEST
    };
};

const receiveSignup = () => {
    return {
        type: SIGNUP_SUCCESS
    };
};

const signupError = error => {
    return {
        type: SIGNUP_FAILURE,
        error
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};


export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            dispatch(loginError(error));
        });
};


export const googleLoginUser = () => dispatch => {
    dispatch(requestLogin());
    // const base_provider = new firebase.auth.GoogleAuthProvider();
    myFirebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
            dispatch(receiveLogin(user));
        }).catch(error => {
            dispatch(loginError(error));
        })
}

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
            dispatch(clearCart());
        })
        .catch(error => {
            dispatch(logoutError(error));
        });
};

export const signupUser = (name, email, password) => dispatch => {
    dispatch(requestSignup());
    myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(u => {
            u.user.updateProfile({ displayName: name })
                .then(() => dispatch(receiveSignup()))
                .then(() => verifyAuth())
            // items: store.getState().otherReducer.items,
        })

        .catch((error) => {
            dispatch(signupError(error))
        });
}


export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase
        .auth()
        .onAuthStateChanged(user => {
            if (user !== null) {
                dispatch(receiveLogin(user));
            }
            dispatch(verifySuccess());
        });
};