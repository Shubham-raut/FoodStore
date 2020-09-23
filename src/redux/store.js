import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import rootReducer from './rootReducer';

// if (process.env.NODE_ENV !== 'production') {
// //    const x= import('redux-devtools-extension').then(Module => Module.composeWithDevTools());
// }

const Store = createStore(rootReducer, composeWithDevTools());

export default Store;


// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export const persistor = persistStore(store);

// // export default store;
// export default { store, persistor };