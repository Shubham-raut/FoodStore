import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import { verifyAuth } from "./auth/authActions";

// if (process.env.NODE_ENV !== 'production') {
// //    const x= import('redux-devtools-extension').then(Module => Module.composeWithDevTools());
// }

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

export function configureStore() {
    store.dispatch(verifyAuth());
}

// export default function configureStore(persistedState) {
//     const store = createStore(
//         rootReducer,
//         persistedState,
//         composeWithDevTools(applyMiddleware(thunk))
//     );
//     store.dispatch(verifyAuth());
//     return store;
// }





// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export const persistor = persistStore(store);

// // export default store;
// export default { store, persistor };