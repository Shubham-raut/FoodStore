import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { verifyAuth } from "./auth/authActions";

const devTools = process.env.NODE_ENV === "production" ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, devTools);

export function configureStore() {
    store.dispatch(verifyAuth());
}

export default store;